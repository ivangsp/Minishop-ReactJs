const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./data.json');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();
// match routes
router.get('/products', (req, res) => res.json(data), error => res.json(error));

// set default URL
app.use('/api', router);


app.listen(port, () => console.log(`Listening on port ${port}`));