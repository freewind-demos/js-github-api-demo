Github Api Demo
===============

First to make sure you can visit github api from your computer(it's blocked in some countries), by running command:

```
curl https://api.github.com
```



Fetch data from github with [github-api](https://www.npmjs.com/package/github-api)

```
npm install
```

Run following commands:

```
npx babel-node --presets node6 src/repos.js
npx babel-node --presets node6 src/gists.js
npx babel-node --presets node6 src/stars.js
npx babel-node --presets node6 src/orgs.js
```

Resources
---------

- <https://github.com/github-tools/github>
- <http://github-tools.github.io/github/docs/3.1.0/>
