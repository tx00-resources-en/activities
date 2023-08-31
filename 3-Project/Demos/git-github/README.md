# GitHub

## Visualization: Git Branching

1.  [Git Visualizer - www]

```bash
git commit -m "added part 1"
git commit -m "added part 2"
git commit -m "added part 3"
git branch feature1
git checkout feature1
git commit -m "Added new feature"
# git checkout -b bug-fix
git branch bug-fix
git checkout bug-fix
git commit -m "Fixed a bug"
git checkout feature1
git merge bug-fix
git checkout master
git commit -m "added part 5"
git branch feature2
```

> Notes: 
- `git checkout -b new-feature` is similar to issuing these 2 commands `git branch feature && git checkout feature`
- `git init` and  `git add .` are not recognized by the visualizer

2. [More Practice](./git-merge.md)
3. Links:
  - [Git Branching]
  - [Git Visualizer - www]
  - [Git Visualizer: src]
4. `.gitignore`





<!-- Links -->
[Git Branching]:https://www.toolsqa.com/git/git-tutorial/
[Git Visualizer - www]:https://git-school.github.io/visualizing-git/
[Git Visualizer: src]:https://github.com/git-school/visualizing-git/

