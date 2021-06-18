import { clear, crawl, profile } from './lib/crawl';
import schedule from 'node-schedule';
import mongoose, { Error } from 'mongoose';

const mongoConfig = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};

console.log('Start to run crawler...');
schedule.scheduleJob('00 * * * * *', async () => {
    console.log("crwalStart");
    try {
        await mongoose.connect(process.env.MONGO, mongoConfig, () => {
            console.log("Connect to Database");
        });
        try {
            await clear();
            await profile();
            await crawl();
        } catch (e) {
            throw new Error(e);
        }
    } catch (e) {
        throw new Error(e);
    }
    console.log('end');
});