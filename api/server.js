const express = require ("expres");
const postRouter = require ('./posts/posts-router');



const server = express () ;


server.use(express.json());

server.use('/api/posts', postRouter);



module.exports = server ;


// posts router'ını buraya require edin ve bağlayın
