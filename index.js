const express = require("express");
const shortid = require("shortid");
const { Client, GatewayIntentBits } = require('discord.js');
const { connectDB } = require('./connect');
const URL = require('./models/url');

connectDB("mongodb://localhost:27017/discordurlshort")
    .then(() => console.log("MongoDB Connected"));

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const app = express();
const PORT = 7001;

app.get("/:shortUrl", async (req, res) => {
    const { shortUrl } = req.params;
    const entry = await URL.findOne({ shortUrl });
    if (entry) {
        return res.redirect(entry.originalUrl);
    }
    return res.status(404).send("URL not found");
});

client.once("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith("create")) {
        const url = message.content.split("create ")[1];
        const shortId = shortid();
        const entry = await URL.create({
            originalUrl: url,
            shortUrl: shortId,
        });
        return message.reply({
            content: `Creating a new short URL... ${url} \nShort URL: http://localhost:${PORT}/${entry.shortUrl}`,
        });
    }
    message.reply({
        content: "Hello! I am a bot!",
    });
});

client.once("interactionCreate", interaction => {
    interaction.reply("Pong!")
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

client.login("YOUR_DISCORD_BOT_TOKEN");