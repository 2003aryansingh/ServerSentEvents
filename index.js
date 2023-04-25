const app = require("express")(); 


app.get("/", (req,res)=>{
    res.send("hello!");
});


app.get("/stream",(req,res)=> {
    res.setHeader("Content-Type", "text/event-stream");
    send(res);
});


const port = 8080;

let i = 0;

function send(res) {
    res.write("data: " + `hello hi how are you [${i++}]\n\n`);

    setTimeout(()=> send(res), 1000);
}

app.listen(port, ()=> {
    console.log("Server initiated on port 8080");
});



//Client code 

// let sse = new EventSource("http://localhost:8080/stream");
// sse.onmessage = console.log