## F1

- step 1: Create `.gitignore` file to ignore build artifacts
- step 2: Add a new route for users in the API server.
- step 3: Commit the changes with a message explaining the additions.

## F2

- step 1: `git reset HEAD`
- step 2: copy `isValidDueDate` and remove it from the file
- step 3: move into staging area that changes and run `git commit --amend` and edit commit msg to "Add priority validator"
- step 6: Add copied changes into current file and adding staging area that changes and commit message to "Add due date validator"

## F3

- step 1: first using `git reflog` find the detached commit hash then never point by branch
- step 2: `git checkout --detach <commit-hash>` to go into detached head state
- step 3: add new file called health.js and add a simple health check route to the API server and `git commit -m "Add health check route"`
- step 4: `git checkout -f answer/f3 HEAD` to forcefully point the branch to the detached commit and merge the changes from the detached commit into the branch

## G1

- step 1: switch in main branch and create new md file called contributors.md and add my github name and `git commit -m "Add github name to contributors list"` and push the changes to remote repository

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

## R3

- step 1: Create answer/r3 from seed/r3-local
- step 2: run git rebase origin/seed/r3-remote to rebase the local branch with the remote branch
  Reason for rebase is to avoid merge commits and keep the history linear and clean. while git pull will create a merge commit and make the history messy. why I not choose git pull because it will create a merge commit and make the history messy.

## T1

- step 1: Create a new branch called answer/t1 from seed/t1
- step 2: add lightweight tag `git tag build-t1` which used for just tagging only.
- step 3: add annotated tag `git tag -a v1.0.0-t1 -m "TaskFlow 1.0.0"` which used for tagging with additional information.

## T2

- step 1: Create a new branch called answer/t2 from seed/t2
- step 2: run `git ls-remote --tags` to list all the tags in the remote repository
- step 3: run `git tag -f v1.0.0-t2 <commit-id>` to forcefully update the tag to point to the specific commit in the branch
- step 4: run `git push origin v1.0.0-t2 --force` to forcefully push the updated tag to the remote repository
- This steps make easy to move tag from one commit to another commit in the branch and also update the tag in the remote repository.

## M1

- step 1: Create a new branch called answer/m1 from seed/m1-main
- step 2: run `git merge --ff-only seed/m1-feature` to merge the feature branch into the main branch without creating a merge commit. This will fast-forward the main branch to include the changes from the feature branch.
  - reason for using `--ff-only` is to avoid creating a merge commit and keep the history linear and clean. If the feature branch has diverged from the main branch, the merge will fail and you will need to resolve the conflicts before merging.
- step 3: run `git push origin answer/m1` to push the changes to the remote repository. This will update the main branch in the remote repository with the changes from the feature branch.
- step 4: run `git merge --no-ff seed/m1-feature` to merge the feature branch into the main branch with a merge commit. This will create a new commit that represents the merge of the two branches.
  - reason for using `--no-ff` is to create a merge commit and keep the history of the feature branch intact. This is useful for preserving the context of the changes made in the feature branch and for tracking the progress of the feature development.

## M2

step 1: Create a new branch called answer/m2 from seed/m2-main
step 2: run `git merge origin/seed/m2-feature` to merge the feature branch into the main branch. This will create a new commit that represents the merge of the two branches.
step 3: resolve conflicts in the config.js file by keeping the changes from the feature branch and removing the changes from the main branch. The final config.js file should look like this:

```javascript
module.exports = {
  port: 3000,
  timeoutMs: 15000,
  retries: 5,
};
```

## M3

- step 1: Create a new branch called answer/m3 from seed/m3-main
- step 2: run `git rebase origin/seed/m3-feature` to rebase the feature branch onto the main branch. This will apply the changes from the feature branch on top of the main branch, creating a linear history.
- step 3: resolve conflicts in the config.js file by keeping the changes from the feature branch and removing the changes from the main branch.
- run `git rebase --continue` to continue the rebase process after resolving the conflicts. This will apply the remaining commits from the feature branch onto the main branch.
- run `git rebase --abort` to abort the rebase process and return to the state before the rebase if you encounter any issues or decide not to proceed with the rebase.

## V1

- step 1: Create a new branch called answer/v1 from seed/v1
- step 2: run `git revert <commit-hash>` to revert the changes made in the specified commit. This will create a new commit that undoes the changes made in the original commit.
  - reason for not using `git reset` is that it modifies the commit history and can cause issues for other collaborators who have already pulled the changes. `git revert` creates a new commit that undoes the changes, preserving the history and avoiding conflicts with other collaborators.

## v2

- step 1: Create a new branch called answer/v2 from seed/v2
- step 2: run `git reset --soft HEAD~3` to reset the last three commits while keeping the changes in the staging area. This allows you to modify the changes before committing them again.
- step 3: run `git commit -m "Add bearer token parsing"` to create a new commit with the modified changes. This will replace the previous three commits with a single commit that contains the updated changes.

## v3

- step 1: Create a new branch called answer/v3 from seed/v3
- step 2: run `git revert -m 1 <merge-commit-hash>` to revert the changes made in the specified merge commit. The `-m 1` option specifies that the first parent of the merge commit should be used as the mainline, which is necessary when reverting a merge commit. so undo the changes made in the merge commit while keeping the changes from the mainline branch.
