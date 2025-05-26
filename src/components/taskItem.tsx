import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type TaskItemProps = {
  texto: string;
  feito: boolean;
  onTogle: () => void;
  onDelete: () => void;
}

export const TaskItem: React.FC<TaskItemProps>=({texto, feito, onTogle, onDelete}) => {
  return(
  <View style={styles.container}>
    <TouchableOpacity style={[styles.statusBox, feito ? styles.completed : styles.pendente]} onPress={onTogle}>
        <Feather name={feito ? 'check-square' : 'square'} size={24} color="#fff" />
    </TouchableOpacity>

      <View style={styles.textoContainer}>
        <Text style={styles.texto}>{texto}</Text>
      </View>

      <TouchableOpacity style={styles.deleteBox} onPress={onDelete}>
        <Feather name="trash-2" size={24} color="#fff" />
      </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#304163',
    justifyContent: 'space-between',
    borderRadius: 4,
    margin: 4,
  },

  statusBox:{
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },

  completed: {
    backgroundColor: '#0E9577',
  },

  pendente: {
    backgroundColor: '#E88A1A',
  },

  textoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  texto: {
    fontSize: 16,
    color: '#fff',
  },

  deleteBox: {
    width: 56,
    height: 56,
    backgroundColor: '#F22424',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
})