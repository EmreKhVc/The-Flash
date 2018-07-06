const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
	.setDescription('Yak Aga Yak Yak :smoking:')
    .setImage('http://www.imgim.com/s-5f0757a3992d411564df5a7952c1c326dc0d0db1.gif');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Davet Linkim: https://discordapp.com/api/oauth2/authorize?client_id=464805066155622401&permissions=2146958583&scope=bot');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'sigaraiç',
  description: 'Sigara İçersin.',
  usage: 'sigaraiç'
};
