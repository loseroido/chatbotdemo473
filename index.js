const express = require("express");
const line = require("@line/bot-sdk");
const schedule = require("node-schedule");
const {fifa, flex, carousel, imageMap}=require("./template");

const app = express();
app.use(express.static('public'));
const config = {
  channelId: "1653837691",
  channelSecret: "de9040d7cbac1069321a5c80dfefc864",
  channelAccessToken:
    "Gv19n3lNQbMzkTolCguyopqUA/2ZQRT7jDBkgIUyAOXOZXe2tr76KfJxn3WIqu4DCRR9w2RkNs9sAfFXb43feMalCyqP0a2wHKN1N1Atls+kS6PJs8mOjkDUgNrgfFboX4ZSCuxxzFC7cmADJTHtLAdB04t89/1O/w1cDnyilFU="
};
const client = new line.Client(config);
const Ids = {
  groupId:"C3f4fe7ff4e6e5223810445b0146f2788",
  ebaId:  "U382734647ff2b7f97b64132e0bab57f9"
};

// client.linkRichMenuToUser(Ids.ebaId, "richmenu-b937849f3570e3556c497dd20dcf1b23");

app.post("/callback", line.middleware(config),async (req, res) => {
  console.log("New post");
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err)=>{
      console.error(err);
      res.status(500).end();
    });
  req.body.events; // webhook event objects
  req.body.destination; // user ID of the bot (optional)
  console.log(req.body.events);
  const message1 = {
    type: "text",
    text: "Hello,"
  };
  // console.log(await client.getDefaultRichMenuId())

});
function handleEvent(event){
  if (event.type !=='message'||event.message.type !=='text'){
    return Promise.catch((err)=>{
      console.error(err);
      res.status(500).end();
    });
  }
  if (event.message.text==='Menu'){
  return client.replyMessage(event.replyToken, imageMap);
  } else if(event.message.text==='Workers'){
    return client.replyMessage(event.replyToken, carousel);
  } else if(event.message.text==='Flex'){
    return client.replyMessage(event.replyToken, flex);
  } else if(event.message.text==='Hello haha'){
    return client.replyMessage(event.replyToken, fifa);
  };
}
// const j = schedule.scheduleJob("*/30 * * * * *", function() {
//   client.pushMessage(Ids.groupId, {
//     type: "text",
//     text: "Jobandwork! (" + Math.random() + ")"
//   });
// });

app.listen(process.env.PORT || 5000, function() {
  console.log("LineBot is running.");
});
