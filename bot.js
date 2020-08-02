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


client.on('message', message => {
    if(message.content === prefix+'Hi'){
        message.channel.send('مرحباً هل تستطيع سماعي ؟ هل تعلم كم تأمّلتُ بشوقٍ ولهفةٍ لجسمك البشري الذي تسعى جاهداً للحفاظ على جماله؟ لقد طالَ انتظاري في هذا المكان الذي طالما تحاشى عقلك الجبان التفكير فيه رغم علمه أنه مصيره المحتوم ! انّي هنا أنظرُ بعين الشّفقة إلى مسارِ حياتك وإلى ما تُسميه "أحلامًا وطموحات" ظنّاً منك أنها تمنحك معنى لوجودك وتُريحك عن التفكير بحقيقة مصيرك السوداوي، لكنّني آسفة لاخبارك أنها أوهام زائفة من نسيج مُخيلتك الساذجة، فسرعان ما سيزول مفعولها كزوال مفعول المخدرات بعد أول صدمة. لقد خُيِّل اليك دائِماً أنني شيء ضعيف تافه وأنّك أشرفُ ما في الوجود أليس كذلك؟  أنا هنا أراك من حيث لا تراني وأتحدث إليك من حيث لا تسمعني لأخبرك أنني من سينتُصر في النهاية رغمًا عنك ! فهل حزرتَ من أكون؟ كلاّ لست ملاكًا ولا جنيّة، أنا الدُّودة المنتصرة، لقاؤنا تحت قبرك.
')
    }
});

