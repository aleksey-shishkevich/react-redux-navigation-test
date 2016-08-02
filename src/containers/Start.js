'use strict';

import { connect } from 'react-redux';

import  * as startActions from '../actions/startActions';

function mapStateToProps(state) {
     return state;
}

function mapDispatchToProps(dispatch) {
  return {
    setPriceLabel(label) {
      dispatch(startActions.setPriceLabel(label))
    },
  }
}

import React, {Component} from 'react';
import { 	
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
}
from 'react-native';

import {Actions} from 'react-native-router-flux';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
            backgroundColor:'white', 
            justifyContent: 'center',
            alignItems:'center',
            width: 85,
            height: 30,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: 'black'
    },
    label: {
            color: 'black', 
            fontSize: 12,
            fontWeight: 'bold',
    },
    list:{
        width: 150,
        height: 400
    }
 });



class Start extends Component{
    constructor(props) {
        super(props);
    }
    
    setPriceLabel(id){
        this.props.setPriceLabel(Array(Number(id)+1).join('$'));
    }
    componentDidMount(){
        console.log('START MOUNTING');
    }
    componentWillUnmount(){
        console.log('START UNMOUNTING');
    }
    
    render() {
        console.log('START RENDERING');
        return(
            <View style={styles.container}>  
                <View style={{height: 400, width: 150, marginBottom: 20}}>
                <ScrollView>
                  {[...Array(1000)].map((x, i) =>
                     <Text  key={i} style={[styles.label, {lineHeight:30}]}>Item #{i}: {this.props.start.price}</Text>
                  )}
                </ScrollView>
                </View>
                <TouchableOpacity 
                            style={styles.button} 
                            onPress={()=>Actions.Test({setPriceLabel:this.setPriceLabel.bind(this)})}>
                        <Text 
                            style={styles.label}>
                            Start
                        </Text>
                </TouchableOpacity>
    

    
                
            </View>
        );
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Start);
