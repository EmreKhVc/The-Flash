const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Espri yükleniyor...').then(message => {
   var espriler = ['Çekirgeyi salıverdin,\nÇarşambaya geri aldım. :smile:' ,'-Sinemaya Ne Dersin! \n+Sinema Derim Sen? \n-Ben de Sinema Derim. \n-Ne Çok Ortak Yönümüz Var!','+Kanka müslüm babayı örümcek ısırmış ne olmuş ? \n-Müslüman','Gidenin arkasına bakmayın yoksa geleni göremezsiniz.','+Oğlum canlılara örnek ver. \n-Kedi, köpek. \n+Cansızlara örnek ver. \n-Ölü kedi, ölü köpek.','+Kanka ben banyoya 3 kişi giriyom. \n-Oha nasıl? \n+Hacı, Şakir ve ben. \n-Defol lan!','+Kocanızla ortak özelliğiniz ne? \n-Aynı gün evlendik.','+Evladım ödevini neden yapmadın? \n-Bilgisayarım uyku modundaydı, uyandırmaya kıyamadım.','+Bizim arkadaş ortamında paranın lafı bile olmaz. \n-Niye ki? \n+Çünkü hiç birimizin parası yok.','Annemin bahsettiği elalem diye bir örgüt var illuminatiden daha tehlikeli yemin ederim.','+Acıkan var mı ya? \n-Yok bizde tatlı kan var.','Acaba rüyanın ortasında uyandığım zaman rüyamdaki karakterler “Anaaaa adam kayboldu gitti lan” diye şaşırıyor mudur?','Beni Ayda bir sinemaya götürme, Marsta bir sinemaya götür.','Aaa siz çok terlemişsiniz durun size terlik getireyim.','+Kanka çarşıdakı kebapçi yemeğin bittikten sonra sana PUBG açıyormuş. \n-Hangi kebapçıymış o ? \n-KePUBG Celal'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espri', 'espri-yap', 'yap-espri', 'yapbi-espri'],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Bot espri yapar.',
  usage: 'espri'
};
