import React, { Component } from 'react';
import Item from './items/Item.js';
import { BookData } from './Data.js';

export default class Books extends Component {
    render(){
        return(
            <div>
               {BookData.map(function(el, index){
                 return (<Item
                    symbol_img = {el.symbol_img}
                    profile_name =  {el.profile_name}
                    thumb_img =  {el.thumb_img}
                    title_name = {el.title_name}
                    comment = {el.comment}
                    thumb_value = {el.thumb_value}
                    post_date = {el.post_date}
                    key={index}
                 />);
               })}
            </div>
        );
    }
}