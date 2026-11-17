# Inventory and Data Management System

Web Dev III — Assignment 3

## Requirements
- Node.js
- MongoDB running locally (or a MongoDB connection string)
- Postman for API testing

## Setup
1. Open this folder in VS Code.
2. Install packages:

   ```bash
   npm install
   ```

3. Copy `.env.example` to a new file named `.env`.
4. Update `MONGODB_URL` if your MongoDB connection string is different.
5. Start the server:

   ```bash
   npm start
   ```

The server uses the port configured in `.env`.

## API endpoints

Base URL: `http://localhost:5001/api/products`

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/` | Create a product |
| GET | `/` | Get products; supports category, sort, page and limit |
| GET | `/:id` | Get one product |
| PUT | `/:id` | Update product details |
| PATCH | `/:id/stock` | Restock or record a sale |
| DELETE | `/:id` | Delete a product |
| GET | `/low-stock` | Low-stock report |
| GET | `/summary` | Category-wise inventory summary |

### Create product body

```json
{
  "name": "Notebook Pack",
  "sku": "NB-101",
  "category": "Stationery",
  "price": 100,
  "quantity": 50,
  "reorderLevel": 10,
  "supplier": "Classmate"
}
```

### Stock adjustment body

Restock:

```json
{
  "operation": "restock",
  "quantity": 10
}
```

Sale:

```json
{
  "operation": "sale",
  "quantity": 5
}
```

### Filtering, sorting and pagination examples

- `GET /api/products?category=Stationery`
- `GET /api/products?sort=price`
- `GET /api/products?page=1&limit=5`
- `GET /api/products?category=Stationery&sort=-price&page=1&limit=5`

## Notes
- `.env` and `node_modules` are excluded by `.gitignore`.
- Do not commit your actual `.env` file.
