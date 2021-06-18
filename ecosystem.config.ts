module.exports = {
    apps: [{
        name: 'GitCrawl-Blog-server',
        script: 'yarn',
        args: 'start',
        interpreter: '/bin/bash',
        env: {
            NODE_ENV: 'development'
        }
    }]
};