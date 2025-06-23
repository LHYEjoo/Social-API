const posts = [
  {
    id: 1,
    personage: "Emily",
    content: "De mensen in Hongkong zijn vandaag weer massaal de straten op, om op te komen tegen het regime van China! #HongKongProtests #StandAgainstChina",
    image: "/img/EMI_1.png",
    video: null,
    likes: 342,
    comments: [
      {
        id: 1,
        user: "HongKongSupporter",
        text: "Stay strong! The world is watching 🇭🇰",
        timestamp: "2025-06-20T20:35:00Z"
      },
      {
        id: 2,
        user: "FreedomFighter",
        text: "We stand with Hong Kong! Democracy will prevail!",
        timestamp: "2025-06-20T20:32:00Z"
      },
      {
        id: 3,
        user: "GlobalCitizen",
        text: "This is what courage looks like. Keep fighting!",
        timestamp: "2025-06-20T20:28:00Z"
      }
    ],
    urgent: false,
    timestamp: "2025-06-20T20:40:00Z",
    type: "trending"
  },
  {
    id: 2,
    personage: "Emily",
    content: "Elke dag verder van huis. Maar dichtbij wat we voelden op straat: hoop, woede, liefde. #ForHongKong #Hoop",
    image: "/img/EMI_2.png",
    video: null,
    likes: 156,
    comments: [
      {
        id: 4,
        user: "HopeBeliever",
        text: "Your words give us strength. Never give up!",
        timestamp: "2025-06-20T20:25:00Z"
      },
      {
        id: 5,
        user: "Solidarity",
        text: "We feel your pain and your hope. Stay strong!",
        timestamp: "2025-06-20T20:22:00Z"
      }
    ],
    urgent: false,
    timestamp: "2025-06-20T20:30:00Z",
    type: "normal"
  },
  {
    id: 3,
    personage: "Kadir",
    content: "Vandaag was er weer een controle. Mijn vrouw en ik bidden elke dag naar Allah voor onze familie en de hoop op verandering. #Hoop",
    image: "/img/KAD_1.png",
    video: null,
    likes: 23,
    comments: [
      {
        id: 6,
        user: "PeaceSeeker",
        text: "My thoughts are with you and your family",
        timestamp: "2025-06-20T20:15:00Z"
      }
    ],
    urgent: false,
    timestamp: "2025-06-20T20:20:00Z",
    type: "unpopular"
  },
  {
    id: 4,
    personage: "Kadir",
    content: "Ze nemen alles af. Maar onze gebeden niet. Mijn vrouw en ik blijven hopen op een dag zonder angst. Voor ons. Voor onze familie. #Faith #UyghurHope",
    image: "/img/KAD_2.png",
    video: null,
    likes: 89,
    comments: [
      {
        id: 7,
        user: "HumanRights",
        text: "This is heartbreaking. The world must act!",
        timestamp: "2025-06-20T20:05:00Z"
      },
      {
        id: 8,
        user: "Faithful",
        text: "Your faith is inspiring. Stay strong!",
        timestamp: "2025-06-20T20:02:00Z"
      },
      {
        id: 9,
        user: "GlobalAwareness",
        text: "More people need to know about this situation",
        timestamp: "2025-06-20T19:58:00Z"
      }
    ],
    urgent: true,
    timestamp: "2025-06-20T20:10:00Z",
    type: "urgent"
  },
  {
    id: 5,
    personage: "Carlos",
    content: "Mensen zoals ik worden hier als afval behandeld, alleen omdat we niet de juiste papieren hebben. Er wordt geen enkel probleem aangepakt wat betreft mensen zoals ik. Kijk naar de bende waar we in leven!",
    image: "/img/CAR_1.png",
    video: null,
    likes: 12,
    comments: [
      {
        id: 10,
        user: "Undocumented",
        text: "I know exactly how you feel. It's exhausting",
        timestamp: "2025-06-20T19:55:00Z"
      }
    ],
    urgent: false,
    timestamp: "2025-06-20T20:00:00Z",
    type: "unpopular"
  },
  {
    id: 6,
    personage: "Carlos",
    content: "Blijkbaar ben je pas mens als je een document hebt. Tot die tijd? Dan mag je toekijken hoe alles hier uit elkaar valt.",
    image: "/img/CAR_2.png",
    video: null,
    likes: 67,
    comments: [
      {
        id: 11,
        user: "ImmigrationReform",
        text: "This system is broken. We need change!",
        timestamp: "2025-06-20T19:45:00Z"
      },
      {
        id: 12,
        user: "HumanDignity",
        text: "You are human regardless of papers. Stay strong!",
        timestamp: "2025-06-20T19:42:00Z"
      }
    ],
    urgent: true,
    timestamp: "2025-06-20T19:50:00Z",
    type: "urgent"
  },
  {
    id: 7,
    personage: "Fabrice",
    content: "In mijn land noemen ze mensen zoals ik 'geen mensen'. In het nieuws zeggen ze dat wij 'het niet waard zijn'. Ik hoor die stemmen nog steeds. En toch moet ik elke dag bewijzen dat ik besta. #tired #lbgtq",
    image: "/img/FAB_1.png",
    video: null,
    likes: 234,
    comments: [
      {
        id: 13,
        user: "LGBTQAlly",
        text: "You are valid and loved! Don't let them tell you otherwise!",
        timestamp: "2025-06-20T19:35:00Z"
      },
      {
        id: 14,
        user: "PrideSupporter",
        text: "You exist and you matter! Keep fighting!",
        timestamp: "2025-06-20T19:32:00Z"
      },
      {
        id: 15,
        user: "HumanRights",
        text: "This is why we need to fight for equality everywhere",
        timestamp: "2025-06-20T19:28:00Z"
      },
      {
        id: 16,
        user: "Solidarity",
        text: "You don't have to prove anything to anyone!",
        timestamp: "2025-06-20T19:25:00Z"
      }
    ],
    urgent: false,
    timestamp: "2025-06-20T19:40:00Z",
    type: "trending"
  },
  {
    id: 8,
    personage: "Fabrice",
    content: "In mijn land was ik stil uit angst. Hier moet ik praten om te mogen blijven. Altijd uitleggen. Altijd vechten. Ik wil gewoon bestaan. #lgbtq #refugeevoices",
    image: "/img/FAB_2.png",
    video: null,
    likes: 178,
    comments: [
      {
        id: 17,
        user: "RefugeeRights",
        text: "You shouldn't have to fight just to exist. This is wrong.",
        timestamp: "2025-06-20T19:25:00Z"
      },
      {
        id: 18,
        user: "LGBTQCommunity",
        text: "We see you and we support you!",
        timestamp: "2025-06-20T19:22:00Z"
      },
      {
        id: 19,
        user: "JusticeSeeker",
        text: "The system needs to change. You deserve better.",
        timestamp: "2025-06-20T19:18:00Z"
      }
    ],
    urgent: false,
    timestamp: "2025-06-20T19:30:00Z",
    type: "normal"
  },
  {
    id: 9,
    personage: "Mugisha",
    content: "Deze pride sta ik solidair met al mijn community genoten in Uganda, iedereen blijf veilig en pas goed op jezelf in deze zware tijden! #LoveandPeace",
    image: "/img/MUG_2.png",
    video: null,
    likes: 445,
    comments: [
      {
        id: 20,
        user: "UgandaPride",
        text: "Thank you for standing with us! We need all the support we can get!",
        timestamp: "2025-06-20T19:15:00Z"
      },
      {
        id: 21,
        user: "GlobalLGBTQ",
        text: "Solidarity from around the world! Stay safe!",
        timestamp: "2025-06-20T19:12:00Z"
      },
      {
        id: 22,
        user: "HumanRights",
        text: "This is a human rights crisis. The world must act!",
        timestamp: "2025-06-20T19:08:00Z"
      },
      {
        id: 23,
        user: "PrideSupporter",
        text: "We stand with Uganda's LGBTQ+ community!",
        timestamp: "2025-06-20T19:05:00Z"
      },
      {
        id: 24,
        user: "InternationalAid",
        text: "How can we help? What do you need?",
        timestamp: "2025-06-20T19:02:00Z"
      }
    ],
    urgent: true,
    timestamp: "2025-06-20T19:20:00Z",
    type: "urgent"
  },
  {
    id: 10,
    personage: "Mugisha",
    content: "Pride is ook voor wie niet mee kan lopen. Voor wie moet schuilen, verstoppen, overleven. Ik zie jullie. Ik sta naast jullie. #QueerLivesMatter",
    image: "/img/MUG_1.png",
    video: null,
    likes: 298,
    comments: [
      {
        id: 25,
        user: "QueerVisibility",
        text: "This is so important. Not everyone can be visible.",
        timestamp: "2025-06-20T18:55:00Z"
      },
      {
        id: 26,
        user: "LGBTQSupport",
        text: "You see us and we see you. Thank you!",
        timestamp: "2025-06-20T18:52:00Z"
      },
      {
        id: 27,
        user: "PrideMonth",
        text: "This is what Pride is really about - solidarity!",
        timestamp: "2025-06-20T18:48:00Z"
      },
      {
        id: 28,
        user: "HumanRights",
        text: "Queer lives matter everywhere!",
        timestamp: "2025-06-20T18:45:00Z"
      }
    ],
    urgent: false,
    timestamp: "2025-06-20T19:10:00Z",
    type: "trending"
  },
  {
    id: 11,
    personage: "Kang Sae-Byeok",
    content: "Hij wil dokter worden. Ik wil dat hij veilig thuiskomt van school. Dat is alles. Is dat te veel gevraagd? #Mensenrechten #Broertje #NoordKorea",
    image: "/img/KSB_2.png",
    video: null,
    likes: 18,
    comments: [
      {
        id: 29,
        user: "NorthKoreaAwareness",
        text: "This is heartbreaking. No child should live in fear.",
        timestamp: "2025-06-20T18:35:00Z"
      }
    ],
    urgent: false,
    timestamp: "2025-06-20T19:00:00Z",
    type: "unpopular"
  },
  {
    id: 12,
    personage: "Kang Sae-Byeok",
    content: "Ze noemen het hier 'vrijheid'. Maar mijn moeder zit nog steeds daar. Mijn broertje zit opgesloten in een tehuis. En ik? Ik werk me kapot om te bewijzen dat ik besta. #DitIsGeenVrijheid",
    image: "/img/KSB_1.png",
    video: null,
    likes: 123,
    comments: [
      {
        id: 30,
        user: "RefugeeSupport",
        text: "Your story is important. Keep sharing it!",
        timestamp: "2025-06-20T18:25:00Z"
      },
      {
        id: 31,
        user: "FamilyReunion",
        text: "I hope you can be reunited with your family one day.",
        timestamp: "2025-06-20T18:22:00Z"
      },
      {
        id: 32,
        user: "HumanRights",
        text: "This is not freedom. You deserve better.",
        timestamp: "2025-06-20T18:18:00Z"
      }
    ],
    urgent: true,
    timestamp: "2025-06-20T18:50:00Z",
    type: "urgent"
  }
];

module.exports = posts;
