# Prepare functions for manual deployment
Write-Host "Preparing functions for deployment..."

# Create deployment directory
$deployDir = ".\deploy"
if (Test-Path $deployDir) {
    Remove-Item -Recurse -Force $deployDir
}
New-Item -ItemType Directory -Path $deployDir

# Copy and zip founder-gpt function
Write-Host "Preparing founder-gpt function..."
Copy-Item -Path ".\supabase\functions\founder-gpt\*" -Destination "$deployDir\founder-gpt" -Recurse
Compress-Archive -Path "$deployDir\founder-gpt\*" -DestinationPath "$deployDir\founder-gpt.zip" -Force

# Copy and zip ideaforge-ai function
Write-Host "Preparing ideaforge-ai function..."
Copy-Item -Path ".\supabase\functions\ideaforge-ai\*" -Destination "$deployDir\ideaforge-ai" -Recurse
Compress-Archive -Path "$deployDir\ideaforge-ai\*" -DestinationPath "$deployDir\ideaforge-ai.zip" -Force

Write-Host "`nDeployment files prepared in the 'deploy' directory."
Write-Host "Please follow these steps to deploy:"
Write-Host "1. Go to https://supabase.com/dashboard/project/dsfikceaftssoaazhvwv/functions"
Write-Host "2. Click 'Create a new function'"
Write-Host "3. Name it 'founder-gpt'"
Write-Host "4. Upload the file from: $deployDir\founder-gpt.zip"
Write-Host "5. Repeat steps 2-4 for 'ideaforge-ai' using: $deployDir\ideaforge-ai.zip"
Write-Host "`nNote: Keep the deployment files for future updates." 