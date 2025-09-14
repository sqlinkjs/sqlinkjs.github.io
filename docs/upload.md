---
sidebar_position: 6
title: Uploading Files
---

# Uploading Files

SQLink provides built-in support for uploading files via a simple REST endpoint.  
Uploaded files are stored on disk and can be accessed directly through a generated URL.

---

## Endpoint

- **URL**: `/upload`  
- **Method**: `POST`  
- **Required Field**: `files` (must be provided as a **multipart/form-data** key)  

> ⚠️ **Important:** The field name must be exactly **`files`**. Using a different key will prevent the file from being uploaded.

---

## Storage Location

Uploaded files are saved under the following directory on the host system:

- **Linux / macOS**  
/home/**`username`**/.sqlink/uploads
- **Windows**  
C:\users\\**`username`**\\.sqlink\uploads

> ⚠️ **Important:**  
> The `.sqlink/uploads` directory is **automatically created** the first time you run the **sqlink** application.


---

## Example Request

Using `curl`, a file upload request would look like this:

```bash
curl -X POST http://localhost:3001/upload \
  -F "files=@/path/to/your/file.csv"
```


## Example Response

If successful, SQLink returns:

```
{
  "success": true,
  "data": [
    {
      "fieldname": "files",
      "originalname": "YOUR_FILE_NAME",
      "encoding": "7bit",
      "mimetype": "text/csv",
      "destination": "YOUR_DESTINATION",
      "filename": "YOUR_FILE_NAME",
      "path": "YOUR_PATH",
      "size": 512,
      "accessURL": "http://192.168.1.4:3001/@/path/to/your/file.csv"
    }
  ]
}

```


