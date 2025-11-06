import express from "express";
import cors from "cors";
import { createServer } from "http";

import { errorHandler } from "./middlewares/errors/errorHandler.js";
import { logErrors } from "./middlewares/errors/logErrors.js";

const app = express();
const httpServer = createServer(app);

import { sendEmail } from "./utils/email.js";

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
        origin: process.env.CLIENT_URL,
    })
);

// routes
app.post("/send-email", (req, res, next) => {
    try {
        if (!req?.body?.name || !req?.body?.emailAddress || !req?.body?.message) {
            return res.status(400).json({
                error: "Name, email address and message fields are required",
            });
        }

        const { emailAddress, name, message } = req.body;
        console.log(`New email from ${name}`);
        sendEmail({
            from: emailAddress,
            text: `Message from ${name[0].toUpperCase() + name.slice(1)} :

        ${message}
        `,
        });

        return res.status(200).json({
            message: "message delivered to John successfully",
        });
    } catch (error) {
        next(error);
    }
});

app.use(logErrors);
app.use(errorHandler);

export default httpServer;
