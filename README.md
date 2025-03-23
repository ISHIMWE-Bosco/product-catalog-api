# 📦 Product Catalog API

![Node.js](https://img.shields.io/badge/Node.js-18.0-green)
![Express.js](https://img.shields.io/badge/Express.js-4.18.2-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-success)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🔧 Installation

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file in the root directory and add the following:
```env
MONGO_URI=mongodb://127.0.0.1:27017/product-catalog
PORT=5000
```

### **4. Start the Server**
```bash
npm start
```
or
```bash
node index.js
```
The server will run on **http://localhost:5000**.

---

## 🌐 API Endpoints  
- **GET /products** → Get all products  
- **GET /products/:id** → Get a product by ID  
- **POST /products** → Add a new product  
- **PUT /products/:id** → Update an existing product  
- **DELETE /products/:id** → Delete a product by ID  

---

## 📌 Example Requests  

### **1️⃣ Get All Products**  
```bash
GET http://localhost:5000/products
```
#### **Response:**  
```json
[
  {
    "_id": "67dffcbb8f08032bedb71236",
    "name": "Laptop",
    "price": 1000,
    "category": "Electronics"
  },
  {
    "_id": "67dffcbb8f08032bedb71237",
    "name": "Smartphone",
    "price": 500,
    "category": "Electronics"
  }
]
```

### **2️⃣ Get Product by ID**  
```bash
GET http://localhost:5000/products/67dffcbb8f08032bedb71237
```
#### **Response:**  
```json
{
  "_id": "67dffcbb8f08032bedb71237",
  "name": "Smartphone",
  "price": 500,
  "category": "Electronics"
}
```

### **3️⃣ Add a Product**  
```bash
POST http://localhost:5000/products
Content-Type: application/json
```
#### **Body:**  
```json
{
  "name": "Table",
  "price": 200,
  "category": "Furniture"
}
```

### **4️⃣ Update a Product**  
```bash
PUT http://localhost:5000/products/67dffcbb8f08032bedb71237
Content-Type: application/json
```
#### **Body:**  
```json
{
  "name": "Smartphone Pro",
  "price": 600
}
```

### **5️⃣ Delete a Product**  
```bash
DELETE http://localhost:5000/products/67dffcbb8f08032bedb71237
```

---

## ⚙️ Usage  
- **Run the API on localhost** and test with **Postman or cURL**.  
- **Use the provided endpoints** to manage products in the catalog.  
- **Modify the API** to add more features like authentication, filtering, or sorting.  

---

## 🚨 Limitations  
- **No authentication** → Any user can modify the products.  
- **Basic error handling** → Could be improved with custom error messages.  

---

## 🤝 Contributing  
1. **Fork the repository**  
2. **Create a new branch** (`git checkout -b feature-branch`)  
3. **Commit your changes** (`git commit -m "New Feature"`)  
4. **Push to GitHub** (`git push origin feature-branch`)  
5. **Submit a pull request**  

---

## 📝 License  
This project is licensed under the **MIT License**.  

---

## 🚀 Developed by  
**Bosco Ishimwe**  
GitHub: [ISHIMWE-Bosco](https://github.com/ISHIMWE-Bosco)  
