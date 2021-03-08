const {MessageEmbed} = require("discord.js");
const db = require("quick.db");

module.exports = {
	run: async(client, message, args) =>{
const kanalsogu = db.fetch(`önerikanal1_${message.guild.id}`)
if (!kanalsogu) return message.reply(`Herhangi Bir Önerinin Gideceği Kanal Ayarlanmamış Ayarlamk İçin **!!kanal ayarla #kanal **`)


let mesaj = args.splice(0).join(" ");

if (!mesaj) return message.reply(`Önermek İsteğinizi Belirtmelisiniz!`)
if(mesaj) {
	const reveloper = new MessageEmbed()
	.setTitle(`RvS Bot Öneri Sistemi!`)
	.setColor("#3498db")
	.setDescription(`\`${mesaj}\` `)
	message.guild.channels.cache.get(kanalsogu).send(reveloper)
}

message.delete()
message.channel.send(new MessageEmbed().setDescription(`Başarılı Bir Şekilde Öneriniz İletildi!`))
	},
	config:{
		name: "önerisistemi"
	}
}




