import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ScrollView,
  Alert,
  backgroundColor
  
} from "react-native";
import { Audio } from "expo-av";
import { ScreenOrientation } from 'expo';
//import Svg, { Circle, Rect } from 'react-native-svg';
//import SvgExample from './SvgExample';
//import Svg from 'react-native-svg';

 
 
 
export default class App extends React.Component {
  pressfun =()=>{
    alert('press');
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.container1}>
       
        </View>
        <View style={styles.container2}>
          <View style={styles.container2_uPPER}>
            <View style={styles.key} >
              <View style={styles.textStyle}>
              <Text >C2</Text>
              </View>
            </View>
            
            <View style={styles.key} > 
            <TouchableOpacity onPress={this.pressfun}>
              <View style={styles.container5} >
              
                <Text style={styles.keyupper}>C</Text>
                
              </View>
              </TouchableOpacity>
              <View style={styles.textStyle}>
                <Text >D2</Text>
              </View>
            </View>
           
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
              <View style={styles.textStyle}>
              <Text >C2</Text>
              </View>
            </View>
            <View style={styles.key} >
              <View style={styles.textStyle}>
              <Text >C2</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            
            <View style={styles.key} >
              <View style={styles.textStyle}>
              <Text>8</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            <View style={styles.key} >
            <View style={styles.textStyle}>
              <Text>11</Text>
              </View>
              </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            <View style={styles.key} >
            <View style={styles.textStyle}>
              <Text>15</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            <View style={styles.key} >
            <View style={styles.textStyle}>
              <Text>18</Text>
              </View>
              </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            <View style={styles.key} >
            <View style={styles.textStyle}>
              <Text>22</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            <View style={styles.key} >
            <View style={styles.textStyle}>
              <Text>25</Text>
              </View>
              </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
              </View>
            </View>
            <View style={styles.key} > 
              <View style={styles.container5} >
                <Text style={styles.keyupper}>C</Text>
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
  container1: {
    flex: 1,
    backgroundColor:'#badc57'
  },
  container2: {
    flex: 1 ,
    flexDirection: 'column', 
  },
  container2_uPPER: {
    flex: 3/4,
    flexDirection: 'row', 
  },
  container2_LOWER: {
    flex: 1/4,
    backgroundColor: "#000"
  },
  key:{
    width:'3.57%',
    height:"100%",
    backgroundColor: "#01CBC6",
    borderWidth: 0.5,
    borderColor: '#000',
    position:'relative',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius:3,
  },
  container5:{
    marginLeft: -6,
    backgroundColor: "#333945",
    height:70,
    width:12,
    position:'absolute',
    alignItems: 'center'
  },
  keyupper:{
    color: '#EAF0F1',
    fontSize:10
  },
  textStyle:{
    flex:1,
    justifyContent:'flex-end',
    alignItems: 'center'
  } 
});
