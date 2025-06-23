const posts = [
  {
    id: 1,
    personage: "Alice Johnson",
    content: "Net een geweldige wandeling gemaakt in het park! De natuur is echt prachtig vandaag. 🌳",
    image: "https://picsum.photos/600/400?random=1",
    video: null,
    likes: 24,
    comments: [
      { id: 1, user: "Bob Smith", text: "Ziet er geweldig uit! Welk park was dit?", timestamp: "2024-01-15T10:30:00Z" },
      { id: 2, user: "Carol Davis", text: "Ik ben daar ook geweest! Echt mooi weer vandaag.", timestamp: "2024-01-15T11:15:00Z" }
    ],
    urgent: false,
    timestamp: "2024-01-15T09:45:00Z",
    type: "normal"
  },
  {
    id: 2,
    personage: "TechNews Daily",
    content: "BREAKING: Nieuwe AI technologie die de wereld gaat veranderen! Dit is een game-changer voor de industrie. 🤖",
    image: null,
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    likes: 156,
    comments: [
      { id: 3, user: "David Wilson", text: "Interessant! Wanneer komt dit beschikbaar?", timestamp: "2024-01-15T12:00:00Z" },
      { id: 4, user: "Emma Brown", text: "Ik ben sceptisch, maar hoopvol.", timestamp: "2024-01-15T12:30:00Z" }
    ],
    urgent: true,
    timestamp: "2024-01-15T11:30:00Z",
    type: "trending"
  },
  {
    id: 3,
    personage: "Frank Miller",
    content: "Mijn katten zijn de beste collega's die ik ooit heb gehad. Ze geven nooit commentaar op mijn code! 😸",
    image: "https://picsum.photos/600/400?random=2",
    video: null,
    likes: 8,
    comments: [
      { id: 5, user: "Grace Lee", text: "Haha, dat is waar! Mijn kat zit ook altijd naast me.", timestamp: "2024-01-15T13:15:00Z" }
    ],
    urgent: false,
    timestamp: "2024-01-15T12:45:00Z",
    type: "unpopular"
  },
  {
    id: 4,
    personage: "Sarah Chen",
    content: "Net mijn eerste marathon uitgelopen! 42.2 km in 3:45:30. Ik ben zo trots op mezelf! 🏃‍♀️",
    image: "https://picsum.photos/600/400?random=3",
    video: null,
    likes: 89,
    comments: [
      { id: 6, user: "Mike Johnson", text: "Gefeliciteerd! Dat is een geweldige tijd!", timestamp: "2024-01-15T14:00:00Z" },
      { id: 7, user: "Lisa Wang", text: "Inspirerend! Ik wil volgend jaar ook meedoen.", timestamp: "2024-01-15T14:30:00Z" },
      { id: 8, user: "Tom Davis", text: "Respect! Dat is echt een prestatie.", timestamp: "2024-01-15T15:00:00Z" }
    ],
    urgent: false,
    timestamp: "2024-01-15T13:30:00Z",
    type: "trending"
  },
  {
    id: 5,
    personage: "Local News",
    content: "URGENT: Verkeersongeval op de A1 bij afslag 15. Vermijd deze route indien mogelijk. 🚨",
    image: null,
    video: null,
    likes: 12,
    comments: [
      { id: 9, user: "John Doe", text: "Ik sta al 30 minuten stil. Hopelijk is iedereen oké.", timestamp: "2024-01-15T15:30:00Z" }
    ],
    urgent: true,
    timestamp: "2024-01-15T15:15:00Z",
    type: "urgent"
  },
  {
    id: 6,
    personage: "Cooking Master",
    content: "Vandaag een traditioneel recept uit mijn grootmoeder's kookboek gemaakt. Het smaakt precies zoals vroeger! 👩‍🍳",
    image: "https://picsum.photos/600/400?random=4",
    video: null,
    likes: 45,
    comments: [
      { id: 10, user: "Maria Garcia", text: "Ziet er heerlijk uit! Kun je het recept delen?", timestamp: "2024-01-15T16:00:00Z" },
      { id: 11, user: "Carlos Rodriguez", text: "Mijn oma heeft ook zulke recepten. Ze zijn goud waard!", timestamp: "2024-01-15T16:15:00Z" }
    ],
    urgent: false,
    timestamp: "2024-01-15T15:45:00Z",
    type: "normal"
  },
  {
    id: 7,
    personage: "Gaming Pro",
    content: "Net een nieuwe speedrun record gezet in mijn favoriete spel! 2:34:12 - een verbetering van 3 minuten! 🎮",
    image: null,
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    likes: 67,
    comments: [
      { id: 12, user: "Alex Turner", text: "Geweldig! Welk spel was dit?", timestamp: "2024-01-15T16:30:00Z" },
      { id: 13, user: "Sam Wilson", text: "Ik probeer al maanden onder de 2:40 te komen. Respect!", timestamp: "2024-01-15T16:45:00Z" }
    ],
    urgent: false,
    timestamp: "2024-01-15T16:00:00Z",
    type: "trending"
  },
  {
    id: 8,
    personage: "Weather Alert",
    content: "WAARSCHUWING: Zware storm verwacht vanavond tussen 20:00-23:00. Blijf binnen en vermijd onnodige reizen. ⚡",
    image: null,
    video: null,
    likes: 34,
    comments: [
      { id: 14, user: "Peter Storm", text: "Ik heb al mijn tuinmeubelen binnen gehaald.", timestamp: "2024-01-15T17:00:00Z" },
      { id: 15, user: "Anna Weather", text: "Bedankt voor de waarschuwing! Ik ga mijn ramen dichtdoen.", timestamp: "2024-01-15T17:15:00Z" }
    ],
    urgent: true,
    timestamp: "2024-01-15T16:45:00Z",
    type: "urgent"
  },
  {
    id: 9,
    personage: "Book Lover",
    content: "Net 'De Schaduw van de Wind' uitgelezen. Wat een prachtig boek! Iemand nog aanraders voor vergelijkbare boeken? 📚",
    image: "https://picsum.photos/600/400?random=5",
    video: null,
    likes: 23,
    comments: [
      { id: 16, user: "Emma Reader", text: "Probeer 'Het Kerkhof der Vergeten Boeken' van dezelfde auteur!", timestamp: "2024-01-15T17:30:00Z" },
      { id: 17, user: "Mark Bookworm", text: "Ik vond 'De Naam van de Roos' ook geweldig.", timestamp: "2024-01-15T17:45:00Z" }
    ],
    urgent: false,
    timestamp: "2024-01-15T17:00:00Z",
    type: "normal"
  },
  {
    id: 10,
    personage: "Fitness Enthusiast",
    content: "Dag 30 van mijn fitness challenge! Ik voel me sterker dan ooit. Wie doet er mee voor de volgende 30 dagen? 💪",
    image: "https://picsum.photos/600/400?random=6",
    video: null,
    likes: 78,
    comments: [
      { id: 18, user: "Jake Strong", text: "Ik ben erbij! Wat is je routine?", timestamp: "2024-01-15T18:00:00Z" },
      { id: 19, user: "Sophie Fit", text: "Geweldig! Ik ben op dag 15 van mijn eigen challenge.", timestamp: "2024-01-15T18:15:00Z" },
      { id: 20, user: "Chris Trainer", text: "Keep it up! Consistency is key.", timestamp: "2024-01-15T18:30:00Z" }
    ],
    urgent: false,
    timestamp: "2024-01-15T17:45:00Z",
    type: "trending"
  }
];

module.exports = posts; 