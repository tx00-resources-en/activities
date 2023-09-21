# README

```sh
npx degit tx00-web/react-starter#main react-lab
```

> If you receive error like this `npm ERR! enoent ENOENT: no such file or directory`, then one fix is to issue this command: `npm install npm -g` . 

- Run
```sh
npm install
npm start
```


- Emmet

settings.json

```json
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
```

- Extension: ES7 Snippets
  - rafce (arrow func with export)
  - rfce (regular func with export )
  - same as the file name
  - react auto import
    - uncheck
    - React Snippets › Settings: Import React On Top

### Notes: `degit`

In general to clone a specific subdirectory instead of the entire repo, you can use [degit]: 

```sh
npx degit user/repo/subdirectory#branch new-folder 
```



### `npx` vs `npm`

`npx` and `npm` are both command-line tools used in the Node.js ecosystem, but they serve different purposes:

**npm (Node Package Manager):**

`npm` is the default package manager for Node.js and is used to install and manage packages (libraries, modules, and other dependencies) that you can use in your Node.js projects. It's primarily used for installing and managing third-party libraries or tools that you want to include in your projects. You use `npm` to install packages from the npm registry and manage project dependencies by creating a `package.json` file.

For example, to install a package using `npm`, you would run:

   ```
   npm install package-name
   ```

**npx (Node Package Executer):**

`npx` is a tool that comes bundled with `npm` (version 5.2.0 and later) and is used to execute Node packages or binaries. It allows you to run commands from packages that you haven't necessarily installed globally or locally. This is particularly useful for running tools and scripts that you might not want to install permanently.

For example, if you want to run a package without installing it globally or adding it as a project dependency, you can use `npx` like this:

   ```
   npx package-name
   ```

Additionally, `npx` can be used to run a specific version of a package, which is helpful in cases where you need to use a different version for a specific command without changing your environment's configuration.

While both tools are related to Node.js development and package management, `npm` is primarily used for installing and managing packages, while `npx` is used to execute packages or binaries, especially those that you might not want to install globally or maintain as project dependencies.


<!-- Links -->
[degit]:https://github.com/Rich-Harris/degit
