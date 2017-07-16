/**
 * Created by leechee on 2017-07-15.
 */

import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Girl from './Girl';
import NavigationBar from './NavigationBar';

export default class Boy extends Component{
    constructor(props){
        super(props);
        this.state = {
            word: ''
        };
    }
    render(){
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'Boy'}
                    statusBar={{
                        backgroundColor: '#EE6363'
                    }}
                    style={{
                        backgroundColor: '#EE6363'
                    }}
                />
                <Text style={styles.text}>I am boy</Text>
                <Text style={styles.text}
                      onPress={() => {
                          this.props.navigator.push({
                              component: Girl,
                              params: {
                                  word: '一支玫瑰',
                                  onCallBack: (word) => {
                                      this.setState({
                                          word: word
                                      })
                                  }
                              }
                          })
                      }}>送女孩一支玫瑰</Text>
                <Text style={styles.text}>{this.state.word}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'grey',
    },
    text: {
        fontSize: 20,
    }
});