import express from 'express'
import ViteExpress from 'vite-express'

const app = express()

app.use(express.json())

const db = [
    {
        item: 'Gold Hoops',
        howMany: 8,
        id: 1
    },
    {
        item: 'Gold Birthflower Necklace',
        howMany: 6,
        id: 2
    },
    {
        item: 'Stackable Gold Rings',
        howMany: 12,
        id: 3
    }
]

app.get('/jewelry', (req, res) => {
    res.status(200).send(db)
})

app.put('/edit-jewelry/:item/:howMany', (req, res) => {
    let item = req.params.item
    console.log(item)
    let quantity = +req.params.howMany
    console.log(quantity)

    for (let i =0; i < db.length; i ++) {
        if (db[i].item === item){
            db[i].howMany = quantity
           
        }
    }
        res.status(200).send(db)
})







ViteExpress.listen(app, 8000, () => {console.log('listening on 8000')})