CREATE TABLE IF NOT EXISTS cash_session (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    is_active   INTEGER check ( is_active OR (0, 1) ) DEFAULT 1,
    start_time  TEXT,
    end_time    TEXT,
    small_blind INTEGER,
    big_blind   INTEGER,
    third_blind INTEGER,
    ante        INTEGER,
    buy_in      INTEGER NOT NULL,
    cash_out    INTEGER,
    note        TEXT,
    check ( is_active = 1 OR (end_time IS NOT NULL AND cash_out IS NOT NULL) )
);

CREATE TABLE IF NOT EXISTS cash_session_record (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id  INTEGER,

    record_time TEXT,
    stack       REAL,
    note        TEXT,
    foreign key(session_id) references cash_session(id)
)