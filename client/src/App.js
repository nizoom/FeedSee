import './App.css';
import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Instructions from "./components/instructions/instructions"
import Input from "./components/input/input"
import TwitterResults from "./components/twitterResults/twitterResults"
import MyCloud from "./components/wordcloud/wordcloud"
import CloudBtn from "./components/wordcloud/initcloudbtn"
//import validateHandle from "./twitterAPI/validateHandle"


function App() {
  const [name, setName] = React.useState(null);

  const [data, setData] = React.useState(["No Tweets"]);

  const [cloudText, setCloudText] = React.useState([]);

  const manageCloudInit = (status) => {
    status ? console.log("show cloud") : console.log("don't show")
    //return (status ? "show cloud" : "don't show")
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
      <Grid container spacing={10} direction="column"

      >
        <Grid item>
          <Instructions />
        </Grid>

        <Grid>
          <Input handleInput={handleInput} />
        </Grid>

        <Grid item>
          {cloudText.length > 0 ? <CloudBtn returnClickToParent={manageCloudInit} /> : null}
        </Grid>


        <Grid item>
          <section>
            <TwitterResults results={data} />
          </section>
        </Grid>

        <Grid item>
          <section>

          </section>
        </Grid>

      </Grid>

    </div >
  );
}

export default App;

// {cloudWanted ? <MyCloud text={cloudText} /> : null}