export const createTask = async (db, text, status) => {
  const result = await db.run('INSERT INTO tasks (text, status) VALUES (?, ?)', [text, status]);
  return db.get('SELECT * FROM tasks WHERE id = ?', result.lastID);
};

export const getTasks = async (db, status) => {
  const query = status ? 'SELECT * FROM tasks WHERE status = ?' : 'SELECT * FROM tasks';
  const params = status ? [status] : [];
  return db.all(query, params);
};

export const updateTaskStatus = async (db, id, status) => {
  const result = await db.run('UPDATE tasks SET status = ? WHERE id = ?', [status, id]);
  return result.changes > 0 ? db.get('SELECT * FROM tasks WHERE id = ?', [id]) : null;
};

export const deleteTask = async (db, id) => {
  const result = await db.run('DELETE FROM tasks WHERE id = ?', [id]);
  return result.changes > 0;
};