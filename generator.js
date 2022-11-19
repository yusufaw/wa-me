var telepon = require("@namchee/telepon")

const inputPhoneNumber = telepon.parse("0821 49283-193");
const formattedPhoneNumber = telepon.format(inputPhoneNumber, telepon.Standard.E164)
const wameFormat = `https://wa.me/${formattedPhoneNumber}`
console.log(wameFormat)