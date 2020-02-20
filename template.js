const {workers, statusOfWorkers}=require("./workers");

const listOfWorkers = workers.filter(worker => {
  return worker.status === 1
})

const carouselWorkers = listOfWorkers.map(worker => {
  return  {
    thumbnailImageUrl: worker.image,
    title: worker.name,
    text: worker.state,
    actions: [
      {
        type: 'message',
        label: 'Call',
        text: worker.phone_number
      },
      {
        type: 'message',
        label: 'Action 2',
        text: 'Action 2'
      }
    ]
  }
  })



module.exports.carousel = {
  type: 'template',
  altText: 'this is a carousel template',
  template: {
    type: 'carousel',
    actions: [],
    columns: [
      ...carouselWorkers,
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
      text: 'Workers',
      area: {
        x: 0,
        y: 0,
        width: 520,
        height: 1040
      }
    },
    {
      type: 'message',
      text: 'Flex',
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

module.exports.flex= {
  type: "bubble", 
  body: { 
    type: "box", 
    layout: "horizontal",　
    contents: [ 
      {
        type: "text", 
        text: "Hello,"
      },
      {
        type: "text", 
        text: "World!"
      }
    ]
  }
}
module.exports.fifa= {
  type: 'bubble',
  header: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'FIFA World Cup 2018',
        size: 'xl',
        weight: 'bold'
      }
    ]
  },
  hero: {
    type: 'image',
    url: 'https://chat-bot-demo-nodejs.herokuapp.com/images/imageMap1',
    size: 'full',
    aspectRatio: '20:13',
    aspectMode: 'cover'
  },
  body: {
    type: 'box',
    layout: 'vertical',
    spacing: 'md',
    contents: [
      {
        type: 'box',
        layout: 'horizontal',
        spacing: 'sm',
        contents: [
          {
            type: 'text',
            text: 'LIVE !',
            size: 'lg',
            color: '#555555',
            weight: 'bold',
            align: 'center'
          }
        ]
      },
      {
        type: 'button',
        style: 'primary',
        action: {
          type: 'postback',
          label: 'Portugal  1 : 0  Morocco',
          displayText: 'Live Report !!',
          data: 'LIVE'
        }
      },
      {
        type: 'separator',
        margin: 'lg'
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'horizontal',
            spacing: 'sm',
            contents: [
              {
                type: 'button',
                style: 'primary',
                action: {
                  type: 'postback',
                  label: 'Last Match',
                  displayText: 'Last Match',
                  data: 'LAST'
                }
              },
              {
                type: 'button',
                style: 'primary',
                action: {
                  type: 'postback',
                  label: 'Next Match',
                  displayText: 'Next Match',
                  data: 'NEXT'
                }
              }
            ]
          },
          {
            type: 'box',
            layout: 'horizontal',
            spacing: 'sm',
            contents: [
              {
                type: 'button',
                style: 'primary',
                action: {
                  type: 'postback',
                  label: 'Schedule',
                  displayText: 'Schedule',
                  data: 'SCHEDULE'
                }
              },
              {
                type: 'button',
                style: 'primary',
                action: {
                  type: 'postback',
                  label: 'Table',
                  displayText: 'Table',
                  data: 'TABLE'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'button',
        margin: 'sm',
        action: {
          type: 'uri',
          label: 'View Source',
          uri: 'https://sitthi.me:3807/downloaded/ba5f784d837540dfb40df2d531d7519c.json'
        },
        style: 'secondary'
      }
    ]
  }
}