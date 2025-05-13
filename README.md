# DevHack-6.0 (MEDICONNECT)

## Overview
MEDICONNECT is a platform that bridges the gap between doctors and patients using WebSocket.IO for real-time chat interactions. Each doctor is assigned a unique room ID where interactions between doctors and patients occur, enabling simultaneous conversations for multiple patients.

## Features
- **Real-Time Chat**: Powered by WebSocket.IO for live communication between doctors and patients.
- **Unique Room ID**: Each doctor is given a unique room ID for one-on-one or group consultations.
- **Multiple Interactions**: Multiple interactions can take place simultaneously, allowing doctors to manage several patients at the same time.

## Technologies Used
- **WebSocket.IO**: For establishing a real-time communication channel between the server and clients.
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework to handle HTTP requests and WebSocket connections.
- **MongoDB**: Database for storing doctor and patient information.

## Installation

### Prerequisites
- **Node.js** and **npm** should be installed on your machine.

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/mediconnect.git
    cd mediconnect
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start
    ```

4. The application will be running on `http://localhost:3000`.

## Login Details (For Testing Purposes)
- **Doctor Email**: drnehapatel@example.com
- **Password**: hashedpassword123 (Note: This is a hashed password for testing purposes)

## Usage
- Upon successful login, doctors will be directed to their unique room ID.
- Doctors can start new interactions by sending messages to their assigned patients in real-time.
- Patients can join the room by entering the room ID provided by their doctor.

