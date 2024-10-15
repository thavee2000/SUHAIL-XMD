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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94773913394";




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
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_24_10_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDU0LFxuICAgICAgICA5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDY2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzksXG4gICAgICAgIDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1LFxuICAgICAgICA0MixcbiAgICAgICAgMjM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM4LFxuICAgICAgICAzNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE2LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDg5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgNixcbiAgICAgICAgMTg0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MixcbiAgICAgICAgMTQwLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDYzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1LFxuICAgICAgICA0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDY5LFxuICAgICAgICA1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDgzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyamlBUXJhcEJUbXNYaUpaK2JuZm8vWWRtaEUvbjVubDZDWmxRWlQyS3pzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmS3kxLVotMVNnLXdsVzJZZGZJYWN3XCIsXG4gIFwicGhvbmVJZFwiOiBcImIzMmUyYzQ1LWRkZTQtNGIxMy05MTcwLTUyZjgzNTBiNWI1Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICA1MSxcbiAgICAgIDU4LFxuICAgICAgMjQwLFxuICAgICAgNTcsXG4gICAgICA5MixcbiAgICAgIDE0MSxcbiAgICAgIDY2LFxuICAgICAgOCxcbiAgICAgIDEyLFxuICAgICAgMjQ1LFxuICAgICAgMTYyLFxuICAgICAgMjAzLFxuICAgICAgMTgyLFxuICAgICAgMjM4LFxuICAgICAgNjYsXG4gICAgICA0MyxcbiAgICAgIDIxOCxcbiAgICAgIDE0MyxcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDQsXG4gICAgICAyNDIsXG4gICAgICAxNzYsXG4gICAgICAyNDIsXG4gICAgICA4NSxcbiAgICAgIDgsXG4gICAgICAxNDIsXG4gICAgICAyNDEsXG4gICAgICA5MCxcbiAgICAgIDE3MCxcbiAgICAgIDM0LFxuICAgICAgMTY4LFxuICAgICAgMTYsXG4gICAgICAxNzksXG4gICAgICA1NSxcbiAgICAgIDIyMSxcbiAgICAgIDIyNSxcbiAgICAgIDE1OCxcbiAgICAgIDUyLFxuICAgICAgNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFlIWkdHOUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzczOTEzMzk0Ojc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1ODcyOTQ0OTk3NTg5Mjo3NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOcVc2ZHdORUluQW1yZ0dHQklnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlpb1NQay81dUVJRWpQZGcyWTJYY0hBclEySTc5SEptdEE0SC8vYVZOeE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVFJ6QlJLWmZOMEEzOTlPMys3blZyNFNFUWNBQkFWRVVrbWtsVytzNml6SUNmY3p1NFdwR3BpOHFNVmV2YUV3VkwyNGRkV1F2dEJSVzhzVm02Ui8xRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY0hSTi9YWVJtQU91bTFjNDdFSmJmWXdsSERGZHhJWDEvVnlsQWRsVlNnZ2RBa1RNMS8vUkdKdEwxYTVVbmpEZStJdFhRbHhXV0VwMjFnTW1Va0NWaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzM5MTMzOTQ6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg0ODc0MzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQRzRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBHNC5qc29uIjogIntcImtleURhdGFcIjpcIlVXVGhQSzlQM0FxK0JUOFg3ZkgyaytCVzdjMm9hSjQvbU8vRExNZkdxZUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzY4NDMyMjEzOCxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzEsNCwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgzMDc4NzUwMDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
