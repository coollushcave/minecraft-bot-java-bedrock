const { createClient } = require('bedrock-protocol')
const { Authflow, Titles } = require('prismarine-auth')

const CONFIG = {
  host: "donutsmp.net",
  port: 19132,
  afkIntervalMs: 15000
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
