import { Alert, StyleSheet, View } from 'react-native';
import { TaskItem } from '../components/taskItem';
import { Card } from '../components/card';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TaskItem 
      texto='EXEMPLO'
      feito={true}
      onTogle={() => Alert.alert('Tarefa pressionada')}
      onDelete={() => Alert.alert('Tarefa Deletada')}
      />
      <TaskItem
      texto='EXEMPLO 2'
      feito={false}
      onTogle={() => Alert.alert('Tarefa pressionada')}
      onDelete={() => Alert.alert('Tarefa Deletada')}
      />
      <View style={styles.cardAlign}>
          <Card 
          titulo='Cadastradas:'
          numero={4}
          color='#000000'
          /> 
          <Card 
          titulo='Em aberto:'
          numero={2}
          color='#E88A1A'
          />
          <Card 
          titulo='FInalizadas:'
          numero={2}
          color='#0E9577'
        />
      </View>
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
  },

  cardAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  }
});
