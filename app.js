import express from 'express';
import morgan from 'morgan';
const app = express();

app.use(morgan('tiny'));
app.use(express.json())

app.get('/users', (req, res)=>{
    res.json({id: 'juan', name: 'juan perez', lastName: 'perez'});
});

app.post('/users', (req, res)=> {
    const {body} = req;
    res.status(201).json({message: 'usuario creado', userInfo: body })
})

app.listen(3000);