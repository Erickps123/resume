import React from 'react';
import Header from '../components/Header';
import Languages from '../components/Languages';
import Profiles from '../components/Profiles';
import Tecnologies from '../components/Tecnologies';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={lang: "english"}
    

    }
    render(){
        let greetings = this.props.data.config.greetings;
        let info = this.props.data.info.config_language;
        let general_info = this.props.data.info;
        let current_language = this.state.lang === "english"? 0 : 1;
        document.title = general_info.abbr;
  
        return(
            <>
            <Profiles profiles = {general_info.profiles}/>
            <section id='header'>
                <Header greetings={greetings[current_language]} img={general_info.img_url} />
            </section>
            <section id='tecnologies'>
                <Tecnologies tecnologies = {general_info.tecnologies}/>
            </section>
            <section id='languages'>
                <Languages languages = {info[0][this.state.lang][0].language}/>
            </section>
            </>
        )
    }
    componentDidMount(){
       //console.log(this.props.data)
    }
}

export default Home;