import React, { Component } from 'react'
import { Text, View } from 'react-native'
import style from './style'

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={style.content}>
                <Text style={style.logo}> Logo </Text>
            </View>
        )
    }
}
