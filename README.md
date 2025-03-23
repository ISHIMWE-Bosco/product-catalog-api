Product Catalog API
Author: Bosco Ishimwe
This is a Node.js and Express-based REST API for managing a product catalog. It allows users to create, read, update, and delete products stored in a MongoDB database.
________________________________________
Setup and Installation
Prerequisites:
•	Node.js (v14+)
•	MongoDB (local or cloud instance)
•	Git (optional)
Installation Steps:
1.	Clone the repository:
bash
CopyEdit
git clone https://github.com/ISHIMWE-Bosco/product-catalog-api.git
cd product-catalog-api
2.	Install dependencies:
bash
CopyEdit
npm install
3.	Create a .env file in the root directory and add:
plaintext
CopyEdit
MONGO_URI=your_mongodb_connection_string
PORT=5000
4.	Start the server:
bash
CopyEdit
npm start
The API will run on http://localhost:5000.
________________________________________
API Documentation
1. Get All Products
•	Endpoint: GET /products
•	Description: Fetches all products in the catalog.
•	Response:
json
CopyEdit
[
  {
    "_id": "67dffcbb8f08032bedb71236",
    "name": "Laptop",
    "price": 1000,
    "category": "Electronics"
  }
]
________________________________________
2. Get Product by ID
•	Endpoint: GET /products/:id
•	Example: GET /products/67dffcbb8f08032bedb71236
•	Response:
json
CopyEdit
{
  "_id": "67dffcbb8f08032bedb71236",
  "name": "Laptop",
  "price": 1000,
  "category": "Electronics"
}
________________________________________
3. Create a New Product
•	Endpoint: POST /products
•	Request Body:
json
CopyEdit
{
  "name": "Table",
  "price": 200,
  "category": "Furniture"
}
•	Response:
json
CopyEdit
{
  "message": "Product created successfully",
  "product": {
    "_id": "67e00123456789abcdef",
    "name": "Table",
    "price": 200,
    "category": "Furniture"
  }
}
________________________________________
4. Update a Product
•	Endpoint: PUT /products/:id
•	Example: PUT /products/67dffcbb8f08032bedb71236
•	Request Body:
json
CopyEdit
{
  "price": 1200
}
•	Response:
json
CopyEdit
{
  "message": "Product updated successfully",
  "product": {
    "_id": "67dffcbb8f08032bedb71236",
    "name": "Laptop",
    "price": 1200,
    "category": "Electronics"
  }
}
________________________________________
5. Delete a Product
•	Endpoint: DELETE /products/:id
•	Example: DELETE /products/67dffcbb8f08032bedb71236
•	Response:
json
CopyEdit
{
  "message": "Product deleted successfully"
}
________________________________________
Assumptions and Limitations:
•	The API does not have authentication and authorization.
•	It assumes a valid MongoDB connection string is provided in .env.
•	Error handling is minimal; additional validation can be implemented.

