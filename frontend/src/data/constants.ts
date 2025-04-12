
export const USAGE_CONSTANTS = {
    FetchUrl : "https://useragent.one/api/user-agents?deviceCategory=desktop&limit=1",
}

export const RESPONSE_EXAMPLE =`
  {
      success: true,
      msg: "",
      data: [{
          "appName": "Netscape",
          "connection": {
          "downlink": 10,
          "effectiveType": "4g",
          "rtt": 0
          },
          "platform": "Win32",
          "pluginsLength": 3,
          "vendor": "Google Inc.",
          "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36",
          "viewportHeight": 660,
          "viewportWidth": 1260,
          "deviceCategory": "desktop",
          "screenHeight": 800,
          "screenWidth": 1280
      }]
  }`
