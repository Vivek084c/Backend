const express = require('express')
const app = express()


const { products } = require('./express_tutorials/data.js')
app.get('/', (req, res)=>{
    // res.json(products)
    res.send('<h1> Home Page </h1><a href="/api/products">products</a>')
})

app.get('/api/products/:productID', (req, res)=>{

    // //extracting a paticuls product
    // const newProduct = products.map((product)=>{
    //     const {id, name, image} = product;
    //     return {id, name, image}
    // })

    //OR
    // console.log(req);
    // console.log(req.params);

    const {productID} = req.params;
    const singleProduct = products.find((product)=>product.id == Number(productID ))

    if (!singleProduct){
        return res.status(404).send('Product does not exist')
    }

    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res)=>{
    console.log(req.params)
    console.log(`hellow world`)
    res.end()
})

app.get('/api/v1/query', (req, res)=>{
    const {search, limit} = req.query;
    // console.log(req.query);
    let sortedProcduct = [...products];


    if (search){
        sortedProcduct = sortedProcduct.filter((product)=>{
            return product.name.startsWith(search)
        })
        // printing the search parameter
        console.log(`the value of serach is : ${search}`)
    }

    if (limit){
        sortedProcduct = sortedProcduct.slice(0,Number(limit))
        // printing the limit parameter
        console.log(`the limit valeu is : ${limit}`)
    }

    if (sortedProcduct.length < 1){
        return res.status(200).json({success : true, data : []})   
    }

    res.status(200).json(sortedProcduct)

})



app.listen(8888, ()=>{
    console.log(`The server is listening on port 8888....`)
})