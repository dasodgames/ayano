const MegaClient = require("simple-discord");
const Discord = require("discord.js");
const fs = require("fs");
const warnsJSON = require("../warns.json");
const maxwarns = 5;

  
module.exports = new MegaClient.Comando({

  nombre: "warn",
  alias: ["Warn"],
  cooldown: 5,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "This command allows you to make our bot show you the information of a user",
  ejecutar: async (bot, message, args) => {
    
    var perms = message.member.hasPermission("BAN_MEMBERS");
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I need to have the permission ** BAN_MEMBERS **")
  if(!args[0]) return message.channel.send("You need to specify the @user and the ** reason ** of your warning")
  var user = message.mentions.members.first() || message.guild.members.get(args[0])
  if(!user) return message.channel.send("The user **"+args[0]+"** doesn't exists")
  if(user.id == message.author.id) return message.channel.send("Because you want to warn?")
  if(user.id == bot.user.id) return message.channel.send("nope....")
  if(!args[1]) return message.channel.send("You need to state the reason for your warning.")
  var motivo = args.slice(1).join(" ")
  var embed = new Discord.RichEmbed()
  embed.setColor("RANDOM")

  if(!warnsJSON[user.id]) {
    warnsJSON[user.id] = {
      warnings: 0
    }
  }

  warnsJSON[user.id].warnings++

  fs.writeFile("./warns.json", JSON.stringify(warnsJSON), (error) => {
    if(error) console.log(error)
  })

  if(warnsJSON[user.id].warnings == maxwarns) {
    message.guild.ban(user, {days: 7, reason: motivo}).then(m => {

      embed.addField("Student expelled","The student "+user+"Reached the limit of warnings.")
      embed.addField("Reason","Was expelled for 7 days with the reason: **"+motivo+"**.")
      embed.setThumbnail(user.user.displayAvatarURL)
      message.channel.send(embed)
    }).catch(error => {
      message.channel.send("The student "+user+" can't be expelled by the following reason: **"+error.message+"**.")
    })
    return
  }

  embed.addField("New warn","The student "+user+" has just been warned by the following reason: **"+motivo+"**.")
  embed.addField("Number of warns","The student "+user+" currently has **"+warnsJSON[user.id].warnings+"** warnings")
  message.channel.send(embed)
  user.send("You were warned for the following reason: **"+motivo+"**, Currently you have the following warnings: **"+warnsJSON[user.id].warnings+"**.").catch(error => {
    console.log(error)
  })
  return
}
})
