import React, { Component } from 'react'
import './secondaryHeader.css';
import { Link } from 'react-router-dom';
export default class SecondartHeader extends Component {
    render(){
    return (
        <div className="secondary-header">
            <div className="left"> 
                <div className="icon">
                    <Link to='/home'>
                        <i className="fas fa-arrow-left fa-3x">
                        </i>
                   </Link>
                </div>
                <h1>العودة الى القسم الرئيسي</h1>
            </div>
            <div className="right">
            <h1><span>فريق</span> ممرض العالم </h1>

            </div>


        </div>
      
    )
}
}