import {Component} from 'react';
import {Text, View} from '@tarojs/components';
import {AccountCircle} from '@styled-icons/material';

export default class Index extends Component {
    render() {
        return (
            <View className="index">
                <AccountCircle size={30} />
                <Text className="text-blue-600">ffHello worldssss!</Text>
            </View>
        );
    }
}
