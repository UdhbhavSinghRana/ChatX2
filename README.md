# Enquiry Chatbot

## Project Overview

A chatbot application developed using React Native for the frontend, FastAPI (Python) for the backend, and Artificial Neural Networks (ANN) for the core chatbot logic.

## Prerequisites

Before running the chatbot, ensure that you have the following prerequisites installed on your system:

- Node.js and npm: You will need Node.js and npm to run the React Native frontend.
- Python: You will need Python to run the FastAPI backend.

## Installation

Follow these steps to set up and run the project:

1. Clone the repository:
```bash
git clone https://github.com/SIH-Project-Org/chatbot.git
cd chatbot
```

2. Create a `.env` file in the root directory and add the following variables:
```
NETWORK_ADDRESS=<YOUR-NETWORK-IP-ADDRESS>
SERVER_PORT=8000
CLIENT_PORT=8081
```

3. Client (React Native):
    - Navigate to the client directory:
    ```bash
    cd client
    ```

    - Install dependencies:
    ```bash
    npm install
    ```

    - Start the React Native development server (Expo):
    ```bash
    npx expo start
    ```

    - The client will start running on `exp://<NETWORK_ADDRESS>:8081`

    - Scan the generated QR to view the UI on Expo app (on your devise).

4. Server (FastAPI):
    - Navigate to the server directory:
    ```bash
    cd server
    ```

    - Install dependencies:
    ```bash
    pip3 install -r requirements.txt
    ```

    - Start the FastAPI server:
    ```bash
    python3 app.py
    ```

    - The backend server will start listening on `http://0.0.0.0:8000`

## Usage

- Access the React Native app on your device or emulator.
- Interact with the chatbot to ask questions or seek assistance.
- The frontend communicates with the FastAPI backend, which utilizes ANN for chatbot logic.

## Project Structure
```
chatbot/
├── client/
│   ├── screens/
│   ├── App.js
│   └── ... (React Native files)
│
├── server/
│   ├── app.py
│   ├── chatbot/
│   │   ├── __init__.py
│   │   └── main.py
│   ├── data/
│   │   └── intent.json (Training data)
│   └── requirements.txt
│
├── .env
└── README.md
```
