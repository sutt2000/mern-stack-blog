import express from "express";
import hpp from "hpp";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import config from "./config";
//Routes
import postRoutes from "./routes/api/post";
import userRoutes from "./routes/api/user";
import authRoutes from "./routes/api/auth";

const app = express();
const { MONGO_URI } = config;

app.use(hpp());
// 서버보안 설정
app.use(helmet());
// 브라우져가 다른 도메인이나 서비스가 요청하는 것으로
//                   모두 허락 한다
app.use(cors({ origin: true, credential: true }));
// 로그확인
app.use(morgan("dev"));
//json 형태로 해석해 주세용~
app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connection Success!!"))
  .catch((e) => console.log(e));

//라우터란 분기점으로 책깔피같은것이다!!
app.get("/");
app.use("/api/post", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

export default app;
