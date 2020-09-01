import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style/';
import {connect} from 'react-redux';
import {register} from '../../redux/actions/auth';
class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      nameValidate: new Animated.Value(0),
      emailValidate: new Animated.Value(0),
      emailValidateRegex: new Animated.Value(0),
      passwordValidate: new Animated.Value(0),
      marginBottomName: -14,
      marginTopName: 1,
      marginBottomEmail: -14,
      marginTopEmail: 1,
      marginBottomEmailRegex: -14,
      marginTopEmailRegex: 1,
      marginBottomPassword: -14,
      marginTopPassword: 1,
    };
  }

  handleRegister() {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.name === '') {
      Animated.timing(this.state.nameValidate, {
        toValue: 1,
      }).start();
      this.setState({marginBottomName: 4, marginTopName: 3});
    } else if (this.state.email === '') {
      // ====================================================
      // hide alert name
      Animated.timing(this.state.nameValidate, {
        toValue: 0,
      }).start();
      this.setState({marginBottomName: -14, marginTopName: 1});
      // =====================================================
      // show alert email
      Animated.timing(this.state.emailValidate, {
        toValue: 1,
      }).start();
      this.setState({marginBottomEmail: 4, marginTopEmail: 3});
    } else if (reg.test(this.state.email) === false) {
      // ======================================================
      // hide alert name
      Animated.timing(this.state.nameValidate, {
        toValue: 0,
      }).start();
      this.setState({marginBottomName: -14, marginTopName: 1});
      // ======================================================
      // hide alert email
      Animated.timing(this.state.emailValidate, {
        toValue: 0,
      }).start();
      this.setState({marginBottomEmail: -14, marginTopEmail: 1});
      // =======================================================
      // show alert emailRegex
      Animated.timing(this.state.emailValidateRegex, {
        toValue: 1,
      }).start();
      this.setState({marginBottomEmailRegex: 4, marginTopEmailRegex: 2});
    } else if (this.state.password === '') {
      // ======================================================
      // hide alert name
      Animated.timing(this.state.nameValidate, {
        toValue: 0,
      }).start();
      this.setState({marginBottomName: -14, marginTopName: 1});
      // ======================================================
      // hide alert email
      Animated.timing(this.state.emailValidate, {
        toValue: 0,
      }).start();
      this.setState({marginBottomEmail: -14, marginTopEmail: 1});
      // ======================================================
      // hide alert emailRegex
      Animated.timing(this.state.emailValidateRegex, {
        toValue: 0,
      }).start();
      this.setState({marginBottomEmailRegex: -14, marginTopEmailRegex: 1});
      // ======================================================
      // show password
      Animated.timing(this.state.passwordValidate, {
        toValue: 1,
      }).start();
    } else {
    }
  }
  render() {
    return (
      <ScrollView style={{height: 500}}>
        <View style={{marginLeft: 20, marginRight: 20}}>
          <Icon
            name="angle-left"
            coloe="black"
            style={{marginTop: 20}}
            size={30}
          />

          <Text style={{fontWeight: 'bold', fontSize: 32, marginTop: 30}}>
            Sign Up
          </Text>
          <View style={{marginTop: 50}}>
            <View style={styles.boxShadow}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  marginTop: 14,
                  marginLeft: 14,
                }}
                placeholder="Name"
                onChangeText={(text) => this.setState({name: text})}
                value={this.name}
              />
            </View>
            {/* validate */}
            <Animated.View
              style={[
                styles.fadingContainer,
                {
                  marginLeft: 12,
                  opacity: this.state.nameValidate,
                  marginBottom: this.state.marginBottomName,
                  marginTop: this.state.marginTopName,
                },
              ]}>
              <Text style={{color: 'red', fontWeight: 'bold'}}>
                Name is required
              </Text>
            </Animated.View>

            <View style={styles.boxShadow}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  marginTop: 14,
                  marginLeft: 14,
                }}
                placeholder="Email"
                onChangeText={(text) => this.setState({email: text})}
                value={this.email}
              />
            </View>
            {/* validate email */}
            <Animated.View
              style={[
                styles.fadingContainer,
                {
                  marginLeft: 11,
                  opacity: this.state.emailValidate,
                  marginBottom: this.state.marginBottomEmail,
                  marginTop: this.state.marginTopEmail,
                },
              ]}>
              <Text style={{color: 'red', fontWeight: 'bold'}}>
                Email is required
              </Text>
            </Animated.View>
            <Animated.View
              style={[
                styles.fadingContainer,
                {
                  marginLeft: 11,
                  opacity: this.state.emailValidateRegex,
                  marginBottom: this.state.marginBottomEmailRegex,
                  marginTop: this.state.marginTopEmailRegex,
                },
              ]}>
              <Text style={{color: 'red', fontWeight: 'bold'}}>
                Email not valid
              </Text>
            </Animated.View>
            <View style={styles.boxShadow}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  marginTop: 14,
                  marginLeft: 14,
                }}
                placeholder="Password"
                onChangeText={(text) => this.setState({password: text})}
                value={this.password}
              />
            </View>
            {/* validate password */}
            <Animated.View
              style={[
                styles.fadingContainer,
                {
                  marginTop: 8,
                  marginLeft: 11,
                  opacity: this.state.passwordValidate,
                  marginBottom: -11,
                },
              ]}>
              <Text style={{color: 'red', fontWeight: 'bold'}}>
                Password is required
              </Text>
            </Animated.View>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 10, marginLeft: 'auto'}}>
            <Text style={{marginRight: 13, fontSize: 16, marginTop: 2}}>
              Already have an account?
            </Text>
            <Icon name="long-arrow-right" color="#0044cc" size={30} />
          </View>
          <TouchableOpacity
            onPress={() => this.handleRegister()}
            style={{
              backgroundColor: '#003cb3',
              height: 45,
              width: '100%',
              borderRadius: 100,
              marginTop: 20,
            }}>
            <Text style={{textAlign: 'center', marginTop: 14, color: 'white'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  register,
});
const mapDispatchToProp = {register};

export default connect(mapStateToProps, mapDispatchToProp)(RegisterScreen);
