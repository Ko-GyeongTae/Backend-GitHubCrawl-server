import request from "request";
import * as dotenv from 'dotenv';
import Profile from '../model/Profile';
import Repo from '../model/Repo';
dotenv.config();

const headers = {
    "Authorization": process.env.TOKEN,
    "User-Agent": "PostmanRuntime/7.28.0"
}
const Alloptions = {
    url : 'https://api.github.com/users/Ko-GyeongTae/repos',
    method:'GET',
    headers: headers,
};

const Profileoptions = {
    url : 'https://api.github.com/users/Ko-GyeongTae',
    method:'GET',
    headers: headers,
}

//'https://api.github.com/orgs/OS-2021/repos'

export const crawl = () => {
    request(Alloptions, (err, res, body) => {
       if(err) console.log(err);
       let result = JSON.parse(body);
       result.map(info => {
           const repo = new Repo(info)
           repo.save(err => {
               if(err) console.log(err);
               else console.log(repo);
           });
       })
    })
};

export const profile = (resp?):any => {
    request(Profileoptions, (err, res, body) => {
        if(err) console.log(err);
        console.log(JSON.parse(body));
        if (resp) resp.send(JSON.parse(body));
        return JSON.parse(body);
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