const fs = require("fs");
const chalk = require("chalk");

// Other
let gg = process.env.MODS;
if (!gg) {
  gg = "94726083178";
}

global.owner = gg.split("ME");
global.mongodb = process.env.MONGODB || "mongodb+srv://cherry:cherry@cluster0.odvy3r2.mongodb.net/?retryWrites=true&w=majority";
global.pgdb = process.env.DATABASE_URL || "none";
global.port = process.env.PORT || 8080;
(global.packname = process.env.PACKNAME || "Lakshan"),
  (global.prefix = process.env.PREFIX || "."),
  (global.author = process.env.AUTHOR || "xyz"),
  (global.sessionName = "arus"),
  (global.name = process.env.NAME || "MITSUHA"),
  (global.thumb = fs.readFileSync("./trash/info.jpeg"));

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
