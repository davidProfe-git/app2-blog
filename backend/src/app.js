const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const recetasRoutes = require('./routes/recetasRoutes');

const app = express();
app.use(express.json());

app.use('/api/recetas', recetasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`El servidor está corriendo en el puerto ${PORT}`));

