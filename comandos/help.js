const MegaClient = require("simple-discord");
 
module.exports = new MegaClient.Comando({
  nombre: "help",
  alias: ["ayuda"],
  descripcion: "It shows you the entire list of commands.",
  cooldown: 3,
  permiso_cooldown: "ADMINISTRATOR",
  ejecutar: (client, message, args) => {
 
   if(client.comandos.size <= 0) return message.channel.send("No hay comandos") //de todos modos por si ocurre algo.

const embed = new MegaClient.RichEmbed()
.setTitle(" Things that I can do:")
.setDescription(" My prefix is **a!** (Customizable).")
.addField(" Info-Chan helps me in: ", "`expel , kick , DistanceExpel , unexpel , warn, clear`")
.addField(" Information", "`serverinfo , student, avatar`")
.addField(" Administration", "`setprefix`")
.addField(" Developer", "`reload`")
.addField(" Developers :", "<@587279345978966017>")
.setColor("f1c40f")
.setFooter(message.author.username, message.author.avatarURL)
message.channel.send(embed)

 
  }
 
})