import request from "request";
import { Send } from 'express';

export const crawl = (callback: Send) => {
    request.get('https://github.com/Ko-GyeongTae?tab=repositories&q=&type=public&language=&sort=name', (err, res) => {
        if (err) callback('');
        console.log(res.body);
        callback(res.body);
    });
};

/*
export const crawl = () => {
    new Promise<string>((resolve, reject) => {
        request.get('https://github.com/Ko-GyeongTae?tab=repositories&q=&type=public&language=&sort=name', (err, res) => {
            if(err) reject(err);
            resolve(res.body);
        });
    });
};
*/