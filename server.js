// const dotenv = require("dotenv");
const express = require("express");
// const session = require("express-session"); //this package is to activate session after login
// const userRoutes = require("./routes/users/users");
// const postRoutes = require("./routes/posts/posts");
// const commentRoutes = require("./routes/comments/comments");
const restoRoutes = require("./routes/resto/resto");
// const globalErrHandler = require("./middlewares/globalHandler");
// const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
// const Post = require("./models/post/Post");
const truncatePost = require("./utils/helpers");
// dotenv.config(); //pour utiliser les données dans le fichier .env, il faut l'appeler au début. Librairie dotenv
// require("./config/dbConnect");

const app = express();

// helpers
app.locals.truncatePost = truncatePost;

// middlewares
// configure ejs
app.set("view engine", "ejs");
// serve static files
app.use(express.static(__dirname, +"/public"));

app.use(express.json()); //to get the json from body
app.use(express.urlencoded({ extended: true })); //to get the data from website

// -------------------------------------
// middlewares--se the routes folder
// -------------------------------------

// methode override(post and put)
app.use(methodOverride("_method"));

// session configuration
// app.use(
//   session({
//     secret: process.env.SESSION_KEY,
//     resave: false,
//     saveUninitialized: true,
//     store: new MongoStore({
//       mongoUrl: process.env.MONGO_URL,
//       ttl: 24 * 60 * 60, //date of expiration of session
//     }),
//   })
// );

// save the login user into locals
// app.use((req, res, next) => {
//   if (req.session?.userAuth) {
//     res.locals.userAuth = req.session.userAuth;
//   } else {
//     res.locals.userAuth = null;
//   }
//   next();
// });

// render home page
app.get("/", async (req, res) => {
  res.render("index");
});

// -----------------------------
// app.use("/api/v1/users", userRoutes);
// app.use("/api/v1/posts", postRoutes);
// app.use("/api/v1/comments", commentRoutes);
app.use("/api/v1/resto", restoRoutes);

// listen server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`server is running on port ${PORT}`));
