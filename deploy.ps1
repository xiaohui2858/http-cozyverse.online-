# Cozyverse 部署脚本
Write-Host "开始构建和部署 Cozyverse Gaming Platform..." -ForegroundColor Green

# 1. 构建项目
Write-Host "正在构建项目..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "构建失败！" -ForegroundColor Red
    exit 1
}

Write-Host "构建成功！" -ForegroundColor Green

# 2. 检查构建产物
if (Test-Path "dist") {
    Write-Host "构建产物已生成在 dist/ 目录" -ForegroundColor Green
    
    # 显示构建产物大小
    $files = Get-ChildItem -Recurse dist
    Write-Host "构建产物文件数: $($files.Count)" -ForegroundColor Cyan
    
    # 显示主要文件
    Write-Host "主要文件:" -ForegroundColor Cyan
    Get-ChildItem dist -Recurse | Where-Object { $_.Extension -in @('.html', '.js', '.css') } | ForEach-Object {
        $size = [math]::Round($_.Length / 1KB, 2)
        Write-Host "  $($_.Name) - ${size}KB" -ForegroundColor White
    }
} else {
    Write-Host "构建产物目录不存在！" -ForegroundColor Red
    exit 1
}

# 3. 提示部署步骤
Write-Host "`n=== 部署步骤 ===" -ForegroundColor Magenta
Write-Host "1. 将 dist/ 目录中的所有文件压缩为zip" -ForegroundColor White
Write-Host "2. 在GitHub仓库页面删除所有旧文件" -ForegroundColor White
Write-Host "3. 上传压缩包到仓库根目录" -ForegroundColor White
Write-Host "4. 确保以下文件存在:" -ForegroundColor White
Write-Host "   - .github/workflows/deploy.yml" -ForegroundColor Gray
Write-Host "   - public/CNAME (内容: cozyverse.online)" -ForegroundColor Gray
Write-Host "   - vite.config.ts (已配置正确的base路径)" -ForegroundColor Gray

Write-Host "`n=== 检查访问 ===" -ForegroundColor Magenta
Write-Host "部署后检查以下URL:" -ForegroundColor White
Write-Host "- https://cozyverse.online (主域名)" -ForegroundColor Cyan
Write-Host "- https://xiaohui2858.github.io/http-cozyverse.online-/ (GitHub Pages)" -ForegroundColor Cyan

Write-Host "`nDeploy preparation completed!" -ForegroundColor Green 