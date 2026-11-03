require('dotenv').config()
const mongoose = require('mongoose')
const conectarDB = require('./db')
const Plato = require('./models/Plato')

const platos = [
  { nombre: 'Milanesa con papas', descripcion: 'Milanesa de carne con papas fritas', ingredientes: ['carne', 'pan rallado', 'huevo', 'papas'], precio: 9500, aptoCeliacos: false, aptoVeganos: false, aptoDiabeticos: false, calorias: 1100, imagen: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6' },
  { nombre: 'Ensalada César', descripcion: 'Lechuga, pollo, croutons y parmesano', ingredientes: ['lechuga', 'pollo', 'croutons', 'parmesano'], precio: 6800, aptoCeliacos: false, aptoVeganos: false, aptoDiabeticos: true, calorias: 480, imagen: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9' },
  { nombre: 'Bife de chorizo', descripcion: 'Bife a la parrilla con ensalada mixta', ingredientes: ['bife de chorizo', 'lechuga', 'tomate', 'cebolla'], precio: 12500, aptoCeliacos: true, aptoVeganos: false, aptoDiabeticos: true, calorias: 720, imagen: 'https://images.unsplash.com/photo-1558030006-450675393462' },
  { nombre: 'Risotto de hongos', descripcion: 'Arroz cremoso con hongos', ingredientes: ['arroz', 'hongos', 'cebolla', 'caldo de verduras'], precio: 8900, aptoCeliacos: true, aptoVeganos: true, aptoDiabeticos: false, calorias: 610, imagen: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371' },
  { nombre: 'Curry de garbanzos', descripcion: 'Garbanzos con curry y leche de coco', ingredientes: ['garbanzos', 'leche de coco', 'curry', 'arroz'], precio: 7600, aptoCeliacos: true, aptoVeganos: true, aptoDiabeticos: false, calorias: 650, imagen: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641' },
  { nombre: 'Salmón con vegetales', descripcion: 'Salmón a la plancha con vegetales salteados', ingredientes: ['salmón', 'zucchini', 'brócoli', 'limón'], precio: 14800, aptoCeliacos: true, aptoVeganos: false, aptoDiabeticos: true, calorias: 540, imagen: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288' },
  { nombre: 'Ravioles con bolognesa', descripcion: 'Ravioles de ricota con salsa bolognesa', ingredientes: ['harina', 'huevo', 'ricota', 'carne picada', 'tomate'], precio: 8200, aptoCeliacos: false, aptoVeganos: false, aptoDiabeticos: false, calorias: 890, imagen: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa' },
  { nombre: 'Bowl de quinoa', descripcion: 'Quinoa con palta, garbanzos y vegetales', ingredientes: ['quinoa', 'palta', 'garbanzos', 'tomate cherry'], precio: 7200, aptoCeliacos: true, aptoVeganos: true, aptoDiabeticos: true, calorias: 520, imagen: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
  { nombre: 'Pizza muzzarella', descripcion: 'Pizza a la piedra con muzzarella', ingredientes: ['harina', 'levadura', 'tomate', 'muzzarella'], precio: 8000, aptoCeliacos: false, aptoVeganos: false, aptoDiabeticos: false, calorias: 1250, imagen: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002' },
  { nombre: 'Sopa de calabaza', descripcion: 'Crema de calabaza con jengibre', ingredientes: ['calabaza', 'cebolla', 'jengibre', 'caldo de verduras'], precio: 4800, aptoCeliacos: true, aptoVeganos: true, aptoDiabeticos: true, calorias: 230, imagen: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a' }
]

const seed = async () => {
  await conectarDB()
  await Plato.deleteMany({})
  const insertados = await Plato.insertMany(platos)
  console.log(`Se insertaron ${insertados.length} platos`)
  await mongoose.disconnect()
}

seed()