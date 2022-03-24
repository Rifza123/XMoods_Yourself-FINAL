"use strict";
process.on('uncaughtException', console.error)
const { WAConnection: _WAConnection, MessageType } = require("@adiwajshing/baileys");
const WAConnection = require('./action/other/simple').WAConnection(_WAConnection);
const rifza = new WAConnection()
const qrcode = require("qrcode-terminal")
const fs = require("fs")
const figlet = require('figlet')
const CFonts  = require('cfonts')
const Options = JSON.parse(fs.readFileSync('./action/other/setting/options.json'))
const term = require('terminal-kit').terminal 
const moment = require("moment-timezone")
const chatUpdate = require('./command/xm.js')
const { getBuffer, getRandom } = require('./action/tools')
const { exec } = require('child_process')
const { groupUpdate } = require("./action/response/group.js")
const { updateGroup } = require("./action/response/updateGroup")
const { batteryAsyncOBB } = require("./action/response/BatteryValue");
const { start, waiting, close, success } = require('./action/other/function') 
const { chalk, color, bgcolor, ConsoleLog, biocolor } = require('./action/other/color')  
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`./storage/image/thumb.jpg`), surface: 200, message: `)-----[XM BOT]-----(`, orderTitle: 'LordRifza', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}       
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}   


nocache('./command/xm.js', module => console.log(color(`New`, 'red'), color(`${module} is now updated!`, 'teal')))
nocache('./start.js', module => console.log(color(`New`, 'red'), color(`${module} is now updated!`, 'teal')))
nocache('./action/other/setting/options.json', module => console.log(color(`New`, 'red'), color(`${module} is now updated!`, 'teal')))
nocache('./action/tools.js', module => console.log(color(`New`, 'red'), color(`${module} is now updated!`, 'teal')))

const starts = async (rifza = new WAConnection()) => {
console.log(color('Halo, selamat menggunakan X-MOODS bot', 'purple'))
rifza.logger.level = 'warn'
rifza.version = [2, 2143, 3]
CFonts.say('Xilver-Moods\nWhatsAppBot', {
  font: 'chrome',
  align: 'center',
  gradient: ['blue', 'white']
})
CFonts.say(`@rifza.p.p`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})
rifza.browserDescription = [ 'XMOODS', 'Aloha', '5.4' ]    

rifza.on('qr', async (qr) => { 
console.log({qr})
console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan kak')) })      

fs.existsSync('./action/connection/qrcode.json') && rifza.loadAuthInfo('./action/connection/qrcode.json')

rifza.on('connecting', async (connecting) => {
start('2', 'Mengkoneksikan ke WhatsApp_Web...')})
//
rifza.on('open', async (open) => {
console.log({open})
success('2', 'Tersambung✔️')
setTimeout( () => {
}, 1500)})
//
await rifza.connect({timeoutMs: 30*1000})
fs.writeFileSync('./action/connection/qrcode.json', JSON.stringify(rifza.base64EncodedAuthInfo(), null, '\t'))
//   

console.log(bgcolor('XILVER - MOODS ©WhatsApp_Bot • Created By > [ ®Lord_Rifza ]\n-------> Ready to use❗', 'gray'))
//
await sleep(3000)

rifza.on('ws-close', () => {
console.log(ConsoleLog('Koneksi terputus, mencoba mengkoneksikan ulang..'))}) 
//
rifza.on('CB:action,,battery', async (json) => {  
  global.batteryLevelStr = json[2][0][1].value
  global.batterylevel = parseInt(batteryLevelStr)
  const battery = batterylevel 
  global.baterai = battery
   batteryAsyncOBB(rifza, json);
   } );
//
rifza.on('chat-update', async (message) => {
chatUpdate(rifza, message)})   
rifza.on('group-participants-update', async (anu) => {				
groupUpdate(rifza, anu, MessageType)})	   
//
rifza.on('group-update', async (anu) => {
updateGroup(rifza, anu, MessageType)
//  
})
//
rifza.on('CB:action,,call', async json => {
console.log({json})
const callerId = json[2][0][1].from;
var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${Options.NamaOwner}` + '\n' + `ORG:Developer ${Options.NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${Options.NomorOwner}` + ':+' + `${Options.NomorOwner}` + '\n' + 'END:VCARD'
rifza.sendMessage(callerId, "\`\`\`[ ! ] TERDETEKSI MENELFON [ ! ]\`\`\`\n\n\`\`\`Maaf, jangan menelfon saya. ingin membuka silahkan hubungi owner!", MessageType.text)
rifza.sendMessage(callerId, { displayname: `${Options.NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Creator ${Options.NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync(`./storage/image/thumb.jpg`),sourceUrl:`https://wa.me/6287708357324?text=Assalamualaikum`}}})
await sleep(5000)
await rifza.blockUser(callerId, "add")
})
//
}
function nocache(module, cb = () => { }) {
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)})}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)}})}
starts()   