
const server = require('./server');
const PORT = process.env.PORT || 4000;

server.listen(4000, () => {
    console.log(`\n *** Sever Listening on ${PORT} ***\n`)
})