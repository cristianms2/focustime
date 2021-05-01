import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedBotton } from '../components/RoundedBotton';
import { fontSize, paddingSize } from '../utils/Size';

export const Focus = ({ addSubjet }) => {
  const [tmp, setTmp] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you want to be focus on </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: 20 }}
            value={tmp}
            onChangeText={(tmp) => setTmp(tmp)}
          />

          <RoundedBotton
            tittle="+"
            size={50}
            textStyle={{ fontSize: 30 }}
            onPress={() => {
              addSubjet(tmp);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  titleContainer: {
    flex: 1,
    padding: paddingSize.sm,
    justifyContent: 'center',
  },
  title: {
    color: '#52734d',
    fontWeight: 'bold',
    fontSize: fontSize.md,
  },
  inputContainer: {
    paddingTop: paddingSize.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#52734d',
    fontWeight: 'bold',
  },
});
