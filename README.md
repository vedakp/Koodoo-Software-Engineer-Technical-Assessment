# Koodoo Software Engineer Technical Assessment 👾

```
const accountBalanceHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  }
]
```

goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
whether this array is of type A (variable) or type B (fixed).

Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.

Type 🅱 is one where the balance amount changes by the same amount each month.
