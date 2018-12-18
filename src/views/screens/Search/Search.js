import React, { Component } from 'react';
import { StatusBar } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import { BaseColor } from '../../../styles/theme/color';
export default class Search extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded style={{backgroundColor:BaseColor.base}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="md-card" />
          </Item>
          <Button style={{marginTop:100}} transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <StatusBar
                        backgroundColor={BaseColor.base}
                        barStyle="light-content" />
      </Container>
    );
  }
}
