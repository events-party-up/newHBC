import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet } from 'react-native';

import styles from './style';
export default class MyComponent extends Component {
  state = {
    modalVisible: false,
  };

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {
    return (
        <View style={styles.container}>
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text style={styles.create}>User Created Successfully</Text>
                <View style={styles.create1}>
                <Button 
                    onPress={() => this.closeModal()}
                    title="Ok"  >
                </Button></View>
              </View>
            </View>
          </Modal>
          <Button
              onPress={() => this.openModal()}
              title="Open modal"
          />
        </View>
    );
  }
}

