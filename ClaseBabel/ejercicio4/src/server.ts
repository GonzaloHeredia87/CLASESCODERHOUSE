import express from "express"
import { Superficie } from "./lib/superficie"
import { Perimetro } from "./lib/perimentro"

const app = express();
const superficie: Superficie = new Superficie();
const perimetro: Perimetro = new Perimetro();
app.get('/superficie/:figura/:param1/:param2?', (req, res)=>{
    let { figura, param1, param2} = req.params;
    let resultado 

    switch (figura) {
        case 'cuadrado':
            resultado = superficie.cuadrado(Number(param1));
            break;
        case 'superficie':
            resultado = superficie.rectangulo(Number(param1), Number(param2));
            break;
    
        default:
            break;
    }
    res.send({
        calculo: 'superficie',
        figura,
        param1,
        param2,
        resultado
    });
});
app.get('/perimetro/:figura/:param1/:param2?', (req, res)=>{
    let { figura, param1, param2} = req.params;
    let resultado 

    switch (figura) {
        case 'cuadrado':
            resultado = perimetro.cuadrado(Number(param1));
            break;
        case 'superficie':
            resultado = perimetro.rectangulo(Number(param1), Number(param2));
            break;
    
        default:
            break;
    }
    res.send({
        calculo: 'perimetro',
        figura,
        param1,
        param2,
        resultado
    });
});
const PORT =8000
app.listen(PORT, ()=>{
    console.log(`conectado al puerto: ${PORT}`);
});
