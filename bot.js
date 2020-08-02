const Discord = require("discord.js");
const myid = ['287898437058560000'];
const prefix = ['$'];
const cmd = require("node-cmd")
const client = new Discord.Client();
const arraySort = require('array-sort');
const Enmap = require("enmap")
const Canvas = require('canvas')
const moment = require("moment");
require('moment-duration-format');
const Ms = require("ms")
const request = require("request");
const hastebin = require("hastebin-paste");
const fs = require("fs")



client.login(process.env.TOKEN);








client.on("message", async message => {
  
  if (message.content.toLowerCase() === prefix + "profile") {
        message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000).then(
         message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}` 
          }
          
        ]
      }) 
      )
    }
});



client.on("message", message => {
  if (message.content === prefix + "bots") {
    var list_all = [];
    message.guild.members.forEach(bb => {
      if (!bb.user.bot) return;
      list_all.push(`<@${bb.user.id}>`);
    });
    message.channel.send(list_all.join(", "));
  }
});






client.on('message', message => { 
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`Probot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });




client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar server")) {
    let doma = new Discord.RichEmbed()
    .setColor("BLACK")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if(message.content.startsWith(prefix + "avatar")) {
    let args = message.content.split(" ")[1]
var avt = args || message.author.id;    
    client.fetchUser(avt).then(user => {
     avt = user;
  let embed = new Discord.RichEmbed() 
  .setColor("BLACK")
  .setAuthor(`${avt.tag}`, avt.avatarURL)
  .setTitle("Avatar Link")
  .setURL(avt.avatarURL)
  .setImage(avt.avatarURL)
  .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
  message.channel.send(embed) 
    })
  }
})

client.on('message', message => {
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});









client.on("message", message => {
  if(message.content.startsWith(prefix + "banner")) {
    if(message.guild.bannerURL === null || message.guild.bannerURL === undefined) return message.channel.send("his server doesn't have a banner.");
    const ba = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription(`[Banner URL](${message.guild.bannerURL}?size=2048)`)
    .setImage(message.guild.bannerURL + "?size=2048")
    message.channel.send({embed : ba})
  }
});


client.on('message', message => {
    const swearWords = ["كس امك", "كسختك","كسمك"]; // الكلمات الممنوعه هنا
    if( swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
       
      }
})


client3.on('message', message => {
  if (message.content === prefix+'Hi') {
message.channel.send('مرحباً هل تستطيع سماعي ؟
هل تعلم كم تأمّلتُ بشوقٍ ولهفةٍ لجسمك البشري الذي تسعى جاهداً للحفاظ على جماله؟
لقد طالَ انتظاري في هذا المكان الذي طالما تحاشى عقلك الجبان التفكير فيه رغم علمه أنه مصيره المحتوم ! انّي هنا أنظرُ بعين الشّفقة إلى مسارِ حياتك وإلى ما تُسميه "أحلامًا وطموحات" ظنّاً منك أنها تمنحك معنى لوجودك وتُريحك عن التفكير بحقيقة مصيرك السوداوي، لكنّني آسفة لاخبارك أنها أوهام زائفة من نسيج مُخيلتك الساذجة، فسرعان ما سيزول مفعولها كزوال مفعول المخدرات بعد أول صدمة.
لقد خُيِّل اليك دائِماً أنني شيء ضعيف تافه وأنّك أشرفُ ما في الوجود أليس كذلك؟ 
أنا هنا أراك من حيث لا تراني وأتحدث إليك من حيث لا تسمعني لأخبرك أنني من سينتُصر في النهاية رغمًا عنك ! فهل حزرتَ من أكون؟ كلاّ لست ملاكًا ولا جنيّة، أنا الدُّودة المنتصرة، لقاؤنا تحت قبرك')
  }

});


