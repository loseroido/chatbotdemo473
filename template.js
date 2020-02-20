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
module.exports.fifa= {
  type: 'flex',
  altText: 'This is a Flex Message',
  contents: {
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
      url: 'https://sitthi.me:3807/static/fifa.jpg',
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
}
module.exports.fifas={
  type: "flex",
  altText: "This is a Flex Message",
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
              text: ' Group A',
              weight: 'bold',
              size: 'xl',
              margin: 'md'
            }
          ]
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              margin: 'md',
              spacing: 'sm',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: 'Team',
                      size: 'sm',
                      color: '#555555',
                      weight: 'bold',
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: 'P',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'W',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'D',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'L',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'Pt',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    }
                  ]
                },
                {
                  type: 'separator',
                  margin: 'md'
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Russia.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Russia',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '2',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '2',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '6',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Uruguay.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Uruguay',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '3',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Egypt.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Egypt',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '2',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '2',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/SaudiArabia.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Saudi Arabia',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
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
              action: {
                type: 'postback',
                label: 'Schedule',
                data: 'SCHEDULE',
                displayText: 'Schedule'
              },
              style: 'primary'
            },
            {
              type: 'button',
              margin: 'sm',
              action: {
                type: 'uri',
                label: 'View Source',
                uri: 'https://sitthi.me:3807/downloaded/dd470058eafc4d0991ef21870505113c.json'
              },
              style: 'secondary'
            }
          ]
        }
      },
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: ' Group B',
              weight: 'bold',
              size: 'xl',
              margin: 'md'
            }
          ]
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              margin: 'md',
              spacing: 'sm',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: 'Team',
                      size: 'sm',
                      color: '#555555',
                      weight: 'bold',
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: 'P',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'W',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'D',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'L',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'Pt',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    }
                  ]
                },
                {
                  type: 'separator',
                  margin: 'md'
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Portugal.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Portugal',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '2',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '4',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Iran.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Iran',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '3',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Spain.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Spain',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Morocco.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Morocco',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '2',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '2',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
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
              action: {
                type: 'postback',
                label: 'Schedule',
                data: 'SCHEDULE',
                displayText: 'Schedule'
              },
              style: 'primary'
            },
            {
              type: 'button',
              margin: 'sm',
              action: {
                type: 'uri',
                label: 'View Source',
                uri: 'https://sitthi.me:3807/downloaded/dd470058eafc4d0991ef21870505113c.json'
              },
              style: 'secondary'
            }
          ]
        }
      },
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: ' Group C',
              weight: 'bold',
              size: 'xl',
              margin: 'md'
            }
          ]
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              margin: 'md',
              spacing: 'sm',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: 'Team',
                      size: 'sm',
                      color: '#555555',
                      weight: 'bold',
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: 'P',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'W',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'D',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'L',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'Pt',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    }
                  ]
                },
                {
                  type: 'separator',
                  margin: 'md'
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/France.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'France',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '3',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Denmark.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Denmark',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '3',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Australia.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Australia',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Peru.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Peru',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
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
              action: {
                type: 'postback',
                label: 'Schedule',
                data: 'SCHEDULE',
                displayText: 'Schedule'
              },
              style: 'primary'
            },
            {
              type: 'button',
              margin: 'sm',
              action: {
                type: 'uri',
                label: 'View Source',
                uri: 'https://sitthi.me:3807/downloaded/dd470058eafc4d0991ef21870505113c.json'
              },
              style: 'secondary'
            }
          ]
        }
      },
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: ' Group D',
              weight: 'bold',
              size: 'xl',
              margin: 'md'
            }
          ]
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              margin: 'md',
              spacing: 'sm',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: 'Team',
                      size: 'sm',
                      color: '#555555',
                      weight: 'bold',
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: 'P',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'W',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'D',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'L',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'Pt',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    }
                  ]
                },
                {
                  type: 'separator',
                  margin: 'md'
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Croatia.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Croatia',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '3',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Argentina.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Argentina',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Iceland.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Iceland',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Nigeria.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Nigeria',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
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
              action: {
                type: 'postback',
                label: 'Schedule',
                data: 'SCHEDULE',
                displayText: 'Schedule'
              },
              style: 'primary'
            },
            {
              type: 'button',
              margin: 'sm',
              action: {
                type: 'uri',
                label: 'View Source',
                uri: 'https://sitthi.me:3807/downloaded/dd470058eafc4d0991ef21870505113c.json'
              },
              style: 'secondary'
            }
          ]
        }
      },
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: ' Group E',
              weight: 'bold',
              size: 'xl',
              margin: 'md'
            }
          ]
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              margin: 'md',
              spacing: 'sm',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: 'Team',
                      size: 'sm',
                      color: '#555555',
                      weight: 'bold',
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: 'P',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'W',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'D',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'L',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'Pt',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    }
                  ]
                },
                {
                  type: 'separator',
                  margin: 'md'
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Serbia.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Serbia',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '3',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Brazil.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Brazil',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Switzerland.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Switzerland',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/CostaRica.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Costa Rica',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
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
              action: {
                type: 'postback',
                label: 'Schedule',
                data: 'SCHEDULE',
                displayText: 'Schedule'
              },
              style: 'primary'
            },
            {
              type: 'button',
              margin: 'sm',
              action: {
                type: 'uri',
                label: 'View Source',
                uri: 'https://sitthi.me:3807/downloaded/dd470058eafc4d0991ef21870505113c.json'
              },
              style: 'secondary'
            }
          ]
        }
      },
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: ' Group F',
              weight: 'bold',
              size: 'xl',
              margin: 'md'
            }
          ]
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              margin: 'md',
              spacing: 'sm',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: 'Team',
                      size: 'sm',
                      color: '#555555',
                      weight: 'bold',
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: 'P',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'W',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'D',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'L',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'Pt',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    }
                  ]
                },
                {
                  type: 'separator',
                  margin: 'md'
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Mexico.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Mexico',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '3',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Sweden.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Sweden',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '3',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Germany.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Germany',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/SouthKorea.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'South Korea',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
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
              action: {
                type: 'postback',
                label: 'Schedule',
                data: 'SCHEDULE',
                displayText: 'Schedule'
              },
              style: 'primary'
            },
            {
              type: 'button',
              margin: 'sm',
              action: {
                type: 'uri',
                label: 'View Source',
                uri: 'https://sitthi.me:3807/downloaded/dd470058eafc4d0991ef21870505113c.json'
              },
              style: 'secondary'
            }
          ]
        }
      },
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: ' Group G',
              weight: 'bold',
              size: 'xl',
              margin: 'md'
            }
          ]
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              margin: 'md',
              spacing: 'sm',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: 'Team',
                      size: 'sm',
                      color: '#555555',
                      weight: 'bold',
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: 'P',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'W',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'D',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'L',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'Pt',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    }
                  ]
                },
                {
                  type: 'separator',
                  margin: 'md'
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Belgium.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Belgium',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '3',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/England.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'England',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '3',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Tunisia.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Tunisia',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Panama.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Panama',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
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
              action: {
                type: 'postback',
                label: 'Schedule',
                data: 'SCHEDULE',
                displayText: 'Schedule'
              },
              style: 'primary'
            },
            {
              type: 'button',
              margin: 'sm',
              action: {
                type: 'uri',
                label: 'View Source',
                uri: 'https://sitthi.me:3807/downloaded/dd470058eafc4d0991ef21870505113c.json'
              },
              style: 'secondary'
            }
          ]
        }
      },
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: ' Group H',
              weight: 'bold',
              size: 'xl',
              margin: 'md'
            }
          ]
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              margin: 'md',
              spacing: 'sm',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: 'Team',
                      size: 'sm',
                      color: '#555555',
                      weight: 'bold',
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: 'P',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'W',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'D',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'L',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    },
                    {
                      type: 'text',
                      text: 'Pt',
                      size: 'sm',
                      color: '#111111',
                      align: 'end',
                      weight: 'bold'
                    }
                  ]
                },
                {
                  type: 'separator',
                  margin: 'md'
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Japan.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Japan',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '3',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Senegal.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Senegal',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '3',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Colombia.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Colombia',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    }
                  ]
                },
                {
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
                          url: 'https://sitthi.me:3807/static/flag/Poland.png',
                          size: 'sm'
                        },
                        {
                          type: 'text',
                          text: 'Poland',
                          size: 'sm',
                          color: '#555555'
                        }
                      ],
                      flex: 3
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#00ff00',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#aaaaaa',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#ff0000',
                      align: 'end'
                    },
                    {
                      type: 'text',
                      text: '0',
                      size: 'sm',
                      color: '#111111',
                      align: 'end'
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
              action: {
                type: 'postback',
                label: 'Schedule',
                data: 'SCHEDULE',
                displayText: 'Schedule'
              },
              style: 'primary'
            },
            {
              type: 'button',
              margin: 'sm',
              action: {
                type: 'uri',
                label: 'View Source',
                uri: 'https://sitthi.me:3807/downloaded/dd470058eafc4d0991ef21870505113c.json'
              },
              style: 'secondary'
            }
          ]
        }
      }
    ]
  }
}
