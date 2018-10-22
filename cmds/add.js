const Discord = module.require("discord.js");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
  
  var os = require("os");
      var string = message.toString();
      var index = string.lastIndexOf(" -");
         
      if (!(message.author.id === "adminID_here") && !(message.author.id === "adminID_here")  ){
         message.channel.send("No tienes permisos para este comando");
         return; 
      }
          
      if (index === -1){
        message.channel.send("Formato no valido: <frase> <- autor>");
        return;
      }
      
      var subStr3 = string.substring(5,index);
            
      if (args.length < 2){
          message.channel.send("Formato no valido: <frase> <- autor> ");
          return;
      }
  
  //    if (!args[0].startsWith("'"))
       
     let autor = args[args.length - 1];
     
      if (autor.startsWith("-")) autor = autor.substr(1);
      
     let appendData = "\"" + subStr3 + "\" - " + autor;
     fs.appendFileSync("frases.txt", os.EOL + appendData);
     message.channel.send("\""+subStr3+"\"" +" agregado al fichero!");
     console.log("\""+subStr3+"\"" +" agregado al fichero!");
}

module.exports.help = {
    name: "add"
}