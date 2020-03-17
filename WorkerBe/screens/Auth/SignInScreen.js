//Show this screen if the user is not signed in (token was not found)

import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import AuthContext from '../../App'

// export default function SignInScreen() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>This is the sign in screen</Text>
//       </View>
//     );
//   }


export default function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  if (AuthContext) {
    const { signIn } = React.useContext(AuthContext);
  }

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
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});