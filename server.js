const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), { flags: 'a' })


const googleAuthRouther = require('./routers/routerGoogleAuth');
const shippingRouter = require("./routers/shipping.router");
const pickupRouter = require("./routers/pickup.router");
const userRouter = require("./routers/user.router");
const wineRouter = require("./routers/wine.router");


app.use(cors({ origin: true, credentials: true }))
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(cookieParser());
app.use(morgan('tiny', { stream: logStream }))

app.use('/api/auth', googleAuthRouther.googleAuthRouther)
app.use('/api/shippings', shippingRouter.shippingRouter);
app.use('/api/pickups', pickupRouter.pickupRouter);
app.use('/api/users', userRouter.userRouter);
app.use('/api/wines', wineRouter.wineRouter);

app.use((err, req, res, next) => {
    res.status(500).send('Something is broken!');
});

app.listen(port, () => console.log('Express server is running on port ', port));