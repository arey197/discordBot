module.exports.run = async (bot, message, args) => {
    message.channel.send(

    {embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Estos son os comandos do bot do carallo:",
    description: "Todos os comandos deben ter o prefijo actual antes",
    fields: [{
    
        name: "aiuda",
        value: "É esto, puto inútil"
      },
      {
        name: "add",
        value: "Archiva unha frase en frases.txt (solo admin)"
      },
      {
        name: "anime",
        value: "Di unha verdad absoluta"
      },

      {
        name: "avatar",
        value: "Unha foto do teu avatar, porque si, non ten mais."
      },
      {
		name: "ban",
		value: "<comando> <@usuario> <motivo>: Banea a un usuario do servidor (solo admin)"
      },
      {
		name: "cat",
		value: "Envía unha foto de un gato random, porque me saleu das pelotas facelo"
      },
      {
		name: "color",
		value: "<comando> <color>: Cambia o color do teu nombre, a non ser que xa teñas un asignado"
      },
      {
		name: "colores",
		value: "Manda unha lista de todos os colores disponibles"
      },
      {
		name: "comandos",
		value: "Por ahora non vai, pero ti dalle tempo"
      },
      {
        name: "frase",
        value: "<comando>: Devolve unha frase ao azar \n<comando> <autor>: Devolve unha frase dese autor"
      },
      {
		name: "jsontest",
		value: "É para facer pruebas eu, nin te molestes en usalo"
      },
      {
		name: "kick",
		value: "<comando> <@usuario> <motivo>: Kickea a un usuario do servidor, se tes permisos superiores aos del"
      },
      {
		name: "mute",
		value: "<comando> <@usuario>: Mutea ao usuario indefinidamente\n<comando> <@usuario> <tempo>: Mutea ao usuario durante a cantidad especificada de segundos"
      },
      {
        name: "purge",
        value: "Borrar mensajes de menos de 14 días de antigüedad (de 2 a 100)"
      },
      {
        name: "randomurban",
        value: "Manda unha entrada aleatoria de UD"
      },
      {
        name: "unmute",
        value: "<comando> <@usuario>: Desmutea a un usuario previamente muteado (obviamente)"
      },
      {
        name: "urban",
        value: "<comando> <palabra>: Busca a palabra especificada en UD"
      },
      {
        name: "userinfo",
        value: "Info do usuario, polo loles"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "Copyright: JODER-EH Software"
    }
  }
})
}

module.exports.help = {
    name: "aiuda"
}