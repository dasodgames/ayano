const MegaClient = require("simple-discord");
  
module.exports = new MegaClient.Comando({
  nombre: "reload",
  alias: ["Reload"],
  cooldown: 5,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "This command allows you to update a command.",
  ejecutar: async (client, message, args) => {
 
    if(message.author.id != "587279345978966017") return message.channel.send("Only my creator can use this command.")
    if(client.comandos.size <= 0) return message.channel.send("There isn't command.") //esto es un poco ilogico pero vamos a prevenir.
    if(!args[0]) { //si no se ingresa ningun argumento
      client.reload() //recargamos todos los comandos
      return message.channel.send(`Commands loaded correctly.`)
    }
    //esto se ejecutara si el usuario ingresa el nombre de un comando
    if(!client.comandos.has(args[0])) return message.channel.send(`El comando ${args[0]} no existe.`) //si el comando no existe
    client.reload(args[0]) //recargamos el comando
    return message.channel.send(`The command ${args [0]} has just been reloaded correctly.`)
  }
 
})