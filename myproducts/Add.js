import React, {Component} from 'react'
import {Text, View, TextInput, Button} from 'react-native'
import axios from 'axios'
import { Form, Label, Input } from 'native-base';

export default class Add extends Component{

	constructor(props) {
		super(props)
		this.state = {
				name:'',
				price:'',
				image:'',
				desc:'',
				qty:''
		}
	}

	handleSubmit(){

		const product = {
			name: this.state.name,
			price: this.state.price,
			image: this.state.image,
			desc: this.state.desc,
			qty: this.state.qty
		}

		axios.post(`http://192.168.1.133:3333/add`,product).then(
			()=>{
				this.props.navigation.navigate('List')
			}
		)

	}

	render() {
		return (

			<View >
				<Text>Input Name :</Text>
				<TextInput onChangeText={(text)=>this.setState({name:text})} style={{borderWidth:1, borderColor:'blue'}}/>
				<Text>Input Price :</Text>
				<TextInput onChangeText={(text)=>this.setState({price:text})} style={{borderWidth:1, borderColor:'blue'}}/>
				<Text>Input Image Url :</Text>
				<TextInput onChangeText={(text)=>this.setState({image:text})} style={{borderWidth:1, borderColor:'blue'}}/>
				<Text>Input Description :</Text>
				<TextInput onChangeText={(text)=>this.setState({desc:text})} style={{borderWidth:1, borderColor:'blue'}}/>
				<Text>Input Quantity :</Text>
				<TextInput onChangeText={(text)=>this.setState({qty:text})} style={{borderWidth:1, borderColor:'blue'}}/>
				<Button title="Add " onPress={()=>{this.handleSubmit()}}/>
			</View>
		)
	}
}