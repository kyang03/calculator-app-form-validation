import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CalculatorApp = () => {
  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleCalculation = (operation) => {
    // Check empty inputs
    if (firstNum === '' || secondNum === '') {
      setError('Please enter both numbers');
      setResult('');
      return;
    }

    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);

    if (isNaN(num1) || isNaN(num2)) {
      setError('Please enter valid numbers');
      setResult('');
      return;
    }

    let res;
    switch (operation) {
      case 'Add':
        res = num1 + num2;
        break;
      case 'Subtract':
        res = num1 - num2;
        break;
      case 'Multiply':
        res = num1 * num2;
        break;
      case 'Divide':
        res = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        return;
    }

    setResult(res.toString());
    setError(''); 
  };

  const resetFields = () => {
    setFirstNum('');
    setSecondNum('');
    setResult('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator App</Text>

      <TextInput
        style={styles.input}
        placeholder="First Number"
        keyboardType="numeric"
        value={firstNum}
        onChangeText={setFirstNum}
      />
      <TextInput
        style={styles.input}
        placeholder="Second Number"
        keyboardType="numeric"
        value={secondNum}
        onChangeText={setSecondNum}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={() => handleCalculation('Add')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Subtract" onPress={() => handleCalculation('Subtract')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Multiply" onPress={() => handleCalculation('Multiply')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Divide" onPress={() => handleCalculation('Divide')} />
      </View>

      <Text style={styles.result}>Result: {result}</Text>

      <Button title="Reset" onPress={resetFields} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  result: {
    fontSize: 20,
    marginVertical: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});
export default CalculatorApp;
