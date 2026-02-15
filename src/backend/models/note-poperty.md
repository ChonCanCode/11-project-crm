1. What does `express.Router()` do?

- It creates a new mini Express application ( a modular route handler, an isolated routing system).
- In stead of putting all routes inside `app.js`, I split them into separate files using a router.

2. Why having another `express()` is wrong here?

- It will creates a whole new app, instead of mounting it on to `app.js`. That means it will has its own middleware stack, stanalone server.
