//#TASK1-A: GET-reqests > node:https with callbacks

// https is a very low level module for GET request (normally you use fetch)
// Its arguments are:
// a config object with the URL
// a callback function that runs immeditaly after the connection has been sucessfuly estbalished and the status and header received.
//    This callback function takes as its argument an object usually called "res" which is needed
//    to read data from the server. The res object acts as a Readable Stream. This means it is an interface for reading data that is
// currently streaming from the network. Because it is a stream, the data is not immediately accessible as a variable;
// it must be consumed chunk-by-chunk using event listeners (like res.on('data')).
// on the ohter hand the function returns a "req" object which is needed to initiate the transmission of the response.
// you start the transmission of the response by calling req.end() - acts as a "remote contrroler".
// inside the function you have immediate access to Status Code with res.statusCode and Headers: res.headers
// these are properties of this res object
// crucially there's no "body" property because this is only accessed through listeners
// to listen to the data packets being sent you use res.on("Data"), callbackfunction) - the call backfunction here
// says what shoul;d be doen everytime a packet is received so you want to add it to a variable "body:"
// then we use another listnere res.on("Data"), callbackfunction) to do something when all the packets have been collected
// normally return the body out.
// with GET requets we obviosly need to make sure they run fully before getting the response
// http.request does run asynchronosly under the hood via Libluv but doesn't return a promise
// Therefore in order to achieve good ordering we need to either make it return a promise
// Or use a callback function that runs only after the request is finished.
// first of all we start defining the request configuration object

const { writeFile } = require("node:fs/promises");
const https = require("node:https");

const httpRequestConfig = {
  host: "nc-leaks.herokuapp.com",
  path: "/api/confidential",
  method: "GET",
};

console.log(
  `[1] Start: about to invoke function getRequestViaCallback, passing a callback that will show the data once fetched`
);

getRequestViaCallback(httpRequestConfig, (status, headers, data) => {
  console.log("[9] Success! Back in main code with data:");
  console.log(
    `[10] received data from GET request >> \n ${status}\n HEADERS \n`,
    headers,
    `\n PREVIEW OF BODY  >>> ${data.slice(0, 50)}, \n BODY LENGTH = ${
      data.length
    }`
  );
});

console.log(
  "[4] End: Main finished. The stack is free. Event Loop takes over > OS sends requqest to the server. As soon as status and header are onbtained, the res object is created (readable stream) and these added to them then passed to the the callback function of http.request that is executed."
);

// we wrap the http.request in a function getRequestViaCallback
// that takes a callback which will run only once the data has been fetched
function getRequestViaCallback(options, callback) {
  console.log(
    `[2] Inside getRequestViaCallback()...about to invoke http.request() with config object ${httpRequestConfig}, this will create a req object and add the callback function to the event loop`
  );

  const req = https.request(options, (res) => {
    console.log(
      "[5] Https Callback is now running, variable body about to be initialised, then listener data will capture every packet and add it to body"
    );

    const statusLine = `STATUS LINE = HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`;
    const headers = res.headers;

    let body = "";

    res.on("data", (packet) => {
      console.log("[6] Stream: Received a packet will add to body.");
      body += packet;
    });

    res.on("end", () => {
      console.log("[7] Stream: Finished. Processing data...string > JSON");
      const json = JSON.parse(body);

      // THE HAND-OFF:
      // We call the callback function to pass the data back.
      console.log(
        "[8] About to call the callback of getRequestViaCallback in order to show the body"
      );
      callback(statusLine, headers, json.instructions);
    });
  });

  console.log(
    "[3] A req object (writable stream) has now been created, about to initiate the request via req.end() which will hand off request to OS"
  );
  req.end(); // Actually sends the request
}

// still to do: clean up comments, save into file, error handling (both network request and status code)
