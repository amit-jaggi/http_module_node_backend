const app1 = require("http");

// creating a server of app1
app1.createServer((request, response) => {
    // text-response
    response.write("Hello World");
    
    // closing the server
    response.end();
}).listen(3000);


const app2 = require("http");
// creating a server of app2
app2.createServer((request, response) => {
    
    // html-response
    response.write("<h1>Hello Jaggi</h1>");

    // closing the server
    response.end();
}).listen(5000);


const app3 = require("http");
// creating a server of app3
app3.createServer((request,response)=> {
    // JSON-response
    response.write(
        JSON.stringify(
            {name: "Amit Jaggi", age: 28}
        )
    );

    // closing the server
    response.end();
}).listen(8000);