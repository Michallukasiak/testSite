const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const currentTime = new Date().toLocaleString(); // Pobranie aktualnego czasu
  res.send(`Kocham Cię! Lukasiak podaje czas - aktualny czas: ${currentTime}`); // Wysłanie odpowiedzi z komunikatem i czasem
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
