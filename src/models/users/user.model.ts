import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        user_name: String,
        pass_word: String,
        name: String,
        last_name: String,
        phone_no: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('users', userSchema);
