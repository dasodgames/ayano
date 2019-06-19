const MegaClient = require("simple-discord");
  
module.exports = new MegaClient.Comando({
  nombre: "serverinfo",
  alias: ["server"],
  cooldown: false,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "This command shows you the server information",
  ejecutar: async (client, message, args) => {
      
const server = message.guild;
  
 let embed = new MegaClient.RichEmbed()
 .setTitle("Information about: "+server.name)
 .setDescription("**Created in : "+server.createdAt.toDateString()+"\nID : "+server.id+"\nRegion : "+server.region+"**")
 .addField("Owner Information: ", "**Owner : "+server.owner.user.username+"#"+server.owner.user.discriminator+"\nID : "+server.owner.user.id+"\nDiscriminator : "+server.owner.user.discriminator+"\nBorned in : "+server.owner.user.createdAt.toDateString()+"**")
 .addField("Other things :", "**Members : "+server.memberCount+"\nRoles : "+server.roles.size+"**")
 .setColor("#ef00ff")
 .setAuthor(server.name, server.iconURL)
 .setThumbnail(server.iconURL)
 message.channel.send(embed)
}
})