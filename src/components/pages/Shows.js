import React, { Component } from 'react';
import Item from './items/Item';
import {ShowData} from './Data';

const pStyle = {
    textAlign: 'right'
}
const tableStyle = {
  width: '100%',

  
}
const rowStyle = {
  borderTop: '1px solid',
  borderBottom: '10px solid white',
  
}

export default class Shows extends Component {

    render(){
        return(
            <div>
               {ShowData.map(function(el, index){
                 return (<Item
                    symbol_img = {el.symbol_img}
                    profile_name =  {el.profile_name}
                    thumb_img =  {el.thumb_img}
                    title_name = {el.title_name}
                    comment = {el.comment}
                    play_icon = "fa fa-play-circle fa-2x"
                    thumb_value = {el.thumb_value}
                    post_date = {el.post_date}
                    key={index}
                 />);
               })}
            </div>
        );
    }
}