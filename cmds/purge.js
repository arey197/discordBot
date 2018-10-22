module.exports.run = async (bot, message, args) => {   
    // colle o número de mensajes borrados como un número enteiro
    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Escribe un número entre 2 e 100 para saber o número de mensajes que borrar");
    
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Non os puiden borrar porque: ${error}`));
  }

module.exports.help = {
    name: "purge",
    description: "Borra todos os mensajes de calquera usuario de un canal, hasta 100."
}