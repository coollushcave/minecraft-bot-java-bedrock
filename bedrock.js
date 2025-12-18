const { createClient } = require('bedrock-protocol')
const { Authflow, Titles } = require('prismarine-auth')

const CONFIG = {
  host: "example.server.ip",
  port: 19132,
  username: "email", // Your minecraft email
  afkIntervalMs: 15000 // config
}

function startBot () {
  console.log("[INFO] Starting bedrock bot")

  const authFlow = new Authflow(
    "bedrock-bot", // local identifier string
    undefined,
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
    console.log("[INFO] Logged in to server!")
  })

  client.on('close', () => {
    console.log("[INFO] Disconnected! Reconnecting in 5 min");
    setTimeout(startBot, 300000) // put more times to safely reconnect
  })

  client.on('error', err => {
    console.log("[ERROR]", err)
  })
}

startBot()
