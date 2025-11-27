const EXPRESS = require('express');
const app = EXPRESS();
require ('dotenv').config();
const port = process.env.PORT
const tattoroutes = require('./routes/tattoroutes');

app.use('/tattoos/', tattoroutes)

app.get('/', (req, res) => {
    res.send('Welcome to the Tattoo API');
});

app.listen(port, () => {
    console.log(`Server is running on port ${3000}`);
});
