import React from "react";
import './header.css'
import group9 from '../assets/Image/chefify.png';
import check from '../assets/Image/check.png';
import avt from '../assets/Image/avatar.png';


class Header extends React.Component {
    render() {
        return (

            <div className="flex-container">
                <div className="logo">
                    <img src={group9} />
                    <input type="search" placeholder="cakescascsa" className="search" />
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="">What to cook</a> </li>
                        <li><a href="">Receipts</a> </li>
                        <li><a href="">Igredient</a> </li>
                        <li><a href="">Occasions</a> </li>
                        <li><a href="">About us</a> </li>
                    </ul>
                </div>
                <div className="item3">
                    <div className="receipt">
                        <img src={check} alt="" />
                      <span> Your Recipe Box</span> 
                        
                    </div>
                    <img src={avt} alt="" className="a2" />
                    
                </div>
            </div>

        )
    }
}
export default Header