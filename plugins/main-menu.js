const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const { runtime } = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu2",
    alias: ["allmenu", "fullmenu ,´´list"],
    use: '.menu2',
    desc: "Show all bot commands",
    category: "menu",
    react: "📄",
    filename: __filename
},
    async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
        try {
            let dec = `*𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨*

*╭──────────●●►*
*│⛩️ Command ☛* `facebook`
*│🏮 Use ☛* .facebook <link>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `mediafire`
*│🏮 Use ☛* .mediafire <link>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `tiktok`
*│🏮 Use ☛* .tiktok <link>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `twitter`
*│🏮 Use ☛* .twitter <link>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `insta`
*│🏮 Use ☛* .insta <link>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `apk`
*│🏮 Use ☛* .apk <link>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `img`
*│🏮 Use ☛* .img <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `tt2`
*│🏮 Use ☛* .tt2 <link>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `pins`
*│🏮 Use ☛* .pins <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `apk2`
*│🏮 Use ☛* .apk2 <link>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `fb2`
*│🏮 Use ☛* .fb2 <link>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `pinterest`
*│🏮 Use ☛* .pinterest <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `spotify`
*│🏮 Use ☛* .spotify <song>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `play`
*│🏮 Use ☛* .play <song>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `play2`
*│🏮 Use ☛* .play2 <song>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `audio`
*│🏮 Use ☛* .audio <link>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `video`
*│🏮 Use ☛* .video <link>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `video2`
*│🏮 Use ☛* .video2 <link>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `ytmp3`
*│🏮 Use ☛* .ytmp3 <link>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `ytmp4`
*│🏮 Use ☛* .ytmp4 <link>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `song`
*│🏮 Use ☛* .song <name>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `darama`
*│🏮 Use ☛* .darama <name>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `gdrive`
*│🏮 Use ☛* .gdrive <link>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `ssweb`
*│🏮 Use ☛* .ssweb <url>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `tiks`
*│🏮 Use ☛* .tiks <link>
*╰──────────●●►*

*𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨* 

*╭──────────●●►*
*│⛩️ Command ☛* `grouplink`
*│🏮 Use ☛* .grouplink
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `kickall`
*│🏮 Use ☛* .kickall
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `kickall2`
*│🏮 Use ☛* .kickall2
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `kickall3`
*│🏮 Use ☛* .kickall3
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `add`
*│🏮 Use ☛* .add <number>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `remove`
*│🏮 Use ☛* .remove <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `kick`
*│🏮 Use ☛* .kick <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `promote`
*│🏮 Use ☛* .promote <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `demote`
*│🏮 Use ☛* .demote <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `dismiss`
*│🏮 Use ☛* .dismiss <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `revoke`
*│🏮 Use ☛* .revoke
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `setgoodbye`
*│🏮 Use ☛* .setgoodbye <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `setwelcome`
*│🏮 Use ☛* .setwelcome <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `delete`
*│🏮 Use ☛* .delete
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `getpic`
*│🏮 Use ☛* .getpic <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `ginfo`
*│🏮 Use ☛* .ginfo
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `disappear on`
*│🏮 Use ☛* .disappear on
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `disappear off`
*│🏮 Use ☛* .disappear off
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `disappear 7D`
*│🏮 Use ☛* .disappear 7D
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `disappear 24H`
*│🏮 Use ☛* .disappear 24H
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `allreq`
*│🏮 Use ☛* .allreq
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `updategname`
*│🏮 Use ☛* .updategname <name>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `updategdesc`
*│🏮 Use ☛* .updategdesc <desc>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `joinrequests`
*│🏮 Use ☛* .joinrequests
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `senddm`
*│🏮 Use ☛* .senddm <@tag> <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `nikal`
*│🏮 Use ☛* .nikal
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `mute`
*│🏮 Use ☛* .mute
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `unmute`
*│🏮 Use ☛* .unmute
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `lockgc`
*│🏮 Use ☛* .lockgc
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `unlockgc`
*│🏮 Use ☛* .unlockgc
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `invite`
*│🏮 Use ☛* .invite <number>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `tag`
*│🏮 Use ☛* .tag <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `hidetag`
*│🏮 Use ☛* .hidetag <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `tagall`
*│🏮 Use ☛* .tagall <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `tagadmins`
*│🏮 Use ☛* .tagadmins <text>
*╰──────────●●►*

*𝗥𝗘𝗔𝗖𝗧𝗜𝗢𝗡 𝗠𝗘𝗡𝗨*

*╭──────────●●►*
*│⛩️ Command ☛* `bully`
*│🏮 Use ☛* .bully <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `cuddle`
*│🏮 Use ☛* .cuddle <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `cry`
*│🏮 Use ☛* .cry <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `hug`
*│🏮 Use ☛* .hug <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `awoo`
*│🏮 Use ☛* .awoo <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `kiss`
*│🏮 Use ☛* .kiss <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `lick`
*│🏮 Use ☛* .lick <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `pat`
*│🏮 Use ☛* .pat <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `smug`
*│🏮 Use ☛* .smug <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `bonk`
*│🏮 Use ☛* .bonk <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `yeet`
*│🏮 Use ☛* .yeet <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `blush`
*│🏮 Use ☛* .blush <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `smile`
*│🏮 Use ☛* .smile <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `wave`
*│🏮 Use ☛* .wave <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `highfive`
*│🏮 Use ☛* .highfive <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `handhold`
*│🏮 Use ☛* .handhold <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `nom`
*│🏮 Use ☛* .nom <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `bite`
*│🏮 Use ☛* .bite <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `glomp`
*│🏮 Use ☛* .glomp <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `slap`
*│🏮 Use ☛* .slap <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `kill`
*│🏮 Use ☛* .kill <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `happy`
*│🏮 Use ☛* .happy <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `wink`
*│🏮 Use ☛* .wink <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `poke`
*│🏮 Use ☛* .poke <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `dance`
*│🏮 Use ☛* .dance <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `cringe`
*│🏮 Use ☛* .cringe <@tag>
*╰──────────●●►*

*𝗟𝗢𝗚𝗢 𝗠𝗔𝗥𝗞𝗘𝗥 𝗠𝗘𝗡𝗨*

*╭──────────●●►*
*│⛩️ Command ☛* `neonlight`
*│🏮 Use ☛* .neonlight <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `blackpink`
*│🏮 Use ☛* .blackpink <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `dragonball`
*│🏮 Use ☛* .dragonball <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `3dcomic`
*│🏮 Use ☛* .3dcomic <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `america`
*│🏮 Use ☛* .america <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `naruto`
*│🏮 Use ☛* .naruto <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `sadgirl`
*│🏮 Use ☛* .sadgirl <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `clouds`
*│🏮 Use ☛* .clouds <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `futuristic`
*│🏮 Use ☛* .futuristic <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `3dpaper`
*│🏮 Use ☛* .3dpaper <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `eraser`
*│🏮 Use ☛* .eraser <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `sunset`
*│🏮 Use ☛* .sunset <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `leaf`
*│🏮 Use ☛* .leaf <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `galaxy`
*│🏮 Use ☛* .galaxy <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `sans`
*│🏮 Use ☛* .sans <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `boom`
*│🏮 Use ☛* .boom <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `hacker`
*│🏮 Use ☛* .hacker <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `devilwings`
*│🏮 Use ☛* .devilwings <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `nigeria`
*│🏮 Use ☛* .nigeria <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `bulb`
*│🏮 Use ☛* .bulb <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `angelwings`
*│🏮 Use ☛* .angelwings <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `zodiac`
*│🏮 Use ☛* .zodiac <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `luxury`
*│🏮 Use ☛* .luxury <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `paint`
*│🏮 Use ☛* .paint <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `frozen`
*│🏮 Use ☛* .frozen <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `castle`
*│🏮 Use ☛* .castle <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `tatoo`
*│🏮 Use ☛* .tatoo <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `valorant`
*│🏮 Use ☛* .valorant <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `bear`
*│🏮 Use ☛* .bear <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `typography`
*│🏮 Use ☛* .typography <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `birthday`
*│🏮 Use ☛* .birthday <text>
*╰──────────●●►*

*𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨*

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
*│⛩️ Command ☛* `vv`
*│🏮 Use ☛* .vv
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
*│⛩️ Command ☛* `repo`
*│🏮 Use ☛* .repo
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `block`
*│🏮 Use ☛* .block <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `unblock`
*│🏮 Use ☛* .unblock <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `fullpp`
*│🏮 Use ☛* .fullpp <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `setpp`
*│🏮 Use ☛* .setpp <image>
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
*│⛩️ Command ☛* `alive`
*│🏮 Use ☛* .alive
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `ping`
*│🏮 Use ☛* .ping
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `gjid`
*│🏮 Use ☛* .gjid
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `jid`
*│🏮 Use ☛* .jid
*╰──────────●●►*

*𝗙𝗨𝗡 𝗠𝗘𝗡𝗨*

*╭──────────●●►*
*│⛩️ Command ☛* `shapar`
*│🏮 Use ☛* .shapar
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `rate`
*│🏮 Use ☛* .rate <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `insult`
*│🏮 Use ☛* .insult <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `hack`
*│🏮 Use ☛* .hack <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `ship`
*│🏮 Use ☛* .ship <@tag1> <@tag2>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `character`
*│🏮 Use ☛* .character <name>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `pickup`
*│🏮 Use ☛* .pickup
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `joke`
*│🏮 Use ☛* .joke
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `hrt`
*│🏮 Use ☛* .hrt <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `hpy`
*│🏮 Use ☛* .hpy <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `syd`
*│🏮 Use ☛* .syd <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `anger`
*│🏮 Use ☛* .anger <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `shy`
*│🏮 Use ☛* .shy <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `kiss`
*│🏮 Use ☛* .kiss <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `mon`
*│🏮 Use ☛* .mon <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `cunfuzed`
*│🏮 Use ☛* .cunfuzed <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `setpp`
*│🏮 Use ☛* .setpp <image>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `hand`
*│🏮 Use ☛* .hand <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `nikal`
*│🏮 Use ☛* .nikal
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `hold`
*│🏮 Use ☛* .hold <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `hug`
*│🏮 Use ☛* .hug <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `hifi`
*│🏮 Use ☛* .hifi <song>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `poke`
*│🏮 Use ☛* .poke <@tag>
*╰──────────●●►*

*𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨*

*╭──────────●●►*
*│⛩️ Command ☛* `sticker`
*│🏮 Use ☛* .sticker <image/video>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `sticker2`
*│🏮 Use ☛* .sticker2 <image/video>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `emojimix`
*│🏮 Use ☛* .emojimix <emoji1>+<emoji2>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `fancy`
*│🏮 Use ☛* .fancy <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `take`
*│🏮 Use ☛* .take <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `tomp3`
*│🏮 Use ☛* .tomp3 <video>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `tts`
*│🏮 Use ☛* .tts <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `trt`
*│🏮 Use ☛* .trt <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `base64`
*│🏮 Use ☛* .base64 <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `unbase64`
*│🏮 Use ☛* .unbase64 <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `010 binary`
*│🏮 Use ☛* .010 <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `dbinary`
*│🏮 Use ☛* .dbinary <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `tinyurl`
*│🏮 Use ☛* .tinyurl <url>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `urldecode`
*│🏮 Use ☛* .urldecode <url>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `urlencode`
*│🏮 Use ☛* .urlencode <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `url`
*│🏮 Use ☛* .url <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `repeat`
*│🏮 Use ☛* .repeat <text> <count>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `ask`
*│🏮 Use ☛* .ask <question>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `readmore`
*│🏮 Use ☛* .readmore <text>
*╰──────────●●►*

*𝗔𝗜 𝗠𝗘𝗡𝗨*

*╭──────────●●►*
*│⛩️ Command ☛* `ai`
*│🏮 Use ☛* .ai <prompt>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `gpt3`
*│🏮 Use ☛* .gpt3 <prompt>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `gpt2`
*│🏮 Use ☛* .gpt2 <prompt>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `gptmini`
*│🏮 Use ☛* .gptmini <prompt>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `gpt`
*│🏮 Use ☛* .gpt <prompt>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `meta`
*│🏮 Use ☛* .meta <prompt>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `blackbox`
*│🏮 Use ☛* .blackbox <prompt>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `luma`
*│🏮 Use ☛* .luma <prompt>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `dj`
*│🏮 Use ☛* .dj <song/prompt>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `khan`
*│🏮 Use ☛* .khan <prompt>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `jawad`
*│🏮 Use ☛* .jawad <prompt>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `gpt4`
*│🏮 Use ☛* .gpt4 <prompt>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `bing`
*│🏮 Use ☛* .bing <prompt>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `imagine`
*│🏮 Use ☛* .imagine <prompt>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `imagine2`
*│🏮 Use ☛* .imagine2 <prompt>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `copilot`
*│🏮 Use ☛* .copilot <prompt>
*╰──────────●●►*

*𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨*

*╭──────────●●►*
*│⛩️ Command ☛* `ping`
*│🏮 Use ☛* .ping
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `ping2`
*│🏮 Use ☛* .ping2
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `speed`
*│🏮 Use ☛* .speed
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

*𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨*

*╭──────────●●►*
*│⛩️ Command ☛* `fack`
*│🏮 Use ☛* .fack
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `truth`
*│🏮 Use ☛* .truth
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `dare`
*│🏮 Use ☛* .dare
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `dog`
*│🏮 Use ☛* .dog
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `awoo`
*│🏮 Use ☛* .awoo
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `garl`
*│🏮 Use ☛* .garl
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
*│⛩️ Command ☛* `megnumin`
*│🏮 Use ☛* .megnumin
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `maid`
*│🏮 Use ☛* .maid
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `loli`
*│🏮 Use ☛* .loli
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `animegirl`
*│🏮 Use ☛* .animegirl
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
*│⛩️ Command ☛* `animenews`
*│🏮 Use ☛* .animenews
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `foxgirl`
*│🏮 Use ☛* .foxgirl
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `naruto`
*│🏮 Use ☛* .naruto
*╰──────────●●►*

*𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨*

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
*│🏮 Use ☛* .count <number>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `calculate`
*│🏮 Use ☛* .calculate <expression>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `countx`
*│🏮 Use ☛* .countx <start> <end>
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
*│🏮 Use ☛* .roll <sides>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `fact`
*│🏮 Use ☛* .fact <query>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `cpp`
*│🏮 Use ☛* .cpp <code>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `rw`
*│🏮 Use ☛* .rw
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `pair`
*│🏮 Use ☛* .pair <@tag1> <@tag2>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `pair2`
*│🏮 Use ☛* .pair2 <@tag1> <@tag2>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `pair3`
*│🏮 Use ☛* .pair3 <@tag1> <@tag2>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `fancy`
*│🏮 Use ☛* .fancy <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `logo <text>`
*│🏮 Use ☛* .logo <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `define`
*│🏮 Use ☛* .define <word>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `news`
*│🏮 Use ☛* .news
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `movie`
*│🏮 Use ☛* .movie <title>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `weather`
*│🏮 Use ☛* .weather <location>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `srepo`
*│🏮 Use ☛* .srepo <repo_link>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `insult`
*│🏮 Use ☛* .insult <@tag>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `save`
*│🏮 Use ☛* .save <text>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `wikipedia`
*│🏮 Use ☛* .wikipedia <query>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `gpass`
*│🏮 Use ☛* .gpass
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `githubstalk`
*│🏮 Use ☛* .githubstalk <username>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `yts`
*│🏮 Use ☛* .yts <movie>
*╰──────────●●►*

*╭──────────●●►*
*│⛩️ Command ☛* `ytv`
*│🏮 Use ☛* .ytv <video>
*╰──────────●●►*
𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗛𝗶𝗿𝘂 𝗫 𝗠𝗱`;

            // Function to send menu video
            const sendMenuVideo = async () => {
                return await conn.sendMessage(
                    from,
                    {
                        video: { url: 'https://files.catbox.moe/78ogxl.mp4' },
                        mimetype: 'video/mp4',
                        ptv: true
                    },
                    { quoted: mek }
                );
            };

            // Try to send video first
            try {
                await sendMenuVideo();
            } catch (e) {
                console.log('Video send failed, sending fallback image:', e);
                await conn.sendMessage(
                    from,
                    {
                        image: { url: 'https://files.catbox.moe/88ec05.jpg' },
                        caption: dec,
                        contextInfo: {
                            mentionedJid: [m.sender],
                            forwardingScore: 999,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363418953677198@newsletter',
                                newsletterName: '𝗛𝗜𝗥𝗨 𝗫 𝗠𝗗 𝗩𝟭',
                                serverMessageId: 143
                            }
                        }
                    },
                    { quoted: mek }
                );
            }

            // Send menu caption as text (optional if caption not in image)
            await conn.sendMessage(from, { text: dec }, { quoted: mek });

            // Send audio
            await conn.sendMessage(from, {
                audio: { url: 'https://files.catbox.moe/ria2lo.mp3' },
                mimetype: 'audio/mp4',
                ptt: true
            }, { quoted: mek });

        } catch (e) {
            console.log(e);
            reply(`❌ Error: ${e}`);
        }
    });
