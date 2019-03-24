import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, ScrollView,Button,FlatList} from 'react-native'
import { Container, Fab, Card } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';

export default class List extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			active:true,
			product:[]
		}
	}

	fetchData() {
		axios.get('http://192.168.1.133:3333/index').then(
			res=>{
				this.setState({product:res.data})
			}	
		)
	}
	
componentDidMount() {
		this.fetchData()
	    
		}

		handleAdd = () => {
			this.props.navigation.navigate('Add')
		}
		
		_renderItem = ({item}) => {
			return(
				<Card>	
				<View style={{marginTop:20}}>
				<View style={{flex:1, flexDirection:'row'}}>
					<View style={{flex:1, alignItems:'center'}}>
						<Image style={{width:150, height:200}} source={{uri: item.image}}/>
						<Text style={{fontSize:10, width:150, textAlign:'center', fontWeight:'bold', marginVertical:10}}>{item.name}</Text>
					</View>
					<View style={{alignItems:'center', marginTop:50, marginRight:20}}>
						<Text style={{color:'#4091D7'}}>Rp. {item.price}</Text>
						<Text style={{color:'#4091D7'}}>{item.desc}</Text>
						<View style={{margin:10}}>
						<Button onPress={()=>{this.props.navigation.navigate('Detail',{id:item.id})}} title="View Detail"/>
						</View>
					</View>
				</View>
				</View>
				</Card>
				
			)

		}


		render() {
			this.fetchData()
		return (
			<Container>

			<ScrollView>
			<FlatList 
				data={this.state.product} 
				keyExtractor={(item,index)=>String(index)} 
				renderItem= {this._renderItem}					
				/>
				</ScrollView>
				<View>
				<Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#4091D7' }}
            position="bottomRight"
            onPress={this.handleAdd}>
            <Icon name="plus" />
          </Fab>
				</View>
			</Container>
    )
  }
}