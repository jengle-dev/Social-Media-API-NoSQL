// Schema for Thought
// This will have a subdocument schema of Reaction

const { Schema, Types, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtId: {
            type: Schema.Types.ObjectID,
            default: () => new Types.ObjectId(),
        },
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
            // default: 'incomplete thought',
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            // use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            unique: false,
            required: true,
            min_lenth: [8, 'Must be at least 8 characters long. {VALUE} received.'],
            max_length: 30,
        },
        reaction: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;