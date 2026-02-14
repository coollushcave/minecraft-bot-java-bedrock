java${javaversion} -Xmx${memory}M -Dterminal.jline=false -Dterminal.ansi=true -Djline.terminal=jline.UnsupportedTerminal -Dlog4j2.formatMsgNoLookups=true -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar paper.jar nogui

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
