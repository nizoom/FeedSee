import './App.css';
import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Instructions from "./components/instructions/instructions"
import Input from "./components/input/input"
import TwitterResults from "./components/twitterResults/twitterResults"
import MyCloud from "./components/wordcloud/wordcloud"
import CloudBtn from "./components/wordcloud/initcloudbtn"
import BackBtn from "./components/backbtn/backbtn"
//import validateHandle from "./twitterAPI/validateHandle"


function App() {
  const [name, setName] = React.useState(null);

  const [data, setData] = React.useState(["No Tweets"]);

  const [cloudText, setCloudText] = React.useState([]);

  const [appCSS, setAppCSS] = React.useState("App")

  const manageCloudInit = (status) => {
    console.log(status)
    status ? setAppCSS("CloudApp") : setAppCSS("App")
    //return (status ? "show cloud" : "don't show")
  }

  const handleBackBtn = () => {
    setAppCSS("App")
  }

  const handleInput = (submittedName) => {
    console.log(submittedName);
    setName(submittedName);

    console.log("Making request")

    fetch(`/api/users/${submittedName}`) //user=${submittedName}`
      .then((res) => res.json())
      .then(res => {
        const [tweets, wordCloudtext] = [res[0], res[1]];
        setData(tweets)
        setCloudText(wordCloudtext)
        console.log(wordCloudtext);
      })
    //.then((tweets) => setData(tweets))
    //.then((data) => console.log(data))
  }



  return (
    <div className="App">
      { appCSS === "App" ? <Grid container spacing={10} direction="column"

      >
        <Grid item>
          <Instructions />
        </Grid>

        <Grid>
          <Input handleInput={handleInput} />
        </Grid>

        <Grid item style={{ padding: "0px" }} >
          {cloudText.length > 0 ? <CloudBtn returnClickToParent={manageCloudInit} /> : null}
        </Grid>


        <Grid item >
          <section>
            <TwitterResults results={data} />
          </section>
        </Grid>

      </Grid> :

        <div>
          <BackBtn handler={handleBackBtn} />
        </div>}

    </div >
  );
}

export default App;

// {cloudWanted ? <MyCloud text={cloudText} /> : null}