const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let gametitle = args.slice(0).join(' ');
	if (gametitle.length < 1) return message.reply('Yayın için herhangi bir başlık yazmalısın.');
  message.delete();
  client.user.setStatus("");
  client.user.setGame(`${gametitle}`);
  message.channel.send({embed: {
    color: 3447003,
    description: `✅  Oynadığı Oyun 》 **${gametitle}** Olarak değiştirildi.`
  }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oyun+', 'game-on', 'oyun-ac'],
  permLevel: 4
};

exports.help = {
  name: 'oyun',
  description: 'Botun yayin basligini gösterir.',
  usage: 'oyna <oyun basligi>'
};

