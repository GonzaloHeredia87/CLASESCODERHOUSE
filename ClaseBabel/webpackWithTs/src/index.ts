import express from "express"
import Persona from "./Persona";

const app = express();
const p: Persona = new Persona("Gonzalo", "Heredia");
app.get('/', (req, res)=>{
    const date = new Date().toLocaleDateString();
    res.send({
        time: date,
        name: p.getFullName()
    });
});
const PORT =8000
app.listen(PORT, ()=>{
    console.log(`conectado al puerto: ${PORT}`);
});
