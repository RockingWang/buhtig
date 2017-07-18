/**
 * Created by leechee on 2017-07-15.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import NavigationBar from './NavigationBar';

export default class FetchTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ''
        }
    }

    onLoad(url) {
        fetch(url).then(response => response.json()).then(data => console.log(data)).catch(e => console.log("Oops, error", e))
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'Fetch的使用'}
                    statusBar={{backgroundColor: 'gray'}}
                />
                <Text
                    onPress={() => this.onLoad('http://rapapi.org/mockjsdata/22511/test')}
                >获取数据</Text>
                <Text>返回结果：{this.state.result}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    tips: {
        fontSize: 18
    }
})