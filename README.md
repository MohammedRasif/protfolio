# React + Vite
npm init -y

npm i express cors mongodb dotenv

const express = require('express'); // Corrected require syntax
const cors = require('cors'); // Corrected require syntax

const app = express();
const port = process.env.PORT || 5000; // Corrected 'Sonst' to 'const'

// Middleware
app.use(cors());
app.use(express.json());

// Route
app.get('/', (req, res) => {
  res.send('doctor is running');
});

// Server listening
app.listen(port, () => {
  console.log(`Car Doctor Server is running on port ${port}`); // Corrected the string interpolation
});


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
