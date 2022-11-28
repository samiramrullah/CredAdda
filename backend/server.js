const http=require('http')
const port=process.env.port ||5001
const app=require('./app')


const server=http.createServer(app)
console.log(`Running on Port ${port}`);
server.listen(port)