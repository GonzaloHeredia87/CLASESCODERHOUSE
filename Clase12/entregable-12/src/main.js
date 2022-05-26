import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import cookie from 'cookie-parser';
import config from './config.js'

import { Server as HttpServer } from 'http'
import { Server as Socket } from 'socket.io'

import authWebRouter from './routers/web/auth.js'
import homeWebRouter from './routers/web/home.js'
import productosApiRouter from './routers/api/productos.js'

import addProductosHandlers from './routers/ws/productos.js'

const cookieParser = cookie();
//import addMensajesHandlers from './routers/ws/mensajes.js'

//--------------------------------------------
// instancio servidor, socket y api

const app = express()
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

//--------------------------------------------
// configuro el socket

io.on('connection', async socket => {
    
});

//--------------------------------------------
// configuro el servidor

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


app.set('views', './views');
app.set('view engine', 'ejs');

app.use(session({
    store: MongoStore.create({
        mongoUrl: config.mongoRemote.url
    }),
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 4000
    }
}))
const logout = true;
const getSessionName = req => req.session.nombre ?? '';

//--------------------------------------------
// rutas del servidor API REST
app.post('/login', (req, res)=>{

    let  nombre = req.body.nombre;
    let pwd = req.body.password;
    req.session.nombre = req.body.nombre;
    req.session.pwd = req.body.password;
    req.session.contador = 1;
    
    res.redirect(200, '/home');
  
 
});
app.get('/login', (req, res)=>{
    
    res.render('pages/login', {
     })
 
});
app.get('/logout', (req, res)=>{
    const mensaje = `Hasta luego ${getSessionName(req)}`;

    req.session.destroy(err => {
        if (err) {
            res.json({ error: 'salir', body: err });
        } else {
            res.render('pages/login', {
            })
        }
    })

 
});
//--------------------------------------------
// rutas del servidor web
app.get('/home', (req, res) => {
    console.log(req.session.nombre);
    console.log("Revisando los session: "+getSessionName(req));
    if(getSessionName(req)!=''){
        req.session.cookie.maxAge = 4000;
        console.log("Revisando los session: "+getSessionName(req));
        req.session.contador++;
        let nombre = getSessionName(req);
        res.render('pages/home', {
            nombre
            })
    }
    else{
        console.log("Hasta Luego");
        res.render('pages/login', {
            
            }) 
    }

});

//--------------------------------------------
// inicio el servidor

const connectedServer = httpServer.listen(config.PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))
