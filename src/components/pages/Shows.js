import React, { Component } from 'react';
import Item from './items/Item';
import { Tabs, Tab, Table } from 'react-materialize';

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
               <table style={tableStyle}>
                <tr style={rowStyle}>
                  <Item symbol_img="https://cdn.vox-cdn.com/thumbor/LOEXyxwl5puG7PDEQ8n9gvlufic=/39x0:3111x2048/1820x1213/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
                  profile_name="John Smith "
                  thumb_img="https://i5.walmartimages.com/asr/5a1383aa-3010-4ef0-80a8-732b496e0235_1.f91e01fad03cfeac0cfb96e82573b2e7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
                  title_name="Haryy Potter and Something"
                  comment="Here comes your comment about 6 words"
                  play_img="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png"
                  thumb_value="4"
                  post_date="8 Hours Ago"
                  ></Item>
                </tr>
                
                <tr style={rowStyle}>
                  <Item symbol_img="https://cdn.vox-cdn.com/thumbor/LOEXyxwl5puG7PDEQ8n9gvlufic=/39x0:3111x2048/1820x1213/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
                  profile_name="Kari Hill"
                  thumb_img="https://i5.walmartimages.com/asr/5a1383aa-3010-4ef0-80a8-732b496e0235_1.f91e01fad03cfeac0cfb96e82573b2e7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
                  title_name="Haryy Potter and Something"
                  comment="Here comes your comment about 6 words"
                  play_img="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png"
                  thumb_value="5"
                  post_date="2 Days Ago"
                  ></Item>
                </tr>
                <tr style={rowStyle}>
                  <Item symbol_img="https://cdn.vox-cdn.com/thumbor/LOEXyxwl5puG7PDEQ8n9gvlufic=/39x0:3111x2048/1820x1213/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
                  profile_name="Masataka Mori "
                  thumb_img="https://i5.walmartimages.com/asr/5a1383aa-3010-4ef0-80a8-732b496e0235_1.f91e01fad03cfeac0cfb96e82573b2e7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
                  title_name="Haryy Potter and Something"
                  comment="Here comes your comment about 6 words"
                  play_img="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png"
                  thumb_value="2"
                  post_date="1 Day Ago"
                  ></Item>
                </tr>
              </table>
            </div>
        );
    }
}