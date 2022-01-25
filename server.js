const fetch = require('node-fetch')
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const api_key = process.env.API_KEY;
const express = require('express')
const app = express()
const port = 3000
app.use("/public",express.static('public'))

app.get('/astroL', async (req, res) => {
     const fetchApiLondon = await fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=London", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            "x-rapidapi-key": api_key
        }
    })

    const astroResponseLondon = await fetchApiLondon.json()
    console.log(astroResponseLondon);
    res.json(astroResponseLondon)
})

app.get('/astroA', async (req, res) =>{
    const fetchApiAnkara = await fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=Ankara", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            "x-rapidapi-key": api_key
        }
    })

    const astroResponseAnkara = await fetchApiAnkara.json()
    console.log(astroResponseAnkara);
    res.json(astroResponseAnkara)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})