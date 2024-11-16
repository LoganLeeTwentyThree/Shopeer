import os
from backend.database import engine
from fastapi import FastAPI
from sqlalchemy import text
from backend.routers import user

app = FastAPI()

# Automatically run `init.sql` at startup
init_file_path = os.path.join(os.path.dirname(__file__), "..", "init.sql")
with engine.connect() as connection:
    with open(init_file_path) as f:
        connection.execute(text(f.read()))

# Include routers
app.include_router(user.router, prefix="/auth", tags=["Auth"])