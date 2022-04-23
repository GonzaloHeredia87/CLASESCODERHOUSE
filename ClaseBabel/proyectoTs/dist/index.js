"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const operaciones = __importStar(require("./lib/operaciones"));
const mensaje = 'Hola mundo estoy trabajando con typescriopt';
console.log(mensaje);
let number1 = 20, number2 = 5;
console.log(`La suma de ${number1} + ${number2} es ${operaciones.sumar(number1, number2)}`);
console.log(`La resta de ${number1} - ${number2} es ${operaciones.restar(number1, number2)}`);
console.log(`La multiplizar de ${number1} * ${number2} es ${operaciones.multiplicar(number1, number2)}`);
console.log(`La dividir de ${number1} / ${number2} es ${operaciones.dividir(number1, number2)}`);
