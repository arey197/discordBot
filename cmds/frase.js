const Discord = module.require("discord.js");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
  
  function getRandom(min, max) {
    return Math.ceil(Math.floor(Math.random() * (max - min)) + min);
	}

  var text = fs.readFileSync("./frases.txt").toString('utf-8');
       var textByLine = text.split("\n");
       var arrayPartes = [];
       var i = 0;
       var found = false;
       
       if (args[0]){
           for (i = 0; i<textByLine.length; i++){
               var subStr = textByLine[i].split(" - ");
               
               if (( String((subStr[1].toLowerCase())).trim()) === String(String(args[0]).toLowerCase()).trim()){
                   
                   arrayPartes.push(textByLine[i]);
                   found = true;
                   
               }
           }
           
           if (!found){
             message.channel.send("No se ha encontrado una frase con autor " + args[0]);
             return;
           }
           
           message.channel.send(arrayPartes[getRandom(0, arrayPartes.length)]);
           return;
           
       }
       message.channel.send(textByLine[getRandom(0, textByLine.length)]);
}

module.exports.help = {
    name: "frase"
}