import express from "express";
import cors from "cors";
import { createServer } from "http";

import { errorHandler } from "./middlewares/errors/errorHandler.js";
import { logErrors } from "./middlewares/errors/logErrors.js";

const app = express();
const httpServer = createServer(app);

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
        origin: process.env.CLIENT_URL,
    })
);

// routes
app.use("/send-email", (req, res, next) => {
    return res.json({
        test: "Hello",
    });
});

app.use(logErrors);
app.use(errorHandler);

export default httpServer;
