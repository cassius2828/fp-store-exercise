import {
  findCategoryAndProductIndexes,
  getTargetProduct,
  manageInventoryStock,
} from "./cart.js";
import { roundToHundreth, createUniqueID } from "./utils.js";

export const addToUserHistory = (item, category, type) => {
  const transactionType = type === "purchase" ? "purchase" : "refund";
  const id = createUniqueID();
  console.log(`ADDED A ${item.name} ${type} TO THE USER HISTORY`);
  return {
    receiptId: id,
    transactionType,
    category,
    item,
    date: new Date().toLocaleString(),
  };
};

export const acceptRefund = (user, item, category, items) => {
  let updatedItems = structuredClone(items);
  // find item to return
  const itemToReturn = user.history.find(
    (transaction) =>
      transaction.transactionType === "purchase" &&
      transaction.receiptId === item.receiptId
  );
  // if item exists
  if (itemToReturn) {
    const cartItem = {
      name: itemToReturn.item.name,
      price: itemToReturn.item.price,
      category,
      itemID: itemToReturn.item.itemID,
    };
    // get target product and necessary indexes for manageInventoryStock fn
    const targetProduct = getTargetProduct(cartItem, updatedItems);
    const categoryAndProductIndexObj = findCategoryAndProductIndexes(
      cartItem,
      updatedItems
    );
    updatedItems = manageInventoryStock(
      cartItem,
      updatedItems,
      "refund",
      [...targetProduct.stock, cartItem.itemID],
      categoryAndProductIndexObj
    );
    console.log(`\nUSER CURRENY BEFORE REFUND ${user.currency}`);
    // create new refund object from addToUserHistory fn
    const newRefund = addToUserHistory(cartItem, item.category, "refund");
    let userHistory = [...user.history, newRefund];

    console.log(`REFUNDED ${cartItem.name} WITH ID OF ${cartItem.itemID}`);
    console.log(
      `USER CURRENYCY AFTER REFUND ${
        user.currency + roundToHundreth(cartItem.price)
      }\n`
    );
    return {
      items: updatedItems,
      user: {
        ...user,
        history: userHistory,
        currency: user.currency + roundToHundreth(cartItem.price),
      },
    };
  } else {
    console.log(`REFUND REJECTED`);
    return {
      items,
      user,
    };
  }
};
