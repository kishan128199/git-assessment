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

step 1: switch in main branch and create new md file called contributors.md and add my github name and commit message to "Add github name to contributors list" and push the changes to remote repository

## G2 Review pull request

- review exsiting pull request and add comments to the code changes and submtting fdor the changes to be merged
- add proper msg and summary of code review and submit the review

## R1

- step 1: run `git log --oneline  -13 upstream/seed/r1-upstream` to get the last 13 commits from the upstream repository
- step 2: visualy match the commits with the local repository and find the missing commits
- step 3: add commit hash with msg in REPORT.md letest to oldest order and commit the changes with message "docs: record incoming upstream commits"

## R2

- step 1: Create answer/r2 from seed/r2
- step 2: Create new file called DEPLOY.md and add ingle line Deploys run from main into the file and commit the changes with message "docs: describe the deploy source"
- step 3: run `git push --set-upstream origin answer/r2` to set the upstream branch and push the changes to remote repository. that makes relationship between local and remote branch and future push and pull will be easier
- step 4: run `git push origin :seed/r2-stale` to delete the stale branch from remote repository
