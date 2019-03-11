export const cjmData = [
  {
    title: 'Research',
    events: [
      {
        title: 'Search for couches',
        happiness: 40,
        color: '#cadf60',
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
        happiness: 55,
        color: '#87da3e',
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
        happiness: 57,
        color: '#58c442',
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
        happiness: 60,
        color: '#4fba3a',
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
        happiness: 57,
        color: '#6db63a',
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
          color: '#ceeb6d',
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

export const introData = [
  `
    The mere mention of IKEA brings with it fond memories of strolling through halls of perfectly decorated rooms, marvelling at their meticulous design.
    It conjures up elegant and sleek design, but not at the expensive of price.
    On top of that, who can forget their amazing food options - not just for a furniture store, but on the calibre of restaurants?
  `,
  `
  IKEA has been able to capture the idea of offering affordability and modern design, while operating on a philosophy of sustainability and environmental awareness.
  My aim with this interactive paper is to explore the nuances of IKEA's operating model through the experience of a customer.
  `
];