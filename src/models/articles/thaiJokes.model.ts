import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const thaiJokeSchema = new Schema(
    {
        title_th: String,
        title_en: String,
        detail_th: String,
        detail_en: String,
        like: Number,
        dislike: Number,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('thai_jokes', thaiJokeSchema);
