const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://obidavid:9i_xBQ-_mIDQvHXg3eurjQ@laventer-15662.8nj.gcp-europe-west1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "WAT";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349018909938";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_07_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjExLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc3LFxuICAgICAgICA5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDkzLFxuICAgICAgICAzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDExLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMixcbiAgICAgICAgMjUwLFxuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUwLFxuICAgICAgICA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMSxcbiAgICAgICAgMzksXG4gICAgICAgIDUwLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgMTE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTExLFxuICAgICAgICA2MixcbiAgICAgICAgODksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU4LFxuICAgICAgICA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc1LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNDhucnN4a3dyVy9YeVJocDZCUHJLSmJFR29MU2tiRmdmem1KOTA1TmNYRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaWxod1BDemFTay1RRVlhSF9XblZmZ1wiLFxuICBcInBob25lSWRcIjogXCI5YjhlN2E0ZS1jYjRiLTRkZjktOGU5My0zNzNlMmNlNzFhM2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICAxNDEsXG4gICAgICAxMTMsXG4gICAgICAxMjEsXG4gICAgICAyNDUsXG4gICAgICAyNixcbiAgICAgIDE0NCxcbiAgICAgIDc0LFxuICAgICAgMTI2LFxuICAgICAgMjQ2LFxuICAgICAgMTAsXG4gICAgICA3NyxcbiAgICAgIDUxLFxuICAgICAgNTksXG4gICAgICAxNTUsXG4gICAgICAxMjcsXG4gICAgICAyMDYsXG4gICAgICAxNDIsXG4gICAgICAxNixcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAxNzYsXG4gICAgICAyOCxcbiAgICAgIDU0LFxuICAgICAgODcsXG4gICAgICAyMDAsXG4gICAgICAxNTMsXG4gICAgICAyMzYsXG4gICAgICAxODgsXG4gICAgICAxNTksXG4gICAgICAxNjMsXG4gICAgICAyMDksXG4gICAgICAzNixcbiAgICAgIDIwMixcbiAgICAgIDU4LFxuICAgICAgMjU0LFxuICAgICAgMTM5LFxuICAgICAgMTIwLFxuICAgICAgMTY5LFxuICAgICAgOTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWk0ySjRROUtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTg5MDk5Mzg6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3MjY5NjQ1NzQ0NTM5MDo3NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPL0M5ZUFFRUl5RnlyVUdHQzRnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk82ZGgyZ0cvS0dBd3kxdlo2dzBCNWUwWHdSWCtXMmJuSjZ4NktHVS9ObE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVXFza3J2bmY1Vll6WFR5OThaNmg4bXhEbmtiRGlrV2ZzTSs2SWNaR3NJTDdQbWRBaVpKTkQ4WTdEbVZZNHNhNXVGbGQzYUQ4ZzhMZVNTZzBzRkhWQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZGtPV2k2OC9zWUhRYnJLYmsyaTk0UVprWmdIR0pEd0Q4TmtBR3hNYzM0VjBhTVNrT2FNQm1YNFdxaXZ5S2pNQnVSQllIMmdUZHlGa0lvRzVJekRrRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxODkwOTkzODo3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTc0ODY0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0daXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLR1ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhMFNpL2NPcTJRbnp6R3pXZGczZDFGMXFnVU9MTGluRWJ6Rm53OUl4V01rPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNzY5OTM5MDMsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDUsOV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "A17_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Davis 😉",
  ownername:process.env.OWNER_NAME|| "Obi David 😏😎",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "B4chCTUbqkYVGAu2RxmJc6A7",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "e5a9cf5650b3cc169345ee96bd5267d8";
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
