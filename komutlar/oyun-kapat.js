const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.delete();
  client.user.setStatus("");
  client.user.setGame(`${prefix}yardim | ${client.guilds.size} Sunucu | ${client.users.size} Kullanıcı`);
  message.channel.send({embed: {
    color: 3447003,
    description: `✅  Oyun Kapatıldı.`
  }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oyna', 'oyna-kapat'],
  permLevel: 4
};

exports.help = {
  name: 'oyun-kapat',
  description: 'Botun Oyun modunu kapatır.',
  usage: 'oyna-kapat'
};
