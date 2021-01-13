import React from "react";
import "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
    return (
<div background>
<div className="row">
    <div class="col-sm-6">
    <div class="card" width= '18rem'>
            <img src="https://knuts839.github.io/Portfolio/PasswordGenerator.jpg" class="card-img-top" alt=" not rendering"/>
            <div class="card-body">
                <h5 class="card-title">PasswordGenerator</h5>
                <p class="card-text">Password generator this was my third assignment in the boot camp. This application required validation so that the user was forced to request at least and 8-character password and no more than a 128-character password. The password generator had to have user choice of four-character sets (numbers, Uppercase letters, Lowercase letters, and special characters).  In these yes or no prompts for the various cases I included validation that forces the user to write y for yes or an n for no and had a line of code that if the user wrote an uppercase y or n it would just be forced to lowercase and considered a valid response. For anything that required a user response I had code for validation to make sure it was correct if not I would just give them that same prompt again. </p>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
    <div class="card" width= '18rem'>
            <img src="https://knuts839.github.io/Portfolio/Penrad.jpg" class="card-img-top" alt=" not rendering"/>
            <div class="card-body">
                <h5 class="card-title">Education</h5>
                <p class="card-text">I was a summer intern at Penrad Technologies inc. My responsibilities were to create the medical definitions used in the initial breast cancer ballot that was voted on by radiologists throughout the country.</p>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-sm-6">
    <div class="card" width= '18rem'>
            <img src="https://knuts839.github.io/Portfolio/Penrad.jpg" class="card-img-top" alt=" not rendering"/>
            <div class="card-body">
                <h5 class="card-title">Education</h5>
                <p class="card-text">I was a summer intern at Penrad Technologies inc. My responsibilities were to create the medical definitions used in the initial breast cancer ballot that was voted on by radiologists throughout the country.</p>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
    <div class="card" width= '18rem'>
            <img src="https://knuts839.github.io/Portfolio/Penrad.jpg" class="card-img-top" alt=" not rendering"/>
            <div class="card-body">
                <h5 class="card-title">Skills</h5>
                <p class="card-text">I was a summer intern at Penrad Technologies inc. My responsibilities were to create the medical definitions used in the initial breast cancer ballot that was voted on by radiologists throughout the country.</p>
                <p class="card-text">I did some light programing and code testing as well.</p>
            </div>
        </div>
    </div>
</div>
</div>
    )}
    export default Portfolio