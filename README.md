Full-Stack E-Commerce Application
This project represents a basic e-commerce application with user authentication, product listings, and a shopping cart. The application demonstrates proficiency in both frontend (React) and backend (Node.js) development, along with database integration (MongoDB) and API development (Express).
	
Technologies Used
•	Frontend: React, Redux, React Router
•	Backend: Node.js, Express, MongoDB
•	Authentication: JWT

Features
•	User Authentication:
o	Register new users
o	Login existing users
o	Logout functionality
o	Protected routes for admin actions

•	Product Management:
o	List of products with basic information
o	Detailed product view

o	Admin functionalities:
	Add new products
	Update existing products
	Delete products

•	Shopping Cart:
o	Add products to cart
o	View cart with product details
o	Remove items from cart

o	Product Search and Filtering:
	Search by product name
	Filter by category or price range

Folder Structure
The project will follow a standard structure, with separate folders for frontend, backend, and shared resources.
•	frontend
o	src 
	components
	containers
	actions
	reducers
	App.js

•	backend
o	server.js
o	routes 
	auth.js
	products.js
	cart.js

o	models 
	User.js
	Product.js
	CartItem.js

Installation and Usage
1.	Clone the repository.
2.	Install dependencies:
o	Frontend:
Bash
cd frontend && npm install
o	Backend:
Bash
cd backend && npm install
3.	Configure database connection in backend/config/db.js.
4.	Start the backend server:
Bash
cd backend && npm start
5.	Run the frontend development server:
Bash
cd frontend && npm start

Testing and Deployment
•	Unit tests will be written using a testing framework like Jest (frontend) and Mocha (backend).
•	Deployment can be done on platforms like Heroku or AWS for backend and a CDN like Netlify for frontend.
