require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const cors = require('cors')
const helmet = require("helmet");
const xss = require("xss-clean")
const rateLimiter= require("express-rate-limit")
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//database
const connectDB = require("./db/connect")

//routers
const authRouter = require("./routes/auth")
const jobsRouter = require("./routes/jobs")

//auth middleware
const auth = require("./middleware/authentication")
app.use(rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
}))
app.use(express.json());
app.use(helmet())
app.use(xss())
app.use(cors())
// extra packages

// routes
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/jobs", auth,jobsRouter)



app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
