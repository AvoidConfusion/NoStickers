require("dotenv").config();
const Discord = require("discord.js");

const bot = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
bot.login(process.env.TOKEN);

bot.on("ready", () => console.log(bot.user.tag + " ready!"));

bot.on("message", message => {
    if (message.stickers.size > 0 && message.deletable) {
        message.delete({reason: "stickers are haram"}).catch(console.log);
    }
});