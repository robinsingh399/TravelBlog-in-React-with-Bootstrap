import React from 'react';
import styled from 'styled-components';

const footer = (props) =>{
    return(
        <FooterContainer className="main-footer">
            <div className="footer-middle">

            <div className="container">
                
                <div className="row">
                    {/* column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Contact Me</h4>
                        <ul className="list-unstyled">
                            <li>robinsingh399@gmail.com</li>
                            <li>Ph no:- 9786000801</li>
                            
                        </ul>
                    </div>
                    {/* column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>LoremIpsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">LoremIpsum</a></li>
                            <li><a href="/">LoremIpsum</a></li>
                            <li><a href="/">LoremIpsum</a></li>
                            <li><a href="/">LoremIpsum</a></li>
                            
                        </ul>
                    </div>
                    {/* column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>LoremIpsum</h4>
                        <ul className="list-unstyled">
                        <li><a href="/">LoremIpsum</a></li>
                        <li><a href="/">LoremIpsum</a></li>
                        <li><a href="/">LoremIpsum</a></li>
                        <li><a href="/">LoremIpsum</a></li>

                        </ul>
                    </div>
                    {/* column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>LoremIpsum</h4>
                        <ul className="list-unstyled">
                        <li><a href="/">LoremIpsum</a></li>
                        <li><a href="/">LoremIpsum</a></li>
                        <li><a href="/">LoremIpsum</a></li>
                        <li><a href="/">LoremIpsum</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
            </div>
           
        </FooterContainer>
    );
}
export default footer;

const FooterContainer = styled.footer`

.footer-middle{
    background: var(--mainDark);
    padding-top : 3rem;
    color : white;
    
}

.footer-bottom{
    padding-top : 3rem;
    padding-bottom: 1rem;
}

.list-unstyled li a{
    color : var(--mainGrey);
}

.list-unstyled li a:hover{
    color : var(--mainLightGrey);
}

`;