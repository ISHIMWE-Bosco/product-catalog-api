Product Catalog API
Author: Bosco Ishimwe
This is a Node.js and Express-based REST API for managing a product catalog. It allows users to create, read, update, and delete products stored in a MongoDB database.

Setup and Installation
Prerequisites:
Node.js (v14+)

MongoDB (local or cloud instance)

Git (optional)

Installation Steps:
Clone the repository:

bash
Copy
Edit
git clone https://github.com/ISHIMWE-Bosco/product-catalog-api.git
cd product-catalog-api
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the root directory and add:

plaintext
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the server:

bash
Copy
Edit
npm start
The API will run on http://localhost:5000.

API Documentation
1. Get All Products
Endpoint: GET /products

Description: Fetches all products in the catalog.

Response:

json
Copy
Edit
[
  {
    "_id": "67dffcbb8f08032bedb71236",
    "name": "Laptop",
    "price": 1000,
    "category": "Electronics"
  }
]
2. Get Product by ID
Endpoint: GET /products/:id

Example: GET /products/67dffcbb8f08032bedb71236

Response:

json
Copy
Edit
{
  "_id": "67dffcbb8f08032bedb71236",
  "name": "Laptop",
  "price": 1000,
  "category": "Electronics"
}
3. Create a New Product
Endpoint: POST /products

Request Body:

json
Copy
Edit
{
  "name": "Table",
  "price": 200,
  "category": "Furniture"
}
Response:

json
Copy
Edit
{
  "message": "Product created successfully",
  "product": {
    "_id": "67e00123456789abcdef",
    "name": "Table",
    "price": 200,
    "category": "Furniture"
  }
}
4. Update a Product
Endpoint: PUT /products/:id

Example: PUT /products/67dffcbb8f08032bedb71236

Request Body:

json
Copy
Edit
{
  "price": 1200
}
Response:

json
Copy
Edit
{
  "message": "Product updated successfully",
  "product": {
    "_id": "67dffcbb8f08032bedb71236",
    "name": "Laptop",
    "price": 1200,
    "category": "Electronics"
  }
}
5. Delete a Product
Endpoint: DELETE /products/:id

Example: DELETE /products/67dffcbb8f08032bedb71236

Response:

json
Copy
Edit
{
  "message": "Product deleted successfully"
}
Assumptions and Limitations:
The API does not have authentication and authorization.

It assumes a valid MongoDB connection string is provided in .env.

Error handling is minimal; additional validation can be implemented.

