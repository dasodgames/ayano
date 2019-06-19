
const MegaClient = require("simple-discord");
const fs = require("fs")
  
module.exports = new MegaClient.Comando({
  nombre: "setprefix",
  alias: ["setprefix"],
  cooldown: false,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "This command allows you to change my prefix",
  ejecutar: async (client, message, args, prefix) => {

  
let perms = message.member.hasPermission("ADMINISTRATOR");
 
if (!perms) return message.channel.send("You aren't a teacher or the consuelor!")
  
if(!args[0] || args[0 == "help"]) return message.channel.send("Tell me the new prefix!")
  
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  
  prefixes[message.guild.id] = {
    prefixes: args[0]
  };
  
  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });
  
  message.channel.send("My prefix is now: **"+args[0]+"**")
}
});