const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.GEMINI_API;
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

const fetch = async () => {
  try {
      const response = await axios.post(url, {
        contents: [{ parts: [{ text: "hallo ai" }] }],
      });
      console.log(response.data.candidates[0].content.parts[0].text)
  } catch (error) {
    console.log(error)    
  }
}

fetch()
