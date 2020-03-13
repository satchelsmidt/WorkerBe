// TODO: check out all of this and see how it works

// import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { SplashScreen } from 'expo';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';
// import BottomTabNavigator from './navigation/BottomTabNavigator';
// import useLinking from './navigation/useLinking';

/////////// TESTED ///////////

import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

// function ProfileScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>This is your profile{"\n"}</Text>
//       <Text>Here are some options for things you can do here{"\n"}</Text>
//       <Button
//         title='View your Goals'
//         // Include params in the .navigate function
//         onPress={() => navigation.navigate('Goals', {
//           itemId: 86,
//           otherParam: 'Whatever, man'
//         })}
//       />
//     </View>
//   );
// }

// function GoalsScreen({ route, navigation }) {

//   //Grab params (via route component) that were passed by prev screen
//   const {itemId} = route.params;
//   const {otherParam} = route.params;

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Goals Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>

//       {/* This allows us to push the same screen we are already on, again (for example, if data has reloaded) */}
//       <Button
//         title="Go to Goals... again"
//         onPress={() => navigation.push('Goals', {
//           // params can be modified and sent to next screen again
//           itemId: Math.floor(Math.random() * 100),
//         })}
//       />

//       <Button
//         title='Go to Profile'
//         onPress={() => navigation.navigate('Profile')}
//       />

//       {/* This allows us to return one screen back */}
//       <Button title="Go back" onPress={() => navigation.goBack()} />

//       {/* This allows us to return to the beginning of a stack */}
//       <Text>{'\n'}</Text>
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', { post: postText });
        }}
      />
    </>
  );
}

const Stack = createStackNavigator();

// TODO:
//create a context to ensure that user authenication is passed to all screens 
const userContext = React.createContext('null')

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'gold',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} >
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'My home'}}/>
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/////////// TESTED ///////////


// TODO: check out all of this and see how it works
// export default function App(props) {
//   const [isLoadingComplete, setLoadingComplete] = React.useState(false);
//   const [initialNavigationState, setInitialNavigationState] = React.useState();
//   const containerRef = React.useRef();
//   const { getInitialState } = useLinking(containerRef);

//   // Load any resources or data that we need prior to rendering the app
//   React.useEffect(() => {
//     async function loadResourcesAndDataAsync() {
//       try {
//         SplashScreen.preventAutoHide();

//         // Load our initial navigation state
//         setInitialNavigationState(await getInitialState());

//         // Load fonts
//         await Font.loadAsync({
//           ...Ionicons.font,
//           'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//         });
//       } catch (e) {
//         // We might want to provide this error information to an error reporting service
//         console.warn(e);
//       } finally {
//         setLoadingComplete(true);
//         SplashScreen.hide();
//       }
//     }

//     loadResourcesAndDataAsync();
//   }, []);

//   if (!isLoadingComplete && !props.skipLoadingScreen) {
//     return null;
//   } else {
//     return (
//       <View style={styles.container}>
//         {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//         <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
//           <Stack.Navigator>
//             <Stack.Screen name="Root" component={BottomTabNavigator} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
