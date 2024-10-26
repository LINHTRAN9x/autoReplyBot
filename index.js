const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const TOKEN = process.env.TOKEN;

client.once('ready', () => {
    console.log('Bot đã sẵn sàng hoạt động!');
});


const keywords = ['hello', 'help', 'game', 'alo', 'hi',
                  'xin chào', 'xin chao', 'admin', 'lỗi',
                  'bug', 'fix', 'bị gì', 'mua', 'xin',
                   'game off', 'game offline','cứu',
                  'giá', 'nhờ', 'muốn' , 'hỗ trợ',
                  'giúp'
                ];

client.on('messageCreate', message => {
    if (!message.author.bot) {
        const userMessage = message.content.toLowerCase();

        // Kiểm tra nếu tin nhắn chứa một trong các từ khóa
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
});

client.login(TOKEN);
