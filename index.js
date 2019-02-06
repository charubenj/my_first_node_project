const express = require('express');// entire express library and dumped in express variable;


const server = express();  // php is served by apached in node creating server;
 server.get('/',(reqest,response)=>{      // get is a request method, v r defineg a homeroute('/')  to server, passing to paramenter
   console.log('This is the home route!');

   response.send('<h1>My Awesome Node Site!</h1>');

 });


 server.get('/api/user',(req,res)=>{           //end point

     const user={
         name: 'Marty Mcfly',
         occupation : 'Slacker',
         age : 17,
         email: 'marty@timetravel.com'

     }

     res.send(user);    //sending the response

});

 server.listen(9000,()=>{    //9000 port number, you can use any available node

     console.log('Server running at localhost: ', 9000);
 });
