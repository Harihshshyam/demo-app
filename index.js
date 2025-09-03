const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Harishyam 🚀, Node.js app is running successfully!");
});

app.listen(3000, () => {
  console.log("✅ Server is running on port 3000");
});
console.log('Update');
console.log('new Update');
console.log('last Update');
console.log('Auto-deploy test');
console.log('Auto-deploy2 test');
