const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { isValidToken } = require('./middlewares/validations')
const axios = require('axios');
const userRouter = require('./routers/userRouter');
const postRouter = require('./routers/postRouter');
const errors = require('./middlewares/routerNotFound');
const teamRouter = require('./routers/teamRouter');
const PORT = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRouter);

app.get('/btc',
isValidToken,
async (_req, res) => {
  const result = await axios.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");
  res.status(200).json(result.data)
});

app.use('/posts', postRouter);

app.use('/teams', teamRouter);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));
app.use(errors.routerNotFound);

app.listen(PORT, () => console.log('Run server http://localhost:3000'));