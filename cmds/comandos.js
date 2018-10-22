/*const fs = require("fs");
const Discord = require("discord.js");
*/

module.exports.run = async (bot, message, args) => {
	/*fs.readdir("./cmds/", (err, files) => {
        if(err) console.error(err);

        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if(jsfiles.length <= 0) {
            console.log("No commands to load!");
            return;
        }

        var namelist = "";
        var desclist = "";
        var usage = "";

        let result = jsfiles.forEach((f, i) => {
            let props = require(`./${f}`);
            namelist = props.help.name;
            desclist = props.help.description;
            usage = props.help.usage;

            //message.author.send(`**${namelist}** \n${desclist} \n${usage}`);
            message.channel.send(`**${namelist}** \n${desclist} \n${usage}`);
        });
    });
    */
    message.channel.send("Non disponible aínda, porque vai como o cú básicamente. Confórmate con **+aiuda**");
}

module.exports.help = {
    name: "comandos",
    description: "genera unha lista con todos os comandos",
    usage: ""
}