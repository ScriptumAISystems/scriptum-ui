from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.user import User
from fastapi_jwt_auth import AuthJWT
from passlib.hash import bcrypt

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/register", status_code=status.HTTP_201_CREATED)
def register(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
):
    if db.query(User).filter(User.email == form_data.username).first():
        raise HTTPException(status_code=400, detail="User already exists")
    user = User(
        email=form_data.username,
        password_hash=bcrypt.hash(form_data.password),
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return {"msg": "User created successfully"}


@router.post("/login")
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
    Authorize: AuthJWT = Depends(),
):
    user = db.query(User).filter(User.email == form_data.username).first()
    if not user or not bcrypt.verify(form_data.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Bad credentials")
    access_token = Authorize.create_access_token(
        subject=user.email, expires_time=timedelta(minutes=30)
    )
    refresh_token = Authorize.create_refresh_token(subject=user.email)
    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer",
    }


@router.post("/refresh")
def refresh(Authorize: AuthJWT = Depends()):
    Authorize.jwt_refresh_token_required()
    current_user = Authorize.get_jwt_subject()
    new_access_token = Authorize.create_access_token(
        subject=current_user, expires_time=timedelta(minutes=30)
    )
    return {"access_token": new_access_token, "token_type": "bearer"}
