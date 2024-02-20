git add .

echo 'Enter the commit message:'

read commitMessage

git commit -m "$commitMessage"

echo 'Enter the name of the branch:'

read branch

git push origin $branch

echo 'Thank you for committing into your loved repo'