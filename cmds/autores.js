const Discord = module.require("discord.js");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
  var text2 = fs.readFileSync("./frases.txt").toString('utf-8');
  var textByLine2 = text2.split("\n");
  var arrayPartes2 = [];
       
       
       
    for (i = 0; i<textByLine2.length; i++){
    	var subStr2 = textByLine2[i].split(" - ");
              
		if (!arrayPartes2.includes(String(subStr2[1]).trim() ))
                   arrayPartes2.push(String(subStr2[1]).trim() );
           }
           
        if (arrayPartes2.length < 1 ) {  
        message.channel.send("No hay autores de frases"); 
        return;
        }
       
        message.channel.send("Los autores actuales son:\n" + arrayPartes2.toString());
}

module.exports.help = {
    name: "autores"
}