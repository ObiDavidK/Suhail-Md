const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://kenebiobi2:gTtB5bWsgtzKAVma@bots.iurrqsb.mongodb.net/?retryWrites=true&w=majority&appName=bots"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://suhail_db_user:ICrqH7aVTnjhyWGUHV9Xy7M7D2uvHAZk@dpg-cq3pob4s1f4s73fjthkg-a.oregon-postgres.render.com/suhail_db"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "WAT";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349018909938";
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
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_27_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDY0LFxuICAgICAgICA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkwLFxuICAgICAgICAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMyxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQsXG4gICAgICAgIDcyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDgzLFxuICAgICAgICAwLFxuICAgICAgICA2NixcbiAgICAgICAgODYsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDkxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYwLFxuICAgICAgICA2NixcbiAgICAgICAgMTUyLFxuICAgICAgICA1NixcbiAgICAgICAgNTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE2LFxuICAgICAgICA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgODYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzLFxuICAgICAgICAzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMzLFxuICAgICAgICA0LFxuICAgICAgICAyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICAyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDUzLFxuICAgICAgICA0MixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQUUZ5bWttWVFtbktucUhxanlTQTRmU3h3V3R3QlJKWkdrQ09TbEg2VVhVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTg5MDk5MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ5NUU1NjZBMTA1RjZDMTU2M0I0MDFBOUM2NjdFQkEwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM1ODg2OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0U01SMkF3R1JTRzNiblRzVWQySzFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQwNTAwZjA4LWRjOWUtNGRlNC04Y2IwLTIzZGU1MTkyNWRlNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjksXG4gICAgICAyNDAsXG4gICAgICAzLFxuICAgICAgMzEsXG4gICAgICAyMDQsXG4gICAgICA3NyxcbiAgICAgIDkwLFxuICAgICAgMTM3LFxuICAgICAgMzYsXG4gICAgICAxNDcsXG4gICAgICAxMTYsXG4gICAgICAyMjMsXG4gICAgICA2MixcbiAgICAgIDE1NSxcbiAgICAgIDE0NCxcbiAgICAgIDEyMSxcbiAgICAgIDg5LFxuICAgICAgNTcsXG4gICAgICA4NSxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICAxNTQsXG4gICAgICAzNSxcbiAgICAgIDE3NCxcbiAgICAgIDI1MyxcbiAgICAgIDIwNSxcbiAgICAgIDE1MCxcbiAgICAgIDE1LFxuICAgICAgMTk1LFxuICAgICAgMTU1LFxuICAgICAgOTEsXG4gICAgICA5NyxcbiAgICAgIDI2LFxuICAgICAgNSxcbiAgICAgIDQyLFxuICAgICAgOTcsXG4gICAgICAyMjIsXG4gICAgICAxMDUsXG4gICAgICAxMDUsXG4gICAgICAxMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPL0M5ZUFFRU15dnFyUUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk82ZGgyZ0cvS0dBd3kxdlo2dzBCNWUwWHdSWCtXMmJuSjZ4NktHVS9ObE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaEJRc3JmRGVWMWxjUDdrMUk5eUYxb3Q3RnpHMUF1WHBBcSttWlBxKzd4azVkck1lYVFIZ3ZwdTV0R2RqWGhKZTNpU201bXNOVGpabEw5SGNYbXBMQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTW9UMU5sS2xwcXdmbW9UclBNMDJiRjFjR0owZVF6dG9waTBRR3E1dnNvUlorQTlMeTNsK1NFQmdVeldoNDZvbTJ2dHYvSXNIRVkwblkwbnhzK0lUZ1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDE4OTA5OTM4OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzI2OTY0NTc0NDUzOTA6NDlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiT+GCps65IETOscqLzrnUgyDwn5iP8J+YjlwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxODkwOTkzODo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzU4ODY0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0dZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLR1MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCWHFzdWJndDhYazQvcTNuY2NsQ2podjZ2ZS8xYnE4NVNOUzUyMWpxMXlzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNzY5OTM5MDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtHVC5qc29uIjogIntcImtleURhdGFcIjpcInBXb21kcWo1Qi9KeXMvWEsvako2cnR4THRHS2hYWm52RnFzblB2NnFKaVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI3Njk5MzkwMyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0dVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZGx3MXBLZHRiK3AxUW5zNFFxY3diRUpNSGZSZk56SFV3bktIUmdna01BST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjc2OTkzOTAzLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLR1YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxK3FmeHVCRTI1SmtvU3lyYjRLd25sWXl5cVRNK2NjbTNRZStick1XN01jPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNzY5OTM5MDMsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtHVy5qc29uIjogIntcImtleURhdGFcIjpcIjZUc21kQmd1WVhsVEZjbVprbFRNQ2xBeXdZZ3FhU3h4aGdEZzZPNXVvMU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI3Njk5MzkwMyxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzNTgyMzYzMjZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLR1guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGVWVuVmVWRzhZSGlHNlI3dWR0SUg5bWk2MDFWYjNad0RiWWhBSnNHdjFNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNzY5OTM5MDMsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0dZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWi9tbW5lQnE2V1hSdXd3OENKaE5IamE5Y2VPbXJqSGFMYkdNTHI2M2l3MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjc2OTkzOTAzLFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDVdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDM1ODg1MzUwNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "A17_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Obi David 😏😎",
  packname: process.env.PACK_NAME || "Davis 😉",
  botname : process.env.BOT_NAME  || "Davis 😉",
  ownername:process.env.OWNER_NAME|| "Obi David 😏😎",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "B4chCTUbqkYVGAu2RxmJc6A7",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-OIbqZQuG1gI6D2iiyjoLT3BlbkFJV1KogkiU2mt3P0M731Hq",
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
