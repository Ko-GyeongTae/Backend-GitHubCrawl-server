import request from "request";
import { Send } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

var headers = {
    "Authorization": process.env.TOKEN,
    "User-Agent": "PostmanRuntime/7.28.0"
}
var Alloptions = {
    url : 'https://api.github.com/users/Ko-GyeongTae/repos',
    method:'GET',
    headers: headers,
};

var Profileoptions = {
    url : 'https://api.github.com/users/Ko-GyeongTae',
    method:'GET',
    headers: headers,
}

export const crawl = (resp):void => {
    request(Alloptions, (err, res, body) => {
       if(err) console.log(err);
       console.log(JSON.parse(body));
       resp.send(JSON.parse(body));
    })
};

export const profile = (resp):void => {
    request(Profileoptions, (err, res, body) => {
        if(err) console.log(err);
        console.log(JSON.parse(body));
        resp.send(JSON.parse(body));
    })
}


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