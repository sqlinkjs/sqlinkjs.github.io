---
sidebar_position: 1
title: Introduction
---

# Introduction

**SQLink** is a free and open-source **Node.js library** designed to simplify database interactions by exposing ready-to-use **REST APIs** for MySQL.  
With SQLink, developers can easily perform essential database operations such as:

- **GET** – Read data  
- **POST** – Create new records  
- **PUT** – Update existing records  
- **DELETE** – Remove data  

This eliminates the need to manually write boilerplate code for common database tasks.

---

## Architecture

![SQLink Architecture](./../static/img/architecture.png)

The diagram illustrates how multiple clients (such as applications or users) interact with a MySQL database through the SQLink REST API:

1. A client sends an **HTTP request** to a REST endpoint exposed by SQLink.  
2. The API translates the request into an **SQL query** and forwards it to the MySQL server.  
3. The MySQL server processes the query and returns the result.  
4. SQLink sends back a structured **API response** to the client.  

---

## Features

- Built-in support for executing **stored procedures**, with argument passing.  
- Streamlined handling of **CRUD operations** (Create, Read, Update, Delete).  
- Rapid setup with **minimal configuration**.  
- Fully open-source and **extensible** for custom requirements.  

---

## Use Cases

SQLink is particularly useful for:

- **Front-end developers** who want to quickly connect their apps to a database without writing backend code.  
- **Prototyping** applications, where speed of development is critical.  
- **Learning environments**, helping beginners understand database interactions through simple APIs.  
- **Personal projects**, enabling faster iteration and experimentation.  

By handling backend boilerplate, SQLink helps developers stay focused on building features and user experiences.  
