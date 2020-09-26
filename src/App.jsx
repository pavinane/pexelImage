import React,{Component} from 'react';
import Search from './Search';
import './App.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 
class App extends Component{
  render(){
    return(
      <MuiThemeProvider>
      <div className="dispaly_image">
        < Search/>
      </div>
      </MuiThemeProvider>
    )
  }

}

export default App;
