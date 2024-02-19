const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config();
const database=require("./config/database")
const userRoutes=require('./route')

const PORT=process.env.PORT ||5000;


app.use(express.json());
app.use(cors({
    // origin:'*',
    origin:'https://port-folio-gray.vercel.app/',
    credentials:true,
}))
database.connect();

app.use('/api',userRoutes)


app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});