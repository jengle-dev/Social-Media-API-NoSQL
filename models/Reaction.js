const { Schema, Types } = require('mongoose');

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
        // do I need this here? or should it be used from the Thought model?
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

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
