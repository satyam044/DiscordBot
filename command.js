const { REST, Routes } = require('discord.js');
const commands = [
    {
        name: 'create',
        description: 'Create a new short URL',
    },
];

const rest = new REST({ version: '10' }).setToken("YOUR_DISCORD_BOT_TOKEN");

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands("1368885081816694794"), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();