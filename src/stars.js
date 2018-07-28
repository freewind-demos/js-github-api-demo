import token from '../github-token.js'
import Github from 'github-api';

const gh = new Github({
    token: token
});

const user = gh.getUser('freewind');

user.listStarredRepos()
    .then(function ({data: reposJson}) {
        console.log('--- StarredRepos ---');
        console.log(reposJson);
    });
