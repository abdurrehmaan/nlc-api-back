const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

//Routes
// const userRouter = require("./routes/userRoutes");
// const organizationRouter = require("./routes/organizationRoutes");
// const adminRouter = require("./routes/superAdminRoutes");
// const standardRouter = require("./routes/standardRoutes");
// const assetsRouter = require("./routes/assetsRoutes");
// const siteRouter = require("./routes/siteRoutes");
// const deptRouter = require("./routes/deptRoutes");
// const dataRouter = require("./routes/dataRoutes");

const PORT = process.env.PORT || 9001;

//database connection   
// connectDb();

//app
const app = express();
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173","http://localhost:3001", "https://osct.vercel.app"], 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(express.json({ limit: '50mb' }));

// If you also need to handle URL-encoded data
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
// app.use(cors({
//   origin: "*"
// }))
// app.options("*", cors())
// app.use(
//   cors({
//     origin: ["http://localhost:3000/", "http://localhost:3001"],
//     credentials: true,
//   })
// );
// app.use(
//   cors({
//     credentials: true,
//     origin: [
//       "http://localhost:3000",
//       "http://localhost:3001",
//       "https://osct-backend-nodejs.vercel.app/",
//       "https://osct-backend-nodejs.vercel.app",
//       "https://osct-admin.vercel.app/",
//       "https://osct-admin.vercel.app",
//     ],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   })
// );
app.set("trust proxy", 1);
// app.options("/api", cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//To allow cross-origin requests

//test1122

// app.use(function (req, res, next) {
//   // res.header("Access-Control-Allow-Origin", "*")
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   if ("OPTIONS" == req.method) {
//     res.send(200);
//   } else {
//     next();
//   }
// });
// app.options("/api/admin/login", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://osct-admin.vercel.app");
//   res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.sendStatus(204); // No Content
// });

//router middleware

app.post("/api/nlc", (req, res) => {
  console.log("Data ===> ", req.body);
  res.send("Welcome to NLC API");
});
// app.use("/api", userRouter);
// app.use("/api/admin", adminRouter);
// app.use("/api/org", organizationRouter);
// app.use("/api/standard", standardRouter);
// app.use("/api/assets", assetsRouter);
// app.use("/api/site", siteRouter);
// app.use("/api/dept", deptRouter);
// app.use("/api", dataRouter);



//port listening string
app.listen(PORT, () => {
  console.log("------------------------------------------------");
  console.log(`Project name: ${process.env.PROJECT}`);
  console.log(`Hosted by: ${process.env.COMPANY}`);
  console.log(`Developer of the Project: ${process.env.DEVELOPER}`);
  console.log(`${process.env.PROJECT} backend server started`);
  console.log(`Status: Running`);
  console.log(`Listening to Port: ${PORT}`);
  console.log("-----------------------------------------------");
});
