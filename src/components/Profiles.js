import linkedin from './src/linkedin.png';
import instagram from './src/instagram.png';
import github from './src/github.png';

function Profiles(props)
{
    return(
            <div className="profiles">
                
               <a target="blank" href={props.profiles[0].linkedln}><img src={linkedin}/></a>
                <a target="blank" href={props.profiles[0].instagram}><img src={instagram}/></a>
                <a target="blank" href={props.profiles[0].github}><img src={github}/></a>
                
            </div>  
    );
}

export default Profiles;