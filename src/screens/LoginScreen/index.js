import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import {API_URL} from '@env'
import { connect } from 'react-redux'
class LoginScreen extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View>
                <Text> LoginScreen </Text>
                <Button title={"Dashboard"} onPress={()=>{this.props.navigation.navigate('Dashboard')}}></Button>
            </View>
        )
    }
}

const mapStateToProps = state=>({
    user : state.auth
})

export default connect(mapStateToProps)(LoginScreen)
