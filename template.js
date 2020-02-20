const {workers}=require("./workers");
module.exports.carousel = {
  type: 'template',
  altText: 'this is a carousel template',
  template: {
    type: 'carousel',
    actions: [],
    columns: [
      {
        thumbnailImageUrl: 'https://images.unsplash.com/photo-1528953030358-b0c7de371f1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        title: workers[1].name,
        text: 'Student, No Japanese',
        actions: [
          {
            type: 'postback',
            label: 'Write text to him',
            text: 'Write text to him',
            data: 'Data 1'
          },
          {
            type: 'message',
            label: 'Action 2',
            text: 'Action 2'
          }
        ]
      },
      {
        thumbnailImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvkGRV7tBtNRhYZ_X4VXbX1tPgY3z4qSdwNBL3DeTNIMbHA00V',
        title: 'Boldoo',
        text: 'Full-time worker, Fluent',
        actions: [
          {
            type: 'message',
            label: 'Write text to him',
            text: 'Action 1'
          },
          {
            type: 'message',
            label: 'Action 2',
            text: 'Action 2'
          }
        ]
      },
      {
        thumbnailImageUrl: 'https://pluspng.com/img-png/png-worker-builder-png-image-392.png',
        title: 'Turuu',
        text: 'His hobby is football',
        actions: [
          {
            type: 'postback',
            label: 'Reach line',
            text: 'Action 1',
            data: 'Turuu'
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