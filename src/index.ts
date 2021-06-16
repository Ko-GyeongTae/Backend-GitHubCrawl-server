import express from 'express';
import { crawl } from './lib/crawl';

const app = express();
app.get('/list', async (req, res) => {
    crawl(res.send.bind(res));
});

app.listen(5010, () => {
    console.log('server is listening on port 5010');
});