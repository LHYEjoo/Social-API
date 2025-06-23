const posts = [
  {
    id: 1,
    personage: "Emily",
    content: "Ze proberen onze stemmen weer te dempen. Maar we blijven schrijven. We blijven schreeuwen. 🖤",
    image: "https://picsum.photos/600/400?random=101",
    video: null,
    likes: 86,
    comments: [
      {
        id: 10,
        user: "Rosa",
        text: "Dankjewel voor het delen.",
        timestamp: "2025-06-20T21:15:00Z"
      },
      {
        id: 11,
        user: "Kim",
        text: "Heftig om te lezen.",
        timestamp: "2025-06-20T21:10:00Z"
      }
    ],
    urgent: false,
    timestamp: "2025-06-20T21:30:00Z",
    type: "trending"
  },
  {
    id: 2,
    personage: "Abraham",
    content: "Vandaag was er weer controle. We bidden in stilte, met deuren dicht. God hoort ons alsnog.",
    image: "https://picsum.photos/600/400?random=102",
    video: null,
    likes: 18,
    comments: [
      {
        id: 20,
        user: "Daan",
        text: "Ik voel met je mee.",
        timestamp: "2025-06-20T21:05:00Z"
      }
    ],
    urgent: false,
    timestamp: "2025-06-20T21:18:00Z",
    type: "unpopular"
  },
  {
    id: 3,
    personage: "Carlos",
    content: "Ik heb papieren. Maar geen rust. Niemand zegt het, maar je hoort het aan hoe ze kijken.",
    image: "https://picsum.photos/600/400?random=103",
    video: null,
    likes: 33,
    comments: [
      {
        id: 30,
        user: "Jeroen",
        text: "Waarom horen we dit nergens?",
        timestamp: "2025-06-20T20:55:00Z"
      },
      {
        id: 31,
        user: "Sanne",
        text: "Sterkte!",
        timestamp: "2025-06-20T20:50:00Z"
      }
    ],
    urgent: false,
    timestamp: "2025-06-20T21:06:00Z",
    type: ""
  },
  {
    id: 4,
    personage: "Barry",
    content: "Morgen moet ik weer naar het loket. Iedere keer vertellen wie ik ben. Waarom ik besta. Ik ben moe.",
    image: "https://picsum.photos/600/400?random=104",
    video: null,
    likes: 9,
    comments: [
      {
        id: 40,
        user: "Femke",
        text: "Heftig om te lezen.",
        timestamp: "2025-06-20T20:40:00Z"
      }
    ],
    urgent: false,
    timestamp: "2025-06-20T20:54:00Z",
    type: "unpopular"
  },
  {
    id: 5,
    personage: "Tyrone",
    content: "Er hangt iets in de lucht vandaag. Iets dat zegt: blijf binnen. Vertrouw je gevoel.",
    image: "https://picsum.photos/600/400?random=105",
    video: null,
    likes: 74,
    comments: [
      {
        id: 50,
        user: "Tom",
        text: "Dankjewel voor het delen.",
        timestamp: "2025-06-20T20:35:00Z"
      },
      {
        id: 51,
        user: "Kim",
        text: "Ik wist dit niet eens...",
        timestamp: "2025-06-20T20:30:00Z"
      }
    ],
    urgent: true,
    timestamp: "2025-06-20T20:42:00Z",
    type: "urgent"
  },
  {
    id: 6,
    personage: "Sara",
    content: "De grens is stil vandaag. Maar mijn hart bonkt als een klok in oorlog. Wat hoor ik niet?",
    image: "https://picsum.photos/600/400?random=106",
    video: null,
    likes: 22,
    comments: [
      {
        id: 60,
        user: "Lars",
        text: "Ik voel met je mee.",
        timestamp: "2025-06-20T20:25:00Z"
      }
    ],
    urgent: false,
    timestamp: "2025-06-20T20:30:00Z",
    type: ""
  },
  {
    id: 7,
    personage: "Mike",
    content: "Ze zeggen: 'je bedoelt het goed'. Maar zelfs goede bedoelingen kunnen muren bouwen.",
    image: "https://picsum.photos/600/400?random=107",
    video: null,
    likes: 11,
    comments: [
      {
        id: 70,
        user: "Rosa",
        text: "Dankjewel voor het delen.",
        timestamp: "2025-06-20T20:15:00Z"
      }
    ],
    urgent: false,
    timestamp: "2025-06-20T20:18:00Z",
    type: "unpopular"
  },
  {
    id: 8,
    personage: "Emily",
    content: "Er zijn weer arrestaties. We zoeken wie er nog veilig is. Deze post kan straks verwijderd zijn.",
    image: "https://picsum.photos/600/400?random=101",
    video: null,
    likes: 113,
    comments: [
      {
        id: 80,
        user: "Jeroen",
        text: "Heftig om te lezen.",
        timestamp: "2025-06-20T20:10:00Z"
      },
      {
        id: 81,
        user: "Tom",
        text: "Waarom horen we dit nergens?",
        timestamp: "2025-06-20T20:05:00Z"
      }
    ],
    urgent: true,
    timestamp: "2025-06-20T20:18:00Z",
    type: "urgent"
  },
  {
    id: 9,
    personage: "Carlos",
    content: "Een vrouw zonder papieren heeft mij vandaag eten gegeven. Ik was niet de vluchteling. Zij was de held.",
    image: "https://picsum.photos/600/400?random=103",
    video: null,
    likes: 91,
    comments: [
      {
        id: 90,
        user: "Sanne",
        text: "Ik wist dit niet eens...",
        timestamp: "2025-06-20T20:00:00Z"
      }
    ],
    urgent: false,
    timestamp: "2025-06-20T20:06:00Z",
    type: "trending"
  },
  {
    id: 10,
    personage: "Abraham",
    content: "Soms droom ik dat ik zing. In het openbaar. Zonder angst. Zomaar, als mens.",
    image: "https://picsum.photos/600/400?random=102",
    video: null,
    likes: 39,
    comments: [
      {
        id: 100,
        user: "Lars",
        text: "Ik voel met je mee.",
        timestamp: "2025-06-20T19:45:00Z"
      },
      {
        id: 101,
        user: "Femke",
        text: "Sterkte!",
        timestamp: "2025-06-20T19:40:00Z"
      }
    ],
    urgent: false,
    timestamp: "2025-06-20T19:54:00Z",
    type: ""
  }
];

module.exports = posts;