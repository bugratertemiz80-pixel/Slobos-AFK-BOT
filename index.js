{
  "name": "SlobosBot",
  "server": {
    "ip": "KayanNetwork.aternos.me",
    "port": 25565,
    "version": "1.20.1"
  },
  "bot-account": {
    "username": "KayanNwBot",
    "type": "offline"
  },
  "utils": {
    "auto-reconnect": true,
    "auto-reconnect-delay": 5000,
    "max-reconnect-delay": 15000,
    "auto-auth": {
      "enabled": false,
      "password": "sifre"
    },
    "chat-messages": {
      "enabled": false,
      "repeat": true,
      "repeat-delay": 60,
      "messages": ["/login bot123"]
    },
    "anti-afk": {
      "enabled": true,
      "sneak": false
    },
    "periodic-rejoin": {
      "enabled": false
    }
  },
  "position": {
    "enabled": false,
    "x": 0,
    "y": 64,
    "z": 0
  },
  "movement": {
    "circle-walk": {
      "enabled": true,
      "radius": 4,
      "speed": 3000
    },
    "look-around": {
      "enabled": true,
      "interval": 5000
    },
    "random-jump": {
      "enabled": true,
      "interval": 10000
    }
  },
  "modules": {
    "avoidMobs": false,
    "combat": false,
    "beds": false,
    "chat": true,
    "console-commands": true
  },
  "combat": {
    "attack-mobs": false,
    "auto-eat": false
  },
  "beds": {
    "place-night": false
  },
  "chat": {
    "respond": false
  },
  "discord": {
    "enabled": false,
    "webhookUrl": "YOUR_DISCORD_WEBHOOK_URL"
  }
}
