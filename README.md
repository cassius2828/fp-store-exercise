# Functional Programming Practice in Node.js 🚀

This project is a functional programming exercise that simulates a simple inventory management and transaction system in Node.js, without using databases. It follows functional programming principles to ensure immutability, pure functions, and declarative transformations.

## 📌 Features

✅ Item Management – Add and remove products from inventory.
✅ User Transactions – Purchase items, apply tax, track purchase history, and process refunds.
✅ Immutability – Uses structured cloning (structuredClone()) to prevent mutations.
✅ Functional Patterns – Implements higher-order functions (map, filter, reduce), avoids side effects, and maintains clear separation of concerns.
✅ Node.js Execution – Designed to run in Node.js, with variables hardcoded for simplicity.

## 🛠 Dev Dependencies


```npm install eslint --save-dev```

```npm install nodemon```


## 📝 Project Structure

### 📂 functional-programming-practice

📜 index.js          - Runs the transaction simulation

📜 cart.js           - Manages cart operations (add, remove, tax)

📜 data.js           - Contains hardcoded data (users & inventory)

📜 userHistory.js    - Handles purchase & refund history

📜 utils.js          - Utility functions (rounding, unique ID generation)

📜 README.md        - Project documentation

## 🔧 Functional Programming Principles Used
	•	Immutability: Uses structuredClone() to prevent direct mutations.
	•	Pure Functions: Functions avoid side effects and always return new objects instead of modifying existing ones.
	•	Higher-Order Functions: Implements map(), filter(), and reduce() for data transformations.
	•	Declarative Approach: Uses descriptive function names and clear logic to enhance readability.

## 🚀 Usage & Example

Run the simulateTransaction() function in index.js to see:

- 1️⃣ Items being added to the cart
- 2️⃣ Purchase completion with tax applied
- 3️⃣ Inventory being updated
- 4️⃣ Refund processing and history tracking

Example Output (Terminal)
```
ADDED Beats Pill TO CART  
ADDED iPhone 15 TO CART  

PURCHASED 2 ITEM(S)  
REMOVED ONE Beats Pill FROM INVENTORY (ITEMID: 426378)  
REMOVED ONE iPhone 15 FROM INVENTORY (ITEMID: 928374)  

REFUNDED iPhone 15 WITH ID OF 928374  
```


### 📧 Contact

For any questions or improvements, reach out to me at cassius.reynolds.dev@gmail.com or create an issue on GitHub. 🚀