/* File: server.js */
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;
const USERS_FILE = "users.json";

app.use(cors());
app.use(express.json());

// Load users from JSON file
const loadUsers = () => {
    if (!fs.existsSync(USERS_FILE)) return [];
    return JSON.parse(fs.readFileSync(USERS_FILE));
};

// Save users to JSON file
const saveUsers = (users) => {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// Register endpoint
app.post("/register", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const users = loadUsers();
    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ firstName, lastName, email, password: hashedPassword });
    saveUsers(users);
    res.json({ message: "User registered successfully" });
});

// Login endpoint
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const users = loadUsers();
    const user = users.find(u => u.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ email }, "secretkey", { expiresIn: "1h" });
    res.json({ token, message: "Welcome to Web Programming Class" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
