import React, { Component } from 'react';
import Pubsub from 'pubsub-js';
import globalConfig from 'react-global-configuration';

export default class SignUp extends Component {

  constructor()
  {
    super();
    this.state = {email:null, name:null};
  }

  componentDidMount()
  {
    Pubsub.subscribe('signup-created',this.signupCreated.bind(this));
  }

  postSignup(event){
    event.preventDefault();

    const postAccount = {name:this.name.value, email:this.email.value };
    console.log(postAccount);
    //var data = new FormData();
    //data.append( "json", JSON.stringify( postAccount ) );
    var data = JSON.stringify(postAccount);

    var server = globalConfig.get('server');

    fetch(server.url + "/signup/create",
    {
        method: "POST",
        headers:{
          'content-type': 'application/json;charset=UTF-8'
        },
        body: data
    })
    .then(function(res){ return res.json(); })
    .then(function(data){ alert( JSON.stringify( data ) ) })


    //.then(newAccount => {
    //  Pubsub.publish('signup-created', newAccount);
    //});

  }

  signupCreated(account){
    alert('criado:'+account.id);
  }

  render() {
    return (
      <div className="col-sm-3 col-md-6 c-form-box wow fadeInUp">
        <div className="c-form-top">
          <div className="c-form-top-left">
            <h3>Preencha o formulário abaixo para se cadastrar:</h3>
          </div>
          <div className="c-form-top-right">
            <div className="c-form-top-right-icon">
              <i className="fa fa-paper-plane"></i>
            </div>
          </div>
          </div>
          <div className="c-form-bottom">
          <form role="form" action="#" method="post" onSubmit={this.postSignup.bind(this)} >
            <div className="form-group">
              <label htmlFor="c-form-name">
                <span className="label-text">Nome:</span> 
                <span className="contact-error"></span>
              </label>
                <input ref={input => this.name=input} type="text" name="name" placeholder="Seu Nome..." className="c-form-name form-control" id="c-form-name" />
              </div>
            <div className="form-group">
              <label htmlFor="c-form-email">
                <span className="label-text">Email:</span> 
                <span className="contact-error"></span>
              </label>
                <input ref={input => this.email = input} type="text" name="email" placeholder="seuemail@gmail.com..." className="c-form-email form-control" id="c-form-email" />
              </div>
              <button type="submit" className="btn">Cadastrar</button>
          </form>
        </div>	                    
      </div>      
    );
  }
}
