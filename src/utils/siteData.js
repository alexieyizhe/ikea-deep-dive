export const statCounters = [
  {
    start: 0,
    end: 100,
    suffix: '%',
    subtitle: 'Sustainable Cotton',
    gridArea: 'statAttendees'
  },
  {
    start: 0,
    end: 73,
    suffix: '%',
    subtitle: 'Renewable Energy',
    gridArea: 'statAttendees'
  },
  {
    start: 0,
    end: 77,
    suffix: '%',
    subtitle: 'Sustainable Wood',
    gridArea: 'statAttendees'
  },
  {
    start: 0,
    end: 509,
    suffix: '+',
    subtitle: '"Sustainability At Home" Products',
    gridArea: 'statDuration'
  },
  {
    start: 0,
    end: 13,
    suffix: 'm',
    subtitle: 'Dollars saved on transport/year',
    gridArea: 'statDuration'
  },
  {
    start: 0,
    end: 950000,
    subtitle: 'Gallons of fuel saved/year',
    gridArea: 'statDuration'
  }
];

export const sectionBgColors = [
  {
    sectionDots: 'primary',
    slideDots: 'secondary',
    slideColors: [
      'white'
    ]
  },
  {
    sectionDots: 'white',
    slideDots: 'primary',
    slideColors: [
      'white',
      '#8cc0f7',
      'white',
      'white',
    ]
  },
  {
    sectionDots: 'secondary',
    slideDots: 'primary',
    slideColors: [
      '#72a1e8',
      '#64de86',
      'white',
    ]
  },
  {
    sectionDots: 'secondary',
    slideDots: 'primary',
    slideColors: [
      '#c1a1e6',
      'white',
      '#b7cdd0',
      '#ece9a7',
      '#4f228a'
    ]
  },
  {
    sectionDots: 'black',
    slideDots: 'primary',
    slideColors: [
      'white',
      'white',
      '#99d2fb',
      '#f09655'
    ]
  },
  {
    sectionDots: 'secondary',
    slideDots: 'black',
    slideColors: [
      '#e3a0ce',
      '#f0abab',
      'linear-gradient(to right, rgba(231,219,183,1) 0%, rgba(231,219,183,1) 12%, rgba(211,192,163,1) 27%, rgba(211,192,163,1) 100%)',
      '#e2e5e5',
      '#ace678',
    ]
  },
  {
    sectionDots: 'secondary',
    slideDots: 'black',
    slideColors: [
      '#a9c6e8',
      '#51b4c0',
      '#4eabf8',
      '#72dae8',
      '#e4d4d3',
    ]
  },
  {
    sectionDots: 'secondary',
    slideDots: 'black',
    slideColors: [
      '#e5f0f2',
    ]
  }
];

export const cjmData = [
  {
    title: 'Research',
    events: [
      {
        title: 'Search for couches',
        best: {
          happiness: 42,
          color: '#b6df60',
        },
        worst: {
          happiness: 39,
          color: '#cadf60',
        },
        touchpoints: [
          'Visit website',
          'Browse IKEA catalogue',
          'Find sales',
        ],
        channels: [
          'location-arrow',
          'ad',
        ],
      },
      {
        title: 'Compare features & price',
        best: {
          happiness: 46,
          color: '#a2db62',
        },
        worst: {
          happiness: 30,
          color: '#c7db62',
        },
        touchpoints: [
          'Find item on website',
          'Read reviews',
          'Ask peers for advice',
        ],
        channels: [
          'location-arrow',
        ],
      },
      {
        title: 'Consider location & visual fit',
        best: {
          happiness: 55,
          color: '#87da3e',
        },
        worst: {
          happiness: 54,
          color: '#93dd52',
        },
        touchpoints: [
          'Visualize in apartment',
          'Use IKEA online planner',
          'Visit inspiration sites (Pinterest, etc)',
        ],
        channels: [
          'location-arrow',
        ],
      }
    ]
  },
  {
    title: 'Visit',
    events: [
      {
        title: 'Travel to store',
        best: {
          happiness: 43,
          color: '#cadb62',
        },
        worst: {
          happiness: 34,
          color: '#d9dd2e',
        },
        touchpoints: [
          'Drive and park',
          'Interact with workers',
        ],
        channels: [
          'store',
        ],
      },
      {
        title: 'Browse store',
        best: {
          happiness: 57,
          color: '#58c442',
        },
        worst: {
          happiness: 56,
          color: '#93da5c',
        },
        touchpoints: [
          'Walk through store',
          'Interact with rooms/furniture',
          'Record items of interest',
          'Get distracted by other items'
        ],
        channels: [
          'store',
          'mobile-alt'
        ],
      },
      {
        title: 'Use store services',
        best: {
          happiness: 60,
          color: '#4fba3a',
        },
        worst: {
          happiness: 54,
          color: '#77d465',
        },
        touchpoints: [
          'Talk with employees',
          'Eat at restaurant!',
          'Ask for accessibility help'
        ],
        channels: [
          'store',
        ],
      }
    ]
  },
  {
    title: 'Purchase',
    events: [
      {
        title: 'Decide on a couch',
        happiness: 50,
        color: '#7cc32d',
        touchpoints: [
          'Make the decision!',
        ],
        channels: [
          'store',
        ],
      },
      {
        title: 'Finalize purchase',
        best: {
          happiness: 47,
          color: '#80d140',
        },
        worst: {
          happiness: 34,
          color: '#d4e06c',
        },
        touchpoints: [
          'Make sure couch is in stock',
          'Find couch in warehouse',
          'Bring to cashiers',
          'Make payment'
        ],
        channels: [
          'store',
          'headset'
        ],
      }
    ]
  },
  {
    title: 'Setup',
    events: [
      {
        title: 'Bring couch home',
        best: {
          happiness: 36,
          color: '#cdd665',
        },
        worst: {
          happiness: 29,
          color: '#e0a76c',
        },
        touchpoints: [
          'Load couch into car',
          'Use delivery service',
          'Unload couch'
        ],
        channels: [
          'store',
          'headset'
        ],
      },
      {
        title: 'Assemble couch',
        best: {
          happiness: 38,
          color: '#c9d131',
        },
        worst: {
          happiness: 24,
          color: '#e88c51',
        },
        touchpoints: [
          'Unpack couch',
          'Try to follow assembly instructions',
          'Possibly become frustrated',
          'Get support',
        ],
        channels: [
          'headset',
          'mobile-alt'
        ],
      },
    ]
  },
  {
    title: 'Use',
    events: [
      {
        title: 'Use couch',
        best: {
          happiness: 57,
          color: '#6db63a',
        },
        worst: {
          happiness: 56,
          color: '#86c958',
        },
        touchpoints: [
          'Stress test',
          'Normal wear and tear',
        ],
        channels: [
        ],
      },
      {
        title: 'Share purchase',
        happiness: 58,
        color: '#40b321',
        touchpoints: [
          'Tell friends about couch',
          'Share on social media',
        ],
        channels: [
          'mobile-alt'
        ],
      }
    ]
  },
  {
    title: 'Support',
    events: [
      {
        title: 'Resolve potential issues',
        best: {
          happiness: 33,
          color: '#e2c23c',
        },
        worst: {
          happiness: 20,
          color: '#e44c37',
        },
        touchpoints: [
          'Search online for similar problems',
          'Browse website for policies',
          'Contact support',
          'Return item',
        ],
        channels: [
          'headset',
          'mobile-alt',
          'location-arrow',
          'store'
        ],
      },
      {
        title: 'Evaluate purchase',
        best: {
          happiness: 52,
          color: '#41b82e',
        },
        worst: {
          happiness: 29,
          color: '#e7eb42',
        },
        touchpoints: [
          'Write review',
          'Tell friends your opinion',
          'Return to purchase more',
        ],
        channels: [
          'mobile-alt',
          'location-arrow',
          'store'
        ],
      },
    ]
  }
];


export const historyData = [
`
  IKEA is a Swedish home furnishing company known for selling ready-to-assemble furniture. It's the world's largest furniture retainer, with a presence of almost 400 stores spanning 48 countries.
  They're known for their DIY-style furniture sales and their all-in-one stores that offer services like childcare, meals, and other amenities.
`
];

export const physicalData = [
`
  IKEA is a Swedish home furnishing company known for selling ready-to-assemble furniture. It's the world's largest furniture retainer, with a presence of almost 400 stores spanning 48 countries.
  They're known for their DIY-style furniture sales and their all-in-one stores that offer services like childcare, meals, and other amenities.
`,
`IKEA has tried to set itself apart through their affordable, well designed furniture, as well as key values like customer loyalty, sustainability, and overall customer experience.`
];
