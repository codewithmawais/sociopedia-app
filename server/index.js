import express from "express";
import fs from "fs";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import relationshipRoutes from "./routes/relationships.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import 'dotenv/config'

app.use(express.json());
app.use(
  cors({
    origin: "https://simple-sociopedia.netlify.app",
    credentials: true,
    exposedHeaders: ["set-cookie"]
  })
);
app.use(cookieParser());

//middlewares
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://simple-sociopedia.netlify.app');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        fs.mkdir('../client/public/upload', (err) => {
        cb(null, "../client/public/upload");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/relationships", relationshipRoutes);

// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function () {
  console.log("API working!");
});