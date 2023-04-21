const { default: mongoose } = require("mongoose");
const connection = require("../config/connection");

//require models
const User = require("../models/User");
const Thought = require("../models/Thought"); //this includes the subdocument to reactions

// data
const users = [
    {
        username: "sparklingDusk",
        email: 'sparklingDusk@example.com',
        password: "password123",
        friends: []
    },
    {
        username: "MoonlightKnight101",
        email: 'moonlitGuy@example.com',
        password: "password123",
        friends: []
    },
    {
        username: "ElectricWindFanz",
        email: 'zippyZapFan@example.org',
        password: "password123",
        friends: []
    },
    {
        username: "MysticElephant",
        email: 'mysticElephantYoga@example.com',
        password: "password123",
        friends: []
    },
    {
        username: "Gr8Reads23",
        email: 'localLibrary@example.org',
        password: "password123",
        friends: []
    },
    {
        username: "WhiskyWhisker",
        email: 'kittyWhiskerLady@example.com',
        password: "password123",
        friends: []
    },
    {
        username: "Chiefz4LyfKC",
        email: 'CheeefsFan@example.com',
        password: "password123",
        friends: []
    },
    {
        username: "barxSavior",
        email: 'savePetsAdopt@example.com',
        password: "password123",
        friends: []
    },
    {
        username: "moneyManNY5",
        email: 'grubbyGreed@example.com',
        password: "password123",
        friends: []
    },
    {
        username: "NodeNerd",
        email: 'nerdyNode84@example.com',
        password: "password123",
        friends: []
    },
    {
        username: "BourbonBluff88",
        email: 'rye_drinker88@example.com',
        password: "password123",
        friends: []
    },
    {
        username: "paintedNails23",
        email: 'designerNailsNow@example.com',
        password: "password123",
        friends: []
    }
];

const thoughts = [
    {
        thoughtText: "Happy Birthday to my bestie. You are fantastic!",
        username: "sparklingDusk",
        reactions: []
    },
    {
        thoughtText: "So happy tomorrow is Friday!",
        username: "sparklingDusk",
        reactions: []
    },
    {
        thoughtText: "I wish I had more time in the day for this assignment!!",
        username: "NodeNerd",
        reactions: []
    }
];

const reactions = [
    {
        reactionId: new mongoose.Types.ObjectId(),
        reactionBody: "That's a true statement!",
        username: "WhiskyWhisker"
    },
    {
        reactionId: new mongoose.Types.ObjectId(),
        reactionBody: "I think you're nice today.",
        username: "paintedNails23"
    },
    {
        reactionId: new mongoose.Types.ObjectId(),
        reactionBody: "You should contact me directly to invest in Bitcoin!",
        username: "moneyManNY5"
    },
    {
        reactionId: new mongoose.Types.ObjectId(),
        reactionBody: "Yeah man, me too but I'd take a longer nap",
        username: "BourbonBluff88"
    }
];

connection.on('error', (err) => err);

connection.once("open", async () => {
    await User.deleteMany({})
    await Thought.deleteMany({})

   await User.insertMany(users)

   for(let i = 0; i < thoughts.length; i++){
    const newThought = await Thought.create({
        thoughtText: thoughts[i].thoughtText,
        username: thoughts[i].username,
        reactions: reactions[i]
    })
    await User.findOneAndUpdate({username: thoughts[i].username},{
        $push : {thoughts: newThought.id}
    })
   }


   console.table(users)
   console.table(thoughts)
   console.table(reactions)
   console.log("Database is now seeded!")
   process.exit(1)
})