#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use sqlx::Sqlite;

mod database;

struct AppState {
    db: sqlx::Pool<Sqlite>,
}

#[tokio::main]
async fn main() {
    let app = tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![])
        .build(tauri::generate_context!())
        .expect("error building the app");
    let db = database::setup_db(&app).await;
    app.manage(AppState { db });
    app.run(|_, _| {});
}