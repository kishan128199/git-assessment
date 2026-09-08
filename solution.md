## F1

step 1: Create .gitignore file to ignore build artifacts
step 2: Add a new route for users in the API server.
step 3: Commit the changes with a message explaining the additions.

## F2

step 1: git reset HEAD
step 2: git copy isValidDueDate and remove it from the file
step 3: move into staging area that changes and run git commit --amed and edit commit msg to "Add priority validator"
step 6: Add copied changes into current file and adding staging area that changes and commit message to "Add due date validator"

## F3

step 1: first using git reflog find the detached commit hash then never point by branch
step 2: git checkout --detach <commit-hash> to go into detached head state
step 3: git add new file called health.js and add a simple health check route to the API server and commit message to "Add health check route"
step 4: git checkout -f answer/f3 HEAD to forcefully point the branch to the detached commit and merge the changes from the detached commit into the branch

## G1

step 1: switch in main branch and create new md file called contributors.md and add my github name and commit message to "Add github name to contributors list"
