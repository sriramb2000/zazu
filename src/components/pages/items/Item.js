import React, { Component } from 'react';
import "./w3.css"


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
	fontSize: '10px',
	marginLeft: '10px',
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
	color: 'rgb(0,0,255)'
}
const commentStyle = {
	marginLeft: '5px',
	fontSize: '60%',

}
const linkInfo = {
	width: '20%'
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
	width: "40%"
}
const thumbValue = {
	width: "20%"
}
const thumbDown = {
	width: "40%"
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
	return (
	    // html 
	    <div>
		    
		    
		    <div class="w3-cell-row w3-light-gray">
			  <div class="w3-container w3-cell  " style={symbol}>
			  	<img src={this.props.symbol_img} alt="NetFlix" style={symbolImg} />
			  	
			  </div>
			  
			  <div class="w3-container w3-cell" style={title}>
			  	<p style={profileStyle}>{this.props.profile_name} shared:</p>
			  </div>
			  <div class="w3-container w3-cell" style={dummy}>
			 	<p></p>
			  </div>
			 </div>
			
			
			 <div class="w3-cell-row ">
				  <div class="w3-container w3-cell " style={thumb}>
				  	<img src={this.props.thumb_img} alt="NetFlix" style={thumbImg} />
				  </div>
				  <div class="w3-container w3-cell " style={info}>
				  	<p style={titleStyle}> {this.props.title_name} </p>
				  	<p style={commentStyle}> "{this.props.comment}" </p>
				  </div>
				  <div class="w3-container w3-cell " style={linkInfo}>
				  	<img src={this.props.play_img} alt="Play" style={playImg} />

				  </div>			 
			 </div>

			 <div class="w3-cell-row ">
			 	<div class="w3-container w3-cell " style={vote}>
					<div class="w3-cell-row">
				 		<div class="w3-container w3-cell " style={thumbUp}>
				 			<img src={require("./thumbUp.png")} alt="up" style={thumbUpImg} />
				 		</div>
				 		<div class="w3-container w3-cell " style={thumbValue}>
				 			<p style={thumbValueStyle}>{this.props.thumb_value}</p>
				 		</div>
				 		<div class="w3-container w3-cell " style={thumbDown}>
				 			<img src={require("./thumbDown.png")} alt="up" style={thumbDownImg} />
				 		</div>
				 	</div>

			 	</div>
			 	<div class="w3-container w3-cell" style={postDate}>
			 		<p style={postDateStyle}>{this.props.post_date}</p>
			 	</div>

			 	<div class="w3-container w3-cell" style={dummy}>
			 		
			  	</div>
			 </div>

		</div>
		);
    }
}
