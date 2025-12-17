## Minecraft bot
A Minecraft bot is a **programmatic client** that connects to a Minecraft server and behaves like a player without running the full game client.

## Requirements
- Node.js v22+
- Npm v10+

## Switch Accounts
To switch accounts, change the email in the configuration.

## Installation on linux
- ## Java
1. Open a terminal and install the libary:
```bash
npm install minecraft-protocol
```

2. Make the folder and file. For example:
```bash
mkdir botclient
cd botclient
nano java
```
```js
const mc = require('minecraft-protocol');

const CONFIG = {
  host: "example.server.ip",
  port: 25565, // port
  username: "email", // Your minecraft email
  auth: "microsoft", // Auth
  afkIntervalMs: 1000 // Config
};

function startBot() {
  console.log("Starting Java bot");

  const bot = mc.createClient({
    host: CONFIG.host,
    port: CONFIG.port,
    username: CONFIG.username,
    auth: CONFIG.auth,
    version: "1.21.x" // minecraft version
  });

  bot.on("login", () => {
    console.log("Logged in to server!");
  });

  bot.on("end", () => {
    console.log("Disconnected! Reconnecting in 5 seconds.");
    setTimeout(startBot, 5000); // timer
  });

  bot.on("error", (err) => {
    console.log("[ERROR]", err.toString());
  });
}

startBot();
```

3. Run the bot:
```bash
node java
```

- ## Bedrock
1. Open a terminal and install the dependency and libary:
```bash
apt install -y build-essential cmake python3
npm install bedrock-protocol
npm install prismarine-auth
```

2. Make the file:
```bash
cd botclient
nano bedrock
```
```js
const { createClient } = require('bedrock-protocol')
const { Authflow, Titles } = require('prismarine-auth')

const CONFIG = {
  host: "example.server.ip",
  port: 19132,
  username: "email", // Your minecraft email
  afkIntervalMs: 15000 // config
}

function startBot () {
  console.log("Starting bedrock bot")

  const authFlow = new Authflow(
    "bedrock-bot", // local identifier string
    undenified,
    {
      flow: "msal",
      authTitle: Titles.MinecraftNintendoSwitch
      // other options:
      // Titles.MinecraftAndroid
      // Titles.MinecraftWindows
    }
  )

  const client = createClient({
    host: CONFIG.host,
    port: CONFIG.port,
    username: CONFIG.username,
    authFlow
  })

  client.on('spawn', () => {
    console.log("Logged in to server!")
  })

  client.on('close', () => {
    console.log("Disconnected! Reconnecting in 5 min");
    setTimeout(startBot, 300000) // put more times to safely reconnect
  })

  client.on('error', err => {
    console.log("[ERROR]", err)
  })
}

startBot()
```

3. Run the bot:
```bash
node bedrock
```

## Installation on windows
- ## Java
- Download and install Node.js (LTS) [Node.js](https://nodejs.org)
- Make sure Node.js is installed:
```bash
node -v
npm -v
```

2. Open a terminal/powershell install required library:
```bash
npm init -y
npm install minecraft-protocol
```

3. Create the bot file
- Create a file named java, and paste the Java bot code into it.
- Right click the folder/file and select Open in Terminal/cmd.
- Run:
```bash
node java
```

## Error & Bugs
- Bedrock auto-reconnect may not function reliably.
- The Bedrock bot may fail to start due to a timeout. Try restart or reboot.
- Some Bedrock errors may cause the Node.js process to stop.

## Note
- Bedrock bot for Windows will be added soon.
