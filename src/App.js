import './App.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Instructions from "./components/instructions/instructions"
import Input from "./components/input/input"
import TwitterResults from "./components/twitterResults/twitterResults"



function App() {

  const handleInput = ( ) => {
    
  }
  return (
    <div className="App">
      <Grid container spacing = {10} direction = "column">
     
          <Grid item>
          <header>
            <Typography variant = "h1" style = {{fontSize:"3em", marginTop: "15px"}}>  
            Welcome to The Echo Chamber </Typography>
          </header>
          </Grid>

          <Grid item>
            <Instructions/>
          </Grid>

          <Grid item>
            <Input/>
          </Grid>

          <Grid item>
            <section>
              <TwitterResults/>
            </section>
          </Grid>

      </Grid>
    </div>
  );
}

export default App;
