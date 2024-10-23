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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_34_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjksXG4gICAgICAgIDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMjUzLFxuICAgICAgICA0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzksXG4gICAgICAgIDc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIxLFxuICAgICAgICA4NixcbiAgICAgICAgMTIwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDc2LFxuICAgICAgICA2MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxLFxuICAgICAgICAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODksXG4gICAgICAgIDMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDUwLFxuICAgICAgICA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRWhaVFY2NFFxc0w2ZnhJUUUraHl3eHZOQ0NvMitjR0pqWlRTdjRnTFlpZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3MzkxMzM5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDQxRTNGREZBMUU3MDhFQ0M4QzRDQzNGN0NDODg3QjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NjcyNDUxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NzM5MTMzOTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhEQzVGQ0QzMDNGRjNGRjc2NDU3MDlFQTAyMkIzMjkwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTY3MjQ1MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzczOTEzMzk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4OUJGNDVGOUUxNjA0MzVFMDlBQ0Q0OEREMEYwNDIxMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk2NzI0NTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3MzkxMzM5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTcwM0M1RURFMzIxRDI5N0MyNDNGN0VGNkY0Njk1OUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NjcyNDUzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBSUDhBVjVRVGYtQWNxcE4xVDM2YlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDA1NWM2ZjEtZTM3MS00YjNjLWJjODEtYjViZDg2NGUyMWJmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgMTAwLFxuICAgICAgMTIyLFxuICAgICAgNTksXG4gICAgICAxLFxuICAgICAgMTE2LFxuICAgICAgMjgsXG4gICAgICAxODQsXG4gICAgICA0NixcbiAgICAgIDI0LFxuICAgICAgMTAsXG4gICAgICA3LFxuICAgICAgNTQsXG4gICAgICAxNjgsXG4gICAgICAyNDEsXG4gICAgICAyMjAsXG4gICAgICAxNixcbiAgICAgIDkwLFxuICAgICAgOTksXG4gICAgICAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM5LFxuICAgICAgMjEyLFxuICAgICAgOSxcbiAgICAgIDc0LFxuICAgICAgMzIsXG4gICAgICAyMDgsXG4gICAgICAxMjEsXG4gICAgICAyMzksXG4gICAgICAyMTQsXG4gICAgICA0OCxcbiAgICAgIDQ2LFxuICAgICAgNTYsXG4gICAgICA1OSxcbiAgICAgIDE0OCxcbiAgICAgIDE4MyxcbiAgICAgIDgsXG4gICAgICAyNTUsXG4gICAgICAxMTAsXG4gICAgICAxMDgsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS05UVFdMRExcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzczOTEzMzk0OjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1ODcyOTQ0OTk3NTg5Mjo4M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJUaGF2aXlhXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzJ1dWVnQkVQenA0cmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqbE13ck44cWpnVnNVK21FVCtNc3JCUnowVlAvWnRsTDF5d2laMVhQTGxNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInA1eDJnOUZvMnNRMEs2OGYwQSsvUzliRDR0b2xtUWU1K3ZKM1FydjBFVHI0K0RFQVFaUUxVaFhERHZPbkdXNm4yWkhYUXV4VEdtaklueE8yY3NvQ0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpFa2JCWk5POGZsNUYrejMyYXl0RzJpeU1zbm91VUFOb1ozdVNBeXVkZ21RVHMyWC9Ia2hXMzcrbjhMWFpmZFh4bUtnZ3RhUVZpR3o2REFvL2Q0b2pBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzczOTEzMzk0OjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk2NzI0NDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGZ3NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZncy5qc29uIjogIntcImtleURhdGFcIjpcImRlMWsvWTdUNTdhWGZEY0g3bmtvcktONkRqaGxLZGNrb0t5amFleGYrQ0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDg3NDc5MDg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk2NzI0NTAwODlcIn0iCn0="  // PUT your SESSION_ID 


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
