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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_05_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMwLFxuICAgICAgICA5MixcbiAgICAgICAgMTg2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1LFxuICAgICAgICA2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDY4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjksXG4gICAgICAgIDQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICA1MixcbiAgICAgICAgODEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1LFxuICAgICAgICAyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNixcbiAgICAgICAgMTA2LFxuICAgICAgICA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDksXG4gICAgICAgIDkyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDgzLFxuICAgICAgICA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhHWmh2Y0doOStBYis1K05ieTlnN2ovd20yclpRRWpDV3ZTeXExNXkzQWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NzM5MTMzOTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFFOUM2MEIxMTZFQTkzNjQyNUJCQTg1RDBDOUQ4RkZBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDcxMTEyOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzczOTEzMzk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMDUyN0NBREJBMDQ0OUMzOTcwNTlENkI2QzAzN0ZGRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA3MTExMjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYVZickRSdDVSVFN2MHdKYlk1SkdJZ1wiLFxuICBcInBob25lSWRcIjogXCJjY2MxZDRiMS0yZDRiLTRkMWItODg4Zi03ZjdmMDkyMDFhYzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMzgsXG4gICAgICA4NSxcbiAgICAgIDE5MixcbiAgICAgIDE5MyxcbiAgICAgIDE2NyxcbiAgICAgIDkzLFxuICAgICAgMTg0LFxuICAgICAgNDIsXG4gICAgICAyNDAsXG4gICAgICAxNjgsXG4gICAgICAyMjAsXG4gICAgICA0NCxcbiAgICAgIDE2NCxcbiAgICAgIDMyLFxuICAgICAgMTYyLFxuICAgICAgMzAsXG4gICAgICAxMTcsXG4gICAgICAxMzksXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgMTgwLFxuICAgICAgMjI2LFxuICAgICAgNzgsXG4gICAgICAyMDQsXG4gICAgICAxMjcsXG4gICAgICAyMTYsXG4gICAgICAyMzgsXG4gICAgICAxMTQsXG4gICAgICAxMSxcbiAgICAgIDE3MSxcbiAgICAgIDIyMCxcbiAgICAgIDc1LFxuICAgICAgOTIsXG4gICAgICAxMzcsXG4gICAgICA5OSxcbiAgICAgIDEzNyxcbiAgICAgIDQzLFxuICAgICAgMjUsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1FDVEJFWkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzczOTEzMzk0Ojg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1ODcyOTQ0OTk3NTg5Mjo4NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJUaGF2aXlhXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzZ1dWVnQkVOQ2NvcmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqbE13ck44cWpnVnNVK21FVCtNc3JCUnowVlAvWnRsTDF5d2laMVhQTGxNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlzSDJ2dWdBZFRjbmp6QS8vM2dSWmI4MDU1SXRDQ0NIcmdrcHRGZzJzTDRkVzFVZDMrdTFmekd1b1BxdGlld0kyaStpdFhwQXEyQXh2cjNPWUpocER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjA3NUVvYUVZbWtFZTZSN1ByZk8yd0Q3MzlvaXcrTTh1SE5PK0Zaam1KRFRjclpnTnc2cVVjSFluRnNlUzJNMlBNUkdvTW5td0hyOVlKdklBM0NuNUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzczOTEzMzk0Ojg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA3MTExMjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOTHBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5McC5qc29uIjogIntcImtleURhdGFcIjpcIjBRd0dwUHdRdlhCRUx4dmhxNU5uZ0VQL1FuUFBwN0V2clQ1K29IYUtwQWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDg3NDc5MDg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA3MTExMjU2ODFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Thaviya",


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
