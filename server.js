const express = require('express');
const app = express();


app.get('/luckydronesimulator', (req, res) => {
  res.redirect('https://docs.google.com/forms/d/e/1FAIpQLSeZJkimp-1cC85EeW4y38A94dT528Sw66hLKjuvZSJ8QcXBjA/viewform');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
