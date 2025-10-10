# from OmahTech Website — Full Project Stack

## 🖥️ Frontend (Client)
- **Framework:** React (with JSX components)
- **Styling:** Tailwind CSS
- **Animations & Effects:**
  - Custom gradients and hover effects
  - Framer Motion for smooth transitions
  - Particle and floating node background visuals
- **Routing / Structure:** Single-page sections (Hero, Services, Projects, Footer, etc.)
- **Email Popup Modal:**
  - Dark-themed modal built in React
  - Email validation with regex
  - Sends POST request to backend using `fetch()`

**Deployment:**  
- Hosted on **Vercel**  
- Connected to **Namecheap DNS** (custom domain)

---

## ⚙️ Backend (Server)
- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Environment Variables:** Managed using `dotenv`  
- **Database Connection:** via `mongoose`  
- **CORS Handling:** via `cors`  
- **Server Folder:** `/server` (in project root)  
- **Main File:** `server.js`  
- **Model Folder:** `/server/models/Subscriber.js`

### 🧩 API Endpoints
| Method | Endpoint | Description |
|--------|-----------|--------------|
| `POST` | `/subscribe` | Add user email to MongoDB |
| `GET`  | `/subscribers` | Retrieve all subscribers (admin/debug only) |

**Deployment:**  
- Hosted on **Render (Free Web Service)**  
- Public API URL: [`https://omahtechltd-github-io.onrender.com`](https://omahtechltd-github-io.onrender.com)

---

## 🗄️ Database
- **Type:** NoSQL  
- **Provider:** MongoDB Atlas (Cloud-hosted MongoDB)
- **ODM:** Mongoose  

**Collection:** `subscribers`

**Schema:**
```js
{
  email: { type: String, required: true, unique: true }
}