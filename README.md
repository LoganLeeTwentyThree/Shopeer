# Shopeer

CS 4393 2024 Group Project 


## Features
- **Dynamic Navbar**: Shared navigation bar dynamically updates based on authentication status.
- **Single Page Application**: Pages load dynamically without refreshing the entire site.
- **Reusable Components**: Modular design with a `components` folder for shared UI elements.
- **Basic Backend**: A FastAPI backend to handle authentication and data endpoints.
- **Frontend**: Simple HTML, CSS, and JavaScript for the interface.

## Setup Instructions

### Steps to Run the Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend

2. Install dependencies:
    In the terminal use command: pip install fastapi uvicorn

3. Run the backend server:
    uvicorn main:app --reload

4. Verify the backend is running at:
    http://127.0.0.1:8000

### Steps to Run the Frontend
1. Navigate to the frontend directory
    cd frontend

2. Start a local server:
    python -m http.server 8080

3. Open the frontend in your browser:
    http://127.0.0.1:8080