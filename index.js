const TelegramBot = require("node-telegram-bot-api");

// 👉 Your Bot Token
const token = "YOUR_BOT_TOKEN_HERE";

// 👉 Create bot
const bot = new TelegramBot(token, { polling: true });

console.log("🤖 RUHI COMMUNITY VIP SIGNAL Bot Running...");

// 👉 Channel
const CHANNEL_URL = "https://t.me/+Q-6WYAuVxa01NGM9";

// /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const welcomeText = `
<b>👑 Welcome to RUHI COMMUNITY VIP 👑</b>

Thank you for trusting us 🤝  
Here, we believe in discipline, knowledge and smart execution.

📊 You'll receive:
• Genuine & well-researched market insights  
• Premium signals with responsible guidance  
• Consistent learning + growth mindset

We don’t promise miracles —  
We promise <b>clarity, honesty and better decisions.</b>

Tap below to join our VIP family 👇
`;

  const options = {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "📢 Join Official VIP Channel", url: CHANNEL_URL }
        ],
        [
          { text: "I Joined 👍", callback_data: "joined" }
        ],
      ],
    },
  };

  bot.sendMessage(chatId, welcomeText, options);

  bot.sendMessage(
    chatId,
    `⚠️ <b>Disclaimer:</b>\nAll content shared is for educational purposes only.\nWe do not provide financial or betting advice.`,
    { parse_mode: "HTML" }
  );
});

// Button Action
bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;

  if (query.data ==="joined") {
    bot.sendMessage(
      chatId,
      "❤️ Thank you for joining the RUHI COMMUNITY VIP Family!\nStay tuned for meaningful insights and powerful learning 📈"
    );
  }

  bot.answerCallbackQuery(query.id);
});
