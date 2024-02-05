# MERN AMAZONA

# Lessons

1. Introduction
2. Install Tools
3. Create React App
4. Create Git Repository

5. Add routing

- npm i react-router-dom
- create route for home screen
- create router for product screen

7. Create Node.JS Server

   - run npm init in root folder
   - Update package.json set type: module
   - Add .js to imports
   - npm install express
   - create server.js
   - add start command as node backend/server.js
   - require express
   - create route for / return backend is ready
   - move products.js from frontend to backend
   - create route for /api/products
   - return products
   - run npm start

8. Fetch Products From Backend

   - set proxy in package.json
   - npm install axios
   - use state hook
   - use effect hook
   - use reducer hook

9. Add bootstrap UI Framework

   - npm install react-bootstrap bootstrap
   - update App.js

10. Create Product and Rating Component

- create Rating Component
- create Product Component
- Use Rating Component in Product Compnent

11. Create Loading and Message Component

- Create loading component
- Use spinner component
- Create message component
- Create utls.js to define getError function

12. Implement Add to Cart

- Create react context
- Define reducer
- Create Store provider
- Implement add to cart button click handler

13. Create Cart Screen

- Create 2 columns
- Display items list
- Create action column

14. Complete Cart Screen

- Click Handler for inc/dec item
- Click Handler for remove item
- Click Handler for checkout

15. Create Signin Screen

- Create sign in form
- Add email and password
- Add signin button

16. Connect to MongoDB Database

- Create Atlas mongodb database
- Install local mongodb database
- npm intsall mongoose
- Connect to mongodb database

21. Seed Sample Users

    1. create user model
    2. seed sample users

22. Create Signin Backend API

    1. create signin api
    2. npm install jsonwebtoken
    3. define generateToken

23. Complete Signin Screen

    1. handle submit action
    2. save token in store and local storage
    3. show user name in header

24. Create Shipping Screen

    1. create form inputs
    2. handle save shipping address
    3. add checkout wizard bar

25. Create Sign Up Screen

    1. create input forms
    2. handle submit
    3. create backend api

26. Implement Select Payment Method Screen

    1. create input forms
    2. handle submit

27. Create Place Order Screen

    1. show cart items, payment and address
    2. handle place order action
    3. create order create api

    4. calculate order summary

28. Implement Place Order Action

    1. handle place order action
    2. create order create api

29. Create Order Screen

    1. create backend api for order/:id
    2. fetch order api in frontend
    3. show order information in 2 cloumns

30. Pay Order By PayPal
    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PayPalScriptProvider in index.js
    5. use usePayPalScriptReducer in Order Screen
    6. implement loadPaypalScript function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend

<!-- TEST ACCOUNT FOR PAYPAL: sb-zlrsx29507478@business.example.com -->
<!-- PASSWORD: 5Ajs}=6$ -->

<!-- PROJECT WEBSITE = https://amazona.onrender.com/ -->
