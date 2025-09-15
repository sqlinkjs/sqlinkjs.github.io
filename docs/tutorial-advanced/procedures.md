---
sidebar_position: 3
---

# Procedures

MySQL **stored procedures** allow you to encapsulate a sequence of SQL statements into a single reusable unit.  
They are commonly used to:

- Automate repetitive database tasks  
- Enforce business logic  
- Improve performance by reducing round trips  
- Enhance security by controlling how queries are executed  

If you’re new to stored procedures, learn how to create them from the [MySQL official documentation](https://dev.mysql.com/doc/refman/8.0/en/create-procedure.html).

---

## Endpoint

- **URL**:  `http://localhost:PORT/procedure/PROCEDURE_NAME`
- **Method**: `GET`  
- **Response**: `200 OK` (on success)  

---

## Example

### 1. Procedure Without Parameters

**Request**

```http
GET http://localhost:3000/procedure/topFiveUsers()
```
**Result**

Executes the stored procedure topFiveUsers and returns the result set.

### 2. Procedure With Parameters

**Request**

```http
GET http://localhost:3000/procedure/topFiveUsers('Male')
```
**Result**

Executes the stored procedure `topFiveUsers` with `'Male'` as the input parameter.
The arguments passed must match the parameters defined in the procedure.

> ⚠️ **Important Notes:**  
> - The number and type of arguments passed must exactly match the procedure definition in MySQL.
> - Procedures can return multiple result sets depending on their internal logic.
> - Parameters must be passed in the same order as defined in the procedure.

## Best Practices
- Use procedures to encapsulate complex logic instead of writing raw queries repeatedly.
- Always validate input parameters before calling procedures.
- Keep procedure definitions versioned (e.g., in migrations) for consistency across environments.