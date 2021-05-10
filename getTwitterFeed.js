var Twitter = require("twitter");
require("dotenv/config");

const apikey = process.env.apikey;
const apiSecretKey = process.env.apikeysecret;
const accessToken = process.env.accesstoken;
const accessTokenSecret = process.env.acesstokensecret;

var client = new Twitter({
    consumer_key: apikey,
    consumer_secret: apiSecretKey,
    access_token_key: accessToken,
    access_token_secret: accessTokenSecret,
});
// let tweets = [];
var params = { screen_name: "@jandsfoodsleeds" };
client.get("statuses/user_timeline", params, function (error, tweets, response) {
    if (!error) {
        console.log(tweets);
        Object.values(tweets).forEach((key, i) => {
            // console.log(key.text);
            // display.push(<Bar key={i} dataKey={key} stackId={alphabet[i]} fill={colours[i]} label={{ position: "top" }} />);
        });
        // console.log(typeof tweets);
        // Object.keys()
    }
});
