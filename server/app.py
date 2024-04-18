#!/usr/bin/env python3

from dotenv import load_dotenv
from chatbot import app

import uvicorn
import os

load_dotenv()
HOST_ADDRESS = '0.0.0.0'
SERVER_PORT = int(4000)

if __name__ == '__main__':
    # TODO: Change on prod
    # from chatbot import create_app (top)
    # app = create_app()
    # uvicorn.run(app, host=HOST_ADDRESS, port=SERVER_PORT)

    uvicorn.run("chatbot:app", host=HOST_ADDRESS, port=SERVER_PORT, reload=True)

