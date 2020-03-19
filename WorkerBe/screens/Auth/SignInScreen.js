//Show this screen if the user is not signed in (token was not found)

import React from 'react'
import { View, TextInput, Button, StyleSheet, Text } from 'react-native'

export const AuthContext = React.createContext()

export default function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text> {'\n'}</Text>
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});