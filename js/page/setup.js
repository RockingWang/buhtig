/**
 * Created by wangpeng on 2017/7/17.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from "react-native-tab-navigator/TabNavigatorItem";
import Boy from '../../Boy';
import ListViewTest from '../../ListViewTest';
import FetchTest from '../../FetchTest';

export default class buhtig extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tb_popular',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<TabNavigator>*/}
                {/*<TabNavigatorItem*/}
                {/*selected={this.state.selectedTab === 'tb_popular'}*/}
                {/*selectedTitleStyle={{color: 'red'}}*/}
                {/*title="最热"*/}
                {/*renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')}/>}*/}
                {/*renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_polular.png')}/>}*/}
                {/*badgeText="1"*/}
                {/*onPress={() => this.setState({ selectedTab : 'tb_popular' })}*/}
                {/*>*/}
                {/*<View*/}
                {/*style={styles.page1}*/}
                {/*/>*/}
                {/*</TabNavigatorItem>*/}
                {/*<TabNavigatorItem*/}
                {/*selected={this.state.selectedTab === 'tb_trending'}*/}
                {/*selectedTitleStyle={{color: 'yellow'}}*/}
                {/*title="趋势"*/}
                {/*renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')}/>}*/}
                {/*renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]} source={require('./res/images/ic_trending.png')}/>}*/}
                {/*onPress={() => this.setState({ selectedTab : 'tb_trending'})}*/}
                {/*>*/}
                {/*<View*/}
                {/*style={styles.page2}*/}
                {/*/>*/}
                {/*</TabNavigatorItem>*/}
                {/*<TabNavigatorItem*/}
                {/*selected={this.state.selectedTab === 'tb_favorite'}*/}
                {/*selectedTitleStyle={{color: 'red'}}*/}
                {/*title="收藏"*/}
                {/*renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')}/>}*/}
                {/*renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_polular.png')}/>}*/}
                {/*badgeText="1"*/}
                {/*onPress={() => this.setState({ selectedTab : 'tb_favorite' })}*/}
                {/*>*/}
                {/*<View*/}
                {/*style={styles.page1}*/}
                {/*/>*/}
                {/*</TabNavigatorItem>*/}
                {/*<TabNavigatorItem*/}
                {/*selected={this.state.selectedTab === 'tb_my'}*/}
                {/*selectedTitleStyle={{color: 'yellow'}}*/}
                {/*title="我的"*/}
                {/*renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')}/>}*/}
                {/*renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]} source={require('./res/images/ic_trending.png')}/>}*/}
                {/*onPress={() => this.setState({ selectedTab : 'tb_my'})}*/}
                {/*>*/}
                {/*<View*/}
                {/*style={styles.page2}*/}
                {/*/>*/}
                {/*</TabNavigatorItem>*/}
                {/*</TabNavigator>*/}
                {/*<Navigator*/}
                {/*initialRoute={{*/}
                {/*component: Boy*/}
                {/*}}*/}
                {/*renderScene={*/}
                {/*(route, navigator) => {*/}
                {/*let Component = route.component;*/}
                {/*return <Component navigator={navigator} {...route.params}/>*/}
                {/*}*/}
                {/*}*/}
                {/*>*/}

                {/*</Navigator>*/}
                {/*<ListViewTest/>*/}
                <FetchTest/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page1: {
        flex: 1,
        backgroundColor: 'red',
    },
    page2: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    image: {
        height: 22,
        width: 22
    }
});