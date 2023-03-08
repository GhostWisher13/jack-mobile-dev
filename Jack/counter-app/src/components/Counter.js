import { Component } from "react";
import { View, StyleSheet, Button, Text, TextInput } from "react-native";

export default class Counter extends Component {
  state = {
    count: 0,
    step: 3,
  };
  increment() {
    this.setState({ count: this.state.count + this.state.step });
  }
  alterarStep(texto) {
    this.setState({step: parseInt(texto) || this.state.step });
  }
  }
  decrement() {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }
  render() {
    return (
      <View>
        <TextInput
        value={this.state.step.toString()}
        onChange={(e) => this.state.Step(e.nativeEvent.text)}
        keyboardType="numeric"
        />
        <Text style={styles.counter}>Counter: {this.state.count}</Text>
        <Button onPress={() => this.increment()} title="+" />
        <Button onPress={() => this.decrement()} title="-" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
});
