import React, { Component } from 'react';
import "./w3.css"
import { Icon } from 'react-materialize';

const symbol= {
	width: '10%',

	}

const title= {
	width: '70%',


}

const symbolImg = {
	width: '30px',
	height: '30px',
	float: 'left',
	
}
const profileStyle = {
	fontSize: '12px',
	marginLeft: '0px',
	float: 'center',
	marginTop: '7px',
	fontWeight: 'bold'
	
}
const dummy = {
	width: '20%',

}
const thumb = {
	width: '30%'
}
const thumbImg = {
	width: '50px',
	height: '50px',
	marginLeft: '30px',
	marginTop: '10px'
}

const info = {
	width: '50%'
}
const titleStyle = {
	marginTop: '10px',
	marginLeft: '5px',
	fontSize: '80%',
	color: 'black'
}
const commentStyle = {
	marginLeft: '5px',
	fontSize: '60%',

}
const linkInfo = {
	width: '60px',
	height: '60px'
}




const playImg = {
	display: 'block',
	margin: 'auto',
	marginTop: '10px',
	width: '50px',
	height: '50px'
}

const vote = {
	width: "40%"
}
const postDate = {
	width: "40%"
}

const thumbUp = {
	width: "47.5%"
}
const thumbValue = {
	width: "5%"
}
const thumbDown = {
	width: "47.5%"
}
const thumbUpImg = {
	marginTop: '3px',
	marginBottom: '1px',
	float: 'right',
	width: '10px',
	height: '10px'
}
const thumbDownImg = {
	marginTop: '4px',
	marginBottom: '1px',
	float: 'left',
	width: '10px',
	height: '10px'
}
const thumbValueStyle = {
	marginTop: '1px',
	marginBottom: '1px',
	textAlign: 'center',
	fontSize: '10px'
}
const postDateStyle = {
	marginTop: '1px',
	marginBottom: '1px',
	textAlign: 'center',
	fontSize: '10px',
	fontStyle: 'italic'

}

export default class Item extends Component {
    render() {
		const playIcon = {
			color: 'rgb(255,214,99)',
			background: `url(${this.props.symbol_img})`
		}
	return (
	    // html 
	    <div>
		    
		    
		    <div className="w3-cell-row grey-withme">
			  <div className="w3-container w3-cell  " style={symbol}>
			  	<img src={this.props.symbol_img} alt="NetFlix" style={symbolImg} />
			  	
			  </div>
			  
			  <div className="w3-container w3-cell left-align" style={title}>
			  	<p style={profileStyle}>{this.props.profile_name} shared:</p>
			  </div>
			  <div className="w3-container w3-cell" style={dummy}>
			 	<p></p>
			  </div>
			 </div>
			
			
			 <div className="w3-cell-row ">
				  <div className="w3-container w3-cell " style={thumb}>
				  	<img src={this.props.thumb_img} alt="NetFlix" style={thumbImg} />
				  </div>
				  <div className="w3-container w3-cell left-align" style={info}>
				  	<p style={titleStyle}> {this.props.title_name} </p>
				  	<p style={commentStyle}> "{this.props.comment}" </p>
				  </div>
				  <div className="w3-container w3-cell valign-wrapper" style={linkInfo}>
				  	{/* <img src={this.props.play_img} alt="Play" style={playImg} /> */}
					<i className="fa fa-play-circle fa-2x" style={playIcon}></i>
				  </div>			 
			 </div>

			 <div className="w3-cell-row ">
			 	<div className="w3-container w3-cell " style={vote}>
					<div className="w3-cell-row">
				 		<div className="w3-container w3-cell right-align" style={thumbUp}>
				 			<Icon className="black-icon" style={thumbUpImg}>arrow_drop_up</Icon>
				 		</div>
				 		<div className="w3-container w3-cell " style={thumbValue}>
				 			<p style={thumbValueStyle}>{this.props.thumb_value}</p>
				 		</div>
				 		<div className="w3-container w3-cell left-align" style={thumbDown}>
				 			<Icon className="black-icon" style={thumbDownImg}>arrow_drop_down</Icon>
				 		</div>
				 	</div>

			 	</div>
			 	<div className="w3-container w3-cell" style={postDate}>
			 		<p style={postDateStyle}>{this.props.post_date}</p>
			 	</div>

			 	<div className="w3-container w3-cell" style={dummy}>
			 		
			  	</div>
			 </div>

		</div>
		);
    }
}
