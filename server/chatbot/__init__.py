from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

from .main import get_response

import os
import uvicorn

load_dotenv()
NETWORK_ADDRESS = "0.0.0.0"
CLIENT_PORT = int(2000)

# def create_app():
app = FastAPI()

# Check: Redundent CORS
origins = [f"{NETWORK_ADDRESS}:{CLIENT_PORT}"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# TODO: Shift of routing
class UserInput(BaseModel):
    msg: str

@app.post('/')
def root(req: UserInput):
    res = get_response(req.msg)
    return res

    # return app

