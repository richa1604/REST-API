// index.js
const express = require("express");
const serverless = require("serverless-http");

const app = express();
app.use(express.json());

// POST method route
app.post("/bfhl", (req, res) => {
  const data = req.body.data;
  // Example processing logic
  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));
  const lowercaseAlphabets = alphabets.filter((item) => /^[a-z]$/.test(item));
  const highestLowercaseAlphabet = lowercaseAlphabets.sort().pop();

  res.json({
    is_success: true,
    user_id: "your_name_dob", // Replace with actual logic
    email: "your_email@domain.com", // Replace with actual logic
    roll_number: "your_roll_number", // Replace with actual logic
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
      ? [highestLowercaseAlphabet]
      : [],
  });
});

// GET method route
app.get("/bfhl", (req, res) => {
  res.json({
    operation_code: 1,
  });
});

module.exports.handler = serverless(app);
