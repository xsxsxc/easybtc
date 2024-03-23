// Initialize balance
let balance = 1000; // Initial balance

// Function to generate a random key consisting of letters and numbers
function generateRandomKey(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to generate keys
function generateKeys() {
    const publicKey = generatePublicKey();
    const privateKey = generatePrivateKey();
    
    document.getElementById("publicKey").innerText = publicKey;
    document.getElementById("privateKey").innerText = privateKey;
    document.getElementById("balance").innerText = balance;
}

// Function to generate a simulated public key
function generatePublicKey() {
    // Generate a random key of length 16
    return generateRandomKey(16);
}

// Function to generate a simulated private key
function generatePrivateKey() {
    // Generate a random key of length 16
    return generateRandomKey(16);
}

// Function to create a new wallet
function createWallet() {
    generateKeys();
    document.getElementById("wallet").style.display = "none";
    document.getElementById("keys").style.display = "block";
    document.getElementById("transactions").style.display = "block";
}

// Function to toggle dropdown menu
function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Function to add predefined balance
function addBalance(amount) {
    balance += amount;
    document.getElementById("balance").innerText = balance.toFixed(2);
}

// Function to add custom balance
function addCustomBalance() {
    const customAmount = parseFloat(document.getElementById("customAmount").value);
    if (isNaN(customAmount) || customAmount <= 0) {
        alert("Invalid amount");
        return;
    }
    balance += customAmount;
    document.getElementById("balance").innerText = balance.toFixed(2);
    document.getElementById("customAmount").value = "";
}
// Function to send a simulated transaction
function sendTransaction() {
    const recipient = document.getElementById("recipient").value;
    const amount = parseFloat(document.getElementById("amount").value);
    
    // Validate amount
    if (amount <= 0 || isNaN(amount)) {
        alert("Invalid amount");
        return;
    }
    
    // Check if the balance is sufficient
    if (amount > balance) {
        alert("Insufficient balance");
        return;
    }
    
    // Simulate sending a transaction
    console.log(`Sending $${amount} to ${recipient}`);
    alert(`Transaction sent: $${amount} to ${recipient}`);
    
    // Update balance
    balance -= amount;
    document.getElementById("balance").innerText = balance.toFixed(2);
}