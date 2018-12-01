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

const info = {
	width: '65%',
}

const thumbImg = {
	width: '120px',
	width: '100%',
	marginLeft: '0px',
	marginTop: '10px'
}


const titleStyle = {
	marginTop: '10px',
	marginLeft: '30px',
	fontSize: '15px',
	color: 'black'
}
const commentStyle = {
	marginLeft: '30px',
	fontSize: '13px',

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

const playIcon = {

	color: 'rgb(255,214,99)',
	display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    marginTop: '25px',
		
}
const relativeThumb = {
	position: 'relative'
}
const secondrow = {
	height: '70px'
}

export default class Item extends Component {
    render() {
		const thumb = {
	width: '35%',
	backgroundSize: '80% 80%',
	backgroundRepeat: 'no-repeat',
	backgroundImage: `url(${this.props.thumb_img})`,
	backgroundPosition: 'center'

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
			
			
			 <div className="w3-cell-row " style={secondrow}>
			 	  <div className="w3-container w3-cell left-align" style={info}>
				  	<p style={titleStyle}> {this.props.title_name} </p>
				  	<p style={commentStyle}> "{this.props.comment}" </p>

			  	<div className="w3-cell-row ">
			 		<div className="w3-container w3-cell " style={vote}>
						<div className="w3-cell-row">
					 		<div className="w3-container w3-cell right-align" style={thumbUp}>
					 			<i className="black-icon fa fa-caret-up" style={thumbUpImg}></i>
					 		</div>
					 		<div className="w3-container w3-cell " style={thumbValue}>
					 			<p style={thumbValueStyle}>{this.props.thumb_value}</p>
					 		</div>
					 		<div className="w3-container w3-cell left-align" style={thumbDown}>
					 			<i className="black-icon fa fa-caret-down" style={thumbDownImg}></i>
					 		</div>
					 	</div>
			 		</div>

				 	<div className="w3-container w3-cell" style={postDate}>
				 		<p style={postDateStyle}>{this.props.post_date}</p>
				 	</div>
			 	
			 	</div>



				  </div>
				  <div className="w3-container w3-cell w3-center" style={thumb}>
				  	
		  			 {/*<i className="fa fa-play-circle fa-2x" style={playIcon}></i>*/}
		  			 <i className={this.props.play_icon} style={playIcon}></i>
				  	
				  </div>
				  
				  {/*<div className="w3-container w3-cell valign-wrapper" style={linkInfo}>

				  	<img src={this.props.thumb_img} alt="NetFlix" style={thumbImg} />

				  	 <img src={this.props.play_img} alt="Play" style={playImg} /> 
					<i className="fa fa-play-circle fa-2x" style={playIcon}></i>
				  </div> 
				*/}			 
			 </div>
{/*
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
*/}
		</div>
		);
    }
}
