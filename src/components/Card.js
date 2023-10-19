

const Card = (props) => {
    return (
        <div>
            
                <div style={{ display: "", justifyContent: "space-between" }}>
                    <div>
                        <center>
                            <img style={{ border: "1px soild", borderRadius: "10px" , width:"300px"}} src={props.Photo} alt='Profile' />
                        </center>
                    </div>
                    <div style={{ display: "", justifyContent: "center" }}>
                        <center>
                        <label> Dish Name:</label>
                        <h3>{props.name}</h3><br />
                        </center>
                        <label>Reciept:</label>
                        <p>{props.desc}</p>
                    </div>
                </div>
            <br/>
        </div>
    )
}

export default Card