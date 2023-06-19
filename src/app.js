import express from 'express';
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import routerProducts from './routes/products.router.js';
import routerCarts from './routes/carts.router.js';
import routerViews from './routes/views.router.js'
import { Server } from 'socket.io';

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars')

app.use('/', routerViews)

app.use('/api/products/', routerProducts)
app.use('/api/carts/', routerCarts)

const expressServer = app.listen(8080, () => console.log('Listening'))
const socketServer = new  Server(expressServer)

socketServer.on('connection', (socket) =>{
    console.log('connectedk')
})
/*app.listen(8080, () => {
    console.log('Servidor funcionando');
});*/