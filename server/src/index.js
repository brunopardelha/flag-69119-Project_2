require('dotenv').config(); 

const port = process.env.PORT || 8080; 
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload'); 
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const logger = require('./utils/logger');
const { connection } = require('../db/connection');

const store = new MongoDBStore({
  uri: process.env.MONGODB_URL,
  databaseName: 'games_library_app',
  collection: 'session_users',
});

store.on('error', function (error) {
  logger.error('db', `Error tring to connect to MongoDB for session autentication: '${error.message}`)
});

const app = express();

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true
}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ createParentPath: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {},
  store,
  samesite: 'none', 
  secure: false, 
  rolling: true,
  unset: 'destroy'
}));

const isAuth = require('../src/security/isAuth')

const userEntry = require('./routes/userEntry');
app.use('/', userEntry);

const profileRoutes = require('./routes/profileRoutes');
app.use('/profile', isAuth, profileRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/user', isAuth, userRoutes);

const addRoutes = require('./routes/addByUser');
app.use('/add', isAuth, addRoutes);


//TESTE API
app.get('/test', async (req, res) => {
  const { body, params } = req
  console.log('Received!');

  res.json({ status: 'ok', session: req.session, body, params });
});

connection();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  logger.info('server', `Server running on http://localhost:${port}`)
})
