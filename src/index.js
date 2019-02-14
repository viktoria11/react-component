import React from "react";
import ReactDOM from "react-dom";
import Tweet from "./Tweet";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Embedded Tweets</h1>
        <h2>Desktop</h2>
        <div className="container">
          <div className="col-6">
            <Tweet
              avatar="https://www.gravatar.com/avatar/11e061ca9865ea17690b9971ff1c8150?s=32&d=identicon&r=PG"
              name="Patryk llnicki"
              username="@Patryk_llnicki"
              likes={4}
              profileText="See Patryk gffugugyu's other Tweets"
              dates="5:54 PM - Oct ,2018"
              content={
                <>
                  <span>News</span> <a href="#">#pes</a> <a href="#">#mops</a>
                </>
              }
              photo="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/paddington-20171019104642150.jpg"
            />
          </div>
          <div className="col-6">
            <Tweet
              avatar="https://www.gravatar.com/avatar/11e061ca9865ea17690b9971ff1c8150?s=32&d=identicon&r=PG"
              name="Patryk llnicki"
              username="@Patryk_llnicki"
              likes={4}
              profileText="See Patryk gffugugyu's other Tweets"
              dates="5:54 PM - Oct ,2018"
              content={
                <>
                  <span>News</span> <a href="#">#pes</a> <a href="#">#mops</a>
                </>
              }
              photo="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/paddington-20171019104642150.jpg"
            />
          </div>
          <div className="col-6">
            <Tweet
              avatar="https://www.gravatar.com/avatar/11e061ca9865ea17690b9971ff1c8150?s=32&d=identicon&r=PG"
              name="Patryk llnicki"
              username="@Patryk_llnicki"
              likes={4}
              profileText="See Patryk gffugugyu's other Tweets"
              dates="5:54 PM - Oct ,2018"
              content={
                <>
                  <span>News</span> <a href="#">#pes</a> <a href="#">#mops</a>
                </>
              }
              photo="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/paddington-20171019104642150.jpg"
            />
          </div>
          <div className="col-6">
            <Tweet
              avatar="https://www.gravatar.com/avatar/11e061ca9865ea17690b9971ff1c8150?s=32&d=identicon&r=PG"
              name="Patryk llnicki"
              username="@Patryk_llnicki"
              likes={4}
              profileText="See Patryk gffugugyu's other Tweets"
              dates="5:54 PM - Oct ,2018"
              content={
                <>
                  <span>News</span> <a href="#">#pes</a> <a href="#">#mops</a>
                </>
              }
              photo="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/paddington-20171019104642150.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
