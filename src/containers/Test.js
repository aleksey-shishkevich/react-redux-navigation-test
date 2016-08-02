'use strict';

import { connect } from 'react-redux';

import * as testActions from '../actions/testActions';

function mapStateToProps(state) {
     return state;
}

function mapDispatchToProps(dispatch) {
  return {
    setPrice(id) {
      dispatch(testActions.setPrice(id))
    },
  }
}

import React, {Component} from 'react';
import { 	
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
}
from 'react-native';


const PRICE_FILTERS = [
      {label: '$', id: 1},
      {label: '$$', id: 2},
      {label: '$$$', id: 3},
      {label: '$$$$', id: 4},
];



var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: { 
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 2,
        overflow: 'hidden',
        backgroundColor: 'black',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 20,
    },
    header:{
        fontSize: 16,
    },
    price_cont: {
            backgroundColor:'white', 
            justifyContent: 'center',
            alignItems:'center',
            width: 60,
            height: 30,
            marginRight: 2,
    },
    price_label: {
            color: 'black', 
            fontSize: 12,
            fontWeight: 'bold',
    },
 });



class Test extends Component{
    constructor(props) {
        super(props);
        this.state = {price:null};
    }
    componentDidMount(){
        console.log('TEST MOUNTING');
    }
    componentWillUnmount(){
        console.log('TEST UNMOUNTING');
    }
    
    
    render() {
    console.log("TEST RENDERING");
    return(
        <View style={styles.container}>  
            
            <Text style={styles.header}>Redux</Text>
            <View style={styles.box}>
                {PRICE_FILTERS.map(filter =>{
                    let price_cont_style = {};
                    let price_text_style = {};
                    if (filter.id == PRICE_FILTERS[3].id){
                        price_cont_style.marginRight = 0;
                    }
                    if (filter.id == this.props.test.price){
                        price_cont_style.backgroundColor = 'black';
                        price_text_style.color = 'white';
                    }
                    return(
                    <TouchableOpacity 
                        key={filter.id} 
                        style={[styles.price_cont, price_cont_style]} 
                        onPress={()=>{this.props.setPrice(filter.id); this.props.setPriceLabel(filter.id)}}>
                    <Text 
                        style={[styles.price_text, price_text_style]}>
                        {filter.label}
                    </Text>
                    </TouchableOpacity>
                    );
                })}
            </View>
            
            <Text style={styles.header}>React (setState)</Text>        
            <View style={styles.box}>
                {PRICE_FILTERS.map(filter =>{
                    let price_cont_style = {};
                    let price_text_style = {};
                    if (filter.id == PRICE_FILTERS[3].id){
                        price_cont_style.marginRight = 0;
                    }
                    if (filter.id == this.state.price){
                        price_cont_style.backgroundColor = 'black';
                        price_text_style.color = 'white';
                    }
                    return(
                    <TouchableOpacity 
                        key={filter.id} 
                        style={[styles.price_cont, price_cont_style]} 
                        onPress={()=>this.setState({price:filter.id})}>
                    <Text 
                        style={[styles.price_text, price_text_style]}>
                        {filter.label}
                    </Text>
                    </TouchableOpacity>
                    );
                })}
            </View>
            
            
        </View>
    );
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Test);
