from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

# CORS setup for frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simulated database
users = {"user@example.com": {"password": "password123", "is_authenticated": False}}

# Route to check authentication status
@app.get("/auth/status")
def auth_status():
    # Example: Replace this logic with real session/token checks
    for user in users.values():
        if user["is_authenticated"]:
            return {"authenticated": True, "username": "example_user"}
    return {"authenticated": False}

# Route to log in
class LoginRequest(BaseModel):
    email: str
    password: str

@app.post("/auth/login")
def login(request: LoginRequest):
    user = users.get(request.email)
    if user and user["password"] == request.password:
        user["is_authenticated"] = True
        return {"authenticated": True, "message": "Login successful"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

# Route to log out
@app.post("/auth/logout")
def logout():
    for user in users.values():
        user["is_authenticated"] = False
    return {"authenticated": False, "message": "Logged out"}
