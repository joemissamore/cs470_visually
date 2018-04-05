# cs470_visually

### Instructions
`~$ cd into visually`<br />
`~$ DEBUG=node:* npm start # to start server`

Then navigate to http://localhost:3000/users

Whats worth noting is that I made a directory 'models' and in this directory you can find the database information.

I also made an edit in 'routes/' and added 'users.js'

Finally, in app.js I added,
var usersModel = require('./models/users_dal'),
app.use('/users', usersRouter);
