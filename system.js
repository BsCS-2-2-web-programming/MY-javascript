

const fs = require('fs');
const readline = require('readline');
const bcrypt = require('bcrypt');

const usersFile = 'users.json';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Loading of the  users from JSON file
function loadUsers() {
    if (!fs.existsSync(usersFile)) {
        return [];
    }
    const data = fs.readFileSync(usersFile);
    return JSON.parse(data);
}

// Saving of the various users to JSON file
function saveUsers(users) {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// Registering a new user
function register() {
    rl.question('Enter your name: ', (name) => {
        rl.question('Enter your email: ', (email) => {
            rl.question('Enter your password: ', async (password) => {
                let users = loadUsers();
                if (users.some(user => user.email === email)) {
                    console.log('Email already registered!');
                    rl.close();
                    return;
                }
                const hashedPassword = await bcrypt.hash(password, 10);
                users.push({ name, email, password: hashedPassword });
                saveUsers(users);
                console.log('Registration successful!');
                rl.close();
            });
        });
    });
}

// Login function
function login() {
    rl.question('Enter your email: ', (email) => {
        rl.question('Enter your password: ', async (password) => {
            let users = loadUsers();
            const user = users.find(user => user.email === email);
            if (!user) {
                console.log('User not found!');
                rl.close();
                return;
            }
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                console.log('Login successful!');
                userMenu(user);
            } else {
                console.log('Invalid credentials!');
                rl.close();
            }
        });
    });
}

// User menu after login of the user
function userMenu(user) {
    console.log(`\nWelcome, ${user.name}!`);
    console.log('1. View Profile');
    console.log('2. Logout');
    console.log('3. Exit');
    
    rl.question('Choose an option: ', (option) => {
        switch (option) {
            case '1':
                console.log(`\nName: ${user.name}\nEmail: ${user.email}`);
                userMenu(user);
                break;
            case '2':
                console.log('Logging out...');
                rl.close();
                break;
            case '3':
                console.log('Exiting...');
                rl.close();
                break;
            default:
                console.log('Invalid option!');
                userMenu(user);
        }
    });
}

// Main menu
console.log('1. Register');
console.log('2. Login');
rl.question('Choose an option: ', (option) => {
    if (option === '1') {
        register();
    } else if (option === '2') {
        login();
    } else {
        console.log('Invalid choice!');
        rl.close();
    }
});


