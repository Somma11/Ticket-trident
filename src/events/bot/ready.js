const {} = require("discord.js");
const art = `
 _____  _____ ___  ______  ___  ___       ______  _____  _   _ 
/  ___||  _  ||  \\/  ||  \\/  | / _ \\      |  _  \\|  ___|| | | |
\\ \`--. | | | || .  . || .  . |/ /_\\ \\     | | | || |__  | | | |
 \`--. \\| | | || |\\/| || |\\/| ||  _  |     | | | ||  __| | | | |
/\\__/ /\\ \\_/ /| |  | || |  | || | | |     | |/ / | |___ \\ \\_/ /
\\____/  \\___/ \\_|  |_/\\_|  |_/\\_| |_/     |___/  \\____/  \\___/
`;


module.exports = {
    name:"ready",
    run:async(client) => {console.clear();
        console.log(art);
        console.log("\n");
        console.log('\x1b[37m%s\x1b[0m', `                               > Estou online em ${client.user.username} <`);
        console.log('\x1b[37m%s\x1b[0m', `                                > Estou em ${client.guilds.cache.size}, Servidores XD <`);
        console.log('\x1b[37m%s\x1b[0m', `                                 > https://github.com/Somma11 <`);
        console.log('\x1b[37m%s\x1b[0m', `                                 > Tenho ${client.users.cache.size} Amiguinhus :D <`);
        console.log('\x1b[37m%s\x1b[0m', `1.0.0`);

        
    }
}
