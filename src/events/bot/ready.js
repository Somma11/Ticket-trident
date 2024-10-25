const {} = require("discord.js");


module.exports = {
    name:"ready",
    run:async(client) => {console.clear();
        console.log("\n");
        console.log('\x1b[37m%s\x1b[0m', `                               > Estou online em ${client.user.username} <`);
        console.log('\x1b[37m%s\x1b[0m', `                                > Estou em ${client.guilds.cache.size}, Servidores XD <`);
        console.log('\x1b[37m%s\x1b[0m', `                                 > discord.gg/trident <`);
        console.log('\x1b[37m%s\x1b[0m', `                                 > Tenho ${client.users.cache.size} Amiguinhus :D <`);
        console.log('\x1b[37m%s\x1b[0m', `1.0.0`);

        
    }
}
