import React, { Component } from 'react';
import logo from './logo.svg';
//import './assets/App.css';
import "./assets/css/googleonline.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/font-awesome/css/font-awesome.min.css";
import "./assets/css/animate.css";
import "./assets/css/style.css";
import configuration from './config';
import globalConfig from 'react-global-configuration';

globalConfig.set(configuration);


class App extends Component {
  render() {
    return (
      <div className="c-form-container section-container section-container-image-bg">
	        <div className="container">
	        	
	            <div className="row">
	                <div className="col-sm-8 col-sm-offset-2 c-form section-description wow fadeIn">
	                    <h1>Bootstrap <strong>Contact Form</strong> Template</h1>
	                    <p>This is a free Bootstrap contact form template on a fullscreen background.
	                    	Download it on <a href="http://azmind.com">AZMIND</a> and customize it as you like.</p>
	                </div>
	            </div>
	            
	            <div className="row">
	            	<div className="col-sm-6 col-sm-offset-3 c-form-box wow fadeInUp">
	                    <div className="c-form-top">
                    		<div className="c-form-top-left">
                    			<h3>Contact us</h3>
                          <p>Fill in the form below to contact us:</p>
                    		</div>
                    		<div className="c-form-top-right">
                    			<div className="c-form-top-right-icon">
                    				<i className="fa fa-paper-plane"></i>
                    			</div>
                    		</div>
                        </div>
                        <div className="c-form-bottom">
		                    <form role="form" action="assets/contact.php" method="post">
		                    	<div className="form-group">
		                    		<label htmlFor="c-form-name">
		                    			<span className="label-text">Name:</span> 
		                    			<span className="contact-error"></span>
		                    		</label>
		                        	<input type="text" name="name" placeholder="Your name..." className="c-form-name form-control" id="c-form-name" />
		                        </div>
		                    	<div className="form-group">
		                    		<label htmlFor="c-form-email">
		                    			<span className="label-text">Email:</span> 
		                    			<span className="contact-error"></span>
		                    		</label>
		                        	<input type="text" name="email" placeholder="Your email address..." className="c-form-email form-control" id="c-form-email" />
		                        </div>
		                        <div className="form-group">
		                        	<label htmlFor="c-form-subject">
		                    			<span className="label-text">Subject:</span> 
		                    			<span className="contact-error"></span>
		                    		</label>
		                        	<input type="text" name="subject" placeholder="Message subject..." className="c-form-subject form-control" id="c-form-subject" />
		                        </div>
		                        <div className="form-group">
		                        	<label htmlFor="c-form-message">
		                    			<span className="label-text">Message:</span> 
		                    			<span className="contact-error"></span>
		                    		</label>
		                        	<textarea name="message" placeholder="Message text..." className="c-form-message form-control" id="c-form-message"></textarea>
		                        </div>
		                        <button type="submit" className="btn">Send message</button>
		                    </form>
	                    </div>	                    
	                </div>
	            </div>	         
	            
	        </div>
        </div>
    );
  }
}

export default App;
