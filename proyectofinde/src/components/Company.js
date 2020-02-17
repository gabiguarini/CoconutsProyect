import React, { useState} from "react";

function Company () {

    const [isShown, setIsShown] = useState(false);

  return (
      <div class="jumbotron text-center">
        <h1>Company</h1> 
        <p>We specialize in blablabla</p> 
        <form>
            <div class="input-group text-center">
                <input type="email" class="form-control" size="50" placeholder="Email Address" required></input>
                <div class="input-group-btn">
                    <button type="button" 
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)} 
                    class="btn btn-info">Subscribe</button>
                    {isShown && (
                        <p>placeholder</p>                        
                    )}
                </div>
            </div>
        </form>
    </div>
    );
}

export default Company;