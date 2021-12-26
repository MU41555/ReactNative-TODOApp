import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import img from './image/img1.jpg';
import MyList from './screen/myList';

function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    // Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = index => {
    let itemscopy = [...taskItems];
    itemscopy.splice(index, 1);
    setTaskItems(itemscopy);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.img} source={img} />
        </View>
        <View style={styles.header_1}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 26,
              marginLeft: 8,
              marginTop: 10,
            }}>
            What's up, Joy!
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={{fontSize: 18, marginTop: 10, marginBottom: 8, fontWeight:'bold'}}>
            TODAY'S TASKS
          </Text>
          <ScrollView>
            <View style={styles.list}>
              {taskItems.map((items, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask()}>
                    <MyList text={items} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <View style={styles.inp}>
            <TextInput
              placeholder={'Enter new task'}
              value={task}
              onChangeText={text => setTask(text)}
            />
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => handleAddTask()}>
              <Text style={styles.btn2}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  header_1: {
    flex: 1,
    backgroundColor: '#55c7e8',
  },
  header: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  img: {
    width: 100,
    height: 80,
  },
  section: {
    flex: 7,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 4,
    alignItems: 'center',
  },
  inp: {
    borderColor: '#55c7e8',
    borderWidth: 2,
    borderRadius: 25,
    padding: 5,
    width: '80%',
    height: 50,
    alignItems: 'center',
  },
  btn: {},
  btn1: {
    height: 60,
    width: 60,
    backgroundColor: '#55c7e8',
    borderRadius: 50,
    marginLeft: 5,
  },
  btn2: {
    fontSize: 40,
    textAlign: 'center',
    alignItems: 'center',
  },
});
