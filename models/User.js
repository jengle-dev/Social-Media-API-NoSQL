
const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

//Schema to create Student model
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
            //look at Mongoose's matching validation
            validate: {
                validator: () => Promise.resolve(false),
                message: 'Email validation failed.'
            }
            //match: /.+\@.+\..+/,
        },
        thoughts: [thoughtSchema],
        friends: {
            //array referencing _id values the User model... self-reference?
        }
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