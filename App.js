// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import { TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  // const [enteredGoalText,setnteredGoalText] = useState("");
  // const [courseGoals, setCourseGoals] = useState([]);

  // const deleteGoalHandler = () => {
  //   setnteredGoalText('');
  // };

  // function goalInputHandler(enteredText){
  //   setnteredGoalText(enteredText)
  // }

  // function addGoalHandler() {
  //   setCourseGoals(currentCourseGoals =>[...courseGoals,enteredGoalText]);
  // }

  const [inputText, setInputText] = useState('');
  const [displayTexts, setDisplayTexts] = useState([]);
  const [updatedText, setUpdatedText] = useState('');


  function handleAddClick() {
    setDisplayTexts([...displayTexts, inputText]);
    setInputText('');
  };

  function handleDeleteClick() {
    setDisplayTexts([]);
  };

  function goalInputHandler(inputText){
    setInputText(inputText)
  }

  function handleUpdateText(index) {
    const newtextsList = [...textsList];
    newtextsList[index] = updatedText;
    setTextsList(newtextsList);
    setUpdatedText("");
  };
  

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}placeholder="Type Here!" value={inputText} onChangeText={goalInputHandler}/>
        <Button title="Add NEW Goal" onPress={handleAddClick}/>
        <Button title="Delete" onPress={handleDeleteClick}/>
      </View>
      <View style={styles.goalContainer}>
        {displayTexts.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    marginHorizontal: "20",
    padding: 50,
    fontSize: '50px',
    // alignItema: 'center',
    // justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  textInput: {
    width:'80%',
    borderWidth: 1,
  },
  goalContainer: {
    flex: 4
  }
});
