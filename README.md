## project setup

### Requirements

Before starting, verify that **Node.js** is installed. This environment is essential for managing dependencies and ensuring file accessibility.

```bash
node -v
```

---

### Project Architecture

Currently, the focus is on the **Frontend** development.

* **`/frontend`**: Contains all frontend logic and assets.
* **`server.js`**: Reserved for future backend configuration.

---

### Development Workflow

#### 1. starting the server

To start the local development environment, execute:

```bash
npm run start
```

#### 2. Viewing Changes

* edit your code.
* Save the file.
* Refresh your browser to see updates instantly (no server restart required).

#### 3. Stopping the Server

To terminate the webserver process:

* Press **`Ctrl + C`** in your terminal.

---

### Styling Guidelines

To maintain a clean codebase, follow these priority rules when editing styles:

1. make all initial changes in separate `.css` files.
2. **Main CSS**: Only modify the global/main CSS files once changes are verified and ready for integration.
