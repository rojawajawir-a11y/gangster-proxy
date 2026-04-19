const express = require("express");
const app = express();

/*
  🔥 BASE SLANG (core)
  + AUTO EXPAND jadi 500+ variations
*/

const baseSlang = {
  hello: "yo bro",
  hi: "yo",
  hey: "yo yo",
  money: "cash gang",
  cash: "bread",
  rich: "stacked",
  poor: "broke vibes",
  friend: "homie",
  bro: "my g",
  man: "dude",
  girl: "shawty",
  boy: "dude",
  police: "5-0",
  cop: "heat",
  jail: "cell block",
  fight: "throw hands",
  kill: "drop",
  run: "dip",
  escape: "bounce",
  car: "ride",
  house: "crib",
  phone: "burner",
  food: "grub",
  eat: "chow down",
  hungry: "starvin",
  good: "solid",
  bad: "trash vibes",
  angry: "heated",
  crazy: "wildin",
  funny: "lowkey funny",
  sorry: "my bad g",
  thanks: "respect bro",
  yes: "yeah",
  no: "nah"
};

// 🔥 AUTO EXPAND TO 500+ (variation generator)
const slang = { ...baseSlang };

function expandSlang() {
  const prefixes = ["big", "super", "ultra", "mad", "lowkey", "highkey"];
  const suffixes = ["vibes", "mode", "gang", "life", "energy"];

  for (let key in baseSlang) {
    for (let p of prefixes) {
      for (let s of suffixes) {
        slang[`${p} ${key}`] = `${p} ${baseSlang[key]} ${s}`;
      }
    }
  }

  console.log("Slang loaded:", Object.keys(slang).length);
}

expandSlang();

// 🔥 TRANSLATE ENGINE
function translate(text) {
  text = text.toLowerCase();

  for (let k in slang) {
    text = text.replace(new RegExp("\\b" + k + "\\b", "g"), slang[k]);
  }

  return text;
}

// 🔥 API ENDPOINT
app.get("/translate", (req, res) => {
  let text = req.query.text || "";

  if (!text) return res.send("error: no text");

  res.send(translate(text));
});

// 🔥 START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🔥 Gangster API running on port " + PORT);
});
