const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const axios = require("axios");
require("dotenv").config();

const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (msg) => {
  if (msg.body.startsWith(".ask")) {
    const textBantu = msg.body.substring(5);
    msg.reply("⏳ Prosses AI");
    const API_KEY = process.env.GEMINI_API;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

    try {
      const response = await axios.post(url, {
        contents: [{ parts: [{ text: textBantu }] }],
      });

      const generatedText = response.data.candidates[0].content.parts[0].text;
      msg.reply(generatedText);
    } catch (error) {
      console.error("Error:", error.response.data.error.message);
    }
  }
});

client.initialize();
