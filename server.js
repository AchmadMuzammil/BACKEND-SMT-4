const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mendapatkan semua pengguna
app.get('/api/users', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        const users = JSON.parse(data).users;
        res.json(users);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
