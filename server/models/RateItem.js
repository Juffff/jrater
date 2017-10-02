import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const RateItemSchema = new Schema({
  name: String,
  rate: Number,
  count: Number,
  detailInfo: Array,
});
const RateItem = mongoose.model('RateItem', RateItemSchema);
