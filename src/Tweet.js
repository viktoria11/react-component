import React from "react";
import HeartIcon from "./HeartIcon";
import ProfileIcon from "./ProfileIcon";
import "./Tweet.css";

function Tweet(props) {
  return (
    <div className="tweet">
      {props.photo && (
        <div
          className="tweet-photo"
          style={{ backgroundImage: `url(${props.photo})` }}
        />
      )}
      <div className="tweet-body">
        <div className="tweet-header">
          <div
            className="tweet-header__avatar"
            style={{ backgroundImage: `url(${props.avatar})` }}
          />
          <div className="tweet-header-content">
            <div className="tweet-header__title">{props.name}</div>
            <div className="tweet-header__subtitle">{props.username}</div>
          </div>
        </div>
        <div className="tweet-content">{props.content}</div>
        <div className="tweet-footer">
          <div className="tweet-footer__date">{props.dates}</div>
          <div className="tweet-footer-meta">
            <span className="tweet-footer__likes">
              <HeartIcon /> <span>{props.likes}</span>
            </span>
            <span className="tweet-footer__link">
              <ProfileIcon /> <span>{props.profileText}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
