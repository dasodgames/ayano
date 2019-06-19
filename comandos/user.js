const MegaClient = require("simple-discord");
const dg = require("discord-gestor")  
module.exports = new MegaClient.Comando({

  nombre: "student",
  alias: ["user"],
  cooldown: 5,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "This command allows you to make our bot show you the information of a user",
  ejecutar: async (client, message, args) => {

    let estados = {
        "online": "Online",
        "offline": "Offline",
        "idle": "Idle",
        "dnd": "Do not disturb"
    }
      
let userm = message.mentions.users.first()
dg.perfil.verPerfil(message.author.id, (datos) => {
if(!userm){
  var user = message.author;
      
  const embed = new MegaClient.RichEmbed()
    .setThumbnail(user.avatarURL)
    .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
    .setTitle("Student :")
     .setDescription("**Name : "+user.username+"\nDiscriminator : #"+user.discriminator+"\nID : "+user.id+"\nNickname : "+message.member.nickname+"\nStudent birthdate : "+user.createdAt.toDateString()+"\nStatus : "+estados[user.presence.status]+"**")
    .addField("Data :", "**level : "+datos.nivel+"\nPercentage : "+datos.porcNivel+ '%\nExperience : '+datos.sigNivel + "\nRoles : "+`${message.member.roles.map(m =>m).join(" **|** ")}`+"**")
    .setColor("#ef00ff")
        
  message.channel.send(embed);

}else{
  const embed = new MegaClient.RichEmbed()
     .setThumbnail(userm.avatarURL)
    .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
    .setTitle("User :")
     .setDescription("**Name : "+userm.username+"\nDiscriminator : #"+userm.discriminator+"\nID : "+userm.id+"\nNickname : "+message.member.nickname+"\nAccount Created : "+userm.createdAt.toDateString()+"**")
    .setColor("#ef00ff")
    
  message.channel.send(embed);
}
});
  }
});