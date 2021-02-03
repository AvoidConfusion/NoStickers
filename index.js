require("dotenv").config();
const Discord = require("discord.js");

const bot = new Discord.Client();
bot.login(process.env.TOKEN);

bot.on("ready", () => console.log(bot.user.tag + " ready!"));

bot.on("raw", packet => {
    if (packet.t == "MESSAGE_CREATE" && "stickers" in packet.d) {
        let channel = bot.guilds.cache.get(packet.d.guild_id).channels.cache.get(packet.d.channel_id);
        if (!channel.stickers) channel.stickers = [];
        channel.stickers.push(packet.d.id);
    }
});

bot.on("message", message => {
    if (message.channel.stickers?.includes?.(message.id)) {
        message.delete({reason: "stickers are haram"}).then(() => console.log("Deleted a message containing a sticker, mashallah!"));
    }
});