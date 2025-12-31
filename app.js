import 'dotenv/config';

import fs from "fs";
import path from "path";

import cookieParser from "cookie-parser";
import express from "express";
import flash from "connect-flash";
import requestIp from "request-ip";
import session from "express-session";

import { authRoutes } from "./routes/auth.routes.js";
import { verifyAuthentication } from "./middlewares/verify-auth-middleware.js";
import { shortenerRoutes } from "./routes/shortener.routes.js";

const app = express();

/* ===========================
   ✅ ENSURE UPLOAD DIR EXISTS
=========================== */
const uploadDir = path.join(process.cwd(), "public/uploads/avatar");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

/* =========================== */

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(cookieParser());

app.use(
  session({
    secret: process.env.JWT_SECRET || "my-secret",
    resave: true,
    saveUninitialized: false,
  })
);

app.use(flash());
app.use(requestIp.mw());

// Must be after cookieParser
app.use(verifyAuthentication);

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use(authRoutes);
app.use(shortenerRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
