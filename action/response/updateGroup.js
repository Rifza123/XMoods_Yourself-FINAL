const { color } = require('../other/color')
const updateGroup = async (rifza, anu, MessageType) => {

const metdata = await rifza.groupMetadata(anu.jid)

const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;rifza;;;\nFN:rifza\nitem1.TEL;waid=6287708357324:6287708357324\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}

if(anu.announce == 'false'){
   
let teks = `[ G R O U P - O P E N E D ]`
rifza.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})

console.log(color('|INFO|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  
}
  else if(anu.announce == 'true'){
   
let teks = `[ G R O U P - C L O S E ]`
rifza.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})

console.log(color('|INFO|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  
}
  else if(!anu.desc == ''){
  
let tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
   
let teks = `[ NEW DESCRIPTION❗ ]\n\nAdmin @${anu.descOwner.split('@')[0]} Telah mengubah deskripsi grub menjadi\n\n${anu.desc}`

rifza.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})

console.log(color('|INFO|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  
}
  else if(anu.restrict == 'false'){
  
let teks = `[ GROUP SETTINGS CHANGED ]\n\nSekarang semua peserta dapat mengedit info grub`
rifza.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})

console.log(color('|INFO|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  
}
  else if(anu.restrict == 'true'){
   
let teks = `[ GROUP SETTINGS CHANGED ]\n\nEdit grub sekarang hanya admin❗`

rifza.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})

console.log(color('|INFO|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  
}  
  } 
module.exports = { updateGroup }   
  
  