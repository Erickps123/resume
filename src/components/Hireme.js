import React from 'react';
import DO from './src/dominican-republic.png';
import { useForm, ValidationError } from '@formspree/react';


function ContactForm(props) {
  const [state, handleSubmit] = useForm("xayvlarn");

  if (state.succeeded) {
    return <p>Thanks for Contact me!</p>;
  }

  return (
  <section className="contact-form mb-4">
        <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <label htmlFor="name" className="">{props.labelform[0]}</label>
                                <input type="text" id="name" name="name" className="form-control"/>
                            </div>
                        </div>
        
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <label htmlFor="email" className="">{props.labelform[1]}</label>
                                <input type="email" id="email" name="email" className="form-control"/>
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="md-form">
                                <label htmlFor="message">{props.labelform[2]}</label>
                                <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"/>
                                <ValidationError 
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                    </div>
            <div className="text-center text-md-left">
                <button className="btn btn-primary" type="submit" disabled={state.submitting}>
                Send
                </button>
            </div>
            </form>
            <div className="status"></div>
        </div>
        <div className="col-md-3 text-center contact-detail">
            <ul className="list-unstyled mb-0">
                <li><i className="fa fa-map-marker"></i>
                    <p>{props.location} <img className='country-flag' src={DO} alt=""/></p>
                   
                </li>

                <li><i className="fa fa-phone mt-4 "></i>
                    <p>{props.contact["primary_cellphone"]}</p>
                </li>

                <li><i className="fa fa-envelope mt-4"></i>
                    <p>{props.contact["email"]}</p>
                </li>
            </ul>
        </div>
    </div>
</section>
  );
}
function Hireme(props) {
  return (
    <div className='container-contact reveal'>  
    <h3 className="tittle-section">{props.title}</h3>
    <ContactForm {...props} />
    </div>
  );
}
export default Hireme;