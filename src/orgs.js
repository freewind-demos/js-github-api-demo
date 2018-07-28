import token from '../github-token.js'
import Github from 'github-api';

const gh = new Github({
    token: token
});

const user = gh.getUser('freewind');

user.listOrgs()
    .then(function ({data: orgs}) {
        console.log('--- orgs ---');
        console.log(orgs);
    });

