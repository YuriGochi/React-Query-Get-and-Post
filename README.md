#Getting started 

Follow this commands to run this project.

npm install

npm run start

npx json-server --watch db.json  

In the hook usePeopleData there is two options of get data from de database, using Axios and using fetch Javiscript, you have to choose one and comment the another one to work.

References

https://www.youtube.com/watch?v=NYCG1o38oEQ&t=5s

https://www.youtube.com/watch?v=RKDfKbLJkZQ

https://blog.logrocket.com/axios-vs-fetch-best-http-requests/

https://axios-http.com/ptbr/docs/example

https://react-hook-form.com/get-started

https://www.npmjs.com/package/json-server

obs: If you install jsonserver globally you can run:

json-server --watch db.json --port 3000       

If you install locally you should run: 

npx json-server --watch db.json   
