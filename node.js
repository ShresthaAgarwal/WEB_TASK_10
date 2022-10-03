// Import Node.js core module i.e http
var http = require('http');

// Create web server
var server = http.createServer(function (req, res) {
	
	// Check the URL of the current request
	if (req.url == '/') {
		
		// Set response header
		res.writeHead(200, { 'Content-Type': 'text/html' });
		
		// Set response content	
		res.write(
		`<html><body style="text-align:center;">
			<h1 style="color:green;">This is home page.</h1>
			<p>A computer science portal</p>
			</body></html>`);
		res.end();//end the response
	
	}
	else if (req.url == "/webtech") {
		
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(`
		<html><body style="text-align:center;">
			<h1 style="color:green;">WEB TASK 10</h1>
		</body></html>`);
		res.end();//end the response
	
	}
	else if (req.url == "/DS") {
		
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(`<html><body style="text-align:center;">
		<h1 style="color:green;">HELLO!!!!</h1>
		</body></html>`);
		res.end(); //end the response
	
	}
	else if (req.url == "/algo") {
		
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(`<html><body style="text-align:center;">
		<h1 style="color:green;">WEB TASK 10</h1>
	</body></html>`);
	res.end(); //end the response
	
}
	else
		res.end('Invalid Request!'); //end the response

// Server object listens on port 5000
}).listen(5000, ()=>console.log('Server running on port 5000'));
