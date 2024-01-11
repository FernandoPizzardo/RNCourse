import { StyleSheet, Text, View, TextInput, Button } from 'react-native';



export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.textInput}/>
        <Button title="ADD" onPress={console.log("oi!")}/>
      </View>
      <View style={styles.goalList}>
        <Text>Goal List</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,

  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    flex: 1,
    padding: 8, 

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  goalList: {
    flex: 4,
    padding: 8,
  }
});