const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Static files (CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// Routes for pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "contact.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
