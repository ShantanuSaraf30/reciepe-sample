import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div style={{padding:"10px"}}>
                    <span>Recipe Book</span>
                    
                </div>
                <div style={{marginTop:"10px"}}>
                    <Link to='/'>Home</Link>
                   
                    <Link to='/veg-recipe'>Veg</Link>
                    <Link to='/nonveg-recipe'>Non-Veg</Link>
                </div>
            </div>

        </nav>
    )
}

export default NavBar;