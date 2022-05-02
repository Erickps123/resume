import React from "react";
import imagen from './src/undraw_creation_re_d1mi.svg'





class Languages extends React.Component{
    constructor(props){
        super(props)
        this.state = {data:[]}
    }


    renderLanguages(key,name,experience,img,colorcode){
        return(
               <div className="language reveal" key={key}>
                    <div className="A"><img src={img}/></div>
                    <div className="B">{name}</div>
                    <div className="C">
                    <progress className={"progress "+colorcode} value={experience} max="5"></progress>
                    </div>
                    {/* <div className="D">{experience}/5</div> */}
               </div>
           
        );
    }
   render(){
    return(
        <>
        <h3 className="tittle-section">Languages</h3>
        {this.state.data.map((e,index)=>
               console.log(e)
            )}
        </>
    );
   }
   componentDidMount(){
       var languages = []
        Object.entries(this.props.languages).forEach(([tittle, value]) => {
                languages.push(value)
       })
      this.setState({data:languages})
   }
}

export default Languages;