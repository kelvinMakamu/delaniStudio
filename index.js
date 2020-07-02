let server = require('./server.js');
let router = require('./router.js');
let handlers = require('./requestHandlers.js');

let handle = {};

handle['/']=handlers.index;
handle['/index.html']=handlers.index;
handle['/portfolio.html']=handlers.portfolio;

server.start(router.route,handle);