import React, { Component } from 'react';
import { Col, Card, CardTitle, Chip } from 'react-materialize';

export default class Show extends Component {
    render(){
        return(
            <div>
                <Col s={12}>
                    <Card horizontal header={<CardTitle image={this.props.title_img}>
                    <Chip>
                        <img src={this.props.service_img} alt='Contact Person' />
                        {this.props.service_name}
                    </Chip>
                    </CardTitle>} actions={[<a href={this.props.service_subscription}>Buy {this.props.service_name} Subscription</a>]}>
                    <p>{this.props.friend_name} recommended this</p>
                    </Card>
                </Col>
            </div>
        );
    }
}