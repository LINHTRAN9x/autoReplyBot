const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences, //theo dõi trạng thái online/offline
    ]
});

const TOKEN = process.env.TOKEN;
const ADMIN_ID = '434706715641118722'; //ID của admin

client.once('ready', () => {
    console.log('Bot đã sẵn sàng hoạt động!');
});

const keywords = ['hello', 'help', 'game', 'alo', 'hi',
                  'xin chào', 'xin chao', 'admin', 'lỗi',
                  'bug', 'fix', 'bị gì', 'mua',
                  'game off', 'game offline','cứu',
                  'hỗ trợ',
                  'giúp'
                ];

client.on('messageCreate', async (message) => {
    if (!message.author.bot) {
        const userMessage = message.content.toLowerCase();

        // Kiểm tra trạng thái của admin
        const guild = message.guild;
        const admin = guild.members.cache.get(ADMIN_ID);

        if (!admin) {
            console.log('Admin không tìm thấy trong server này.');
            return;
        }

        // Chỉ phản hồi nếu admin offline hoặc không đặt trạng thái cụ thể
        const adminStatus = admin.presence?.status || 'offline';
        if (['offline', 'invisible'].includes(adminStatus)) {
            if (keywords.some(keyword => userMessage.includes(keyword))) {
                const embed = new EmbedBuilder()
                    .setColor('#B7060D')
                    .setAuthor({
                        iconURL: 'https://cdn.glitch.global/d5d9c31c-073f-4ad0-8e5c-0c8f3b7a0f7a/ylinhtran_logo_9.jpg?v=1729573329565',
                        name: 'YLINHTRAN-GSELLER',
                    })
                    .setTitle('Xin bạn chờ trong chốc lát, Admin sẽ hỗ trợ ngay thôi. Xin chân thành cảm ơn bạn!')
                    .setDescription(`*ylinhtran*`)
                    .setThumbnail('https://cdn.glitch.global/d5d9c31c-073f-4ad0-8e5c-0c8f3b7a0f7a/ylinhtran_logo_9.jpg?v=1729573329565');

                message.channel.send({ embeds: [embed] });
            }

            if (message.content === '!card') {
                const exampleEmbed = new EmbedBuilder()
                    .setColor('#B7060D')
                    .setAuthor({
                        iconURL: 'https://cdn.glitch.global/d5d9c31c-073f-4ad0-8e5c-0c8f3b7a0f7a/ylinhtran_logo_9.jpg?v=1729573329565',
                        name: 'YLINHTRAN-GSELLER',
                    })
                    .setTitle('Xin bạn chờ trong chốc lát, Admin sẽ hỗ trợ ngay thôi. Xin chân thành cảm ơn bạn!')
                    .setDescription('*ylinhtran*')
                    .setThumbnail('https://cdn.glitch.global/d5d9c31c-073f-4ad0-8e5c-0c8f3b7a0f7a/ylinhtran_logo_9.jpg?v=1729573329565');

                message.channel.send({ embeds: [exampleEmbed] });
            }
        }
    }
});

client.login(TOKEN);
