import './App.css';
import React from 'react'
import Grid from '@material-ui/core/Grid';

import Instructions from "./components/instructions/instructions"
import Input from "./components/input/input"
import TwitterResults from "./components/twitterResults/twitterResults"
import MyCloud from "./components/wordcloud/wordcloud"
import CloudBtn from "./components/wordcloud/initcloudbtn"
import BackBtn from "./components/backbtn/backbtn"
import AccntNotFound from "./components/notfound/accountnotfound"
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
        console.log("yo")
        if (Array.isArray(res)) { // successful query with followers
          const [tweets, wordCloudtext] = [res[0], res[1]];
          setData(tweets)
          setCloudText(wordCloudtext)
          console.log(wordCloudtext);
        } else {
          console.log("not an array") // account not found 
          console.log(res)
          setData(res.notFound)
        }

      })
    //.then((tweets) => setData(tweets))
    //.then((data) => console.log(data))
  }



  return (
    <div className="App">
      { appCSS === "App" ? <Grid container spacing={5} direction="column" style={{
        margin: 0,
        width: '100%',
      }}>


        <Grid item>
          <Instructions />
        </Grid>

        <Grid item>
          <Input handleInput={handleInput} />
        </Grid>

        <Grid item style={{ padding: "0px" }} >
          {cloudText.length > 0 ? <CloudBtn returnClickToParent={manageCloudInit} /> : null}
        </Grid>


        <Grid item >
          {data === "not found" ? <AccntNotFound /> : <section>
            <TwitterResults results={data} />
          </section>}
        </Grid>

      </Grid> :
        <div className="CloudApp">
          <div>
            <BackBtn handler={handleBackBtn} />
          </div>
          <div>
            <MyCloud text={cloudText} accountName={name} />
          </div>
        </div>

      }

    </div >
  );
}

export default App;

// {cloudWanted ? <MyCloud text={cloudText} /> : null}