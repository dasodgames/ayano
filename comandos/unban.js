const MegaClient = require("simple-discord");
  
module.exports = new MegaClient.Comando({
  nombre: "unexpel",
  alias: ["unexpel"],
  cooldown: false,
  permiso_cooldown: "BAN_MEMBERS",
  descripcion: "This command allows you to unbar users",
  ejecutar: async (client, message, args) => {
    
    let argcustom = args.join(" ").slice(6)
client.unbanAuth = message.author;
  
let permiso = message.member.hasPermission("BAN_MEMBERS")
if (!permiso) return message.channel.send("You aren't a teacher or the consuelor!")

  let user = args[0];

if (!user) return message.channel.send("Introduce a valid ID.")    
  if(isNaN(user)) return message.channel.send("Invalid ID.")    
    
  message.guild.unban(user)
  message.channel.send("I unexpelled <@" + user + ">, Be careful...")
 
}
});