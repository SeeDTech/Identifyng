import React, { Component } from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { Container, Content, Picker, Form, Item, Label, Input, Button, Icon } from 'native-base';
import account from './styles';
import { MainIdLogoGreen } from '../../../../components/logo/Logo';
import ProgressBar from '../ProgressBar/ProgressBar';
import DatePicker from 'react-native-datepicker'
import { BaseColor } from '../../../../styles/theme/color';

class AccountGeneration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck:3,
      selected1: undefined,
      lga1: undefined,
      gender1:undefined,
      States: [
        { id: 0, name: 'STATE' },
        { id: 1, name: 'Abia' },
        { id: 2, name: 'Adamawa' },
        { id: 3, name: 'Akwaibom' },
        { id: 4, name: 'Anambra' },
        { id: 5, name: 'Bauchi' },
      ],
      Lga: [
        { id: 0, name: 'LGA' },
        { id: 1, name: 'Abia north' },
        { id: 2, name: 'ugboklo' },
        { id: 3, name: 'bobola' },
        { id: 4, name: 'obajana' },
        { id: 5, name: 'Kachia' },
        { id: 6, name: 'Dala' },
      ],
      gender:[
        { id: 0, name: 'Gender' },
        { id: 1, name: 'Male' },
        { id: 1, name: 'Female' },
      ]
    };
  }

  onLgaChange(value) {
    this.setState({
      gender1: value
    })
  }
  onStateChange(value) {
    this.setState({
      selected1: value
    });
  }

  onGenderChange (value){
    this.setState({
      gender1:value
    })
  }
  render() {
    const renderGender = (
      <Item picker style={[account.Item, account.col6, {marginTop:23}]} >
               <Picker
        mode='dropdown'
        iosIcon={<Image style={{ width: 30, height: 40 }} source={require('../../../../components/logo/images/down-arrow.png')} />}
        style={{ width: '45%', height: 40, position: 'relative', top: 10, left: 0 }}
        placeholderStyle={{ color: "#bfc6ea" }}
        placeholderIconColor="#007aff"
        selectedValue={this.state.gender1}
        onValueChange={(value) => this.onLgaChange(value)}
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
        style={[account.datePicker, account.col6]}
        date={this.state.date}
        mode='date'
        placeholder="DOB"
        placeholderColor={BaseColor.grey}
        format="YYYY-MM-DD"
        minDate="1990-01-01"
        maxDate="2019-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={true}
        customStyles={{
          dateIcon: {
            height:20,
            width:16,
            position: 'absolute',
            left: 110,
            top: 15,
            marginLeft: 0
          },
          placeholderText: {
            marginTop: 5,
            right: 0,
            color: BaseColor.grey,
            fontSize: 17,
          },
          dateInput: {
            padding: 0,
            fontSize: 20,
            alignItems: 'flex-start',
            borderWidth: 0,
            borderBottomColor:BaseColor.base,
            borderBottomWidth: 1,
            marginRight: 10
          }
        }}
        onDateChange={(date) => { this.setState({ date: date }) }}
      />
    )
    const renderStatePicker = (
      <Item picker style={[account.Item, account.col6]} >
      <Picker
        mode='dropdown'
        iosIcon={<Image style={{ width: 30, height: 0 }} source={require('../../../../components/logo/images/down-arrow.png')} />}
        style={{ width: '43%', height: 60, position: 'relative', top: 10, left: 0 }}

        placeholderStyle={{ color: "#bfc6ea" }}
        placeholderIconColor="#007aff"
        selectedValue={this.state.selected1}
        onValueChange={(value) => this.onStateChange(value)}
      >
        {this.state.States.map((state, i) => {
          return (
            <Picker.Item label={state.name} value={state.name} key={i} />
          );
        }
        )}

      </Picker>
      </Item>
    )
    const renderLgaPicker = (
      <Item picker style={[account.Item, account.col6,{marginLeft:10}]} >
      <Picker
        mode='dropdown'
        iosIcon={<Image style={{ width: 30, height: 40 }} source={require('../../../../components/logo/images/down-arrow.png')} />}
        style={{ width: '45%', height: 40, position: 'relative', top: 10, left: 0 }}
        placeholderStyle={{ color: "#bfc6ea" }}
        placeholderIconColor="#007aff"
        selectedValue={this.state.lga1}
        onValueChange={(value) => this.onLgaChange(value)}
      >
        {this.state.Lga.map((lg, i) => {
          return (
            <Picker.Item label={lg.name} value={lg.name} key={i} />
          );
        }
        )}
      </Picker>
      </Item>
    )
    return (
      // <ImageBackground source={require('../../../../components/logo/images/whiteIdBackground.png')}  style={{width:'100%', height:'100%',resizeMode: 'cover',}}>
      <Container style={account.container}>
        <Content>
          <View style={{marginTop:10, alignItems: "center", }}>
            <ProgressBar isCheck={this.state.isCheck} />
          </View>
          <View style={account.logoSection}>
            <MainIdLogoGreen />
          </View>
          <View style={account.instruction}>
            <Text style={account.instructionText}>Please provide your data correctly </Text>
            <Text style={account.instructionText}>to generate your account</Text>
          </View>
          <Form style={account.form}>
            <View>
              <Item style={account.Item} floatingLabel >
                <Label style={account.label}>FIRST NAME</Label>
                <Input style={account.itemInput} />
              </Item>
              <Item style={account.Item} floatingLabel>
                <Label style={account.label}>LAST NAME</Label>
                <Input style={account.itemInput} />
              </Item>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                {renderStatePicker}
              
                {renderLgaPicker}
            </View>
            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
              {renderDatepicker}
              {renderGender}
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Item style={[account.Item,]} floatingLabel >
                <Label style={account.label}>EMAIL ADDRESS</Label>
                <Input keyboardType='email-address' />
              </Item>
              <Item style={[account.Item,]} floatingLabel>
                <Label style={account.label}>PASSWORD</Label>
                <Input secureTextEntry={true} />
              </Item>
              <Item style={[account.Item,]} floatingLabel>
                <Label style={account.label}>CONFIRM PASSWORD</Label>
                <Input secureTextEntry={true} />
              </Item>
            </View>
            <View style={{ marginBottom: '10%', marginTop: '20%' }}>
              <Button onPress={()=>this.setState({isCheck:this.state.isCheck+1},()=>this.props.navigation.navigate('Dashboard'))} success style={{ alignItems: 'center', textAlign: 'center', alignContent: "center", justifyContent: 'center', backgroundColor: BaseColor.dark, borderRadius: 10, width: 200, }}><Text style={{ flex: 1, textAlign: 'center', justifyContent: 'center', fontFamily: 'Ubuntu-Regular', alignSelf: 'center', color: BaseColor.light, fontSize: 20, alignItems: "center", }}> CREATE ID </Text></Button>
            </View>
          </Form>
        </Content>
      </Container>
      /* </ImageBackground> */
    )
  }
}

export default AccountGeneration
