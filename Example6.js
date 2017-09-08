//imitate database connection handling
var events = require("events");
var emitter = new events.EventEmitter();


emitter.on("connectionOpened", function() {
    console.log("connectionOpened");
});

emitter.on("personAdded", function(name, age){
    console.log("personAdded: ", name, age);
});


emitter.on("connectionClosed", function() {
    console.log("connectionClosed");
});

emitter.emit("connectionOpened");
emitter.emit("personAdded", "foo", 10);
emitter.emit("connectionClosed");

