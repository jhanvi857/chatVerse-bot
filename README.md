# chatVerse-bot
# Chatverse - AI Chatbot

Welcome to **Chatverse**, an intelligent AI-powered chatbot designed to assist you with various queries and provide seamless conversational experiences.

## About

Chatverse is an AI chatbot platform built to deliver accurate, context-aware responses. Whether you need assistance, casual conversation, or information, Chatverse is your go-to virtual assistant. The system leverages advanced AI models and offers an intuitive frontend for easy interaction.

---

## Features

- **Context Awareness:** Maintains conversation context for more relevant replies.
- **Multi-turn Conversations:** Supports extended dialogue sessions.
- **User Authentication:** Secure signup and login system.
- **Responsive UI:** Clean, user-friendly interface compatible with desktop and mobile devices.
- **API Integration:** Connects with AI APIs (like Gemini) for generating responses.
- **Sidebar Navigation:** Easy navigation with toggling sidebar.
- **Dark Mode Support:** Comfortable viewing in low light.
- **Error Handling:** Gracefully manages errors and invalid inputs.

---

## Technologies Used

- **Frontend:**  
  - HTML5 
  - Tailwind css
  - JavaScript
  
- **Backend:**  
  - Node.js with Express.js  
  - MongoDB for user data and chat history storage  

- **AI Integration:**  
  - Gemini API for response generation 
 
- **Authentication:**  
  - JWT (JSON Web Tokens) for secure user sessions  

- **Version Control:**  
  - Git and GitHub  

---

## Installation

1. Clone the repository  
   ```
   git clone https://github.com/your-username/chatverse.git
   ```

2. Navigate to the project directory
``` 
cd chatverse 
```

3. Install backend dependencies 
```
npm install
```

4. Create a .env file and add your API keys and database URI
 ``` 
PORT=5000
MONGO_URI=your_mongodb_connection_string
AI_API_KEY=your_api_key
```

5. Start the backend server
```npm start
```

6. Open index.html in your browser to access the frontend, or set up a static server if applicable.

## Usage
Register a new user or login with existing credentials.

Start chatting with the AI in the chat interface.

Use sidebar to navigate different options (if implemented).

Toggle dark mode for comfortable viewing.

## Contributing
Contributions are welcome! If you'd like to contribute:

Fork the repository

Create a feature branch (git checkout -b feature-name)

Commit your changes (git commit -m 'Add feature')

Push to the branch (git push origin feature-name)

Create a Pull Request

## Thank you for checking out Chatverse! 🚀
