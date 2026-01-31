const express = require("express");
const path = require("path");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.use(express.static(path.join(__dirname, "frontend")));


function getLocalIP() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
}

app.listen(PORT, HOST, () => {
  const localIP = getLocalIP();
  console.log(`Local:   http://localhost:${PORT}`);
  if (localIP) {
    console.log(`Network: http://${localIP}:${PORT}`);
  }
});
