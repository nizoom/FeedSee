import './App.css';
import React from 'react'
import Grid from '@material-ui/core/Grid';


import Instructions from "./components/instructions/instructions"
import Input from "./components/input/input"
import TwitterResults from "./components/twitterResults/twitterResults"
import MyCloud from "./components/wordcloud/wordcloud"
import CloudBtn from "./components/wordcloud/initcloudbtn"
import BackBtn from "./components/backbtn/backbtn"
import SearchFailed from "./components/notfound/searchfailed"
import CurrentlyViewing from './components/currentlyviewing/currentlyviewing';
import HomeBtn from './components/homebtn/homebtn';


import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const [loading, setLoading] = React.useState(false); // handle name

  const [authorName, setAuthorName] = React.useState(null);

  const [data, setData] = React.useState(["No Tweets"]);

  const [cloudText, setCloudText] = React.useState([]);

  const [appCSS, setAppCSS] = React.useState("App")

  const [successfulQuery, setsuccessfulQuery] = React.useState(true);

  const [currentlyReading, setCurrentlyReading] = React.useState(false);


  const manageCloudInit = (status) => {
    //console.log(status)
    status ? setAppCSS("CloudApp") : setAppCSS("App")
    //return (status ? "show cloud" : "don't show")
  }

  const handleBackBtn = () => {
    setAppCSS("App")
  }

  const handleInput = (submittedName) => {
    setLoading(true);
    setsuccessfulQuery(true);
    //.log(submittedName);


    //console.log("Making request")

    fetch(`/api/users/${submittedName}`) //user=${submittedName}`
      .then((res) => res.json())
      .then(res => {
        //console.log("yo")
        if (Array.isArray(res)) { // successful query with followers

          const [tweets, wordCloudtext, authorName] = [res[0], res[1], res[2]];
          console.log(authorName)

          setData(tweets)
          setCloudText(wordCloudtext)
          setsuccessfulQuery(true);
          setCurrentlyReading(true);
          setAuthorName(authorName)
          //console.log(wordCloudtext.length);
          setLoading(false);

        } else {
          setsuccessfulQuery(false);
          if (res.hasOwnProperty("notFound")) {
            //console.log("not an array") // account not found 
            //console.log(res)
            setData(res.notFound)
            setCloudText([]); // reset cloud 
            setsuccessfulQuery(false);
            setLoading(false);
            //setPresentIssueMsg(true)
          } else { //account exists but follows no one 
            //console.log("follows no one")
            setData("0")
            setCloudText([]); // reset cloud 
            setsuccessfulQuery(false);
            setAuthorName(res.authorName)
            setLoading(false);
            //setPresentIssueMsg(true)
          }

        }

      })

  }

  const returnFromCurrentlyViewing = (newStatus) => {
    //console.log("changed view")
    setCurrentlyReading(newStatus)
  }


  return (
    <Router>
      <div className="App">
        {appCSS === "App" ? <Grid container spacing={4} direction="column" style={{
          margin: 0,
          width: '100%',
        }}>

          <HomeBtn />
          <Grid item lg={12}>
            <Instructions />
          </Grid>

          <Grid item lg={12} style={{ margin: "0" }}>
            {currentlyReading ? <CurrentlyViewing authorName={authorName} changeStatus={returnFromCurrentlyViewing}
              status={currentlyReading}
            />
              :
              < Input handleInput={handleInput} loadingStatus={loading} />}

          </Grid>


          <Grid item style={{ padding: "0px" }} >
            {cloudText.length > 0 && currentlyReading ? <CloudBtn returnClickToParent={manageCloudInit} /> : null}
          </Grid>


          <Grid item >
            {!successfulQuery ? <SearchFailed authorName={authorName}
              issue={data} goBack={returnFromCurrentlyViewing}
            /> : null}
            {currentlyReading ? <section>
              <TwitterResults results={data} />
            </section> : null}
          </Grid>

        </Grid> :
          <div className="CloudApp">
            <div>
              <BackBtn handler={handleBackBtn} />
            </div>
            <div>
              <MyCloud text={cloudText} authorName={authorName} />
            </div>
          </div>

        }

      </div >
    </Router>
  );
}

export default App;

// {cloudWanted ? <MyCloud text={cloudText} /> : null}