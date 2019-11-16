## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] Explain what a token is used for.
> Tokens are used to get access from more secure APIs that require login authentication.
> They are JSON objects that are generally stored in local storage.

- [ ] What steps can you take in your web apps to keep your data secure?
> Private Routes can be used to secure data. 
> Routes for Admins and Routes for Members as well as routes for the Public
>   that have not yet signed up for services can seperate what data is accessible.


- [ ] Describe how web servers work.
> The client's web browser uses a unique ip address to make a request to the server of that address. 
> The server sends back data that corresponds to the unique ip address. 
> The browser then renders say data. 
> Then sends any changes back to the server, using the unique url to that server.

- [ ] Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
> Create : method Post
> Read   : method Get
> Update : method Put 
> Delete : method Delete