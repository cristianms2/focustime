import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Platform, AsyncStorage } from 'react-native';
import { Focus } from './src/feactures/Focus';
import { FocusHistory } from './src/feactures/FocusHistory';
import { Timer } from './src/components/Timer';
import { paddingSize } from './src/utils/Size';

const STATUSES = {
  COMPLETED: 1,
  CANCELED: 2,
};

export default function App() {
  const [focusObject, setFousObject] = useState(null);
  const [historial, setHistorial] = useState([
  ]);

  const addStatusToHistorial = (subject, status) => {
    setHistorial([...historial, { subject, status }]);
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('key1', JSON.stringify(historial));
      console.log(historial, 'storage');
    } catch (error) {
      console.log(error, 'storageerror');
    }
  };

  const retriveData = async () => {
    try {
      const value = await AsyncStorage.getItem('key1');
      if (value) {
        return setHistorial(JSON.parse(value));
      }
    } catch (error) {
      console.log(error, 'retriveerror');
    }
  };

  useEffect(() => {
    retriveData();
  }, []);

  useEffect(() => {
    storeData();
  }, [historial]);

  const onClear = () => {
    setHistorial([]);
  };

  return (
    <View style={styles.container}>
      {focusObject ? (
        <Timer
          focusObject={focusObject}
          backme={setFousObject}
          onTimerEnd={() => {
            addStatusToHistorial(focusObject, STATUSES.COMPLETED);
            setFousObject(null);
          }}
          clearFocuse={() => {
            addStatusToHistorial(focusObject, STATUSES.CANCELED);
            setFousObject(null);
          }}
        />
      ) : (
        <View style={{ flex: 1 }}>
          <Focus addSubjet={setFousObject} />
          <FocusHistory historial={historial} onClear={onClear} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#feffde',
    paddingTop: Platform.OS === 'ios' ? paddingSize.md : paddingSize.lg,
  },
});
