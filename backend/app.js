const express = require('express');
const path = require('path');
const cors = require('cors');
const {sequelize} = require('./models');

const app = express();
const port = 5000;

const userRoutes = require("./routes/user")

console.log(`port: ${port}`)
app.set("port", process.env.PORT || port);
sequelize.sync({force: false}).then(()=>console.log('DB 연결 SUCCESS')).catch((err)=>console.log(err));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({credentials: true, origin: '*'}))

app.use("/api", userRoutes);

app.listen(app.get('port'), ()=>{
  console.log(app.get('port'), '번 포트에서 대기 중');
})
// app.set("port", process.env.PORT || 5000);

// app.use(express.static(path.join(__dirname, "../frontend/build")))

// app.get('/', (req, res)=>{
//   console.log(path.join(__dirname, "../frontend/build/index.html"))
//   res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
// })

// app.listen(app.get("port"), ()=>{
//   console.log(`${app.get("port")}번 포트에서 대기중..`);
// })