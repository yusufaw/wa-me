var telepon = require("@namchee/telepon")
const { Telegraf } = require('telegraf')
require('dotenv').config();

const bot = new Telegraf(process.env.MBOT_TOKEN)

bot.on('text', ctx => {
    console.log(ctx.message.text);
    const inputPhoneNumber = telepon.parse(ctx.message.text);
    const formattedPhoneNumber = telepon.format(inputPhoneNumber, telepon.Standard.E164)
    const wameFormat = `https://wa.me/${formattedPhoneNumber}`
    ctx.reply(wameFormat)
})

bot.launch()