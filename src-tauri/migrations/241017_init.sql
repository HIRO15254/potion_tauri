CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    start_time TEXT,
    end_time TEXT,
    buy_in REAL,
    cash_out REAL
);

CREATE TABLE IF NOT EXISTS breaks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id INTEGER,
    start_time TEXT,
    end_time TEXT,
    FOREIGN KEY(session_id) REFERENCES sessions(id)
);