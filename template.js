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
const flexWorkers =listOfWorkers.map(worker => {
  return {
      type: 'box',
      layout: 'horizontal',
      margin: 'md',
      contents: [
        {
          type: 'box',
          layout: 'baseline',
          contents: [
            {
              type: 'icon',
              url: worker.image,
              size: 'xxl'
            },
            {
              type: 'text',
              text: worker.name,
              size: 'xl',
              color: '#555555'
            }
          ],
          flex: 3
        },
        {
          type: 'text',
          text: '1',
          size: 'xl',
          color: '#111111',
          align: 'end'
        }
      ]
    }

  }

)


module.exports.carousel = {
  type: 'template',
  altText: 'this is a carousel template',
  template: {
    type: 'carousel',
    actions: [],
    columns: [
      ...carouselWorkers,
      {
        thumbnailImageUrl: 'https://chat-bot-demo-nodejs.herokuapp.com/images/others/logo.png',
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
      text: 'WORKERS',
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
module.exports.fifas={
  type: "flex",
  altText: "This is a Flex Message",
  size: "giga",
  contents: {
    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: ' Today\'s workers',
              weight: 'bold',
              size: 'xl',
              margin: 'md'
            }
          ]
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: 
            
             flexWorkers
            
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              
              type: 'button',
              style: 'primary',
              action: {
                type: 'postback',
                label: 'MENU',
                displayText: 'Menu',
                data: 'Menu'
              },
              type: 'button',
              style: 'primary',
              action: {
                type: 'postback',
                label: 'MENU',
                displayText: 'Menu',
                data: 'Menu'
              }
            }
          ]
        }
      }
    ]
  }
};