---
sidebar_position: 5
title: Hosting Files
---
import TerminalView from "@site/src/components/terminalview";


# Hosting Files

SQLink provides an inbuilt **file hosting feature** that allows you to serve and access files from your local machine over HTTP with a single command.

---

## Command

<TerminalView text="sqlink host [YOUR_PATH] [YOUR_PORT]" />

- `YOUR_PATH` :  The directory or file you want to host.
- `YOUR_PORT`: The port number on which the files will be served 

## Accessing Hosted Files

Once the hosting command is running, hosted files can be accessed via the following URL pattern:

```bash
http://localhost:[YOUR_PORT]/static/[YOUR_FILE_PATH]
```

## Example

If you host a directory like this:
```bash
sqlink host /home/[username]/documents 3002
```
You can then access files using URLs such as:
```bash
http://localhost:3002/static/sample.txt
```
(for the file **`/home/user/documents/sample.txt`**)

## Use Cases
- Quickly sharing files across your network.
- Serving static assets for development or testing.
- Remote access to files as long as the hosting command remains active.

> ⚠️ **Important:**  
> The hosting server will remain active  **only while the** `sqlink host` **command is running.**
> Stopping the process will stop access to the hosted files.