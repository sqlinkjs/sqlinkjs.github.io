---
sidebar_position: 1
---

# Distinct Query

In MySQL, a **`DISTINCT` query** retrieves only unique records from a table by eliminating duplicate entries.  
This ensures that the results contain only one occurrence of each distinct value for the specified column(s).

---

## Endpoint

- **URL**: `http://localhost:PORT/table/TABLE_NAME/distinct(COLUMN_NAME)`
- **Method**: `GET`  
- **Response**: `200 OK` (on success)  

---

## Example

**Request**

```http
GET http://localhost:3000/table/users/distinct(username)
```

**Response**
```json
[
  { "username": "Alice" },
  { "username": "Bob" },
  { "username": "Charlie" }
]
```

> ⚠️ **Important Notes:**  
> - The column name passed in the URL must exactly match a valid column in the table schema.
> - The result will include only the distinct values of the specified column(s).

## Best Practices
- Use `DISTINCT` queries to avoid redundant data when working with dropdowns, filters, or reports.
- Be cautious when applying `DISTINCT` on large datasets, as it may affect query performance.
- Combine with other query options (e.g., `$filter`, `$orderby`) if you need refined distinct results.
