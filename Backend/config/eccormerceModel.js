import pg from "pg";
import "dotenv/config"


const { Pool } = pg;

// const user = process.env.DATABASE_USER;
// const database = process.env.DATABASE_KEY;
// const password = process.env.DATABASE_PASSWORD;

const connectionString = `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@localhost:${process.env.DATABASE_PORT}/${process.env.DATABASE_KEY}`

const pool = new Pool({
    connectionString: connectionString, // Use an environment variable for security
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export default pool;
