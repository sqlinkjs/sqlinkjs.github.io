---
sidebar_position: 3
---

# Upserting Data

An **upsert operation** is a database action that combines the functionalities of both **update** and **insert**.  

- If the record (identified by a unique key or primary key) **already exists**, the operation **updates** it with the new data.  
- If the record **does not exist**, the operation **inserts** a new record into the database.  

This makes upserts useful for scenarios where you want to ensure a record exists with the latest data without manually checking first.

---

## Endpoint

- **URL**: `http://localhost:PORT/table/TABLE_NAME/upsert(id,value)`
- **Method**: `POST`  
- **Response**: `200 OK` (on success)  

---

## Example


**Request**
```http
POST http://localhost:3000/table/users/upsert(userid,10)
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
  "message": "Upsert operation completed"
}
```

> ⚠️ **Important Notes:**  
> - Ensure the `id` column used in the URL is a **unique identifier** (typically a primary key).
> - Ensure the id column used in the URL is a unique identifier (typically a primary key).
> - If constraints exist (e.g., `NOT NULL`, `UNIQUE`), the payload must satisfy them to avoid errors.

## Best Practices
- Use upserts when syncing data or handling **idempotent operations** (safe to retry without creating duplicates).
- Always validate payloads before sending them to SQLink.
- Combine with authentication to ensure only authorized users can perform upserts.
