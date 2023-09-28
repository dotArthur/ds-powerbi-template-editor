// Require would make available the express package to be used in our code
const express = require("express");

// Creates an express object
const app = express();

// It listens to HTTP get request.
// Here it listens to the root i.e '/'
app.get("/", (req, res) => {

// Using send function we send response to the client Here we are sending html
res.write("<h1> Hello World </h1>", "<button>Set JSON</button>")
res.end()
});



// It configures the system to listen to port 3000. Any number can be given instead of 3000, the only condition is that no other server
// should be running at that port
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    });
