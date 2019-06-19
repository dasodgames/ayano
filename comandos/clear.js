const MegaClient = require("simple-discord");
  
module.exports = new MegaClient.Comando({
  nombre: "clear",
  alias: ["Clear"],
  cooldown: false,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "This command allows you to delete messages",
  ejecutar: async (bot, message, args) => {


    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("It seems you can't use this...")
    if(!args[0]) return message.channel.send("Tell me how many messages I have to kill... I mean, delete")
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`I deleted ${args[0]} messages.`).then(msg => msg.delete(5000));
    })
      
    } 
    
    })