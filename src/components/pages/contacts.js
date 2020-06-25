import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Contacts extends Component{

    render(){

        return(
            <div>
                    <section className="my-5 py-5">
                        <div className="container">
                            <div className="well well-sm">
                                <h1><strong>Our Location</strong></h1>

                            </div>

                            <div className="row">
                                <div className="col md-7">
                                <iframe src="https://www.google.com/maps/d/embed?mid=1RSGrdCFfuLT9g4TE1r9b-WgfGTnPnf_x"
                                    style={{
                                        width:'100%',
                                        height:'315px',
                                        border : '0',
                                        frameborder : '0'
                                    }} allowFullScreen
                                ></iframe>
                                </div>

                                <div className="col md-5">
                                    <h4>Contact Us</h4>
                                    <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" className="form-control" placeholder="Phone Number"></input>
                                    </div>
                                    <textarea className="form-control" cols="30" rows="3" placeholder="Message"></textarea>
                                    <Link className="btn btn-outline-primary text-uppercase mt">
                                        <i className="fa fa-paper-plane-o" aria-hidden="true" />
                                        <i className="fab fa-telegram-plane" />&nbsp;Send
                                    </Link>  
                                    </form>

                                </div>

                            </div>
                        </div>

                    </section>
            </div>
        );
    }
}

export default Contacts;