import React, { Component } from 'react'
import { View, Text, ImageBackground, Image,Animated,Easing } from 'react-native'
import { Container, Content, Picker, Form, Item, Label, Input, Button, Icon, Grid, Row, Col } from 'native-base';
import account from './styles';
import { MainIdLogoGreen } from '../../../../components/logo/Logo';
import ProgressBar from '../ProgressBar/ProgressBar';
import DatePicker from 'react-native-datepicker'
import { BaseColor } from '../../../../styles/theme/color';
import { Btn } from '../../../../components/buttons/Butons';
import NaijaStates from 'naija-state-local-government';
 
class AccountGeneration extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0)
    this.state = {
      firstColor :'rgba(16, 214, 155, 0.07)',
       secondColor:'rgba(16, 214, 155, 0.5)',
       thirdColor:'rgba(16, 214, 155, 1)',
      isCheck: 3,
      lgaIsEnabled:false,
      selected1: undefined,
      lga1: undefined,
      gender1: undefined,
      States: [],
      Lga: ['Select LGA'],
      gender: [
        { id: 0, name: 'Gender' },
        { id: 1, name: 'Male' },
        { id: 1, name: 'Female' },
      ]
    };
  }

  componentDidMount = () => {
    let States=NaijaStates.states()
    this.animate()
    this.setState({States:['State Of Origin', ...States]})
  }

  componentDidUpdate=(prevProps,PrevState)=>{
    if(PrevState.selected1 !==this.state.selected1){
      if(this.state.selected1 !==(undefined||this.state.States[0])){
        let stateLgas =NaijaStates.lgas(this.state.selected1);
        this.setState({Lga:[...stateLgas['lgas']]},()=>{
          this.setState({lgaIsEnabled:true})
        })
      }
    }
  }
  animate() {
    this.animatedValue.setValue(0)
    Animated.timing(

      this.animatedValue,
      {
        delay:500,
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(()=>this.animate())
  }

  onLgaChange(value) {
    this.setState({
      lga1: value
    })
  }
  onStateChange(value) {
    this.setState({
      selected1: value
    });
  }

  onGenderChange(value) {
    this.setState({
      gender1: value
    })
  }
  render() {

    const renderGender = (
      <Item picker style={[{width:'85%',alignSelf:'flex-start',borderBottomColor: BaseColor.dark}]} >
        <Picker
          mode='dropdown'
          iosIcon={<Image style={{ width: 30, height: 20 }} source={require('../../../../components/logo/images/down-arrow.png')} />}
          style={{ width: '45%',color:BaseColor.grey, height: 50, position: 'relative', top: 10, left: 0 }}
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={this.state.gender1}
          onValueChange={(value) => this.onGenderChange(value)}
        >
          {this.state.gender.map((gd, i) => {
            return (
              <Picker.Item label={gd.name} value={gd.name} key={i} />
            );
          }
          )}
        </Picker>
      </Item>
    )
    const renderDatepicker = (
      <DatePicker
      style={{width:'90%',height:50, marginStart:20,borderBottomColor: BaseColor.dark}}
        date={this.state.date}
        mode='date'
        placeholder="DOB"
        placeholderColor={BaseColor.grey}
        format="YYYY-MM-DD"
        minDate="1920-01-01"
        maxDate="2019-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={true}
        
        customStyles={{
          dateIcon: {
            height: 20,
            width: 16,
            position: 'absolute',
            left: '80%',
            top: 23,
            marginLeft: 0
          },
          placeholderText: {
            marginTop: 5,
            left: 0,
            color: BaseColor.grey,
            fontSize: 17,
          },
          
          dateInput: {
            padding: 0,
            fontSize: 20,
            paddingHorizontal:10,
            fontFamily:'Ubuntu-Regular',
            alignItems: 'flex-start',
            borderWidth: 0,
            color:BaseColor.grey,
            borderBottomColor: BaseColor.base,
            borderBottomWidth: 0.5,
            marginRight: 10,
            height: 40, position: 'relative', top: 10, left: 0 
          }
        }}
        onDateChange={(date) => { this.setState({ date }) }}
      />
    )
    const renderStatePicker = (
      <Item picker style={{width:'85%',marginStart:20,height:50,borderBottomColor: BaseColor.dark}}>
        <Picker
          mode='dropdown'
          iosIcon={<Image style={{ width: 30, height: 0 }} source={require('../../../../components/logo/images/down-arrow.png')} />}
          style={{ height: 50,color:BaseColor.grey, position: 'relative', top: 10, left: 0 }}
          selectedValue={this.state.selected1}
          onValueChange={(value) => this.onStateChange(value)}
        >
          {this.state.States.map((state, i) => {
            return (
              <Picker.Item label={state} value={state} key={i} />
            );
          }
          )}

        </Picker>
      </Item>
    )
    const renderLgaPicker = (
      <Item picker style={[{width:'85%',alignSelf:'flex-start',height:50,borderBottomColor: BaseColor.dark}]} >
        <Picker
          mode='dropdown'
          iosIcon={<Image style={{ width: 30, height: 40 }} source={require('../../../../components/logo/images/down-arrow.png')} />}
          style={{ height: 50,color:BaseColor.grey, position: 'relative', top: 10, left: 0 }}
          placeholderStyle={account.label}
          itemTextStyle={{ color: '#788ad2' }}
          enabled={this.state.lgaIsEnabled}
          selectedValue={this.state.lga1}
          onValueChange={(value) => this.onLgaChange(value)}
        >
          {this.state.Lga.map((lg, i) => {
            return (       
              <Picker.Item label={lg} value={lg} key={i} />
            );
          }
          )}
        </Picker>
      </Item>
    )
    return (
      // <ImageBackground source={require('../../../../components/logo/images/whiteIdBackground.png')}  style={{width:'100%', height:'100%',resizeMode: 'cover',}}>
      <Animated.View style={[account.container]}>
        <Content>
          {/* <View style={{ marginTop: 10, alignItems: "center", }}>
            <ProgressBar isCheck={this.state.isCheck} />
          </View> */}
          <View style={account.logoSection}>
            <MainIdLogoGreen />
          </View>
          <View style={account.instruction}>
            <Text style={account.instructionText}>Please provide your data correctly </Text>
            <Text style={account.instructionText}>to generate your account</Text>
          </View>
          <Form style={account.form}>
          <Grid>
            <Row>
            <Item style={account.Item} floatingLabel >
                <Label style={account.label}>First Name</Label>
                <Input style={account.itemInput} />
              </Item>
            </Row>
            <Row>
              <Item style={account.Item} floatingLabel>
                <Label style={account.label}>Last Name</Label>
                <Input style={account.itemInput} />
              </Item>
            </Row>
            </Grid>
            <Grid>
            <Col size={2}>
              {renderStatePicker}
            </Col >
            <Col size={2}>
              {renderLgaPicker}
            </Col>
            </Grid>
            <Grid>
            <Col size={2}>
            {renderDatepicker}
            </Col>
            <Col size={2}>
            {renderGender}
            </Col>
            </Grid>
            <Grid>
            <Row>
            <Item style={[account.Item]} floatingLabel >
                <Label style={account.label}>Email</Label>
                <Input style={account.itemInput} keyboardType='email-address' />
              </Item>
            </Row>
            <Row>
            <Item style={[account.Item,]} floatingLabel>
                <Label style={account.label}>Password</Label>
                <Input style={account.itemInput} secureTextEntry={true} />
              </Item>
            </Row>
            <Row>
            <Item style={[account.Item,]} floatingLabel>
                <Label style={account.label}>Confirm Password</Label>
                <Input style={account.itemInput} secureTextEntry={true} />
              </Item>
            </Row>
          </Grid>
           
            
            <View style={{ marginBottom: '10%', marginTop: '10%' }}>
            <Btn txtStyle={{fontSize:23}} onPress={() => this.setState({ isCheck: this.state.isCheck + 1 }, () => this.props.navigation.navigate('Dashboard'))} title="Create ID" />
              {/* <Button onPress={() => this.setState({ isCheck: this.state.isCheck + 1 }, () => this.props.navigation.navigate('Dashboard'))} success style={{ alignItems: 'center', textAlign: 'center', alignContent: "center", justifyContent: 'center', backgroundColor: BaseColor.dark, borderRadius: 10, width: 200, }}><Text style={{ flex: 1, textAlign: 'center', justifyContent: 'center', fontFamily: 'HurmeGeometricSans1 Bold', alignSelf: 'center', color: BaseColor.light, fontSize: 20, alignItems: "center", }}> CREATE ID </Text></Button> */}
            </View>
          </Form>
        </Content>
      </Animated.View>
      /* </ImageBackground> */
    )
  }
}

export default AccountGeneration
