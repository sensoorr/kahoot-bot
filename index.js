const Kahoot = require("kahoot.js-updated");
const settings = require('./settings.json');
const Chance = require('chance');
const chance = new Chance();
const pin = settings.gameID;

function joinKahoot() {
    const client = new Kahoot;
    const name = settings.random_name ? chance.name() : settings.bot_name+i;

    client.join(pin, name);
    
    client.on("Joined", () => {
        console.log(`Logged in as ${name}`);
    }); 
    
    client.on("QuizStart", () => {
        console.log("The Kahoot has started.")
    });
    
    client.on("QuestionStart", question => {
        question.answer(Math.floor(Math.random() * 2));
    });

    client.on("QuizEnd", () => {
        console.log("The Kahoot has ended.");
    }); 
};

joinKahoot()