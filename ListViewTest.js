/**
 * Created by leechee on 2017-07-15.
 */

import React,{Component} from 'react';
import {
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import NavigationBar from './NavigationBar';

var data = {
    "statusCode": 0,
    "result": [
        {
            "email": "f.martinez@gonzalez.net",
            "fullName": "张三张三张三张三张三"
        },
        {
            "email": "v.wilson@garcia.gov",
            "fullName": "张三张三张三"
        },
        {
            "email": "x.williams@lopez.co.uk",
            "fullName": "张三张三张三"
        },
        {
            "email": "l.jones@walker.co.uk",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "n.anderson@garcia.com",
            "fullName": "张三张三张三"
        },
        {
            "email": "q.robinson@lewis.edu",
            "fullName": "张三张三张三"
        },
        {
            "email": "s.hall@garcia.net",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "x.robinson@moore.gov",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "n.perez@harris.edu",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "t.lee@hall.io",
            "fullName": "张三张三张三张三张三"
        },
        {
            "email": "e.young@garcia.net",
            "fullName": "张三张三张三"
        },
        {
            "email": "q.harris@young.org",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "u.rodriguez@martin.com",
            "fullName": "张三张三"
        },
        {
            "email": "a.davis@martinez.io",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "j.young@smith.co.uk",
            "fullName": "张三张三"
        }
    ]
};

export default class ListViewTest extends Component{
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data.result)
        }
    }
    renderRow(item){
        return <View>
            <Text style.>{item.fullName}</Text>
            <Text>{item.email}</Text>
        </View>
    }
    render(){
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'ListViewTest'}
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(item)=>this.renderRow(item)}
                    // initialListSize=""
                    // onEndReachedThreshold=""
                    // pageSize=""
                    // renderScrollComponent=""
                    // scrollRenderAheadDistance=""
                    // stickyHeaderIndices=""
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 22
    }
})