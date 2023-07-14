const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./src/controller/chemicalController')


const app = express();

const PORT = process.env.PORT || 3000

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// to check the health of app
app.get('/ping', (req, res)=>{
        console.log(`Server is up and running`);
        return res.status(200).json({"message": "Servie is up and running"})
})