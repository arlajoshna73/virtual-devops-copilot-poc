# 1. Fetch latest changes
git fetch origin

# 2. Merge remote changes into your local main
git pull origin main

# 3. Stage your new/modified files
git add app/index.js app/package.json app/package-lock.json

# 4. Commit your changes
git commit -m "Added index.js and updated package.json with express"

# 5. Push back to GitHub
git push origin main
