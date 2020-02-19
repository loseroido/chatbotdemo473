module.exports.test = {
    type: 'template',
    altText: 'this is a buttons template',
    template: {
      type: 'buttons',
      actions: [
        {
          type: 'message',
          label: 'Action 1',
          text: 'Action 1'
        },
        {
          type: 'message',
          label: 'Action 2',
          text: 'Action 2'
        }
      ],
      thumbnailImageUrl: 'https://chat-bot-demo-nodejs.herokuapp.com/images/start.png',
      title: 'Title',
      text: 'Text'
    }
  }
  
  module.exports.carousel = {
    type: 'template',
    altText: 'this is a carousel template',
    template: {
      type: 'carousel',
      actions: [],
      columns: [
        {
          thumbnailImageUrl: 'https://images.unsplash.com/photo-1528953030358-b0c7de371f1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          title: 'Bataa',
          text: 'Student, No Japanese',
          actions: [
            {
              type: 'postback',
              label: 'Write text to him',
              text: 'Write text to him',
              data: 'Data 1'
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
              label: 'Postback',
              text: 'Action 1',
              data: 'Turuu'
            }
          ]
        }
      ]
    }
  }
  module.exports.imageMap= {
    type: 'imagemap',
    baseUrl: 'https://chat-bot-demo-nodejs.herokuapp.com/images/imageMap/460',
    altText: 'This is an imagemap',
    baseSize: {
      width: 1040,
      height: 1040
    },
    actions: [
      {
        type: 'uri',
        linkUri: 'https://developers.line.biz/en/reference/messaging-api/#imagemap-action-objects',
        area: {
          x: 0,
          y: 0,
          width: 520,
          height: 454
        }
      },
      {
        type: 'message',
        text: 'Hello haha',
        area: {
          x: 520,
          y: 0,
          width: 520,
          height: 454
        }
      }
    ]
  }