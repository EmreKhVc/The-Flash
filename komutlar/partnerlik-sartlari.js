const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("THE FLASH BOT ! \n")
  .setColor("RANDOM")
  .addField("**1.** `150+ kişilik sunucunuz olmalı.","ᅠ")
  .addField("**2.** `Günlük aktif 70 üyeniz olmalıdır.","ᅠ")
  .addField("**3.** `Eğer Partnerliğimizi Silerseniz Partnerlik Iptal Olur!,","ᅠ")
  .addField("**4.** `BOT^umuzu Sunucunuza Eklemelisiniz!","ᅠ")
  .addField("**YUKARDAKI KURALLARA UYULMADIGI TAKDIRDE PARTNERLIK IPTAL OLUR!!!**","ᅠ")
  .setFooter("♥ 2018 ♥ THE FLASH ♥ BOT ♥ 0.5.0 V ♥", "https://cdn.discordapp.com/attachments/464130193569873920/464838145066926120/2109042164x64.jpg")


  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'şartlar',
  description: 'Partnerlik şartlarımızı gösterir.',
  usage: 'şartlar'
};