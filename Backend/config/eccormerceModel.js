import pg from "pg";
import "dotenv/config"


const { Pool } = pg;

// const user = process.env.DATABASE_USER;
// const database = process.env.DATABASE_KEY;
// const password = process.env.DATABASE_PASSWORD;

const connectionString = `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@localhost:${process.env.DATABASE_PORT}/${process.env.DATABASE_KEY}`




NODE_ENV = production
connectionString = 'postgresql://exclusive_ecormmerce_db_user:5t8a18rl5QtnsVxq0cX8fMstESnIojW5@dpg-cvabdnjqf0us73ctd65g-a.oregon-postgres.render.com/exclusive_ecormmerce_db'

const pool = new Pool({
    connectionString: connectionString, // Use an environment variable for security
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export default pool;
