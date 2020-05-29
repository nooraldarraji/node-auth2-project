const server = require('./server');

const port = process.env.PORT || 5000;

server.listen(port, () => {
    return console.log(`\n == Server running on ${port} ==\n`)
});