const MegaClient = require("simple-discord");
  
module.exports = new MegaClient.Comando({
  nombre: "say",
  alias: ["Say"],
  cooldown: false,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "This command allows you to make me say something",
  ejecutar: async (client, message, args) => {
      
    if(!args) return message.channel.send(`You must write a message to send.`);
message.channel.send(args.join(" "));
message.delete(1000)

    } 

    })