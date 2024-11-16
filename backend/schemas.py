from pydantic import BaseModel, EmailStr, Field, field_validator
import re

class UserCreate(BaseModel):
    email: EmailStr
    password: str

    @field_validator("password")
    def validate_password(cls, password: str) -> str:
        pattern = r"^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{12,}$"
        if not re.match(pattern, password):
            raise ValueError("Password must contain at least 12 characters, 1 uppercase letter, and 1 number.")
        return password

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    email: EmailStr

    class Config:
        from_attributes = True