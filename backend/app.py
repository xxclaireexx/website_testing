from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
from datetime import datetime
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, 'questions.db')

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    c = conn.cursor()
    c.execute('''
    CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT NOT NULL,
        name TEXT,
        email TEXT,
        created_at TEXT
    )
    ''')
    conn.commit()
    conn.close()

app = Flask(__name__)
CORS(app)

@app.before_first_request
def init():
    init_db()

@app.route('/api/questions', methods=['POST'])
def create_question():
    data = request.get_json(force=True)
    question = data.get('question')
    name = data.get('name')
    email = data.get('email')
    if not question or not question.strip():
        return jsonify({'error': 'question is required'}), 400

    created_at = datetime.utcnow().isoformat()
    conn = get_db()
    c = conn.cursor()
    c.execute(
        'INSERT INTO questions (question, name, email, created_at) VALUES (?, ?, ?, ?)',
        (question.strip(), name, email, created_at)
    )
    conn.commit()
    last_id = c.lastrowid
    conn.close()
    return jsonify({'id': last_id, 'created_at': created_at}), 201

@app.route('/api/questions', methods=['GET'])
def list_questions():
    conn = get_db()
    c = conn.cursor()
    c.execute('SELECT id, question, name, email, created_at FROM questions ORDER BY created_at DESC')
    rows = c.fetchall()
    conn.close()
    results = [dict(row) for row in rows]
    return jsonify(results)

if __name__ == '__main__':
    # Ensure DB exists
    init_db()
    app.run(host='0.0.0.0', port=5000, debug=True)
