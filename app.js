// IMPORT PACKAGES
const express = requiere("express");
const logger = requiere("morgan");


// CREATE EXPRESS APP
const app = express();


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:



// START THE SERVER
const port = Number(5005);

app.listen(port, () => console.info(`Application running ar port ${port}`));