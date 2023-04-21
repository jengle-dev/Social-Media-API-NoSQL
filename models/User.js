
const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema (
    { // Username
        username: {
            type: String,
            unique: true,
            required: true,
            min_lenth: [8, 'Must be at least 8 characters long. {VALUE} received.'],
            max_length: 30,
        },
        email: {
            type: String,
            unique: true,
            required: true,

        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: "thought",
        }],
         friends: [{
            type: Schema.Types.ObjectId,
            ref: "user",
        }],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        }
    }
);

const User = model('user', userSchema);

module.exports = User;