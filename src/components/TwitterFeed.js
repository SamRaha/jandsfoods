import React from "react";
import "./TwitterFeed.scss";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function TwitterFeed() {
    return (
        <div className="twitter-feed-container">
            <h1>Our Recent Tweets</h1>
            <div className="centerContent twitter-feed">
                <div className=" selfCenter twitter-timeline">
                    <TwitterTimelineEmbed sourceType="profile" screenName="jandsfoodsleeds" options={{ height: 1000, width: 800 }} />
                    <TwitterTimelineEmbed sourceType="profile" screenName="jandsfoodsleeds" options={{ id: "profile:jandsfoodsleeds" }} />
                </div>
            </div>
        </div>
    );
}

export default TwitterFeed;
