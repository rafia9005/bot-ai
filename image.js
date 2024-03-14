require("dotenv").config();
// // text to api
// const { default: MonsterApiClient } = require("monsterapi");
// const clientImage = new MonsterApiClient(process.env.MONSTER_API);
// const model = "txt2img";

// const input = {
//   prompt:
//     "detailed sketch of lion by greg rutkowski, beautiful, intricate, ultra realistic, elegant, art by artgerm",
//   negprompt: "deformed, bad anatomy, disfigured, poorly drawn face",
//   samples: 2,
//   steps: 50,
//   aspect_ratio: "square",
//   guidance_scale: 7.5,
//   seed: 2414,
//   style: "photographic",
// };

// clientImage
//   .generate(model, input)
//   .then((response) => {
//     // Handle the response from the API
//     console.log("Generated content:", response);
//   })
//   .catch((error) => {
//     // Handle API errors
//     console.error("Error:", error);
//   });

const axios = require("axios");
const fs = require("fs");

const Test = async () => {
  try {
    const urlImage = "https://r-code.vercel.app/ts.png";

    const imageResponse = await axios.get(urlImage, {
      responseType: "arraybuffer",
    });

    const imageName = `${urlImage.split("/").pop()}`;
    fs.writeFileSync(`./image/ai/${imageName}`, imageResponse.data);
    console.log("Image saved successfully!");
  } catch (error) {
    console.error("Error saving image:", error);
  }
};

Test();
