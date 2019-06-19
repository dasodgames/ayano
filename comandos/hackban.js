const MegaClient = require("simple-discord");
  
module.exports = new MegaClient.Comando({
  nombre: "DistanceExpel",
  alias: ["Hackban"],
  cooldown: false,
  permiso_cooldown: "BAN_MEMBERS",
  descripcion: "This command allows you to delete messages",
  ejecutar: async (client, message, args) => {
  
    client.unbanAuth = message.author;
  
let permiso = message.member.hasPermission("BAN_MEMBERS")

    
if (!permiso) return message.channel.send("`Error` `|` You aren't a teacher or the consuelor!")
  let user = args[0];
  
  if (!user) return message.channel.send("Tell me an ID")    
  if(isNaN(user)) return message.channel.send("Invalid ID")    

  message.guild.ban(user)
  message.channel.send("**I expelled <@" + user + ">**" )
  }
    
  });
  