import { crawl, profile } from './lib/crawl';
import schedule from 'node-schedule';
import mongoose from 'mongoose';

const mongoConfig = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};


schedule.scheduleJob('00 * * * * *', async () => {
    console.log("crwalStart");
    await mongoose.connect(process.env.MONGO, mongoConfig, () => {
        console.log("Connect to Database");
    });
    await profile();
    await crawl();
    console.log('end');
});