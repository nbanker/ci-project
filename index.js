const express = require('express')
const app = express()
require('dotenv').config();

const cmt = process.env.TEST_COMMENT


app.get('/', (req, res)=>{
	res.send(`${cmt}`)
})

app.listen(3000)
