const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Pokemon Oluşturuluyor...').then(message => {
   var espriler = ['random.cat' ,'Deneme \n+Sinema Derim Sen? \n-Ben de Sinema Derim. \n-Ne Çok Ortak Yönümüz Var!',];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['poke', 'espri-yap', 'yap-espri', 'yapbi-espri'],
  permLevel: 0
};

exports.help = {
  name: 'pokemonolustur',
  description: 'Rastgele Pokemonlar Oluşturur.',
  usage: 'pokemonolustur'
};
