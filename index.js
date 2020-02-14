const linebot = require("linebot");
const express = require("express");

const bot = linebot({
  channelId: "1653837691",
  channelSecret: "de9040d7cbac1069321a5c80dfefc864",
  channelAccessToken:
    "Gv19n3lNQbMzkTolCguyopqUA/2ZQRT7jDBkgIUyAOXOZXe2tr76KfJxn3WIqu4DCRR9w2RkNs9sAfFXb43feMalCyqP0a2wHKN1N1Atls+kS6PJs8mOjkDUgNrgfFboX4ZSCuxxzFC7cmADJTHtLAdB04t89/1O/w1cDnyilFU="
});

const app = express();

const linebotParser = bot.parser();

const logs = [];

app.get("/", function(req, res) {
  res.send(logs.toString());
});

app.post("/callback", linebotParser);

bot.on("message", function(event) {
  event
    .reply(event.message.text)
    .then(function(data) {
      logs.push(data.toString());
      console.log("Success", data);
    })
    .catch(function(error) {
      console.log("Error", error);
    });
});

app.listen(5000, function() {
  console.log("LineBot is running.");
});
