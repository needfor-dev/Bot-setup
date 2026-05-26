// Step-1
sudo apt update && sudo apt upgrade -y


// Step-2 (For Local)
sudo apt install -y nodejs npm
// Step-2 (For Cloud)
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs


// Step-3 (optional)
node -v
npm -v


// Step-4 (Optional)
npm init -y


// Step-5 (Important)
npm install puppeteer puppeteer-extra puppeteer-extra-plugin-stealth
