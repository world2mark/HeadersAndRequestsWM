'use strict';


const HTTP = require('http');


const TheServer = HTTP.createServer((req, res) => {
    const MyOutput = [];

    MyOutput.push('<html><body>');

    MyOutput.push('<h1>Headers</h1>');
    MyOutput.push('<ul>');
    console.log(req.headers);
    for (const myHeaderArr of Object.entries(req.headers)) {
        MyOutput.push(`<li><b>${myHeaderArr[0]}: </b>${myHeaderArr[1]}</li>`);
    };

    MyOutput.push('</ul>');

    MyOutput.push('<h1>Req details</h1>');
    MyOutput.push('<ul>');
    MyOutput.push(`<li><b>url: </b>${req.url}</li>`);
    MyOutput.push('</ul>');

    MyOutput.push('</body></html>');
    res.end(MyOutput.join(''));
});

TheServer.listen(3002, () => {
    console.log('Server running');
});