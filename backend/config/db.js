import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const connectDB = async () => {
  const db = await open({
    filename: './db/database.sqlite',
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL,
      status TEXT CHECK(status IN ('in progress', 'completed')) NOT NULL DEFAULT 'in progress'
    )
  `);

  return db;
};

export default connectDB;