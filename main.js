const fs = require("fs");
const { Client, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const axios = require("axios");
require("dotenv").config();
const { default: MonsterApiClient } = require("monsterapi");
const clientImage = new MonsterApiClient(process.env.MONSTER_API);
const model = "txt2img";


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

client.on("message", async (msg) => {
  if (msg.body.startsWith(".image")) {
    const textImage = msg.body.substring(7);
    msg.reply("⏳ Proses AI");
    const input = {
      prompt: textImage,
      negprompt: "",
      samples: 1,
      steps: 50,
      aspect_ratio: "square",
      guidance_scale: 7.5,
      seed: 2414,
    };

    try {
      const response = await clientImage.generate(model, input);
      const urlImage = response.output[0];

      const imageResponse = await axios.get(urlImage, {
        responseType: "arraybuffer",
      });

      const imageName = urlImage.split("/").pop();

      fs.writeFileSync(`./image/ai/${imageName}`, imageResponse.data);

      const media = MessageMedia.fromFilePath(`./image/ai/${imageName}`);

      await client.sendMessage(msg.from, media);

      fs.unlinkSync(`./image/ai/${imageName}`);
    } catch (error) {
      console.error("Error:", error);
      msg.reply(
        "Maaf, terjadi kesalahan dalam mengambil gambar atau mengirimnya."
      );
    }
  }
})

client.initialize();
