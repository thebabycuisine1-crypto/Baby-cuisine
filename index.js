const express = require("express");
const app = express();

app.get("/get_products", (req, res) => {
  res.json({
    products: [
      { name: "Carrot Puree", price: 4.99 },
      { name: "Sweet Potato Mash", price: 5.49 },
      { name: "Banana Oat Blend", price: 3.99 }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});
