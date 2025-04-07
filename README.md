## Instagram Profile Viewer - Electron App

This is an Electron-based desktop application that allows users to authenticate using Instagram's API and view their profile data including username, account type, media count, and recent media posts. It uses web scraping and Instagram Graph API to fetch and display user information.

---

## 🚀 Features
- View Instagram profile data: username, bio, posts
- Display media items (image/video) in a responsive grid
- Open individual posts on Instagram
- Built using Electron with React
- Instagram OAuth integration and Graph API usage
- Secure handling of access tokens using `.env`

---

## 🛠️ Tech Stack
- **Electron** - Desktop app framework
- **React** - Frontend UI
- **Axios** - For making API calls
- **dotenv** - Manage environment variables
- **electron-builder** - For packaging the app

---

## 📦 Installation & Running the App Locally

1. **Clone the Repository:**
```bash
git clone https://github.com/your-username/instagram-electron-app.git
cd electron-instagram-embedded-app
```

2. **Install Dependencies:**
```bash
npm install
```

3. **Start the App in Dev Mode:**
```bash
npm run dev
```

4. **Build the App for Production:**
```bash
npm run build-win (for windows)
npm run build-mac (for mac)
```

---

## 🔍 Scraping Mechanism
- Instagram Graph API is used to fetch profile and media data
- Token is exchanged for a long-lived token via Instagram API
- Media posts are fetched using `https://graph.instagram.com/me/media`
- Data such as `media_url`, `caption`, `permalink`, `media_type` is displayed

---

## 📚 Resources
- [Instagram Graph API Docs](https://developers.facebook.com/docs/instagram-api/)
- [Electron Documentation](https://www.electronjs.org/docs/latest)
- [Create React App](https://create-react-app.dev/)

---

## 👨‍💻 Author
**Vignesh Bharathi**  
*Frontend ⚡ Backend ⚙ Full Stack 💥*  
*Type fast. Think faster.*
