import Photo from './images/Hero.png'


import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
        <font face="Arial" color="Blue">
        <fieldset style={{ width: '80%' }}>
            <center>
             
            <img src={Photo} alt='Profile' width="40%" style={{border:"1px soild" , borderRadius:"10px"}}/>
            
                <h1>!!Explore New Recieps!!</h1>
                <h2><Link to ="/nonveg-recipe">helllo</Link></h2>
             
               
        
          
           
         
            </center>
          
        </fieldset>
      </font>
    </div>
  )
}

export default Home