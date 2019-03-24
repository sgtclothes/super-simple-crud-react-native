import React, { Component } from 'react';
import {StyleSheet, Button, Text, View, Image, ScrollView,FlatList} from 'react-native'
import { Card } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';

export default class Detail extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			product:{}
			}
		}
		

	componentDidMount() {
		this.fetchData()
	}

	handleCheck = () => {
		alert(JSON.stringify(this.state.product))
	}
		

	fetchData() {
		const id = this.props.navigation.getParam('id','no id')
		axios.get('http://192.168.1.133:3333/show/'+id).then(
			(res) => {
				this.setState({product:res.data})
			}
		)
	}

	handleDelete = () => {
		axios.delete('http://192.168.1.133:3333/delete/'+this.state.product.id).then(
			() => {
				this.props.navigation.navigate('List')
			}
		)
	}
	

		render() {
			this.fetchData()
		return (
			<View>

		<View>
		<Text style={{fontSize:15, color:'#408ED2', textAlign:'center', fontWeight:'bold', margin:10}}>{this.state.product.name}</Text>
		<Image source={{uri:this.state.product.image}} style={{width:200, height:250, alignSelf:'center'}} />
		<Text style={{fontSize:15, color:'#408ED2', textAlign:'center', fontWeight:'bold', margin:10}}>Rp. {this.state.product.price}</Text>
		<Text style={{fontSize:15, color:'#408ED2', textAlign:'center', fontWeight:'bold', margin:10}}>Category : {this.state.product.desc}</Text>
		</View>
		<View style={{marginVertical:10}}>
			<Button onPress={this.handleDelete} title="Delete"/>
		</View>
		<View>
		<Button onPress={()=>{this.props.navigation.navigate('Update',{id:this.state.product.id})}} title="Update"/>
		</View>
			</View>
		
    )
	}

}