const {workers}=require("./workers");
module.exports.carousel = {
  type: 'template',
  altText: 'this is a carousel template',
  template: {
    type: 'carousel',
    actions: [],
    columns: [
      {
        thumbnailImageUrl: workers[0].image,
        title: workers[0].name,
        text: workers[0].phone_number,
        actions: [
          {
            type: 'message',
            label: 'Contact',
            text: workers[0].phone_number
          },
          {
            type: 'message',
            label: 'Action 2',
            text: 'Action 2'
          }
        ]
      },
      {
        thumbnailImageUrl: 'https://cdn2.vectorstock.com/i/1000x1000/66/36/nameplate-of-wood-with-word-menu-vector-3166636.jpg',
        title: 'Menu',
        text: 'Menu',
        actions: [
          {
            type: 'message',
            label: 'Menu',
            text: 'Menu'
          },
          {
            type: 'message',
            label: 'Menu',
            text: 'Menu'
          }
        ]
      }
    ]
  }
}
module.exports.imageMap= {
  type: 'imagemap',
  baseUrl: 'https://chat-bot-demo-nodejs.herokuapp.com/images/imageMap1',
  altText: 'This is an imagemap',
  baseSize: {
    width: 1040,
    height: 1040
  },
  actions: [
    {
      type: 'message',
      text: 'I love Eba',
      area: {
        x: 0,
        y: 0,
        width: 520,
        height: 1040
      }
    },
    {
      type: 'message',
      text: 'Job&Work',
      area: {
        x: 520,
        y: 0,
        width: 520,
        height: 1040
      }
    },
    {
      type: 'message',
      text: 'Hello haha',
      area: {
        x: 520,
        y: 520,
        width: 1040,
        height: 520
      }
    }
  ]
}