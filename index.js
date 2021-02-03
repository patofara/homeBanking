const app = require("./routes/app")

const usersController = require('./controllers/users');
const loginController = require('./controllers/login');

app.use('/users', usersController)
app.use('/login', loginController)