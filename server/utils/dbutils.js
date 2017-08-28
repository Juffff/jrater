import mongoose from 'mongoose';
import '../models/RateItem';
import {db} from '../config/config.json';


const RateItem = mongoose.model('RateItem');

export function connect() {
   // mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`);
    mongoose.connect(`mongodb://juff:Splurgeola4848@ds161913.mlab.com:61913/heroku_s02vjssr`);
    mongoose.set("debug", true);
}

export function listItems(filter) {
    return RateItem.find(filter);
}

export function createItem(data) {
    const rateItem = new RateItem({
        name: data.name,
        rate: data.rate,
        count: data.count,
        description: data.description,
    });

    return rateItem.save();
}

export function deleteItem(id) {
    return RateItem.findById(id).remove();
}

export function updateItemRate(department, rate) {

    return new Promise((resolve, reject) => {
        RateItem.findOne({name: department}, (err, rateItem) => {
            if (err) return console.log(err);
            rateItem.rate = (rateItem.rate * rateItem.count + rate) / (rateItem.count + 1);
            rateItem.count += 1;
            rateItem.detailInfo = rateItem.detailInfo.concat({
                count: rateItem.count,
                date: Date.now(),
                rate: rate,
            });
            rateItem.save();
        }).then(data => {

            resolve(data.detailInfo.length);

        });

    });
}

export function addItemComment(department, count, text) {
    if (text === undefined) text = 'No comments';
    RateItem.findOne({name: department}, (err, rateItem) => {
        let newData = Object.assign([], rateItem.detailInfo);
        newData[count] = Object.assign({},  newData[count], {comment: text});
        rateItem.detailInfo = newData;
        rateItem.save();

    });
}
