# Dynamic Tree Number Game

An interactive game that guesses a number from 1 to 10 by asking a short sequence of yes-or-no questions.

## Why it matters

The project turns a decision tree into something visible and playable. The same branching idea is used in support flows, recommendations, diagnostics, and rule-based business decisions.

## How it works

- FastAPI serves the game and its endpoints
- A decision tree chooses the next question
- Each answer moves to another branch
- The final leaf contains the guessed number

## Technology

Python, FastAPI, HTML, CSS, and JavaScript.

## Run

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

Open `http://127.0.0.1:8000`.
