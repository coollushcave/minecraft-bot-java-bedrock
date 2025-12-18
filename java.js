const mc = require('minecraft-protocol');

const CONFIG = {
  host: "example.server.ip", // Server IP
  port: 25565, // port
  username: "email", // Your minecraft email
  auth: "microsoft", // Auth
  afkIntervalMs: 1000 // Config
};

function startBot() {
  console.log("Starting bot");

  const bot = mc.createClient({
    host: CONFIG.host,
    port: CONFIG.port,
    username: CONFIG.username,
    auth: CONFIG.auth,
    version: "1.21.x" // minecraft version
  });

  bot.on("login", () => {
    console.log("[INFO] Logged in to server!");
  });

  bot.on("end", () => {
    console.log("[INFO] Disconnected! Reconnecting in 5 seconds.");
    setTimeout(startBot, 5000); // timer
  });

  bot.on("error", (err) => {
    console.log("[ERROR]", err.toString());
  });
}

startBot();
