import { Alert, StyleSheet, View } from 'react-native';
import { TaskItem } from '../components/taskItem';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TaskItem 
      texto='EXEMPLO'
      feito={true}
      onTogle={() => Alert.alert('Tarefa pressionada')}
      onDelete={() => Alert.alert('Tarefa marcada')}
      />
      <TaskItem
      texto='EXEMPLO 2'
      feito={false}
      onTogle={() => Alert.alert('Tarefa pressionada')}
      onDelete={() => Alert.alert('Tarefa desmarcada')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#28385e",

  },

  text:{
    color:"#ffffff",
  }
});
