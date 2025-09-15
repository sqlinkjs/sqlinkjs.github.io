---
sidebar_position: 2
---

# Inserting Data

In MySQL, **inserting data** refers to adding new records into a table.  
With SQLink, this is done through a simple **POST request** to the `/create` endpoint, allowing you to populate a table with fresh entries.

---

## Endpoint

- **URL**:  `http://localhost:[PORT]/table/TABLE_NAME/create`
- **Method**: `POST`  
- **Response**: `200 OK` (on success)  

---

## Example

Insert a New User

**Request**
```http
POST http://localhost:3001/table/users/create
Content-Type: application/json
```

**Payload**
```json
{
  "username": "John Doe",
  "useremail": "johndoe@email.com",
  "city": "Bangalore"
}
```

**Response**
```json
{
  "success": true,
  "message": "Data inserted successfully"
}
```

A new record will be inserted into the `users` table with the provided values.

> ⚠️ **Important Notes:**  
> - The **key names** in your JSON payload must exactly match the **column names** in the MySQL table.
> - Missing required columns may cause an error, depending on your table schema (e.g., if a column is `NOT NULL`).
> - SQLink will return a JSON response indicating whether the record was successfully inserted.

## Best Practices
- Always validate user input before sending it to the API to prevent invalid data from being inserted.
- Use meaningful column names in your schema to make payloads more readable.
- For bulk inserts, consider sending multiple requests or extending SQLink with batch processing (if supported).