import express from 'express';
import { crawl, profile } from './lib/crawl';
import schedule from 'node-schedule';
import mongoose from 'mongoose';

const mongoConfig = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};

const app = express();
app.get('/list', async (req, res) => {
    crawl(res);
});

app.get('/profile', async (req, res) => {
    profile(res);
})

app.listen(5010, () => {
    console.log('server is listening on port 5010');
});

schedule.scheduleJob('00 * * * * *', async () => {
    console.log("crwalStart");
    await mongoose.connect(process.env.MONGO, mongoConfig);
    const getProfile = await profile();
    const getRepos = await crawl();
    console.log('end');
});