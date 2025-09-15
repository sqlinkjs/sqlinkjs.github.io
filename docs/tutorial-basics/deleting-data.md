---
sidebar_position: 4
---

# Deleting Data

In MySQL, **deleting data** involves permanently removing records from a table.  
This process reduces the dataset by eliminating unwanted or obsolete entries. Once deleted, the data **cannot be recovered** unless backups exist.

---


## Endpoint

- **URL**:  `http://localhost:[PORT]/table/TABLE_NAME/delete(delete_key,delete_value)`
- **Method**: `DELETE`  
- **Response**: `200 OK` (on success)  

#### Parameters

- **`delete_key`** → The column name used to identify the record(s) to be deleted.  
- **`delete_value`** → The value of the column to match.  

This acts as the **condition** for the delete operation.  

---

## Example

Delete a User by ID

**Request**

```http
DELETE http://localhost:3001/table/users/delete(user_id,10)
```

**Response**
```json
{
  "success": true,
  "message": "Data deleted successfully"
}
```

> ⚠️ **Important Notes:**  
> - Deletion is **permanent**. Always double-check the `delete_key` and `delete_value` before executing.
> - If the `delete_value` does not match any records, **no rows will be deleted**.
> - Ensure that the column used as `delete_key` is unique (like a primary key) to avoid unintentionally deleting multiple rows.

## Best Practices
- Use **unique identifiers** (like `id` or `user_id`) for safe deletions.
- Always implement **authentication & authorization** to prevent unauthorized deletions.
- Consider using **soft deletes** (e.g., marking a record as inactive) if you want to keep historical data.