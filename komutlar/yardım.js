const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;

//GENEL KOMUTU
    if(args[0] === "Ümumi" || args[0] === "ümumi" || args[0] === "General" || args[0] === "general") {
              let Genel = new Discord.MessageEmbed()
  .setAuthor('Ümumi', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu kommandı istifadə edən  ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linklər", ` [Dəvət](https://discord.com/oauth2/authorize?client_id=816241400185487410&scope=bot&permissions=8)` + "** | **" + `[Dəstək Serveri](https://discord.gg/A8MWm9Udgt)`  + "** | **", false)
              return message.channel.send(Genel)
         
       
       return;
    }
    //SUNUCU KOMUTU
      if(args[0] === "Server" || args[0] === "server") {
              let Server = new Discord.MessageEmbed()
  .setAuthor('Server', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu kommandı istifadə edən  ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sunucu').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linklər", ` [Dəvət](https://discord.com/oauth2/authorize?client_id=816241400185487410&scope=bot&permissions=8)` + "** | **" + `[Dəstək Serveri](https://discord.gg/A8MWm9Udgt)`  + "", false)
              return message.channel.send(Server)
         
      

       return;
    }
//EĞLENCE KOMUTU
  if(args[0] === "Əyləncə" || args[0] === "eğlence" || args[0] === "Fun" || args[0] === "fun") {
   let Eğlence = new Discord.MessageEmbed()
  .setAuthor('Əyləncə', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu kommandı istifadə edən  ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Eğlence').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linklər", ` [Dəvət](https://discord.com/oauth2/authorize?client_id=816241400185487410&scope=bot&permissions=8)` + "** | **" + `[Dəstək Serveri](https://discord.gg/A8MWm9Udgt)`  + "", false)
   return message.channel.send(Eğlence)
  
      
           return;
  }
  //MODERASYON KOMUTU
  if(args[0] === "Moderasiya" || args[0] === "moderasiya" || args[0] === "moderation" || args[0] === "Moderation") {
   let Moderasyon = new Discord.MessageEmbed()
  .setAuthor('Moderasiya', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu kommandı istifadə edən  ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Moderasyon').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linklər", ` [Dəvət](https://discord.com/oauth2/authorize?client_id=816241400185487410&scope=bot&permissions=8)` + "** | **" + `[Dəstək Serveri](https://discord.gg/A8MWm9Udgt)`  + "", false)
   return message.channel.send(Moderasyon)
             
       
               return;
  }
     //SAHİP KOMUTU
  if(args[0] === "Sahip" || args[0] === "sahip" ) {
    let Sahip = new Discord.MessageEmbed()
   .setAuthor('Moderasyon', message.author.displayAvatarURL())
   .setColor('#2667FF')
  .setFooter('Bu kommandı istifadə edən  ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sahip').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linklər", ` [Dəvət](https://discord.com/oauth2/authorize?client_id=816241400185487410&scope=bot&permissions=8)` + "** | **" + `[Dəstək Serveri](https://discord.gg/A8MWm9Udgt)`  + "", false)
    return message.channel.send(Sahip)
              
        
                return;
   }

//YARDIM KOMUTU
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('Kommandlar', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('#FFFB05')
  .setDescription(`**Nümunə istifadə:** \`${prefix}yardım Kategoriya\``)
  .addField('Kategoriyalar:', `
  **[${prefix}yardım Ümumi](https://discord.gg/A8MWm9Udgt)** 
  **[${prefix}yardım Əyləncə](https://discord.gg/A8MWm9Udgt)**
  **[${prefix}yardım Moderasiya](https://discord.gg/A8MWm9Udgt)**
  **[${prefix}yardım Server](https://discord.gg/A8MWm9Udgt)**
  `)
        .addField("» Linklər", ` [Dəvət](https://discord.com/oauth2/authorize?client_id=816241400185487410&scope=bot&permissions=8)` + "** | **" + `[Dəstək Serveri](https://discord.gg/A8MWm9Udgt)`  + "", false)

  .setFooter('Bu kommandı istifadə edən  ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    
//EMİRHAN SARAÇ TARAFINDAN YAPILMIŞTIR 2021 DE YENİLENMİŞTİR!

  exports.conf = {
    aliases: ['help', 'cmds', 'yardım','kömək', 'komutlar', 'kömek', 'yardim', 'komand', 'kommand'], //Komutun farklı yazılışlarla kullanımları
    permLevel: 0, //Komutun kimler kullanacağını belirtir (bot.js dosyasından en aşağı inerseniz gerekli yeri görürsünüz)
    kategori: "Ümumi" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız

  };

  exports.help = {
    name: 'kommandlar',  //adını belirtin (kullanmak için gereken komut) Örneğin Otorol
    description: 'Kommandlar haqqında məlumat.', //Komutun açıklaması
    usage: 'kommandlar', //Komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
  };
