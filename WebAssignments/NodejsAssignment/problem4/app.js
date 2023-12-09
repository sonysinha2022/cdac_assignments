const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// Use middleware to parse URL-encoded and JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle the POST request from the form
app.post('/submit', (req, res) => {
    const { empId, name, age, salary } = req.body;

    // Display details in the console
    console.log('Employee ID:', empId);
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Salary:', salary);

    // Send the details as a response to display in the browser
    res.send(`<h1>Employee Details</h1> <p><strong>Employee ID:</strong> ${empId}</p> <p><strong>Name:</strong> ${name}</p> <p><strong>Age:</strong> ${age}</p> <p><strong>Salary:</strong> ${salary}</p> `);
});
app.listen(9000,function(){
    console.log("Server is running on port 9000");
});
module.exports=app;