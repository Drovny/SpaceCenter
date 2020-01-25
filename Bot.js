const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`SpaceCenter yönetim botu olan ${client.user.tag} sunucumuza giriş yapmış bulunmakta.! `);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam kardeşim.!');
  }
  if (msg.content.toLowerCase() === 'selam') {
    msg.reply('Aleyküm selam kardeşim.!');
  }
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    msg.reply('Aleyküm selam kardeşim.!');
  }
  if (msg.content.toLowerCase() === 'klan') {
    msg.reply('Klan başvuru kanalına steam profil linkinle birlikte moderatör ve yetkilileri etiketleyiniz.!');
  }
  if (msg.content.toLowerCase() === 'space center') {
    msg.reply('Space Center Destiny 2 Community ortamı oluşturmak adına açılmış bir Community ve Klan ortamıdır. !');
  }
});
client.on('guildBanAdd' , (guild, user) => {
  let genelsohbet = guild.channels.find('name', 'genel-sohbet');
  if (!genelsohbet) return;
  genelsohbet.send('https://media.giphy.com/media/gKYd9JXhKlrHH1FRJu/source.gif **Kulağıma hiç hoş şeyler gelmedi.** '+ user.username +' **Senin biraz sakinleşmeye ihtiyacın vardı.** :hammer:' );
});

client.login('NjcwNTk0NzAyMzIzNjEzNjk3.XixAQA.ejq12XgfOyFn6p_1-R6bYW8WF6A');
