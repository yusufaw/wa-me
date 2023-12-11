var telepon = require("@namchee/telepon")
const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.MBOT_TOKEN)

bot.on('text', ctx => {
    if (ctx.message.text.toLowerCase().includes("wame")) {
        generateWaMeUrl(ctx);
    }
})

bot.command('wame', ctx => {
    generateWaMeUrl(ctx);
})

function generateWaMeUrl(ctx) {
    console.log(ctx.message.text);
    try {
        let input = ctx.message.text.replace(/[^\d\-\+]/g, '');
        if (input.replace().startsWith('+31')) {
            const wameFormat = `https://wa.me/${input}`
            ctx.reply(wameFormat, {
                parse_mode: "HTML",
                disable_web_page_preview: true,
            })
        } else {
            const inputPhoneNumber = telepon.parse(input);
            const formattedPhoneNumber = telepon.format(inputPhoneNumber, telepon.Standard.E164);
            const wameFormat = `https://wa.me/${formattedPhoneNumber}`
            ctx.reply(wameFormat, {
                parse_mode: "HTML",
                disable_web_page_preview: true,
            })
        }
    } catch (error) {
        ctx.reply("Nomor telepon tidak sesuai");
    }
}

bot.launch()