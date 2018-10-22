// ./ = archivo local (carpeta raíz)
const botSettings = require("./botsettings.json");

const Discord = require("discord.js");  // Referencia á librería de Discord
const fs = require("fs");
const prefix = botSettings.prefix;  // Son un vago non me apetece poñer botSettings.prefix gracias de nada

// Creación de cliente
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
bot.mutes = require("./mutes.json")

//Genera o administrador de comandos (./cmds/)
fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);
    
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }
    
    console.log(`Loading ${jsfiles.length} commands!`);
    
    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

// Genera un link de invitación con permisos de Admin
bot.on("ready", async () => {
   console.log(`Bot is ready! ${bot.user.username}`); 
   //bot.user.setGame(`on ${client.guilds.size} servers`);
   bot.user.setPresence({ game: { name: "+aiuda para axuda", type: 0 } });

   //Genera un intervalo de tempo no que checkea mutes.json
   bot.setInterval(() => {
        for(let i in bot.mutes){
            let time = bot.mutes[i].time;
            let guildId = bot.mutes[i].guild;
            let guild = bot.guilds.get(guildId);
            let member = guild.members.get(i);
            let mutedRole = guild.roles.find(r => r.name === "Muteado por parvo");
            if(!mutedRole) continue;

            if(Date.now() > time) {
                console.log(`${i} can be unmuted now`);

                member.removeRole(mutedRole);
                delete bot.mutes[i];

                fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
                    if(err) throw err;
                    console.log(`I have unmuted ${member.user.tag}.`);
                });
            }
        }
   }, 5000)
   
   try{
       let link = await bot.generateInvite(["ADMINISTRATOR"]);
       console.log(link);
   } catch(e) {
       console.log(e.stack);
   }
});

bot.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

bot.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});


bot.on("guildMemberAdd",  (member) => {
  // o evento fai que o bot mande un mensaje cando alguien se une ao server
  (member.guild.defaultChannel).send(member.user + " entrou polos loles");
});

bot.on("guildMemberRemove", (member) => {
  //o evento fai que o bot mande un mensaje cando alguien sale do server
  (member.guild.defaultChannel).send(member.user + " pirouse a durmir unha boa siestaja");
});


//Detección de texto, impide dm's
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    
    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot,message,args);    
});

bot.login(botSettings.token);