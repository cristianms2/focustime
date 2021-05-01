import React from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { RoundedBotton } from '../components/RoundedBotton';

const historialItem = ({ item, index }) => {
  return <Text style={styles(item.status).historicalIten}>{item.subject}</Text>;
};

export const FocusHistory = ({ historial, onClear }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        {!!historial.length && (
          <>
            <Text style={styles().tittle}>Things that we were focus on</Text>
            <FlatList
              style={{ flex: 1 }}
              data={historial}
              renderItem={historialItem}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              keyExtractor={item => historial.indexOf(item)}
            />
            <View style={styles().botton}>
              <RoundedBotton size={75} tittle="Clear" onPress={onClear} />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

styles = (status) =>
  StyleSheet.create({
    historicalIten: { color: status === 1 ? 'grey' : 'red' },
    tittle: {
      color: '#52734d',
      fontSize: 20,
    },
    botton: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
  });
