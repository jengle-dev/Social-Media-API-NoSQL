const { Schema, Types, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectID,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            unique: false,
            required: true,
            min_lenth: [8, 'Must be at least 8 characters long. {VALUE} received.'],
            max_length: 30,
        },        
        createdAt: {
            type: Date,
            default: Date.now,
          },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
    },
);

module.exports = reactionSchema;
