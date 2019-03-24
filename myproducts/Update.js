import React, {Component} from 'react'
import {Text, View, TextInput, Button} from 'react-native'
import axios from 'axios'
import { Form, Label, Input } from 'native-base';

export default class Add extends Component{

	constructor(props) {
		super(props)
		this.state = {
				product:{}
		}
	}

	componentDidMount(){

		const id = this.props.navigation.getParam('id', 'no id')
		axios.get('http://192.168.1.133:3333/show/'+id).then(
			(res)=>{
				// alert(JSON.stringify(res.data))
				this.setState({product:res.data})
			}
		)

	}

	handleSubmit = ()=>{

		const product = {
			name: this.state.product.name,
			price: this.state.product.price,
			image: this.state.product.image,
			desc: this.state.product.desc,
			qty: this.state.product.qty
		}
		
		axios.patch('http://192.168.1.133:3333/update/'+this.state.product.id,product).then(
			()=>{
				this.props.navigation.navigate('List')
			}
		).catch((e)=> {
				console.warn(e.message)
		}
		)
	}

	render() {
		return (

			<View >
				<Text>Input Name :</Text>
				<TextInput defaultValue={this.state.product.name} onChangeText={(name)=>this.setState({product:{...this.state.product,name}})} style={{borderWidth:1, borderColor:'blue'}}/>
				<Text>Input Price :</Text>
				<TextInput defaultValue={this.state.product.price} onChangeText={(price)=>this.setState({product:{...this.state.product,price}})} style={{borderWidth:1, borderColor:'blue'}}/>
				<Text>Input Image Url :</Text>
				<TextInput defaultValue={this.state.product.image} onChangeText={(image)=>this.setState({product:{...this.state.product,image}})} style={{borderWidth:1, borderColor:'blue'}}/>
				<Text>Input Description :</Text>
				<TextInput defaultValue={this.state.product.desc} onChangeText={(desc)=>this.setState({product:{...this.state.product,desc}})} style={{borderWidth:1, borderColor:'blue'}}/>
				<Text>Input Quantity :</Text>
				<TextInput defaultValue={this.state.product.qty} onChangeText={(qty)=>this.setState({product:{...this.state.product,qty}})} style={{borderWidth:1, borderColor:'blue'}}/>
				<Button title="Update " onPress={this.handleSubmit}/>
			</View>
		)
	}
}