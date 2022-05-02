import React from 'react';
import './App.css';
import Spinner from './components/Spinner';
import data from './data/cv.json';
import Home from './pages/Home';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {loading:true}
  }

  render(){
    if(this.state.loading){
      return <Spinner/>
    }
    
    return ( 
         <>
          <Home data ={data}/>
         </>
    );
  }

  componentDidMount(){
    setTimeout(() => {
    this.setState({loading:false})
    }, 2000);

  }
  
}

export default App;
