/**
 * Created by leechee on 2017-07-15.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity,
    StyleSheet,
    RefreshControl
} from 'react-native';
import NavigationBar from './js/common/NavigationBar';
import Toast, {DURATION} from 'react-native-easy-toast';

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

export default class ListViewTest extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data.result),
            isLoading: true
        }
        this.onLoad();
    }

    renderRow(item) {
        return <View style={styles.row}>
            <TouchableOpacity
                onPress={() => {
                    this.toast.show("你单击了：" + item.fullName, DURATION.LENGTH_LONG)
                }}
            >
                <Text style={styles.tips}>{item.fullName}</Text>
                <Text style={styles.tips}>{item.email}</Text>
            </TouchableOpacity>
        </View>
    }

    renderSeparator(sectionId, rowId, adjacentRowHighlighted) {
        return <View key={rowId} style={styles.line}/>
    }

    renderFooter() {
        return <Image style={{width: 400, height: 100}}
                      source={{uri: 'https://images.gr-assets.com/hostedimages/1406479536ra/10555627.gif'}}/>
    }

    onLoad() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000)
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'ListViewTest'}
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(item) => this.renderRow(item)}
                    renderSeparator={(sectionId, rowId, adjacentRowHighlighted) => this.renderSeparator(sectionId, rowId, adjacentRowHighlighted)}
                    renderFooter={() => this.renderFooter()}
                    refreshControl={<RefreshControl refreshing={this.state.isLoading}
                                                    onRefresh={() => {
                                                        this.onLoad()
                                                    }}/>}
                    // initialListSize=""
                    // onEndReachedThreshold=""
                    // pageSize=""
                    // renderScrollComponent=""
                    // scrollRenderAheadDistance=""
                    // stickyHeaderIndices=""
                />
                <Toast ref={toast => this.toast = toast}/>
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
    },
    row: {
        height: 50
    },
    line: {
        height: 1,
        backgroundColor: 'black'
    }
});