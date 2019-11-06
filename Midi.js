import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  Dimensions,Animated,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  Image,
  Alert,
  Button,
 
} from 'react-native';

var { width, height} = Dimensions.get('window');

//import  Icon from '../../src/Icon';
//import  SvgExample from '../../src/SvgExample';
//import ExpoSvg from '../ExpoSvg;
//import ExpoSvg from './ExpoSvg'



export default class Midi extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      
    }
   
  }

 
  
	render(){
		return(
      
      <View style={styles.container}>
        {/* SVG view */ }
       
        {/* SVG view */ }
        <View style={styles.container2}>
          
          <View style={styles.container2_uPPER}>
            {/* First Section */ }
            <View style={styles.key} >
              <View style={styles.textStyle}>
              <Text >C2</Text>
              </View>
            </View>
            
            <View style={styles.key} > 
              <View style={styles.container5one} >
                <Text style={styles.keyupper}>c#2</Text>
              </View>
              <View style={styles.textStyle}>
                <Text >D2</Text>
              </View>
            </View>
           
            <View style={styles.key} > 
              <View style={styles.container5Two} >
                <Text style={styles.keyupper}>d#2</Text>
              </View>
              <View style={styles.textStyle}>
              <Text >E2</Text>
              </View>
            </View>
            <View style={styles.key} >
              <View style={styles.textStyle}>
              <Text >F2</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5Three} >
                <Text style={styles.keyupper}>f#2</Text>
              </View>
              <View style={styles.textStyle}>
                <Text >G2</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5Four} >
                <Text style={styles.keyupper}>g#2</Text>
              </View>
              <View style={styles.textStyle}>
                <Text >A2</Text>
              </View>
            </View>
           
            <View style={styles.key} > 

              <View style={styles.container5Five} >
                <Text style={styles.keyupper}>a#2</Text>
              </View>
              <View style={styles.textStyle}>
                <Text >B2</Text>
              </View>
            </View>

         {/* for Second section*/ }
            <View style={styles.key} >
              <View style={styles.textStyle}>
              <Text >C3</Text>
              </View>
            </View>
            
            <View style={styles.key} > 
              <View style={styles.container5one} >
                <Text style={styles.keyupper}>c#3</Text>
              </View>
              <View style={styles.textStyle}>
                <Text >D3</Text>
              </View>
            </View>
           
            <View style={styles.key} > 
              <View style={styles.container5Two} >
                <Text style={styles.keyupper}>d#3</Text>
              </View>
              <View style={styles.textStyle}>
              <Text >E3</Text>
              </View>
            </View>
            <View style={styles.key} >
              <View style={styles.textStyle}>
              <Text >F3</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5Three} >
                <Text style={styles.keyupper}>f#3</Text>
              </View>
              <View style={styles.textStyle}>
                <Text >G3</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5Four} >
                <Text style={styles.keyupper}>g#3</Text>
              </View>
              <View style={styles.textStyle}>
                <Text >A3</Text>
              </View>
            </View>

            <View style={styles.key} > 
              <View style={styles.container5Five} >
                <Text style={styles.keyupper}>a#3</Text>
              </View>
              <View style={styles.textStyle}>
                <Text >B3</Text>
              </View>
            </View>
          {/* for Third section*/ }

            <View style={styles.key} >
              <View style={styles.textStyle}>
              <Text >C4</Text>
              </View>
            </View>
            
            <View style={styles.key} > 
              <View style={styles.container5one} >
                <Text style={styles.keyupper}>c#4</Text>
              </View>
              <View style={styles.textStyle}>
                <Text >D4</Text>
              </View>
            </View>
           
            <View style={styles.key} > 
              <View style={styles.container5Two} >
                <Text style={styles.keyupper}>d#4</Text>
              </View>
              <View style={styles.textStyle}>
              <Text >E4</Text>
              </View>
            </View>
            <View style={styles.key} >
              <View style={styles.textStyle}>
              <Text >F4</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5Three} >
                <Text style={styles.keyupper}>f#4</Text>
              </View>
              <View style={styles.textStyle}>
                <Text >G4</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5Four} >
                <Text style={styles.keyupper}>g#4</Text>
              </View>
              <View style={styles.textStyle}>
                <Text >A4</Text>
              </View>
            </View>

            <View style={styles.key} > 
              <View style={styles.container5Five} >
                <Text style={styles.keyupper}>a#4</Text>
              </View>
              <View style={styles.textStyle}>
                <Text >B4</Text>
              </View>
            </View>

            {/* for four section*/ }
            <View style={styles.key} >
              <View style={styles.textStyle}>
              <Text >C5</Text>
              </View>
            </View>
            
            <View style={styles.key} > 
              <View style={styles.container5one} >
                <Text style={styles.keyupper}>c#5</Text>
              </View>
              <View style={styles.textStyle}>
                <Text >D5</Text>
              </View>
            </View>
           
            <View style={styles.key} > 
              <View style={styles.container5Two} >
                <Text style={styles.keyupper}>d#5</Text>
              </View>
              <View style={styles.textStyle}>
              <Text >E5</Text>
              </View>
            </View>
            <View style={styles.key} >
              <View style={styles.textStyle}>
              <Text >F5</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5Three} >
                <Text style={styles.keyupper}>f#5</Text>
              </View>
              <View style={styles.textStyle}>
                <Text >G5</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5Four} >
                <Text style={styles.keyupper}>g#5</Text>
              </View>
              <View style={styles.textStyle}>
                <Text >A5</Text>
              </View>
            </View>

            <View style={styles.key} > 
              <View style={styles.container5Five} >
                <Text style={styles.keyupper}>a#5</Text>
              </View>
              <View style={styles.textStyle}>
                <Text >B5</Text>
              </View>
            </View>
  
            {/* for Last Key*/ }
            
            <View style={styles.key} >
              <View style={styles.textStyle}>
              <Text ></Text>
              </View>
            </View>
            
          </View>
          <View style={styles.container2_LOWER}>
         
          </View>
        
        </View>
        
      </View>
 
    )
  }
}
        
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text:{
    paddingVertical:10,
    paddingHorizontal:40,
    backgroundColor:"red",
    fontSize:20,
    
  },
  hero:{
    height:600,
    width:100,
    justifyContent:"center",
    alignItems:"center"
  },
  container1: {
   
   
    
   
  },
  container2: {
    flex: 1 ,
    flexDirection: 'column', 
    paddingTop:3,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:"#4C4B4B"
  },
  container2_uPPER: {
    flex: 1,
    flexDirection: 'row', 
  },
  container2_LOWER: {
    
    backgroundColor: "#000"
  },
  key:{
    width:'3.44%',
    height:"100%",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: '#000',
    position:'relative',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius:3,
  },
  container5:{
    marginLeft:- width*-.2,
    backgroundColor: "#333945",
    height:90,
    width:"1.92%",
    position:'absolute',
    alignItems: 'center'
  },
  container5one:{
    marginLeft:-9,
    backgroundColor: "#333945",
    height:"58%",
    width:"62%",
    position:'absolute',
    alignItems: 'center',
    paddingTop:5
  },
  container5Two:{
    marginLeft: -5,
    backgroundColor: "#333945",
    height:"58%",
    width:"62%",
    position:'absolute',
    alignItems: 'center',
    paddingTop:5
  },
  container5Three:{
    marginLeft: -10,
    backgroundColor: "#333945",
    height:"58%",
    width:"62%",
    position:'absolute',
    alignItems: 'center',
    paddingTop:5
  },
  container5Four:{
    marginLeft: -7,
    backgroundColor: "#333945",
    height:"58%",
    width:"62%",
    position:'absolute',
    alignItems: 'center',
    paddingTop:5
  },
  container5Five:{
    marginLeft: -4,
    backgroundColor: "#333945",
    height:"58%",
    width:"62%",
    position:'absolute',
    alignItems: 'center',
    paddingTop:5

  },
  keyupper:{
    color: '#EAF0F1',
    fontSize:7
  },
  textStyle:{
    flex:1,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  
  progress_bar : {
    backgroundColor : 'rgba(0,0,0,0.32)',
    width: 15,
    height : 130,
    left : 0,
    top : 15,
    position: 'absolute',
  },
  button : {
    backgroundColor : 'skyblue',
    height:45,
    marginTop:1,
    alignSelf : 'center',
  },
  buttonText : {
    color : 'white',
    padding : 12,
    paddingHorizontal : 20,
    fontWeight : 'bold',
    fontSize : 18,
  } 
});