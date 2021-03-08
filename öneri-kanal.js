const {MessageEmbed} = require("discord.js");
const db = require("quick.db");


module.exports = {
	run: async(client, message, args) =>{
if(!args[0]) return message.reply(`hatalı kullanım ayarlamak için **!!kanal ayarla #kanal**`)

let kanal = message.mentions.channels.first()
if (args[0] === "ayarla") {
if (!kanal) return message.reply(`Öneri Sisteminin Gönderileceği Kanal Etiketlemelisin!`)
	message.reply(`başarılı bir şekilde önerilerin gideceği kanal ${kanal} olarak ayarlanmıştır!`)
db.set(`önerikanal1_${message.guild.id}`, kanal.id)
}

if (args[0] === "sıfırla") {
	const sorgu = db.fetch(`önerikanal1_${message.guild.id}`)
if (!sorgu) return message.reply(`Herhangi Bir Öneri Kanalı Ayarlmadığından Sıfırlayamıyorum!`)
	message.reply(`başarılı bir şekilde önerilerin gideceği Kanal Sıfırlanmıştır!`)
db.delete(`önerikanal1_${message.guild.id}`)
}


	},
	config: {
		name: "kanal"
	}
}