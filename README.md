# Social Media Feed API

Een Node.js + Express API voor een social media feed waarin gebruikers berichten kunnen zien, liken, en erop reageren.

## 🚀 Features

- **Feed Systeem**: Elke 15 seconden een nieuwe post tonen via GET /feed
- **Smart Algorithm**: Mix van posts van gevolgde gebruikers met trending, urgent en unpopular posts
- **Like Functionaliteit**: Posts kunnen geliked worden
- **Comment Systeem**: Gebruikers kunnen commentaar toevoegen
- **In-Memory Data**: Makkelijk uit te breiden naar MongoDB
- **Dummy Data**: Handmatig geschreven posts in `data/posts.js`

## 📋 Post Structuur

Elke post bevat:
- `id`: Unieke identifier
- `personage`: Naam van de poster
- `content`: Tekst van de post
- `image`: URL naar afbeelding (optioneel)
- `video`: URL naar video (optioneel)
- `likes`: Aantal likes
- `comments`: Array van commentaren
- `urgent`: Boolean voor urgente posts
- `timestamp`: Tijdstip van posten
- `type`: "normal", "trending", of "unpopular"

## 🛠️ Installatie

```bash
# Dependencies installeren
npm install

# Server starten
npm start

# Of voor development (met nodemon)
npm run dev
```

## 📡 API Endpoints

### GET /feed
Retourneert één post per keer (gebaseerd op algoritme)

```bash
curl http://localhost:3000/feed
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "personage": "Alice Johnson",
    "content": "Net een geweldige wandeling gemaakt in het park!",
    "image": "https://picsum.photos/600/400?random=1",
    "video": null,
    "likes": 24,
    "comments": [...],
    "urgent": false,
    "timestamp": "2024-01-15T09:45:00Z",
    "type": "normal"
  },
  "message": "Post retrieved successfully"
}
```

### POST /like/:postId
Verhoogt het aantal likes van een post

```bash
curl -X POST http://localhost:3000/like/1
```

**Response:**
```json
{
  "success": true,
  "data": {
    "postId": 1,
    "likes": 25
  },
  "message": "Post liked successfully"
}
```

### POST /comment/:postId
Voegt een comment toe aan een post

```bash
curl -X POST http://localhost:3000/comment/1 \
  -H "Content-Type: application/json" \
  -d '{"user": "John Doe", "text": "Geweldige post!"}'
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1705312800000,
    "user": "John Doe",
    "text": "Geweldige post!",
    "timestamp": "2024-01-15T18:00:00.000Z"
  },
  "message": "Comment added successfully"
}
```

### GET /posts
Retourneert alle posts (voor debugging)

```bash
curl http://localhost:3000/posts
```

### GET /posts/:id
Retourneert een specifieke post

```bash
curl http://localhost:3000/posts/1
```

### GET /health
Health check endpoint

```bash
curl http://localhost:3000/health
```

## 🧠 Feed Algoritme

Het feed algoritme werkt als volgt:
- **Elke 3e post**: Trending post
- **Elke 5e post**: Urgente post
- **Elke 7e post**: Unpopular post
- **Overige posts**: Van gevolgde gebruikers

Gevolgde gebruikers (demo):
- Alice Johnson
- Sarah Chen
- Cooking Master
- Book Lover
- Fitness Enthusiast

## 📁 Project Structuur

```
Social-API/
├── server.js          # Hoofdserver met alle endpoints
├── data/
│   └── posts.js       # Dummy data (makkelijk aan te passen)
├── package.json       # Dependencies en scripts
└── README.md          # Deze documentatie
```

## 🔧 Aanpassen van Dummy Data

Je kunt eenvoudig de posts aanpassen door het `data/posts.js` bestand te bewerken:

```javascript
const posts = [
  {
    id: 1,
    personage: "Jouw Naam",
    content: "Jouw bericht hier!",
    image: "https://jouw-afbeelding-url.com",
    video: null,
    likes: 0,
    comments: [],
    urgent: false,
    timestamp: "2024-01-15T09:45:00Z",
    type: "normal"
  }
  // Voeg meer posts toe...
];
```

## 🗄️ MongoDB Integratie

De API is zo opgezet dat je later eenvoudig MongoDB kunt toevoegen:

1. Installeer MongoDB driver: `npm install mongodb`
2. Vervang de in-memory data met MongoDB queries
3. De API structuur blijft hetzelfde

## 🚀 Deployment

```bash
# Production starten
npm start

# Of met environment variable voor port
PORT=8080 npm start
```

## 📝 License

ISC