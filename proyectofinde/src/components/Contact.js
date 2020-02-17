import React from "react";

const Contact = () => {
  return (
    <div id="contact" class="container-fullwidth">
        <h2 class="text-center">CONTACT</h2>
        <div class="row text-center">
            <div class="col-sm-5">
            <p>Contact us and we'll get back to you within 24 hours.</p>
            <p><span class="glyphicon glyphicon-map-marker"></span> Chicago, US</p>
            <p><span class="glyphicon glyphicon-phone"></span> +00 1515151515</p>
            <p><span class="glyphicon glyphicon-envelope"></span> myemail@something.com</p>
            </div>
            <div class="col-sm-7 ">
            <div class="row">
                <div class="col-sm-6 form-group">
                <input class="form-control" id="name" name="name" placeholder="Name" type="text" required></input>
                </div>
                <div class="col-sm-6 form-group">
                <input class="form-control" id="email" name="email" placeholder="Email" type="email" required></input>
                </div>
            </div>
            <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br></br>
            <div class="row">
                <div class="col-sm-12 form-group">
                <button class="btn btn-info" type="submit">Send</button>
                </div>
            </div>
            </div>
        </div>
      </div>
  );
}

export default Contact;