export let user = {
  name: "Kim",
  cart: [],
  currency: 5000,
  history: [],
};

export let items = [
  {
    category: "speakers",
    inventory: [
      {
        name: "Beats Pill",
        price: 99,
        stock: [
          { id: 426378 },
          { id: 426379 },
          { id: 426380 },
          { id: 426381 },
          { id: 426382 },
        ],
      },
      {
        name: "JBL Flip 5",
        price: 120,
        stock: [{ id: 528194 }, { id: 528195 }, { id: 528196 }],
      },
    ],
  },
  {
    category: "headphones",
    inventory: [
      {
        name: "Beats Studio 3",
        price: 250,
        stock: [{ id: 736482 }, { id: 736483 }],
      },
      {
        name: "Sony WH-1000XM5",
        price: 350,
        stock: [{ id: 839201 }, { id: 839202 }, { id: 839203 }],
      },
    ],
  },
  {
    category: "phones",
    inventory: [
      {
        name: "iPhone 15",
        price: 999,
        stock: [{ id: 928374 }, { id: 928375 }],
      },
      {
        name: "Samsung Galaxy S23",
        price: 899,
        stock: [{ id: 102938 }, { id: 102939 }, { id: 102940 }],
      },
    ],
  },
  {
    category: "chargers",
    inventory: [
      {
        name: "Anker 20W USB-C Charger",
        price: 20,
        stock: [{ id: 384756 }, { id: 384757 }, { id: 384758 }],
      },
      {
        name: "Apple MagSafe Charger",
        price: 40,
        stock: [{ id: 576839 }, { id: 576840 }],
      },
    ],
  },
];
