
# Git Merge

Here's a step-by-step guide on how to create two Git branches and then merge them together:

**Step 1: Initialize Repository (If not already done)**
you'll need a Git repository to work with. You can either clone an existing repository or create a new one:

```sh
# create a new repository
mkdir my-repo
cd my-repo
git init
```

**Step 2: Create and Switch to a New Branch**
In Git, you can create a new branch using the following command:

```sh
git checkout -b new-feature
```

This command creates a new branch named `new-feature` and switches to it.

**Step 3: Make Changes in the New Branch**
Now that you're on the new branch, make the desired changes to your codebase. You can add, modify, or delete files as needed.

**Step 4: Commit Changes to the New Branch**
After making your changes, commit them to the new branch:

```sh
git add .
git commit -m "Added new feature"
```

**Step 5: Create and Switch to Another Branch**
To simulate a scenario where you have two branches, let's create another branch:

```sh
git checkout -b bug-fix
```

This creates a new branch named `bug-fix` and switches to it.

**Step 6: Make Changes in the Second Branch**
In the `bug-fix` branch, make different changes from what you did in the `new-feature` branch. Again, stage and commit your changes:

```sh
git add .
git commit -m "Fixed a bug"
```

**Step 7: Merge the Two Branches**
Now it's time to merge the changes from the ` bug-fix` branch into the `new-feature ` branch. Switch to the branch where you want to merge the changes (`new-feature ` in this case) and use the `git merge` command:

```sh
git checkout new-feature 
git merge bug-fix
```

Git will attempt to automatically merge the changes. If there are conflicts, you'll need to resolve them manually.

**Step 8: Resolve Conflicts (if any)**
If Git encounters conflicts during the merge, it will pause and notify you which files have conflicts. Open those files and manually resolve the conflicts by editing the conflicting sections. After resolving, save the files.

**Step 9: Commit the Merged Changes**
After resolving conflicts, stage and commit the changes:

```sh
git add .
git commit -m "Merged new-feature into bug-fix"
```


