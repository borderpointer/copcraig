# Copcraig

Slackbot that automatically detects gifs posted in channels and deletes them. This bot was built with the [node-slackbot](https://github.com/rmcdaniel/node-slackbot) module by [Richard McDaniel](https://github.com/rmcdaniel).

-----

## Installation

*You must have node.js installed for this to work.* <br>
*You must be your Slack's team owner or have access to their authentication token in order for this bot to work*<br>

* create a bot user intergration [here](https://my.slack.com/services/new/bot).
* create an authentication token [here](https://api.slack.com/web#basics) (make sure you are the team's owner).
* clone this repo in Terminal while in your desired directory: `git clone git@github.com:borderpointer/copcraig.git`
* cd into the directory `cd copcraig`
* create an environmental variable `SLACK_API_TOKEN` that equals to the token generated from step 1.
* create an environmental variable `TEAM_OWNER_TOKEN` that equals to the token generated from step 2.
* run `node index.js`
* invite `copcraig` into your desired Slack group.

## Contribution

Huge thanks to [Thom Page](https://github.com/singular000) for the idea!

