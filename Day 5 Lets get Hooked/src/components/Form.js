const Form = () =>{
    return (
        <div className="Form-container">
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"></input><br></br><br></br>
            
            <label for="email">Email:</label><br></br>
            <input type="email" id="email" name="email"></input><br></br><br></br>
            
            <label for="message">Message:</label><br></br>
            <textarea id="message" name="message" rows="4" cols="50"></textarea><br></br><br></br>
            
            <input type="submit" value="Submit"></input>
        </form>
    </div>
    ) 
}

export default Form;