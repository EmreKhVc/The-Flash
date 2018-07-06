const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - ÜYE SAYISI : **${guild.memberCount}**`, guild.id);
      embed.setColor('#D97634')
      embed.setTitle('Ailemiz')
      embed.setDescription(`Buda Ailemiz Gene Koyduk !. Ailemizde **${bot.guilds.size}** kadar sunucu var !`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sv', 'konuş', 'sohbet', 'ask'],
  permLevel: 0
};

exports.help = {
  name: "ailemiz",
  description: "Ailemizi Gösterir",
  usage: "ozelkomut1"
};
