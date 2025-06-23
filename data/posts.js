const posts = [
  {
    id: 1,
    personage: "Emily",
    content: "De mensen in Hongkong zijn vandaag weer massaal de straten op, om op te komen tegen het regime van China! #HongKongProtests #StandAgainstChina",
    image: "https://raw.githubusercontent.com/LHYEjoo/Social-API/main/public/img/EMI_1.png",
    video: null,
    likes: 0,
    comments: [],
    urgent: false,
    timestamp: "2025-06-20T20:40:00Z",
    type: "trending"
  },
  {
    id: 2,
    personage: "Emily",
    content: "Elke dag verder van huis. Maar dichtbij wat we voelden op straat: hoop, woede, liefde. #ForHongKong #Hoop",
    image: "https://raw.githubusercontent.com/LHYEjoo/Social-API/main/public/img/EMI_2.png",
    video: null,
    likes: 0,
    comments: [],
    urgent: false,
    timestamp: "2025-06-20T20:30:00Z",
    type: "normal"
  },
  {
    id: 3,
    personage: "Kadir",
    content: "Vandaag was er weer een controle. Mijn vrouw en ik bidden elke dag naar Allah voor onze familie en de hoop op verandering. #Hoop",
    image: "https://raw.githubusercontent.com/LHYEjoo/Social-API/main/public/img/KAD_1.png",
    video: null,
    likes: 0,
    comments: [],
    urgent: false,
    timestamp: "2025-06-20T20:20:00Z",
    type: "unpopular"
  },
  {
    id: 4,
    personage: "Kadir",
    content: "Ze nemen alles af. Maar onze gebeden niet. Mijn vrouw en ik blijven hopen op een dag zonder angst. Voor ons. Voor onze familie. #Faith #UyghurHope",
    image: "https://raw.githubusercontent.com/LHYEjoo/Social-API/main/public/img/KAD_2.png",
    video: null,
    likes: 0,
    comments: [],
    urgent: true,
    timestamp: "2025-06-20T20:10:00Z",
    type: "urgent"
  },
  {
    id: 5,
    personage: "Carlos",
    content: "Mensen zoals ik worden hier als afval behandeld, alleen omdat we niet de juiste papieren hebben. Er wordt geen enkel probleem aangepakt wat betreft mensen zoals ik. Kijk naar de bende waar we in leven!",
    image: "https://raw.githubusercontent.com/LHYEjoo/Social-API/main/public/img/CAR_1.png",
    video: null,
    likes: 0,
    comments: [],
    urgent: false,
    timestamp: "2025-06-20T20:00:00Z",
    type: "unpopular"
  },
  {
    id: 6,
    personage: "Carlos",
    content: "Blijkbaar ben je pas mens als je een document hebt. Tot die tijd? Dan mag je toekijken hoe alles hier uit elkaar valt.",
    image: "https://raw.githubusercontent.com/LHYEjoo/Social-API/main/public/img/CAR_2.png",
    video: null,
    likes: 0,
    comments: [],
    urgent: true,
    timestamp: "2025-06-20T19:50:00Z",
    type: "urgent"
  },
  {
    id: 7,
    personage: "Fabrice",
    content: "In mijn land noemen ze mensen zoals ik 'geen mensen'. In het nieuws zeggen ze dat wij 'het niet waard zijn'. Ik hoor die stemmen nog steeds. En toch moet ik elke dag bewijzen dat ik besta. #tired #lbgtq",
    image: "https://raw.githubusercontent.com/LHYEjoo/Social-API/main/public/img/FAB_1.png",
    video: null,
    likes: 0,
    comments: [],
    urgent: false,
    timestamp: "2025-06-20T19:40:00Z",
    type: "trending"
  },
  {
    id: 8,
    personage: "Fabrice",
    content: "In mijn land was ik stil uit angst. Hier moet ik praten om te mogen blijven. Altijd uitleggen. Altijd vechten. Ik wil gewoon bestaan. #lgbtq #refugeevoices",
    image: "https://raw.githubusercontent.com/LHYEjoo/Social-API/main/public/img/FAB_2.png",
    video: null,
    likes: 0,
    comments: [],
    urgent: false,
    timestamp: "2025-06-20T19:30:00Z",
    type: "normal"
  },
  {
    id: 9,
    personage: "Mugisha",
    content: "Deze pride sta ik solidair met al mijn community genoten in Uganda, iedereen blijf veilig en pas goed op jezelf in deze zware tijden! #LoveandPeace",
    image: "https://raw.githubusercontent.com/LHYEjoo/Social-API/main/public/img/MUG_2.png",
    video: null,
    likes: 0,
    comments: [],
    urgent: true,
    timestamp: "2025-06-20T19:20:00Z",
    type: "urgent"
  },
  {
    id: 10,
    personage: "Mugisha",
    content: "Pride is ook voor wie niet mee kan lopen. Voor wie moet schuilen, verstoppen, overleven. Ik zie jullie. Ik sta naast jullie. #QueerLivesMatter",
    image: "https://raw.githubusercontent.com/LHYEjoo/Social-API/main/public/img/MUG_1.png",
    video: null,
    likes: 0,
    comments: [],
    urgent: false,
    timestamp: "2025-06-20T19:10:00Z",
    type: "trending"
  },
  {
    id: 11,
    personage: "Kang Sae-Byeok",
    content: "Hij wil dokter worden. Ik wil dat hij veilig thuiskomt van school. Dat is alles. Is dat te veel gevraagd? #Mensenrechten #Broertje #NoordKorea",
    image: "https://raw.githubusercontent.com/LHYEjoo/Social-API/main/public/img/KSB_2.png",
    video: null,
    likes: 0,
    comments: [],
    urgent: false,
    timestamp: "2025-06-20T19:00:00Z",
    type: "unpopular"
  },
  {
    id: 12,
    personage: "Kang Sae-Byeok",
    content: "Ze noemen het hier 'vrijheid'. Maar mijn moeder zit nog steeds daar. Mijn broertje zit opgesloten in een tehuis. En ik? Ik werk me kapot om te bewijzen dat ik besta. #DitIsGeenVrijheid",
    image: "https://raw.githubusercontent.com/LHYEjoo/Social-API/main/public/img/KSB_1.png",
    video: null,
    likes: 0,
    comments: [],
    urgent: true,
    timestamp: "2025-06-20T18:50:00Z",
    type: "urgent"
  }
];

module.exports = posts;
