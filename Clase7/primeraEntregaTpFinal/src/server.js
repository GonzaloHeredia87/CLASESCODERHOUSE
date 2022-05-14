const express = require('express')
const { Router } = express

const ContenedorArchivo = require('./contenedores/ContenedorArchivo.js')

//--------------------------------------------
// instancio servidor y persistencia

const app = express()

// -- probando lectura y estritura de archivos
const productos = new ContenedorArchivo('dbProductos.json');
const carritos = new ContenedorArchivo('dbCarritos.json');

app.set('views', './public');
app.set('view engine', 'ejs');
//--------------------------------------------
// permisos de administrador MIDDLEWARES

const esAdmin = true

function crearErrorNoEsAdmin(ruta, metodo) {
    
}

function soloAdmins(req, res, next) {
}

//--------------------------------------------
// configuro router de productos

const productosRouter = new Router()

productosRouter.get('/', (req, res)=>{
    const data_producto = productos.listar(1);
    //console.log(data_producto);
    //res.json(data_producto);
    res.render('productos', { productos: data_producto});
});
//--------------------------------------------
// configuro router de carritos

const carritosRouter = new Router()

carritosRouter.get('/', (req, res)=>{
    const data_producto = productos.listar(1);
    //console.log(data_producto);
    //res.json(data_producto);
    res.render('carrito', { productos: data_producto});
});
carritosRouter.post('/', (req, res) =>{
    console.log(req);
});

//--------------------------------------------
// configuro el servidor

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)

module.exports = app