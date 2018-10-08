import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

export default class ListItem extends React.Component {
  itemClicked = task => {
    this.props.itemClicked(task);
  };
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.itemClicked(this.props.task.item)}
      >
        <View key={this.props.task.item.id} style={styles.container}>
          <Text style={styles.itemText}>{this.props.task.item.task}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5eb8ff",
    paddingHorizontal: 15,
    height: 40,
    justifyContent: "center"
  },
  itemText: {
    color: "black"
  }
});
