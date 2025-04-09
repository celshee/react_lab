
import express,{Request,Response} from 'express'

import db_connect from './config/db';
import completed from './models/completed.js'
import planned from './models/planned.js'

const app = express()
const port = 3000
db_connect()

app.get('/planned', (req:Request, res:Response) => {
    res.send('Hello World!')
})
app.get('/completed',  (req:Request, res:Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})