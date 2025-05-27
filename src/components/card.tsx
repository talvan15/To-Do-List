import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type CardProps = {
    titulo: string,
    numero: number,
    color?: string,
}

export const Card: React.FC<CardProps> = ({ titulo, numero, color}) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardContaier}>
                <Text style={styles.textContainer}>{titulo}</Text>
                <Text style={[styles.numberContainer, {color}]}>{numero}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContaier: {
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: 113,
        height: 79,
        borderRadius: 4,
        padding: 8,
        gap: 8,
    },

    textContainer: {
        color: '#1E1E1E',
        fontWeight: '400',
        fontSize: 16,
        textAlign: 'center',

    },
    numberContainer: {
        fontWeight:'bold',
        fontSize: 24,
    }
})