import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";
import uuidV4 from "uuid/v4";
import ListItem from "./src/components/ListItem";

export default class App extends React.Component {
  state = {
    tasks: [],
    selected: {}
  };
  addTask = () => {
    console.log(this.state["task"]);
    if (this.state.task === "" || this.state.task === undefined) return;
    const tasks = this.state.tasks;
    tasks.push({ id: uuidV4(), task: this.state.task });
    this.setState({ tasks: tasks, task: "" });
  };
  textChanged = (key, value) => {
    this.setState({ [key]: value });
  };
  itemClicked = task => {
    alert(task.id);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Task</Text>
        <TextInput
          style={styles.txtAddTask}
          onChangeText={val => this.textChanged("task", val)}
          value={this.state.task}
        />
        <TouchableOpacity onPress={this.addTask}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Add</Text>
          </View>
        </TouchableOpacity>
        {/* {this.state.tasks.map(d => {
          return <Text key={d.id}>{d.task}</Text>;
        })} */}
        {this.state.tasks.length > 0 && <Text>Tasks:</Text>}
        <FlatList
          data={this.state.tasks}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (
            <View style={{ height: 0.5, backgroundColor: "#CCCCCC" }} />
          )}
          renderItem={task => (
            <ListItem itemClicked={this.itemClicked} task={task} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    marginTop: 30
  },
  txtAddTask: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    alignItems: "center",
    paddingHorizontal: 15
  },
  btnContainer: {
    marginTop: 10,
    backgroundColor: "#0288d1",
    color: "white"
  },
  btnText: {
    color: "white",
    textAlign: "center",
    padding: 5,
    fontWeight: "700"
  }
});
