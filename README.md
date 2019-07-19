## About application

Eclipse-cinema - an application for ordering movie tickets.

---

### How to start

To run the application you will need an installed MongoDB and NodeJS.

**Steps to run:**

1. Run MongoDB.
2. Go to the directory: "`Eclipse-cinema/server`" and enter "`node index`" for run the server.
3. Go to the directory: "`Eclipse-cinema/client`" and enter "`npm start`" for run the client.
4. In the address bar of the browser enter: [localhost:3000](http://localhost:3000).

### Admin panel activation

The administrator is assigned through a direct request to the database. You can use the MongoDB console, MongoDB management software (Example: Compass), or the API validation program (Example: Postman).

Therefore...

**Activation options:**

- Through the MongoDB management program.

  1. Register on the application.
  2. Connect to MongoDB.
  3. Select the database "`cinema-db`".
  4. Select the "`users`" collection.
  5. Select the user you want and change his "`status`" field from "`user`" to "`admin`".

- Through the API validator.
  1. Register on the application.
  2. Enter in the address bar address with your database port (My port: 4000): [localhost:4000/api/users](http://localhost:4000/userApi/users)
  3. In the list we select the user we need and copy his "`id`".
  4. Enter in the address bar: [localhost:4000/api/user/`copiedID`](http://localhost:4000/userApi/user)
  5. Choose PUT request and select JSON object.
  6. In the request body we enter: "`{ "status": "admin" }`".
