## project setup

### Requirements

before starting, verify that **Node.js** and **git** is installed. These tools are required for working with this project.

```bash
node -v
git
```
---

to run this project, first clone this repository using **`git clone`**

```
git clone https://github.com/garv-15/interia.git .
```
this will download and save this project in your current directory
and then install the required packages using
```
npm install
```

### Project Structure

as of now, we will only deal with **Frontend** development.

* **`/frontend`**: Contains all frontend logic and assets.
* **`server.js`**: maybe for future backend configuration, not to be edited as of now.

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

### file editing

1. make all initial changes in separate `.css` files.
2. **Main CSS**: Only modify the global/main CSS files once changes are final.
