import express from 'express';
import { crawl, profile } from './lib/crawl';

const app = express();
app.get('/list', async (req, res) => {
    return crawl();
});

app.get('/profile', async (req, res) => {
    return profile();
})

app.listen(5010, () => {
    console.log('server is listening on port 5010');
});