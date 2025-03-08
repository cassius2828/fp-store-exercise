import { addToCart, purchaseItems } from "./cart.js";
import { user, items } from "./data.js";
import { acceptRefund } from "./userHistory.js";

/*
1. User can purchase an item
2. Add 3% tax to item in cart
3. Buy Item: cart --> purchase
4. empty cart

BONUS:
- accept refunds
- track user history 
*/

// MY SOLUTION
const simulateTransaction = (user) => {
  let updatedItems = structuredClone(items);
  let updatedUser = { ...user };
  // predefined updatedUserCart and purchasedItemsValues for ease of use with console logs to see progress in termnial
  let updatedUserCart = [];
  let purchasedItemsValues = {};
  // items and category vars
  const beatsPill = updatedItems[0].inventory[0];
  const iPhone15 = updatedItems[2].inventory[0];
  const speakersCategory = updatedItems[0].category;
  const phonesCategory = updatedItems[2].category;
  // add two items to cart
  console.log(
    (updatedUserCart = addToCart(updatedUserCart, beatsPill, speakersCategory))
  );
  console.log(
    (updatedUserCart = addToCart(updatedUserCart, iPhone15, phonesCategory))
  );
  console.log(`\n\n`);
  console.log(`ADD ITEMS TO USER CART`);
  // update the user object
  updatedUser = { ...updatedUser, cart: updatedUserCart };
  console.log(`\n\n`);
  console.log(`UPDATED USER AND ITEMS DATA`);
  console.log(`\n`);
  console.log(
    `${updatedItems[2].inventory[0].name} INVENTORY STOCK BEFORE PURCHASE`
  );
  // log the stock of the iPhone 15
  console.log(updatedItems[2].inventory[0].stock);
  console.log(`\n`);

  console.log(
    (purchasedItemsValues = purchaseItems(updatedUser, updatedItems))
  );
  // update user and items with value from purchaseItems
  updatedUser = purchasedItemsValues.user;
  updatedItems = purchasedItemsValues.items;
  console.log(
    `${updatedItems[2].inventory[0].name} INVENTORY STOCK AFTER PURCHASE`
  );
  console.log(purchasedItemsValues.items[2].inventory[0].stock);
  console.log(`\n\n`);
  console.log(
    `${updatedItems[2].inventory[0].name} INVENTORY STOCK BEFORE REFUND`
  );
  console.log(updatedItems[2].inventory[0].stock);
  // value from refund attempt
  let updatedUserAndItemsAfterRefund = acceptRefund(
    updatedUser,
    updatedUser.history[1],
    phonesCategory,
    updatedItems
  );
  // update user and items from refund attempt reutrn value
  updatedUser = updatedUserAndItemsAfterRefund.user;
  updatedItems = updatedUserAndItemsAfterRefund.items;
  console.log(`${updatedItems[2].inventory[0].name} INVENTORY STOCK AFTER REFUND`);
  console.log(updatedItems[2].inventory[0].stock);

  console.log(`\n\n`);
  console.log(" <-- ============== END OF TRANSACTIONS==================");
  console.log(`\n\n`);

  console.log(
    " <-- ============== USER HISTORY==================",

    updatedUser.history,
    "\n ================================"
  );
  console.log(
    " \n<-- ============== USER OBJ ==================",

    updatedUser,

    "\n ================================"
  );
  console.log(
    " \n<-- ============== UPDATED ITEMS==================",

    updatedItems,
    "\n ================================"
  );
  return {
    user: updatedUser,
    items: updatedItems,
  };
};
simulateTransaction(user);
