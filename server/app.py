from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Home"

@app.route("/api/hello")
def hello():
    return {"message": "Hello World!"}