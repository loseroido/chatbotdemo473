const express = require('express')
const middleware = require('@line/bot-sdk').middleware

const app = express()

const config = {
  channelId: "1653837691",
  channelSecret: "de9040d7cbac1069321a5c80dfefc864",
  channelAccessToken:
    "Gv19n3lNQbMzkTolCguyopqUA/2ZQRT7jDBkgIUyAOXOZXe2tr76KfJxn3WIqu4DCRR9w2RkNs9sAfFXb43feMalCyqP0a2wHKN1N1Atls+kS6PJs8mOjkDUgNrgfFboX4ZSCuxxzFC7cmADJTHtLAdB04t89/1O/w1cDnyilFU="
}

app.post('/callback', middleware(config), (req, res) => {
  req.body.events // webhook event objects
  req.body.destination // user ID of the bot (optional)
})

app.listen(process.env.PORT || 5000, function() {
  console.log("LineBot is running.");
});
