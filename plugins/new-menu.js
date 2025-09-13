const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "Show interactive menu system",
    category: "menu",
    react: "🧾",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        // Get Sri Lanka time
        const date = new Date();
        const timeString = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Asia/Colombo',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }).format(date);

        // Greeting in Sinhala based on Sri Lanka time
        const hourNumber = parseInt(new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Asia/Colombo',
            hour: '2-digit',
            hour12: false
        }).format(date));

        let greeting = "Good Night !";
        if (hourNumber < 12) greeting = "Good Morning !";
        else if (hourNumber < 18) greeting = "Good Afternoon!";

        const senderName = m.pushName || "User";

        // Menu caption with dynamic info
        const menuCaption = `*◄●●━━𝗛𝗜𝗥𝗨 𝗫 𝗠𝗗 𝗩𝟭━━●●►*

*╭─「 ʙᴏᴛ ᴅᴇᴛᴀɪʟꜱ  ──●●►*
*│*🙋 *`User`=* ${senderName}
*│⏰ `Local Time` =* ${timeString}
*│💬 `Greeting`=* ${greeting}
*│*👾 *`Bot`*= *ʜɪʀᴜ x ᴍᴅ ᴠ1*
*│*☎️ *`Owner Nb`*= 94702529242
*│*✒️ *`Prefix`*= . 
*╰──────────●●►*

🔢 *`ʀᴇᴘʟʏ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʙᴇʟᴏᴡ`* 😼

*🔸 1* ❯❯◦ *_DOWNLOAD MENU_*
*🔸 2* ❯❯◦ *_GROUP MENU_*
*🔸 3* ❯❯◦ *_FUN MENU_*
*🔸 4* ❯❯◦ *_OWNER MENU_*
*🔸 5* ❯❯◦ *_AI MENU_*
*🔸 6* ❯❯◦ *_ANIME MENU_*
*🔸 7* ❯❯◦ *_CONVERT MENU_*
*🔸 8* ❯❯◦ *_OTHER MENU_*
*🔸 9* ❯❯◦ *_REACTION MENU_*
*🔸 10* ❯❯◦ *_MAIN MENU_*
*🔸 11* ❯❯◦ *_LOGO MENU_*

 *㋛ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗛𝗶𝗿𝘂 𝗫 𝗠𝗱*`;

        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363418953677198@newsletter',
                newsletterName: '𝗛𝗜𝗥𝗨 𝗫 𝗠𝗗 𝗩𝟭',
                serverMessageId: 143
            }
        };

        // Function to send menu video with timeout
        const sendMenuVideo = async () => {
            try {
                return await conn.sendMessage(
                    from,
                    {
                        video: { url: 'https://files.catbox.moe/2wi6av.mp4' },
                        mimetype: 'video/mp4', // Correct property name
                        ptv: true // Set PTV to true for WhatsApp video message
                    },
                    { quoted: mek }
                );
            } catch (e) {
                console.log('Video send failed, continuing without it:', e);
                throw e; // Let the error propagate to fallback to image
            }
        };

        // Function to send menu image with timeout
        const sendMenuImage = async () => {
            try {
                return await conn.sendMessage(
                    from,
                    {
                        image: { url: 'https://files.catbox.moe/88ec05.jpg' },
                        caption: menuCaption,
                        contextInfo: contextInfo
                    },
                    { quoted: mek }
                );
            } catch (e) {
                console.log('Image send failed, falling back to text:', e);
                return await conn.sendMessage(
                    from,
                    { text: menuCaption, contextInfo: contextInfo },
                    { quoted: mek }
                );
            }
        };

        

        // Send video, then image, then audio sequentially
        let sentMsg;
        try {
            // Send video with 12s timeout
            await Promise.race([
                sendMenuVideo(),
                new Promise((_, reject) => setTimeout(() => reject(new Error('Video send timeout')), 12000))
            ]);

            // Send image with 10s timeout
            sentMsg = await Promise.race([
                sendMenuImage(),
                new Promise((_, reject) => setTimeout(() => reject(new Error('Image send timeout')), 10000))
            ]);

            // Then send audio with 1s delay and 8s timeout
            await Promise.race([
                sendMenuAudio(),
                new Promise((_, reject) => setTimeout(() => reject(new Error('Audio send timeout')), 8000))
            ]);
        } catch (e) {
            console.log('Menu send error:', e);
            if (!sentMsg) {
                sentMsg = await conn.sendMessage(
                    from,
                    { text: menuCaption, contextInfo: contextInfo },
                    { quoted: mek }
                );
            }
        }

        const messageID = sentMsg.key.id;

        // Menu data (complete version)
        const menuData = {
            '1': {
                title: "📥 *Download Menu* 📥",
                content: `*╭──────────●●►*
*│📥 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗟𝗶𝘀𝘁:*
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Facebook`
*│🏮 Use ☛* .Facebook < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Mediafire`
*│🏮 Use ☛* .Mediafire < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Tiktok`
*│🏮 Use ☛* .Tiktok < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Twitter`
*│🏮 Use ☛* .Twitter < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Insta`
*│🏮 Use ☛* .Insta < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Apk`
*│🏮 Use ☛* .Apk < App Name >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Img`
*│🏮 Use ☛* .Img < Query >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Tt2`
*│🏮 Use ☛* .Tt2 < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Pins`
*│🏮 Use ☛* .Pins < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Apk2`
*│🏮 Use ☛* Apk2 < App Name >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Fb2`
*│🏮 Use ☛* .Fb2 < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Pinterest`
*│🏮 Use ☛* .Pinterest < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Spotify`
*│🏮 Use ☛* .Spotify < Query >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Play`
*│🏮 Use ☛* .Play < Song >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Play2`
*│🏮 Use ☛* .Play2 < Song >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Audo`
*│🏮 Use ☛* .Audo < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Video`
*│🏮 Use ☛* .Video < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Video2`
*│🏮 Use ☛* .Video2 < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Ytmp3`
*│🏮 Use ☛* .Ytmp3 < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Ytmp4`
*│🏮 Use ☛* .Ytmp4 < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Song`
*│🏮 Use ☛* .Song < Name >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Darama`
*│🏮 Use ☛* .Darama < Name >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Define`
*│🏮 Use ☛* .Define <>
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Lyric`
*│🏮 Use ☛* .Lyric < Name >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Tiktokstalk`
*│🏮 Use ☛* .Tiktokstalk < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Xstalk`
*│🏮 Use ☛* .Xstalk <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Yts`
*│🏮 Use ☛* .Yts < Name or Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Ytstalk`
*│🏮 Use ☛* .Ytstalk <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Asong`
*│🏮 Use ☛* .Asong <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Ytsdu`
*│🏮 Use ☛* .Ytsdu <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Fb`
*│🏮 Use ☛* .Fb < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Gdrive`
*│🏮 Use ☛* .Gdrive <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Modapk`
*│🏮 Use ☛* .Modapk < App Name >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Pair`
*│🏮 Use ☛* .Pair Number >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Clonebot`
*│🏮 Use ☛* .Clonebot <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Pindl`
*│🏮 Use ☛* .Pindl <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Tts`
*│🏮 Use ☛* .Tts <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Video3`
*│🏮 Use ☛* .Video3 <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Play3`
*│🏮 Use ☛* .Play3 < Name >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Csong1`
*│🏮 Use ☛* .Csong < Name or Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Ytpost`
*│🏮 Use ☛* .Ytpost <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Gitclone`
*│🏮 Use ☛* .Gitclone <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Tiktok2`
*│🏮 Use ☛* .Tiktok2 < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Movie2`
*│🏮 Use ☛* .Movie2 < Name >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Video7`
*│🏮 Use ☛* .Video7 <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Rw`
*│🏮 Use ☛* .Rw <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Convert`
*│🏮 Use ☛* .Convert <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Pmp4`
*│🏮 Use ☛* .Pmp4 <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Tomp3`
*│🏮 Use ☛* .Tomp3 <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Topp3`
*│🏮 Use ☛* .Topp3 <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Toptt`
*│🏮 Use ☛* .Toptt <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Ytsplay`
*│🏮 Use ☛* .Ytsplay < Name >
*╰──────────●●►*

➠ *Total Commands in DOWNLOAD*: 𝟱𝟮

 *㋛ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗛𝗶𝗿𝘂𝗻 𝗩𝗶𝗸𝗮𝘀𝗶𝘁𝗵𝗮`,
                image: true
            },
            '2': {
                title: "👥 *Group Menu* 👥",
                content: `*╭──────────●●►*
*│👥 𝗚𝗿𝗼𝘂𝗽 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗟𝗶𝘀𝘁:*
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Grouplink`
*│🏮 Use ☛* .Grouplink <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Kickall`
*│🏮 Use ☛* .Kickall <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Kickall2`
*│🏮 Use ☛* .Kickall2 <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Kickall3`
*│🏮 Use ☛* Kickall3 <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Add`
*│🏮 Use ☛* .Add < User >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Remove`
*│🏮 Use ☛* .Remove < User >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Kick`
*│🏮 Use ☛* .Kick < User >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Promote`
*│🏮 Use ☛* .Promote <User >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Demote`
*│🏮 Use ☛* .Demote < User >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Dismiss`
*│🏮 Use ☛* Dismiss < User >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Revoke`
*│🏮 Use ☛* .Revoke <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Mute`
*│🏮 Use ☛* .Mute < Time >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Unmute`
*│🏮 Use ☛* .Unmute < Time >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Tag`
*│🏮 Use ☛* .Tag < User >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Hidetag`
*│🏮 Use ☛* .Hidetag < Massage >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Tagall`
*│🏮 Use ☛* .Tagall < Group Msg >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Tagadmins`
*│🏮 Use ☛* .Tagadmins <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Invite`
*│🏮 Use ☛* .Invite <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Check`
*│🏮 Use ☛* .Check <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Requestlist`
*│🏮 Use ☛* .Requestlist <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Accptall`
*│🏮 Use ☛* .Accptall <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Rejectall`
*│🏮 Use ☛* .Rejectall <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Ginfo`
*│🏮 Use ☛* .Ginfo < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Join`
*│🏮 Use ☛* .Join < User >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Poll`
*│🏮 Use ☛*.Poll < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Push`
*│🏮 Use ☛* .Push <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Removemembers`
*│🏮 Use ☛* .Removemembers <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Removeadmins`
*│🏮 Use ☛*.Removeadmins <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Dletelink`
*│🏮 Use ☛* .Dletelink <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Dlete`
*│🏮 Use ☛* .Dlete <  >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Broadcast`
*│🏮 Use ☛* .Broadcast < Url >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `Couplepp`
*│🏮 Use ☛* .Couplepp <  >
*╰──────────●●►*

➠ *Total Commands in GROUP*: 𝟯𝟮

*㋛ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗛𝗶𝗿𝘂𝗻 𝗩𝗶𝗸𝗮𝘀𝗶𝘁𝗵𝗮*`,
                image: true
            },
            '3': {
                title: "😄 *Fun Menu* 😄",
                content: `*╭──────────●●►*
*│😄 𝗙𝘂𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗟𝗶𝘀𝘁*
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `img`
*│🏮 Use ☛* .img < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `ringtone`
*│🏮 Use ☛* .ringtone < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `emix`
*│🏮 Use ☛* .emix < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `compatibility`
*│🏮 Use ☛* .compatibility < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `aura`
*│🏮 Use ☛* .aura < >
╰──────────●●►
*╭──────────●●►*
*│⛩️ Command ☛* `roast`
*│🏮 Use ☛* .roast < >
╰──────────●●►
*╭──────────●●►*
*│⛩️ Command ☛* `8ball`
*│🏮 Use ☛* .8ball < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `compliment`
*│🏮 Use ☛* .compliment < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `lovetest`
*│🏮 Use ☛* .lovetest < >
╰──────────●●►
*╭──────────●●►*
*│⛩️ Command ☛* `emoji`
*│🏮 Use ☛* .emoji < >
╰──────────●●►
*╭──────────●●►*
*│⛩️ Command ☛* `marige`
*│🏮 Use ☛* .marige < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `bacha`
*│🏮 Use ☛* .bacha < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `bachi`
*│🏮 Use ☛* .bachi < >
╰──────────●●►
*╭──────────●●►*
*│⛩️ Command ☛* `ship`
*│🏮 Use ☛* .ship < >
╰──────────●●►
*╭──────────●●►*
*│⛩️ Command ☛* `animegirl`
*│🏮 Use ☛* .animegirl < >
╰──────────●●►
*╭──────────●●►*
*│⛩️ Command ☛* `animegirl1`
*│🏮 Use ☛* .animegirl1 < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `animegirl2`
*│🏮 Use ☛* .animegirl2 < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `animegirl3`
*│🏮 Use ☛* .animegirl3 < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `animegirl4`
*│🏮 Use ☛* .animegirl4 < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `animegirl5`
*│🏮 Use ☛* .animegirl5 < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `dog`
*│🏮 Use ☛* .dog < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `animegirl8`
*│🏮 Use ☛* .animegirl8 < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `poke`
*│🏮 Use ☛* .poke < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `hug1`
*│🏮 Use ☛* .hug1 < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `hold1`
*│🏮 Use ☛* .hold1 < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `hifi1`
*│🏮 Use ☛* .hifi1 < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `waifu1`
*│🏮 Use ☛* .waifu1 < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `naruto1`
*│🏮 Use ☛* .naruto1 < >
*╰──────────●●►*
*╭──────────●●►
*│⛩️ Command ☛* `neko2`
*│🏮 Use ☛* .neko2 < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `foxgirl`
*│🏮 Use ☛* .foxgirl < >
╰──────────●●►
*╭──────────●●►*
*│⛩️ Command ☛* `animenews1`
*│🏮 Use ☛* .animenews1 < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `loli`
*│🏮 Use ☛* .loli < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `hack`
*│🏮 Use ☛* .hack < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `quote`
*│🏮 Use ☛* .quote < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `cry`
*│🏮 Use ☛* .cry < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `cuddle`
*│🏮 Use ☛* .cuddle < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `bully`
*│🏮 Use ☛* .bully < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `hug`
*│🏮 Use ☛* .hug < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `awoo`
*│🏮 Use ☛* .awoo < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `lick`
*│🏮 Use ☛* .lick < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `pat`
*│🏮 Use ☛* .pat < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `smug`
*│🏮 Use ☛* .smug < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `bonk`
*│🏮 Use ☛* .bonk < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `yeet`
*│🏮 Use ☛* .yeet < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `blush`
*│🏮 Use ☛* .blush < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `handhold`
*│🏮 Use ☛* .handhold < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `highfive`
*│🏮 Use ☛* .highfive < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `nom`
*│🏮 Use ☛* .nom < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `wave`
*│🏮 Use ☛* .wave < >
*╰──────────●●►*
╭──────────●●►
*│⛩️ Command ☛* `smile`
*│🏮 Use ☛* .smile < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `wink`
*│🏮 Use ☛* .wink < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `happy`
*│🏮 Use ☛* .happy < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `glomp`
*│🏮 Use ☛* .glomp < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `bite`
*│🏮 Use ☛* .bite < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `cringe`
*│🏮 Use ☛* .cringe < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `dance`
*│🏮 Use ☛* .dance < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `kill`
*│🏮 Use ☛* .kill < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `slap`
*│🏮 Use ☛* .slap < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `kiss`
*│🏮 Use ☛* .kiss < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `roll`
*│🏮 Use ☛* .roll < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `coinflip`
*│🏮 Use ☛* .coinflip < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `flip`
*│🏮 Use ☛* .flip < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `pick`
*│🏮 Use ☛* .pick < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `shapar`
*│🏮 Use ☛* .shapar < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `rate`
*│🏮 Use ☛* .rate < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `joke`
*│🏮 Use ☛* .joke < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `filrt`
*│🏮 Use ☛* .filrt < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `truth`
*│🏮 Use ☛* .truth < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `dare`
*│🏮 Use ☛* .dare < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `fact`
*│🏮 Use ☛* .fact < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `pickupline`
*│🏮 Use ☛* .pickupline < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `character`
*│🏮 Use ☛* .character < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `repeat`
*│🏮 Use ☛* .repeat < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `send`
*│🏮 Use ☛* .send < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `tts2`
*│🏮 Use ☛* .tts2 < >
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `tts3`
*│🏮 Use ☛* .tts3 < >
*╰──────────●●►*
➠ *Total Commands in GROUP*: 𝟳𝟳

 *㋛ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗛𝗶𝗿𝘂𝗻 𝗩𝗶𝗸𝗮𝘀𝗶𝘁𝗵𝗮*`,
                image: true
            },
            '4': {
                title: "👑 *Owner Menu* 👑",
                content: `*╭──────────●●►*
*│👷🏻 𝗢𝘄𝗻𝗲𝗿 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗟𝗶𝘀𝘁*
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `block`
*│🏮 Use ☛* .block @user
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `unblock`
*│🏮 Use ☛* .unblock @user
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `fullpp`
*│🏮 Use ☛* .fullpp [img]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `setpp`
*│🏮 Use ☛* .setpp [img]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `restart`
*│🏮 Use ☛* .restart
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `shutdown`
*│🏮 Use ☛* .shutdown
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `updatecmd`
*│🏮 Use ☛* .updatecmd
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `gjid`
*│🏮 Use ☛* .gjid
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `jid`
*│🏮 Use ☛* .jid @user
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `listcmd`
*│🏮 Use ☛* .listcmd
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `allmenu`
*│🏮 Use ☛* .allmenu
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `forwarded`
*│🏮 Use ☛* .forwarded
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `vv`
*│🏮 Use ☛* .vv
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `vv2`
*│🏮 Use ☛* .vv2
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `chr1`
*│🏮 Use ☛* .chr1
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `chreact`
*│🏮 Use ☛* .chreact
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `admin`
*│🏮 Use ☛* .admin
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `leave`
*│🏮 Use ☛* .leave
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `leave2`
*│🏮 Use ☛* .leave2
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `broadcast`
*│🏮 Use ☛* .broadcast
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `setpp4`
*│🏮 Use ☛* .setpp4
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `setgpp`
*│🏮 Use ☛* .setgpp
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `clearchats`
*│🏮 Use ☛* .clearchats
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `getpp`
*│🏮 Use ☛* .getpp
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `countx`
*│🏮 Use ☛* .countx
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `count`
*│🏮 Use ☛* .count
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `spam`
*│🏮 Use ☛* .spam
*╰──────────●●►*

➠ *Total Commands in OWNER*: 𝟮𝟳

*㋛ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗛𝗶𝗿𝘂𝗻 𝗩𝗶𝗸𝗮𝘀𝗶𝘁𝗵𝗮*`,
                image: true
            },
            '5': {
                title: "🤖 *AI Menu* 🤖",
                content: `*╭──────────●●►*
*│🤖 𝗔𝗜 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗟𝗶𝘀𝘁*
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `ai`
*│🏮 Use ☛* .ai [query]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `gpt4`
*│🏮 Use ☛* .gpt4 [query]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `deepseek`
*│🏮 Use ☛* .deepseek [query]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `aiimg`
*│🏮 Use ☛* .aiimg [text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `aiimg2`
*│🏮 Use ☛* .aiimg2 [text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `aiimg3`
*│🏮 Use ☛* .aiimg3 [text]
*╰──────────●●►*

➠ *Total Commands in AI*: 𝟲  

*㋛ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗛𝗶𝗿𝘂𝗻 𝗩𝗶𝗸𝗮𝘀𝗶𝘁𝗵𝗮*`,
                image: true
            },
            '6': {
                title: "🎎 *Anime Menu* 🎎",
                content: `*╭──────────●●►*
*│🌸 𝗔𝗻𝗶𝗺𝗲 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗟𝗶𝘀𝘁*
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `girl`
*│🏮 Use ☛* .girl
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `waifu`
*│🏮 Use ☛* .waifu
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `neko`
*│🏮 Use ☛* .neko
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `megumin`
*│🏮 Use ☛* .megumin
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `maid`
*│🏮 Use ☛* .maid
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `awoo`
*│🏮 Use ☛* .awoo
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `fack`
*│🏮 Use ☛* .fack
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `dog`
*│🏮 Use ☛* .dog
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `animegirl1`
*│🏮 Use ☛* .animegirl1
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `animegirl2`
*│🏮 Use ☛* .animegirl2
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `animegirl3`
*│🏮 Use ☛* .animegirl3
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `animegirl4`
*│🏮 Use ☛* .animegirl4
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `animegirl5`
*│🏮 Use ☛* .animegirl5
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `anime1`
*│🏮 Use ☛* .anime1
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `anime2`
*│🏮 Use ☛* .anime2
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `anime3`
*│🏮 Use ☛* .anime3
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `anime4`
*│🏮 Use ☛* .anime4
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `anime5`
*│🏮 Use ☛* .anime5
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `foxgirl`
*│🏮 Use ☛* .foxgirl
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `naruto`
*│🏮 Use ☛* .naruto
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `loli`
*│🏮 Use ☛* .loli
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `garl`
*│🏮 Use ☛* .garl
*╰──────────●●►*

➠ *Total Commands in ANIME*: 𝟮𝟬  

*㋛ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗛𝗶𝗿𝘂𝗻 𝗩𝗶𝗸𝗮𝘀𝗶𝘁𝗵𝗮*`,
                image: true
            },
            '7': {
                title: "🔄 *Convert Menu* 🔄",
                content: `*╭──────────●●►*
*│🔄 𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗟𝗶𝘀𝘁*
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `sticker`
*│🏮 Use ☛* .sticker [img]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `sticker2`
*│🏮 Use ☛* .sticker2 [img]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `emojimix`
*│🏮 Use ☛* .emojimix
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `take`
*│🏮 Use ☛* .take [name,text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `tomp3`
*│🏮 Use ☛* .tomp3 [video]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `fancy`
*│🏮 Use ☛* .fancy [text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `tts`
*│🏮 Use ☛* .tts [text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `trt`
*│🏮 Use ☛* .trt [text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `base64`
*│🏮 Use ☛* .base64 [text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `unbase64`
*│🏮 Use ☛* .unbase64 [text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `npm`
*│🏮 Use ☛* .npm
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `npm2`
*│🏮 Use ☛* .npm2
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `tiny`
*│🏮 Use ☛* .tiny
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `attp`
*│🏮 Use ☛* .attp
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `readmore`
*│🏮 Use ☛* .readmore
*╰──────────●●►*

➠ *Total Commands in CONVERT*: 𝟭𝟱

*㋛ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗛𝗶𝗿𝘂𝗻 𝗩𝗶𝗸𝗮𝘀𝗶𝘁𝗵𝗮*`,
                image: true
            },
            '8': {
                title: "📌 *Other Menu* 📌",
                content: `*╭──────────●●►*
*│✨ 𝗢𝘁𝗵𝗲𝗿 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗟𝗶𝘀𝘁*
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `timenow`
*│🏮 Use ☛* .timenow
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `date`
*│🏮 Use ☛* .date
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `count`
*│🏮 Use ☛* .count
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `calculate`
*│🏮 Use ☛* .calculate
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `countx`
*│🏮 Use ☛* .countx
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `flip`
*│🏮 Use ☛* .flip
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `coinflip`
*│🏮 Use ☛* .coinflip
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `rcolor`
*│🏮 Use ☛* .rcolor
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `roll`
*│🏮 Use ☛* .roll
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `fact`
*│🏮 Use ☛* .fact
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `define`
*│🏮 Use ☛* .define [word]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `news`
*│🏮 Use ☛* .news
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `movie`
*│🏮 Use ☛* .movie [name]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `weather`
*│🏮 Use ☛* .weather [city]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `channelreact`
*│🏮 Use ☛* .channelreact
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `gpass`
*│🏮 Use ☛* .gpass
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `anime1-5`
*│🏮 Use ☛* .anime1 
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `srepo`
*│🏮 Use ☛* .srepo
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `trt`
*│🏮 Use ☛* .trt [text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `update`
*│🏮 Use ☛* .update
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `antidelete`
*│🏮 Use ☛* .antidelete
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `vv3`
*│🏮 Use ☛* .vv3
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `follow`
*│🏮 Use ☛* .follow
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `version`
*│🏮 Use ☛* .version
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `owner1`
*│🏮 Use ☛* .owner1
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `repo`
*│🏮 Use ☛* .repo
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `countryinfo`
*│🏮 Use ☛* .countryinfo [name]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `cjid1`
*│🏮 Use ☛* .cjid1
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `jid`
*│🏮 Use ☛* .jid @user
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `imgscan`
*│🏮 Use ☛* .imgscan [img]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `caption`
*│🏮 Use ☛* .caption
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `send`
*│🏮 Use ☛* .send
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `binary`
*│🏮 Use ☛* .binary [text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `dbinary`
*│🏮 Use ☛* .dbinary [text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `base64`
*│🏮 Use ☛* .base64 [text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `unbase64`
*│🏮 Use ☛* .unbase64 [text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `urlencod`
*│🏮 Use ☛* .urlencod [text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `urldecode`
*│🏮 Use ☛* .urldecode [text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `timenow2`
*│🏮 Use ☛* .timenow2
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `person`
*│🏮 Use ☛* .person
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `profile`
*│🏮 Use ☛* .profile
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `msg`
*│🏮 Use ☛* .msg
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `report`
*│🏮 Use ☛* .report
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `tourl`
*│🏮 Use ☛* .tourl [file]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `wstalk`
*│🏮 Use ☛* .wstalk [num]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `emotions`
*│🏮 Use ☛* .happy 
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `fancy`
*│🏮 Use ☛* .fancy [text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `spam`
*│🏮 Use ☛* .spam
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `spam3`
*│🏮 Use ☛* .spam3
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `statue`
*│🏮 Use ☛* .statue
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `tempnum`
*│🏮 Use ☛* .tempnum
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `templist`
*│🏮 Use ☛* .templist
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `otpbox`
*│🏮 Use ☛* .otpbox
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `ad`
*│🏮 Use ☛* .ad
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `adedit`
*│🏮 Use ☛* .adedit
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `blur`
*│🏮 Use ☛* .blur
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `grey`
*│🏮 Use ☛* .grey
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `invert`
*│🏮 Use ☛* .invert
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `gail`
*│🏮 Use ☛* .gail
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `imgjoke`
*│🏮 Use ☛* .imgjoke
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `nokia`
*│🏮 Use ☛* .nokia
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `wanted`
*│🏮 Use ☛* .wanted
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `rmbg`
*│🏮 Use ☛* .rmbg [img]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `film`
*│🏮 Use ☛* .film [name]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `movie2`
*│🏮 Use ☛* .movie2 [name]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `video7`
*│🏮 Use ☛* .video7
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `rw`
*│🏮 Use ☛* .rw
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `take`
*│🏮 Use ☛* .take [name,text]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `sticker`
*│🏮 Use ☛* .sticker [img]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `vsticker`
*│🏮 Use ☛* .vsticker [video]
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `tsticker`
*│🏮 Use ☛* .tsticker [text]
*╰──────────●●►*

➠ *Total Commands in OTHER*: 𝟴𝟬  

*㋛ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗛𝗶𝗿𝘂𝗻 𝗩𝗶𝗸𝗮𝘀𝗶𝘁𝗵𝗮*`,
                image: true
            },
            '9': {
                title: "💞 *Reactions Menu* 💞",
                content: `*╭──────────●●►*
*│💞 𝗥𝗲𝗮𝗰𝘁𝗶𝗼𝗻𝘀 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗟𝗶𝘀𝘁*
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `cuddle`
*│🏮 Use ☛* .cuddle <user>
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `hug`
*│🏮 Use ☛* .hug <user>
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `kiss`
*│🏮 Use ☛* .kiss <user>
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `lick`
*│🏮 Use ☛* .lick <user>
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `pat`
*│🏮 Use ☛* .pat <user>
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `bully`
*│🏮 Use ☛* .bully <user>
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `bonk`
*│🏮 Use ☛* .bonk <user>
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `yeet`
*│🏮 Use ☛* .yeet <user>
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `slap`
*│🏮 Use ☛* .slap <user>
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `kill`
*│🏮 Use ☛* .kill <user>
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `blush`
*│🏮 Use ☛* .blush <user>
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `smile`
*│🏮 Use ☛* .smile <user>
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `happy`
*│🏮 Use ☛* .happy <user>
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `wink`
*│🏮 Use ☛* .wink <user>
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `poke`
*│🏮 Use ☛* .poke <user>
*╰──────────●●►*

➠ *Total Commands in REACTIONS*: 𝟭𝟱

*㋛ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗛𝗶𝗿𝘂𝗻 𝗩𝗶𝗸𝗮𝘀𝗶𝘁𝗵𝗮*`,
                image: true
            },
            '10': {
                title: "🏠 *Main Menu* 🏠",
                content: `*╭──────────●●►*
*│📌 𝗠𝗮𝗶𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗟𝗶𝘀𝘁*
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `ping`
*│🏮 Use ☛* .ping
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `ping2`
*│🏮 Use ☛* .ping2
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `ping3`
*│🏮 Use ☛* .ping3
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `ping4`
*│🏮 Use ☛* .ping4
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `live`
*│🏮 Use ☛* .live
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `alive`
*│🏮 Use ☛* .alive
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `runtime`
*│🏮 Use ☛* .runtime
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `uptime`
*│🏮 Use ☛* .uptime
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `repo`
*│🏮 Use ☛* .repo
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `owner`
*│🏮 Use ☛* .owner
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `menu`
*│🏮 Use ☛* .menu
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `menu2`
*│🏮 Use ☛* .menu2
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `restart`
*│🏮 Use ☛* .restart
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `xvideo`
*│🏮 Use ☛* .xvideo
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `online`
*│🏮 Use ☛* .online
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `anime`
*│🏮 Use ☛* .anime
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `fluxai`
*│🏮 Use ☛* .fluxai
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `stablediffusion`
*│🏮 Use ☛* .stablediffusion
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `stabilityai`
*│🏮 Use ☛* .stabilityai
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `fetch`
*│🏮 Use ☛* .fetch
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `aivoice`
*│🏮 Use ☛* .aivoice
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `mp4`
*│🏮 Use ☛* .mp4
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `song2`
*│🏮 Use ☛* .song2
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `sndsong`
*│🏮 Use ☛* .sndsong
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `stopsong`
*│🏮 Use ☛* .stopsong
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `song6`
*│🏮 Use ☛* .song6
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `yts4`
*│🏮 Use ☛* .yts4
*╰──────────●●►*

➠ *Total Commands in MAIN*: 𝟮𝟱

*㋛ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗛𝗶𝗿𝘂𝗻 𝗩𝗶𝗸𝗮𝘀𝗶𝘁𝗵𝗮*`,
                image: true
            },
            '11': {
                title: "🔳 *Logo Menu* 🔳",
                content: `*╭──────────●●►*
*│🔳 𝗟𝗼𝗴𝗼 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗟𝗶𝘀𝘁*
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `3dcomic`
*│🏮 Use ☛* .3dcomic
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `dragonball`
*│🏮 Use ☛* .dragonball
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `deadpool`
*│🏮 Use ☛* .deadpool
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `blackpink`
*│🏮 Use ☛* .blackpink
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `neonlight`
*│🏮 Use ☛* .neonlight
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `cat`
*│🏮 Use ☛* .cat
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `sadgirl`
*│🏮 Use ☛* .sadgirl
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `pornhub`
*│🏮 Use ☛* .pornhub
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `naruto`
*│🏮 Use ☛* .naruto
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `thor`
*│🏮 Use ☛* .thor
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `america`
*│🏮 Use ☛* .america
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `eraser`
*│🏮 Use ☛* .eraser
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `3dpaper`
*│🏮 Use ☛* .3dpaper
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `futuristic`
*│🏮 Use ☛* .futuristic
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `clouds`
*│🏮 Use ☛* .clouds
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `sans`
*│🏮 Use ☛* .sans
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `galaxy`
*│🏮 Use ☛* .galaxy
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `leaf`
*│🏮 Use ☛* .leaf
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `sunset`
*│🏮 Use ☛* .sunset
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `nigeria`
*│🏮 Use ☛* .nigeria
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `devilwings`
*│🏮 Use ☛* .devilwings
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `hacker`
*│🏮 Use ☛* .hacker
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `boom`
*│🏮 Use ☛* .boom
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `luxury`
*│🏮 Use ☛* .luxury
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `zodiac`
*│🏮 Use ☛* .zodiac
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `angelwings`
*│🏮 Use ☛* .angelwings
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `bulb`
*│🏮 Use ☛* .bulb
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `tatoo`
*│🏮 Use ☛* .tatoo
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `castle`
*│🏮 Use ☛* .castle
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `forzen`
*│🏮 Use ☛* .forzen
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `paint`
*│🏮 Use ☛* .paint
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `birthday`
*│🏮 Use ☛* .birthday
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `typography`
*│🏮 Use ☛* .typography
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `bear`
*│🏮 Use ☛* .bear
*╰──────────●●►*
*╭──────────●●►*
*│⛩️ Command ☛* `valorant`
*│🏮 Use ☛* .valorant
*╰──────────●●►*

➠ *Total Commands in LOGO*: 𝟯𝟲

*㋛ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗛𝗶𝗿𝘂𝗻 𝗩𝗶𝗸𝗮𝘀𝗶𝘁𝗵𝗮*`,
                image: true
            }
            
        };

        // Message handler with improved error handling
        const handler = async (msgData) => {
            try {
                const receivedMsg = msgData.messages[0];
                if (!receivedMsg?.message || !receivedMsg.key?.remoteJid) return;

                const isReplyToMenu = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageID;
                
                if (isReplyToMenu) {
                    const receivedText = receivedMsg.message.conversation || 
                                      receivedMsg.message.extendedTextMessage?.text;
                    const senderID = receivedMsg.key.remoteJid;

                    if (menuData[receivedText]) {
                        const selectedMenu = menuData[receivedText];
                        
                        try {
                            if (selectedMenu.image) {
                                await conn.sendMessage(
                                    senderID,
                                    {
                                        image: { url: 'https://files.catbox.moe/88ec05.jpg' },
                                        caption: selectedMenu.content,
                                        contextInfo: contextInfo
                                    },
                                    { quoted: receivedMsg }
                                );
                            } else {
                                await conn.sendMessage(
                                    senderID,
                                    { text: selectedMenu.content, contextInfo: contextInfo },
                                    { quoted: receivedMsg }
                                );
                            }

                            await conn.sendMessage(senderID, {
                                react: { text: '✅', key: receivedMsg.key }
                            });

                        } catch (e) {
                            console.log('Menu reply error:', e);
                            await conn.sendMessage(
                                senderID,
                                { text: selectedMenu.content, contextInfo: contextInfo },
                                { quoted: receivedMsg }
                            );
                        }

                    } else {
                        await conn.sendMessage(
                            senderID,
                            {
                                text: `❌ *Invalid Option!* ❌\n\nPlease reply with a number between 0-10 to select a menu.\n\n*Example:* Reply with "1" for Group Menu\n\n>*㋛ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗛𝗶𝗿𝘂 𝗫 𝗠𝗱 `,
                                contextInfo: contextInfo
                            },
                            { quoted: receivedMsg }
                        );
                    }
                }
            } catch (e) {
                console.log('Handler error:', e);
            }
        };

        // Add listener
        conn.ev.on("messages.upsert", handler);

        // Remove listener after 5 minutes
        setTimeout(() => {
            conn.ev.off("messages.upsert", handler);
        }, 300000);

    } catch (e) {
        console.error('Menu Error:', e);
        try {
            await conn.sendMessage(
                from,
                { text: `❌ Menu system is currently busy. Please try again later.\n\n> *㋛ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗛𝗶𝗿𝘂 𝗫 𝗠𝗱*` },
                { quoted: mek }
            );
        } catch () {
            console.log('Final error handling failed:', finalError);
        }
    }
});
