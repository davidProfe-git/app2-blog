const EXPRESS = require('express');
const app = EXPRESS();
require ('dotenv').config();
const cors = require('cors')
const port = process.env.PORT
const tattoroutes = require('./routes/tattoroutes');


app.use(cors())
app.use('/tattoos/', tattoroutes)

app.get('/', (req, res) => {
    res.send('Welcome to the Tattoo API');
});

app.listen(port, () => {
    console.log(`Server is running on port ${3000}`);
});
