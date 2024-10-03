const express = require('express');
const app = express();

// Middleware do obsługi statycznych plików (np. HTML, CSS, JS)
app.use(express.static('public'));

// Prosty endpoint API na backendzie
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello World!' });
});

// Serwer nasłuchuje na porcie 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});