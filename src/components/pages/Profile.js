import React, { Component } from 'react';
import { Input } from 'react-materialize';
import Item from './items/Item.js';
import { SharedData } from './Data.js';

export default class Profile extends Component {
    render(){
        return(
            <div>
                {SharedData.map(function(el, index){
                    var sub_status;
                    if(el.symbol_img == "https://www.hulu.com/press/wp-content/uploads/2017/05/hulu-interactive-rgb-800x600.jpg"){
                        sub_status = false;
                    } else {
                        sub_status = true;
                    }
                    return (<Item
                        symbol_img = {el.symbol_img}
                        profile_name =  {el.profile_name}
                        thumb_img =  {el.thumb_img}
                        title_name = {el.title_name}
                        comment = {el.comment}
                        unsubscribed = {sub_status}
                        thumb_value = {el.thumb_value}
                        post_date = {el.post_date}
                        key={index}
                    />);
                })}
            </div>
            
            
            
        );
    }
}