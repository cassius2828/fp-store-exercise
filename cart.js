import { addToUserHistory } from "./userHistory.js";
import { roundToHundreth } from "./utils.js";

// find indexes for targeting correct arr indexes for manage inventory fn
export const findCategoryAndProductIndexes = (product, items) => {
  const categoryIdx = items.findIndex(
    (item) => item.category === product.category
  );

  const productIdx = items[categoryIdx].inventory.findIndex(
    (item) => item.name === product.name
  );
  return { categoryIdx, productIdx };
};
// get the target product for managing inventory
export const getTargetProduct = (product, items) => {
  // find inventory category
  const inventoryByCategory = items.find(
    (item) => item.category === product.category
  ).inventory;
  // find target product
  const targetProduct = inventoryByCategory.find(
    (item) => item.name === product.name
  );

  return targetProduct;
};

export const manageInventoryStock = (product, items, type, arr, indexes) => {
  const { categoryIdx, productIdx } = indexes;
  // replace the targeted inventory arr with the prop.arr
  items[categoryIdx].inventory[productIdx].stock = [...arr];
  console.log(
    `${type === "purchase" ? "REMOVED" : "ADDED"} ONE ${product.name} ${
      type === "purchase" ? "FROM" : "TO"
    } INVENTORY (ITEMID: ${product.itemID})`
  );
  return items;
};

// purchase items
export const purchaseItems = (user, items) => {
  let clonedItems = structuredClone(items);
  if (user) {
    //  removed direct manipulation of user cart
    let userCart = user.cart.slice();
    let cartAfterTax = addTax(userCart);

    const totalCartPrice = cartAfterTax.reduce(
      (acc, val) => acc + val.price,
      0
    );

    if (user.currency >= totalCartPrice) {
      let updatedUserHistory = [];

      cartAfterTax.forEach((product) => {
        const newPurchase = addToUserHistory(
          product,
          product.category,
          "purchase"
        );

        updatedUserHistory = [...updatedUserHistory, newPurchase];
        // target product -- different structure than product param in forEach
        const targetProduct = getTargetProduct(product, clonedItems);
        // obj indexes
        const categoryAndProductIndexObj = findCategoryAndProductIndexes(
          product,
          clonedItems
        );
        // manage stock | purchase = remove
        clonedItems = manageInventoryStock(
          product,
          clonedItems,
          "purchase",
          targetProduct.stock.filter(
            (stockObj) => stockObj.id !== product.itemID
          ),
          categoryAndProductIndexObj
        );
      });

      console.log(`PURCHASED ${userCart.length} ITEM(S)`);
      return {
        items: clonedItems,
        user: {
          ...user,
          currency: roundToHundreth(user.currency - totalCartPrice),
          history: updatedUserHistory,
          cart: emptyCart(),
        },
      };
    }
  }
};

// empty cart
export const emptyCart = () => {
  console.log("EMPTIED CART");
  return [];
};

// add to cart
export const addToCart = (cart, item, category) => {
  // checks if at least 1 item is in stock
  if (item.stock.length > 0) {
    const cartItem = {
      name: item.name,
      price: item.price,
      category,
      itemID: item.stock[0].id, // selects the first item in stock
    };
    const newCart = [...cart, cartItem];
    console.log(`ADDED ${cartItem.name} TO CART`);
    return newCart;
  } else {
    console.log(
      `COULD NOT ADD THE ${category} ITEM TO THE CART. IT MAY NOT EXIST`
    );
    return cart;
  }
};

// add tax to cart items
export const addTax = (cart) => {
  const updatedCart = cart.map((item) => ({
    ...item,
    price: roundToHundreth(item.price * 1.03),
  }));
  console.log(`ADDED TAX TO ITEMS IN CART(${cart.length} items in cart)`);
  return updatedCart;
};
