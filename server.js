const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/data', (req, res) => {
    res.json({ receivedData: req.body });
});

app.use((req, res) => {
    res.status(404).json({ error: 'Page not found' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
