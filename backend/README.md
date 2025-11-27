# Backend (Flask) for question storage

This small Flask app provides a simple HTTP API to save and list questions submitted from the frontend.

Quick start (Windows PowerShell):

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
python app.py
```

The server listens on port `5000` by default. Endpoints:

- `POST /api/questions` — accepts JSON `{ "question": "...", "name": "...", "email": "..." }` and returns `{ "id": ..., "created_at": "..." }`.
- `GET /api/questions` — returns an array of saved questions.

Example `curl` POST:

```powershell
curl -H "Content-Type: application/json" -d '{"question":"Hello?","name":"Clara","email":"c@example.com"}' http://localhost:5000/api/questions
```

Notes:
- Data is persisted in a SQLite DB `questions.db` inside the `backend` folder.
- CORS is enabled so the React frontend can POST directly to the API during local development.
