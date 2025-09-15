---
sidebar_position: 3
---

# Updating Data

In MySQL, **updating data** involves modifying existing records in a table.  
The update process allows you to change the values of specific fields within rows to reflect new information or correct inaccuracies.

---


## Endpoint

- **URL**:  `http://localhost:[PORT]/table/TABLE_NAME/update(update_key,update_value)`
- **Method**: `PUT`  
- **Response**: `200 OK` (on success)  

---

#### Parameters

- **`update_key`** → The column name used to identify the record(s) to be updated.  
- **`update_value`** → The value of the column to match.  

This acts as the **condition** for the update operation.  

---

#### Request Payload

The payload must be a **JSON object** containing the columns you want to update with their new values.

```json
{
"column1": "updated_value1",
"column2": "updated_value2"
}
```

## Example

Update a user

**Request**
```http
PUT http://localhost:3000/table/users/update(user_id,10)
Content-Type: application/json
```

**Payload**
```json
{
  "username": "John Doe"
}
```

**Response**
```json
{
  "success": true,
  "message": "Data updated successfully"
}
```

> ⚠️ **Important Notes:**  
> - Ensure the `update_key` exists in the table schema..
> - If the `update_value` does not match any record, **no rows will be updated**.
> - The payload must only include columns that exist in the table.

## Best Practices
- Always include a **WHERE-like condition** (`update_key`, `update_value`) to avoid updating all rows unintentionally.
- Validate payloads before sending them to SQLink to prevent invalid updates.
- Combine updates with authentication to ensure only authorized users can modify records.