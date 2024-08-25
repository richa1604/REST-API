import express from "express";
import serverless from "serverless-http";

const app = express();

app.use(express.json());

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;

    // Separate numbers and alphabets
    const numbers = data.filter((item) => /^\d+$/.test(item));
    const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));

    // Find the highest lowercase alphabet
    const lowercaseAlphabets = alphabets.filter((item) => /^[a-z]$/.test(item));
    const highestLowercaseAlphabet =
      lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

    // Response payload
    const response = {
      is_success: true,
      user_id: "john_doe_17091999", // Replace with actual user_id logic
      email: "john@xyz.com", // Replace with actual email logic
      roll_number: "ABCD123", // Replace with actual roll number logic
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({
      is_success: false,
      error: error.message,
    });
  }
});

app.get("/bfhl", (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

export const handler = serverless(app);
