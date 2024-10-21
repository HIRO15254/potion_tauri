use sqlx::Sqlite;
use tauri::Manager;
use tokio::fs::OpenOptions;

pub async fn setup_db(app: &tauri::App) -> sqlx::Pool<Sqlite> {
    let mut path = app
        .path()
        .app_data_dir()
        .expect("could not get data_dir");
    match std::fs::create_dir_all(path.clone()) {
        Ok(_) => {}
        Err(err) => {
            panic!("error creating directory {}", err);
        }
    };
    path.push("db.sqlite");
    let mut result = OpenOptions::new();
    match result.create_new(true).write(true).open(&path).await {
        Ok(_) => println!("database file created"),
        Err(err) => match err.kind() {
            std::io::ErrorKind::AlreadyExists => println!("database file already exists"),
            _ => {
                panic!("error creating database file {}", err);
            }
        },
    }
    let db = sqlx::sqlite::SqlitePoolOptions::new()
        .connect(path.to_str().unwrap())
        .await
        .unwrap();
    sqlx::migrate!("./migrations").run(&db).await.unwrap();
    db
}