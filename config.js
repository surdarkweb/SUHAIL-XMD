const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_04_12_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIyLFxuICAgICAgICAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDUwLFxuICAgICAgICA4OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDI2LFxuICAgICAgICA2OCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDkyLFxuICAgICAgICA5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDcxLFxuICAgICAgICA1NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDU2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDM2LFxuICAgICAgICA3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk0LFxuICAgICAgICA4MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNCxcbiAgICAgICAgNixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMixcbiAgICAgICAgNDUsXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInliYTNTbWJJWXdDWVdSQXF1TFIzcnZ5dXIwVzZxSTdBQVBWN3grQlFkQkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxIakZVQ0VXUlNXbzV6SXJwV2dwT0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWRmOGRjOGMtODE0OS00MDc3LWE3OGQtNTM5Mjc5YjA5MzI3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDEzNCxcbiAgICAgIDI0MyxcbiAgICAgIDIwMCxcbiAgICAgIDEzOCxcbiAgICAgIDU5LFxuICAgICAgMzYsXG4gICAgICAxODIsXG4gICAgICAyNDYsXG4gICAgICAxMDUsXG4gICAgICAxOSxcbiAgICAgIDExMixcbiAgICAgIDE4MSxcbiAgICAgIDEzLFxuICAgICAgMTYzLFxuICAgICAgMTcxLFxuICAgICAgMTQ3LFxuICAgICAgMjM5LFxuICAgICAgNTcsXG4gICAgICAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgMTIyLFxuICAgICAgMjQ2LFxuICAgICAgMjU1LFxuICAgICAgOTEsXG4gICAgICA2NCxcbiAgICAgIDE3MCxcbiAgICAgIDIyOSxcbiAgICAgIDIwMyxcbiAgICAgIDIzMyxcbiAgICAgIDEwMCxcbiAgICAgIDgyLFxuICAgICAgMTYwLFxuICAgICAgNDMsXG4gICAgICAxMDIsXG4gICAgICAyMzYsXG4gICAgICA5MCxcbiAgICAgIDUsXG4gICAgICA0LFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNXMkFMNzhQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAxNjk5MzQwOjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5NzAxOTM4NTQwMTQ1MDo0OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJT3RzSXNERUx1V2g3c0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNuczFlMis4WWlQbTRqSnhzUHp3K0ZlN1dEcDQ5SHNoKysvT1IvZ0RCMzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUG14MHJlbFBmZVlZWm16NS9Zam0yTm1ITGo3dmprWDIxUkVQMzIxZHIrV0pqTkY1aXpDZ1l5U2RwSmFqREpUMDlhMTJWMzVkb1o0eDFvV1loNEU5QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTytjZFJnbEMyZk1BS1paNXptT1FnMlYyWW1YRkRmUTRtK1NESUZKUlV2cDFGbWF0MFEyRmNvWFd4UnBzbzZFR2E5bzk0NTJ6enM3dlRydzJCd1d1QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMTY5OTM0MDo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NDYyMjcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQVdUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBV1QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIZXN3SnBWNUlNanEyemdudEpKS3lpb25GYnZaTlg4VkJ3Q0NHT3VOQnhNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgyOTE2NzIzNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0NDYyMjc3NjI1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
