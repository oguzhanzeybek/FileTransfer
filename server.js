const express = require("express");
const path = require("path");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// 'public' klasörünü statik olarak sun
app.use(express.static(path.join(__dirname, "public")));

// Socket.IO bağlantıları
io.on("connection", function (socket) {
    socket.on("sender-join", function (data) {
        socket.join(data.uid);
    });

    socket.on("receiver-join", function (data) {
        socket.join(data.uid);
        socket.in(data.sender_uid).emit("init", data.uid);
    });

    socket.on("file-meta", function (data) {
        socket.in(data.uid).emit("fs-meta", data.metadata);
    });

    socket.on("fs-start", function (data) {
        socket.in(data.uid).emit("fs-share", {});
    });

    socket.on("file-raw", function (data) {
        socket.in(data.uid).emit("fs-share", data.buffer);
    });
});

// Sunucuyu 0.0.0.0 üzerinden dinle → bu, iç ağdaki herkese açılmasını sağlar
const PORT = 5000;
server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running and accessible on http://<your-local-ip>:${PORT}`);
});
