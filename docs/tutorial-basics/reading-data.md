---
sidebar_position: 1
---

# Reading Data

In MySQL, **reading data** involves retrieving records from a table.  
With SQLink, this is done through a RESTful API, allowing you to query tables directly using HTTP requests.  
This makes it easy to access stored information, filter results, and fetch only the data you need.

---

## Endpoint

- **URL**:  `http://localhost:[PORT]/table/TABLE_NAME/read?(options)`
- **Method**: `GET`  
- **Response**: `200 OK` (on success)  

---

## Parameters

### `$select`

The **`$select`** parameter determines which columns will be returned in the response.

- Use `*` to select **all columns** from a table.  
- Provide column names (comma-separated) to fetch **specific fields only**.  

---

#### Examples

#### 1. Select All Columns

Fetch all columns from the `users` table:

```http
GET http://localhost:3001/table/users/read?$select=*
```

Example Response:
```json
[
  {
    "id": 1,
    "username": "alice",
    "useremail": "alice@example.com",
    "city": "New York"
  },
  {
    "id": 2,
    "username": "bob",
    "useremail": "bob@example.com",
    "city": "Los Angeles"
  }
]
```

#### 2. Select Specific Columns

Fetch only `username`, `useremail`, and `city` from the users table:

```http
GET http://localhost:3001/table/users/read?$select=username,useremail,city
```

Example Response:
```json
[
  {
    "username": "alice",
    "useremail": "alice@example.com",
    "city": "New York"
  },
  {
    "username": "bob",
    "useremail": "bob@example.com",
    "city": "Los Angeles"
  }
]
```

#### Notes
- The `$select` parameter is mandatory. If omitted, the request may fail or return no data.
- Returned data is always in JSON format.
- Ensure that the table name and column names exist in your MySQL schema.
- Unauthorized requests (if authentication is enabled) will require a valid JWT token.

#### Best Practices
- Use `*` only when you need the entire dataset. For production apps, always select specific columns to improve performance.
- Combine `$select` with other query options (e.g., filtering, sorting, pagination) for more efficient data retrieval.

### `$filter`

The **`$filter`** parameter allows you to retrieve only the records that match a given condition.  
This is useful for narrowing down results based on specific criteria.

---

#### Usage

- `$filter` is always combined with `$select` and other query options using the `&` symbol.  
- Multiple conditions can be applied using logical operators such as `and` / `or`.  

**Example:**

```http
GET http://localhost:3001/table/users/read?$select=*&$filter=name eq 'john'
```

This query will return all columns from the `users` table where the `name` equals `"john"`.

#### Filter Operators
| Filter Option         | Notation | Description                                                                 |
| --------------------- | -------- | --------------------------------------------------------------------------- |
| Equals to             | `eq`     | Returns records where the column value matches the provided value.          |
| Not Equals to         | `ne`     | Returns records where the column value does not match the provided value.   |
| Lesser than           | `lt`     | Returns records where the column value is less than the reference value.    |
| Lesser than or equal  | `le`     | Returns records where the column value is less than or equal to reference.  |
| Greater than          | `gt`     | Returns records where the column value is greater than the reference value. |
| Greater than or equal | `ge`     | Returns records where the column value is greater than or equal to value.   |
| AND operator          | `and`    | Combines two or more conditions. All must be true.                          |
| OR operator           | `or`     | Combines two or more conditions. At least one must be true.                 |

#### Examples

1. Equals to (`eq`)

   ```http
    GET http://localhost:3001/table/users/read?$select=*&$filter=city eq 'London'
   ```
   Fetches all users where the city is `"London"`.

2. Not Equals to (`ne`)

   ```http
    GET http://localhost:3001/table/users/read?$select=id,username&$filter=city ne 'Paris'
   ```
   Fetches only `id` and `username` of users whose city is not `"Paris"`.

3. Greater Than (`gt`)

   ```http
    GET http://localhost:3001/table/orders/read?$select=id,amount&$filter=amount gt 100
   ```
   Fetches orders with `amount` greater than `100`.

4. Using AND (`and`)

   ```http
    GET http://localhost:3001/table/users/read?$select=*&$filter=city eq 'London' and age gt 25
   ```
   Fetches users who are in `"London"` **and** older than `25`.

5. Using OR (`or`)

   ```http
    GET http://localhost:3001/table/users/read?$select=*&$filter=city eq 'London' or city eq 'Paris'
   ```
   Fetches users who are either in `"London"` **or** `"Paris"`.

> ⚠️ **Important:**  
 - Always use the `&` symbol between query parameters (`$select`, `$filter`, etc.).
 - Ensure column names match exactly as defined in your MySQL schema.
 - String values must be enclosed in **single quotes** (`'value'`).

#### Best Practices
- Always combine `$select` with `$filter` to reduce payload size and improve performance..
- When filtering large datasets, use indexes on frequently queried columns in MySQL to optimize performance.

### `$orderby`


The **`$orderby`** parameter allows you to sort query results based on one or more column values.  
This makes it easier to organize data in **ascending** (default) or **descending** order.

---

#### Usage

- `$orderby` is combined with `$select` (and optionally `$filter`) using the `&` symbol.  
- By default, sorting is **ascending**.  
- Use the `desc` keyword to sort in **descending** order.  

---

#### Examples

1. Ascending Order (default)

```http
GET http://localhost:3001/table/users/read?$select=*&$orderby=name
```

Fetches all columns from the `users` table, sorted by the `name` column in **ascending order (A → Z)**.

2. Descending Order

```http
GET http://localhost:3001/table/users/read?$select=*&$orderby=name desc
```

Fetches all columns from the `users` table, sorted by the `name` column in **descending order (Z → A)**.

3. Ordering with Filters

You can combine `$orderby` with `$filter` for refined results:

```http
GET http://localhost:3001/table/users/read?$select=username,city&$filter=city eq 'London'&$orderby=username desc
```
Fetches all users from `"London"`, selecting only `username` and `city`, ordered by `username` in descending order.

#### Notes
- Always use the `&` symbol when combining `$orderby` with other query options.
- Multiple columns can be used for ordering by separating them with commas. Example:
  ```http
    $orderby=city asc,username desc
  ```
- If no ordering is specified, MySQL’s default order is used (which may vary).

#### Best Practices
- Use `$orderby` with indexed columns in MySQL for **faster sorting**.
- When working with large datasets, combine `$orderby` with **pagination** to optimize performance.


### `$top`


The **`$top`** parameter limits the number of records returned by a query.  
It works similarly to MySQL’s **`LIMIT`** clause and is useful when you only need a subset of rows, such as the first 5 users.

---

#### Usage

- `$top` must be combined with `$select`, and can optionally be used with `$filter` or `$orderby`.  
- It always returns records starting from the **first row** unless pagination (`$skip`) is also applied.  

---

#### Example

1. Return Top 5 Records

```http
GET http://localhost:3001/table/users/read?$select=*&$orderby=name desc&$top=5
```

Fetches the **top 5 users** from the `users` table, ordered by `name` in descending order.

Example Response:
```json
[
  {
    "id": 12,
    "username": "zara",
    "city": "London"
  },
  {
    "id": 8,
    "username": "yusuf",
    "city": "Paris"
  },
  {
    "id": 5,
    "username": "xavier",
    "city": "Berlin"
  },
  {
    "id": 3,
    "username": "william",
    "city": "New York"
  },
  {
    "id": 1,
    "username": "alice",
    "city": "Toronto"
  }
]
```

#### Notes
- Always use `&` to combine `$top` with other query parameters.
- `$top` without `$orderby` will return records in MySQL’s default order, which may not be predictable.
- To fetch the **“top N”** records in a meaningful order, always pair `$top` with `$orderby`.

#### Best Practices
- Use `$top` to reduce payload size when you only need a sample of results.
- Combine `$top` with `$orderby` for consistent results across requests.
- For pagination, use `$top` together with `$skip`.


### `$skip`

The **`$skip`** parameter allows you to skip a specified number of records from the result set.  
It is commonly used together with **`$top`** to implement **pagination**.

---

#### Usage

- `$skip` must be combined with `$select`.  
- It is most effective when used with `$orderby` to ensure consistent results across pages.  
- Works like MySQL’s **`OFFSET`**.  
---

#### Example

1. Skip 5 Records

```http
GET http://localhost:3001/table/users/read?$select=*&$orderby=name desc&$top=5&$skip=5
```

- `$orderby=name desc` → Sort users by name in descending order.
- `$top=5` → Limit results to 5 users.
- `$skip=5` → Skip the first 5 records.

This effectively returns **the second page of 5 users**.

```json
[
  {
    "id": 18,
    "username": "mark",
    "city": "Berlin"
  },
  {
    "id": 14,
    "username": "lucas",
    "city": "London"
  },
  {
    "id": 11,
    "username": "john",
    "city": "Paris"
  },
  {
    "id": 7,
    "username": "emma",
    "city": "New York"
  },
  {
    "id": 2,
    "username": "alice",
    "city": "Toronto"
  }
]
```

#### Pagination Pattern

A common way to implement pagination is by combining `$top` and `$skip`:
- **Page 1 (records 1–5)**
    ```sql
    $top=5&$skip=0
    ```
- **Page 2 (records 6–10)**
    ```sql
    $top=5&$skip=5
    ```
- **Page 3 (records 11–15)**
    ```sql
    $top=5&$skip=10
    ```

#### Notes
- Always combine `$skip` with `$orderby` for predictable results..
- Without `$orderby`, skipped records may vary depending on MySQL’s default ordering.
- `$skip` is 0-based → `$skip=0` means no records are skipped.

#### Best Practices
- Always use `$skip` with `$top` for paginated data.
- For large datasets, ensure indexes are set on sorted columns (`$orderby`) for efficient pagination.
