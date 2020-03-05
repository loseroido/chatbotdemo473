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
        height: 520
      }
    },
    {
      type: 'message',
      text: 'Job&Work',
      area: {
        x: 520,
        y: 0,
        width: 520,
        height: 520
      }
    },
    {
      type: 'message',
      text: 'Hello haha',
      area: {
        x: 0,
        y: 520,
        width: 1040,
        height: 520
      }
    }
  ]
}
module.exports.jobList= {
  type: 'flex',
  altText: 'Flex Message',
  contents: {
    type: 'bubble',
    header: {
      type: 'box',
      layout: 'horizontal',
      contents: [
        {
          type: 'text',
          text: 'ジョブリスト',
          margin: 'none',
          size: 'lg',
          align: 'center',
          weight: 'bold',
          color: '#AAAAAA',
          wrap: true
        }
      ]
    },
    body: {
      type: 'box',
      layout: 'horizontal',
      spacing: 'md',
      contents: [
        {
          type: 'box',
          layout: 'vertical',
          flex: 2,
          contents: [
            {
              type: 'box',
              layout: 'horizontal',
              spacing: 'sm',
              margin: 'lg',
              action: {
                type: 'message',
                label: 'Job1',
                text: 'Job1'
              },
              contents: [
                {
                  type: 'image',
                  url: 'https://i.imgur.com/tT26mmZ.png',
                  align: 'start',
                  gravity: 'top',
                  size: 'xxs'
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  flex: 4,
                  contents: [
                    {
                      type: 'text',
                      text: '3月1日 (月) 07:00 - 08:00'
                    },
                    {
                      type: 'text',
                      text: '募:3 / 閲:40 / 応:10 / 採:3 / 確:2',
                      size: 'xs'
                    }
                  ]
                }
              ]
            },
            {
              type: 'separator',
              margin: 'lg',
              color: '#AAAAAA'
            },
            {
              type: 'box',
              layout: 'horizontal',
              spacing: 'sm',
              margin: 'lg',
              action: {
                type: 'message',
                label: 'Job2',
                text: 'Job2'
              },
              contents: [
                {
                  type: 'image',
                  url: 'https://i.imgur.com/tT26mmZ.png',
                  align: 'start',
                  size: 'xxs'
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  flex: 4,
                  contents: [
                    {
                      type: 'text',
                      text: '3月1日 (月) 07:00 - 08:00 ',
                      gravity: 'center'
                    },
                    {
                      type: 'text',
                      text: '募:3 / 閲:40 / 応:10 / 採:3 / 確:2',
                      size: 'xs'
                    }
                  ]
                }
              ]
            },
            {
              type: 'separator',
              margin: 'lg',
              color: '#AAAAAA'
            },
            {
              type: 'box',
              layout: 'horizontal',
              spacing: 'sm',
              margin: 'lg',
              action: {
                type: 'message',
                label: 'Job3',
                text: 'Job3'
              },
              contents: [
                {
                  type: 'image',
                  url: 'https://i.imgur.com/tT26mmZ.png',
                  align: 'start',
                  size: 'xxs'
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  flex: 4,
                  contents: [
                    {
                      type: 'text',
                      text: '3月1日 (月) 07:00 - 08:00 ',
                      gravity: 'center'
                    },
                    {
                      type: 'text',
                      text: '募:3 / 閲:40 / 応:10 / 採:3 / 確:2',
                      size: 'xs'
                    }
                  ]
                }
              ]
            },
            {
              type: 'separator',
              margin: 'lg',
              color: '#AAAAAA'
            },
            {
              type: 'box',
              layout: 'horizontal',
              spacing: 'sm',
              margin: 'lg',
              action: {
                type: 'message',
                label: 'Job4',
                text: 'Job4'
              },
              contents: [
                {
                  type: 'image',
                  url: 'https://i.imgur.com/tT26mmZ.png',
                  align: 'start',
                  size: 'xxs'
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  flex: 4,
                  contents: [
                    {
                      type: 'text',
                      text: '3月1日 (月) 07:00 - 08:00 '
                    },
                    {
                      type: 'text',
                      text: '募:3 / 閲:40 / 応:10 / 採:3 / 確:2',
                      size: 'xs',
                      gravity: 'bottom'
                    }
                  ]
                }
              ]
            },
            {
              type: 'separator',
              margin: 'lg',
              color: '#AAAAAA'
            }
          ]
        }
      ]
    },
    footer: {
      type: 'box',
      layout: 'horizontal',
      contents: [
        {
          type: 'button',
          action: {
            type: 'datetimepicker',
            label: 'Select Date',
            data: 'Date',
            mode: 'datetime',
            initial: '2020-03-02T13:06',
            max: '2021-03-02T13:06',
            min: '2019-03-02T13:06'
          },
          color: '#FD914D',
          height: 'sm',
          style: 'primary'
        }
      ]
    }
  }
}