// Schema for Thought
// This will have a subdocument schema of Reaction

const { Schema, Types } = require('mongoose');
const Reaction = require('./Reaction');

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