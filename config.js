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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_07_12_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDczLFxuICAgICAgICA5NixcbiAgICAgICAgMjE1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4LFxuICAgICAgICA2NSxcbiAgICAgICAgNjksXG4gICAgICAgIDU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU5LFxuICAgICAgICA1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA3LFxuICAgICAgICA2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDkxLFxuICAgICAgICAzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5OCxcbiAgICAgICAgNixcbiAgICAgICAgMTQyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwLFxuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDM2LFxuICAgICAgICA2NixcbiAgICAgICAgMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiODdjUzhCM0c0eUVqYks3aUo0K1ljbUZPVnI2MytpSnZHNTBuVGUvNlVIVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ0thYUdGQ1RRMzJhRnhWaXNNUHV4d1wiLFxuICBcInBob25lSWRcIjogXCJiYzE2MjFjYS0xODNiLTRmZDItOGU3ZS1kYzFhY2I0OGU3YmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzAsXG4gICAgICAxNzYsXG4gICAgICAyMTEsXG4gICAgICAxMTgsXG4gICAgICAxODAsXG4gICAgICAxODUsXG4gICAgICA2MyxcbiAgICAgIDE0NCxcbiAgICAgIDM0LFxuICAgICAgNzcsXG4gICAgICAxNzgsXG4gICAgICAyMTgsXG4gICAgICA1OSxcbiAgICAgIDk4LFxuICAgICAgMTExLFxuICAgICAgMTEwLFxuICAgICAgMjAyLFxuICAgICAgODIsXG4gICAgICA3OCxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICA0LFxuICAgICAgMTE4LFxuICAgICAgMjA4LFxuICAgICAgMTQ5LFxuICAgICAgMTExLFxuICAgICAgMTExLFxuICAgICAgMjQ1LFxuICAgICAgMTYzLFxuICAgICAgNzgsXG4gICAgICAxOTgsXG4gICAgICAyMjcsXG4gICAgICAxODAsXG4gICAgICAxMDUsXG4gICAgICAyNTMsXG4gICAgICA3NixcbiAgICAgIDExNixcbiAgICAgIDEyMixcbiAgICAgIDI1MCxcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQRlA3OUdURVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwMTY5OTM0MDo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTcwMTkzODU0MDE0NTA6NDdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUt0c0lzREVPNnNncnNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzbnMxZTIrOFlpUG00akp4c1B6dytGZTdXRHA0OUhzaCsrL09SL2dEQjM4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBKMnBzYS96MHlKZ2VGaFRhVDFZR2pwdXI3Mis5UGVQK2FqTitFeGt6RmF6QTAvSWhza1pXZFhOWVVYOEhQYVptckpYQjQ4Wjcrd0FGajRDQmVJSEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9wUklsa2Mxd0tjVzRKbDdzZVI4b3UzUXByUHpNN1RJZjJHUyt2N1hHWEd4UHM1dkc0UC9OYTlNNlFyeWhjcnJXVkJNaWtLOGNCSzQ4QjZHanNTVkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDE2OTkzNDA6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDM4MzIyMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxXSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFdKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNmNJZEUyZzdhUy85SWpzc2dHdnArVnVPYjJBT2praURabDFVR0JZbFN6Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MjkxNjcyMzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQzNjU4NzQ0NDlcIn0iCn0="  // PUT your SESSION_ID 


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
