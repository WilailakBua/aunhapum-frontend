const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL connection pool
const pool = new Pool({
    user: 'default',
    host: 'ep-small-tree-a4z0xdqc-pooler.us-east-1.aws.neon.tech',
    database: 'verceldb',
    password: 'ymzIlS4JFW6R',
    port: 5432,
});

// Example API endpoint
app.get('/api/data', (req, res) => {
    pool.query('SELECT * FROM menulist', (error, results) => {
        if (error) {
            throw error;
        }
        res.json(results.rows);
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});