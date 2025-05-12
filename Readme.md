# Discord URL Shortener Bot
A Discord Bot that allows users to shorten URLs directly in Discord server using the /create command.
Built with discord.js, Express, and MongoDB.

## ✨ Features
Slash command /create to generate short links.

MongoDB integration for persistent storage.

Express server to handle short URL redirections.

Simple and fast setup.

Lightweight and scalable.

🚀 Tech Stack
Node.js

discord.js v14

Express.js

MongoDB with Mongoose

ShortID for generating short URLs

📦 Dependencies
json
Copy
Edit
"dependencies": {
  "discord.js": "^14.19.3",
  "express": "^5.1.0",
  "mongoose": "^8.14.1",
  "shortid": "^2.2.17"
}

## 🛠 Bot Commands
/create [url]

Description: Shortens the provided URL.

Response: Bot returns a shortened link.