import { Component } from 'react';
import './navbarleft.css';
import logo from '../../../assets/svg/logo.svg';

export class NavbarLeft extends Component{
    render(){
        return (
            <section className="clodeo-layout-has-sider" style={{minHeight: '100vh'}}>
            <div className="clodeo-layout-sider-children-custom">
                <div className="clodeo-nav-section">
                <img src={logo} alt="logo" />
                </div>
                <div className="clodeo-nav-section">
                <img src={logo} alt="logo" />
                </div>
            </div>
            </section>
        )
    }    
}