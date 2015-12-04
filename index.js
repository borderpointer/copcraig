var slackbot = require('node-slackbot');

var request = require('request');

var bot_token = process.env.SLACK_API_TOKEN;

var team_owner_token = process.env.TEAM_OWNER_TOKEN;

var bot = new slackbot(bot_token);

var copcraig = function(message, cb) {

    var craig_says = [

        "SHAME SHAME SHAME!",
        "no gifs!",
        "people need to stop using gifs for no reason",
        "gifs are stupid",
        "ahhhh stop!!!!",
        "w: fe",
        "womp womp"

    ]

    function random_number(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // delete gif and send one of craig_say's string
    if ( ('message' == message.type && message.text !== undefined ) && ( message.text.indexOf(".gif") > -1 || message.text.indexOf("//gph.is/") > -1 || message.text.indexOf("/giphy") > -1 ) ) {

        // making the delete request
        request("https://slack.com/api/chat.delete?token=" + team_owner_token + "&ts=" + message.ts + "&channel=" + message.channel, function(err, response, body) {

            console.log("----------------response----------------")
            console.log(response);
            console.log("----------------------------------------")

            bot.sendMessage(message.channel, "i just deleted your gif cuz " + craig_says[random_number(0, craig_says.length - 1)]);

            });;

    }

    cb();

};

bot.use(copcraig);

bot.connect();