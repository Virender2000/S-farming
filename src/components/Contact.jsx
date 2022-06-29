import React from "react";
import "../index.css";
 const Contact=()=>{
return(
    <>
     <div className="container">
            <div className="row">
                
               
                <div id="content" >
                <div className="text-center">
        <h1 className="display-4 head">FeedBack </h1>
        <hr className="w-25 mx-auto" />
        </div>

                    <form role="form">
                        <div className="form-group">
                            <label for="username" className="iconic user text_bold" /> Name <span className="required">*</span>
                            <input type="text" className="form-control" name="username" id="username"  required="required" placeholder="Hi friend, how may I call you ?" />
                        </div>
                        <div className="form-group">
                            <label for="usermail" className="iconic mail-alt" /> E-mail address <span className="required">*</span> 
                            <input type="email" className="form-control" name="usermail" id="usermail" placeholder="I promise I hate spam as much as you do" required="required" />
                        </div>
                        <div className="form-group">
                            <label for="subject" className="iconic quote-alt" /> Subject 
                            <input type="text" className="form-control" name="subject" id="subject"  required="required" placeholder="What would you like to talk about?" />
                        </div>
                        <div className="form-group">
                            <label for="message" className="iconic comment" /> FeedBack
                            <textarea name="message" id="message"  className="form-control" rows="3" placeholder="Don't be shy, live me a friendly message and I'll answer as soon as possible"  required="required" />
                        </div>
                        <input type="submit" value=" ★  Send the mail !" />    	
                    </form>
                </div>
            </div>
            
        </div>
    </>
);
}
export default Contact;