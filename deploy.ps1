# deploy.ps1
Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Step 1: Build the project
Write-Host "📦 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

# Step 2: Deploy to Vercel
Write-Host "☁️ Deploying to Vercel..." -ForegroundColor Yellow
vercel --prod

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Deployment successful!" -ForegroundColor Green