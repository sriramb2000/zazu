import React, { Component } from 'react';
import Show from './items/Show';
import { Tabs, Tab } from 'react-materialize';

export default class Shows extends Component {
    render(){
        return(
            <div>
                <h1>Shows</h1>
                <Tabs>
                    <Tab title="Friends" active>
                        <Show title_img="https://pbs.twimg.com/media/DoOxB-HUYAAmp-S.jpg" friend_name="Dan I." service_name="Netflix" service_img="https://lh3.googleusercontent.com/jcbqFma-5e91cY9MlEasA-fvCRJK493MxphrqbBd8oS74FtYg00IXeOAn0ahsLprxIA=w300"></Show>
                    </Tab>
                    <Tab title="World">
                        shit
                    </Tab>
                </Tabs>
                
            </div>
        );
    }
}