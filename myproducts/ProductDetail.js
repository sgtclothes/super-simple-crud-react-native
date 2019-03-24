import React, {Component} from 'react'
import { StyleSheet, Text, View, Image, ListView, TouchableOpacity } from 'react-native'
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base'

const styles = StyleSheet.create(
	{
		clothes : {
			flexDirection:'row',
			backgroundColor:'#FFF',
			borderBottomColor:'#AAA',
			height:300,
			marginBottom:10,
			paddingTop: 50,
			flex:1
		},
		container : {
			justifyContent: 'center',
			alignItems: 'center'
		},
		button : {
			height: 50,
			borderWidth: 2,
			padding:10,
			flexDirection: 'column',
			borderColor: 'blue',
			color:'black',
			marginHorizontal: 10,
			marginVertical: -5,
		},
		cover: {
			flex:1,
			height:200,
			resizeMode:'contain',
			justifyContent:'center',
			alignItems:'center'
		},
		info: {
			flex:1,
			flexDirection:'column',
			justifyContent:'center'
		},
		author: {
			fontSize:18,
			fontWeight:'bold',
			color:'blue',
			alignSelf:'center',
			margin: 20
		},
		title : {
			alignSelf:'center',
			fontSize:15,
			fontWeight:'bold',
			color:'black'
		}
	}
	)



class ProductDetail extends Component {


render() {
return (
<View style={{paddingBottom:50, borderWidth:3}}>
			<TouchableOpacity>
					<Image source={{uri: this.props.image}}/>
				</TouchableOpacity>
					<Text>{this.props.name}</Text>
					<Text>{this.props.price}</Text>
					<View>
						<View style={{flex:1, flexDirection:'column'}}>
						<TouchableOpacity>	
							<Text>
								Add to Cart
							</Text>
						</TouchableOpacity>
						</View>
					</View>
				</View>

)
}

}

export default ProductDetail