import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
        <div className="col-sm-3 col-md-6 c-form-box wow fadeInUp">
          <div className="c-form-top">
                <div className="c-form-top-left">
                  <h3>Utilize usuário e senha para entrar:</h3>
                </div>
                <div className="c-form-top-right">
                  <div className="c-form-top-right-icon">
                    <i className="fa fa-paper-plane"></i>
                  </div>
                </div>
          </div>
          <div className="c-form-bottom">
            <form role="form" action="#" method="post">
              <div className="form-group">
                <label htmlFor="c-form-email">
                  <span className="label-text">Email:</span> 
                  <span className="contact-error"></span>
                </label>
                <input type="text" name="email" placeholder="seuemail@gmail.com..." className="c-form-email form-control" id="c-form-email" />
              </div>
              <div className="form-group">
                <label htmlFor="c-form-password">
                  <span className="label-password">Nome:</span> 
                  <span className="contact-error"></span>
                </label>
                <input type="password" name="password" placeholder="Senha..." className="c-form-password form-control" id="c-form-password" />
              </div>
              <button type="submit" className="btn">Entrar</button>
            </form>
          </div>	                    
        </div>    	            
    );
  }
}
