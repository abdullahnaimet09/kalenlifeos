# GitHub Pages Deployment Checker
Write-Host "🚀 Checking GitHub Pages Deployment Status..." -ForegroundColor Green
Write-Host ""

Write-Host "📋 Your website should be available at:" -ForegroundColor Yellow
Write-Host "   https://abdullahnaimet09.github.io/kalenlifeos/" -ForegroundColor Cyan
Write-Host ""

Write-Host "📊 To check deployment progress:" -ForegroundColor Yellow
Write-Host "   1. Go to: https://github.com/abdullahnaimet09/kalenlifeos/actions" -ForegroundColor Cyan
Write-Host "   2. Look for 'Deploy to GitHub Pages' workflow" -ForegroundColor Cyan
Write-Host "   3. Click on it to see the build progress" -ForegroundColor Cyan
Write-Host ""

Write-Host "⚙️  To enable GitHub Pages:" -ForegroundColor Yellow
Write-Host "   1. Go to: https://github.com/abdullahnaimet09/kalenlifeos/settings/pages" -ForegroundColor Cyan
Write-Host "   2. Under 'Source', select 'GitHub Actions'" -ForegroundColor Cyan
Write-Host "   3. Save the changes" -ForegroundColor Cyan
Write-Host ""

Write-Host "🌐 To connect your custom domain:" -ForegroundColor Yellow
Write-Host "   1. Add your domain in the Pages settings" -ForegroundColor Cyan
Write-Host "   2. Update DNS at name.com to point to GitHub Pages" -ForegroundColor Cyan
Write-Host ""

Write-Host "⏱️  Deployment usually takes 2-3 minutes..." -ForegroundColor Green
Write-Host ""

# Open the GitHub repository in browser
Write-Host "🔗 Opening GitHub repository..." -ForegroundColor Green
Start-Process "https://github.com/abdullahnaimet09/kalenlifeos"
