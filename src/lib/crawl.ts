import request from "request";
import * as dotenv from 'dotenv';
import Profile from '../model/Profile';
import Repo from '../model/Repo';
dotenv.config();

const headers = {
    "Authorization": process.env.TOKEN,
    "User-Agent": "PostmanRuntime/7.28.0"
}
let Alloptions = {
    url: 'https://api.github.com/users/Ko-GyeongTae/repos?page=',
    method: 'GET',
    headers: headers,
};

const Profileoptions = {
    url: 'https://api.github.com/users/Ko-GyeongTae',
    method: 'GET',
    headers: headers,
}

//'https://api.github.com/orgs/OS-2021/repos'
export const clear = () => {
    console.log('Start to clean collections...');
    Repo.deleteMany(err => {
        if(err) console.error(err);
    });
    Profile.deleteMany(err => {
        if(err) console.error(err);
    })
}

export const crawl = (args: number) => {
    let buffer;
    Alloptions.url = 'https://api.github.com/users/Ko-GyeongTae/repos?page=';
    Alloptions.url = Alloptions.url + `${args}`;
    console.log(Alloptions.url)
    console.log('Start to get repositories...');
    request(Alloptions, (err, res, body) => {
        if (err) console.log(err);
        let result = JSON.parse(body);
        result.map(info => {
            console.log(info.name);
            buffer = info;
            buffer.category = info.name.slice('-')[0];
            const repo = new Repo(buffer);
            repo.save(err => {
                if (err) console.error(err);
                else console.log(repo.name);
            });
        });
    });
    console.log('End to get repositories...');
};

export const profile = () => {
    console.log('Start to get profile...');
    request(Profileoptions, (err, res, body) => {
        if (err) console.log(err);
        let result = JSON.parse(body);
        const profile = new Profile(result);
        profile.save(err => {
            if (err) console.error(err);
            else console.log(profile);
        });
    });
    console.log('End to get profile');
}
