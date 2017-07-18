/**
 * Created by wangpeng on 2017/7/17.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from "react-native-tab-navigator/TabNavigatorItem";
import PopularPage from './PopularPage';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tb_popular',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigatorItem
                        selected={this.state.selectedTab === 'tb_popular'}
                        selectedTitleStyle={{color: '#2196F3'}}
                        title="最热"
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('../../res/images/ic_polular.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#2196F3'}]}
                                                         source={require('../../res/images/ic_polular.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_popular'})}
                    >
                        <PopularPage/>
                    </TabNavigatorItem>
                    <TabNavigatorItem
                        selected={this.state.selectedTab === 'tb_trending'}
                        selectedTitleStyle={{color: 'yellow'}}
                        title="趋势"
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('../../res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]}
                                                         source={require('../../res/images/ic_trending.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_trending'})}
                    >
                        <View
                            style={styles.page2}
                        />
                    </TabNavigatorItem>
                    <TabNavigatorItem
                        selected={this.state.selectedTab === 'tb_favorite'}
                        selectedTitleStyle={{color: 'green'}}
                        title="收藏"
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('../../res/images/ic_favorite.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'green'}]}
                                                         source={require('../../res/images/ic_favorite.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_favorite'})}
                    >
                        <View
                            style={styles.page3}
                        />
                    </TabNavigatorItem>
                    <TabNavigatorItem
                        selected={this.state.selectedTab === 'tb_my'}
                        selectedTitleStyle={{color: 'blue'}}
                        title="我的"
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('../../res/images/ic_my.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'blue'}]}
                                                         source={require('../../res/images/ic_my.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_my'})}
                    >
                        <View
                            style={styles.page4}
                        />
                    </TabNavigatorItem>
                </TabNavigator>
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
    page3: {
        flex: 1,
        backgroundColor: 'green',
    },
    page4: {
        flex: 1,
        backgroundColor: 'blue',
    },
    image: {
        height: 22,
        width: 22
    }
});