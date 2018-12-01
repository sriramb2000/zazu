import React, { Component } from 'react';
import Item from './items/Item';
import { PodcastData } from './Data';

export default class Podcasts extends Component {
    render(){
        return(
            <div>
               {PodcastData.map(function(el, index){
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