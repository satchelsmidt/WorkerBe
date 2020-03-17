// // TODO: check out all of this and see how it works

// // import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// // import * as Font from 'expo-font';
// // import { Ionicons } from '@expo/vector-icons';

// // import useLinking from './navigation/useLinking';

// /////////// TESTED ///////////

import * as React from 'react';
import { Button, View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AsyncStorage } from 'react-native'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

//Screens
import BottomTabNavigator from './screens/Main/HomeScreen'
// import SignInScreen from './screens/Auth/SignInScreen'
import LoadingScreen from './screens/Auth/LoadingScreen'
// import SettingsScreen from './screens//Main/SettingsScreen'
// import { SplashScreen } from 'expo';


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

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require('./assets/images/robot-dev.png')}
//     />
//   );
// }

// function HomeScreen({ navigation, route }) {
//   React.useEffect(() => {
//     if (route.params?.post) {
//       // Post updated, do something with `route.params.post`
//       // For example, send the post to the server
//     }
//   }, [route.params?.post]);

//   const [count, setCount] = React.useState(0);

//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <Button onPress={() => setCount(c => c + 1)} title="Update count" />
//       ),
//     });
//   }, [navigation, setCount]);


//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Count: {count}</Text>
//       <Button
//         title="Create post"
//         onPress={() => navigation.navigate('CreatePost')}
//       />
//       <Button
//         title="Update the title"
//         onPress={() => navigation.setOptions({ title: 'Updated!' })}
//       />
//       <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
//     </View>
//   );
// }

// function CreatePostScreen({ navigation, route }) {
//   const [postText, setPostText] = React.useState('');

//   return (
//     <>
//       <TextInput
//         multiline
//         placeholder="What's on your mind?"
//         style={{ height: 200, padding: 10, backgroundColor: 'white' }}
//         value={postText}
//         onChangeText={setPostText}
//       />
//       <Button
//         title="Done"
//         onPress={() => {
//           // Pass params back to home screen
//           navigation.navigate('Home', { post: postText });
//         }}
//       />
//     </>
//   );
// }


// function Profile() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Goals Screen</Text>
//     </View>
//   );
// }

// function Settings() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Goals Screen</Text>
//     </View>
//   );
// }


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


// TODO:
//create a context to ensure that user authenication is passed to all screens 
export const AuthContext = React.createContext()

// export default class App extends React.Component {

//   state = {
//     //if non null, user is logged in. Else they are not
//     userToken: "hey i'm a user",
//     //set this to true when checking if we have a token in storage
//     isLoading: '',
//     //set this to true when signing out, else false
//     isSignout: ''
//   }



//   render() {
//     if (this.state.isLoading) {
//       // We haven't finished checking for the token yet
//       return <LoadingScreen />;
//     }
//     console.log('THIS IS YOUR PROPS:', this.props)
//     return (
//       <NavigationContainer>
//         <Stack.Navigator
//         // initialRouteName="Home"
//         // screenOptions={{
//         //   headerStyle: {
//         //     backgroundColor: 'gold',
//         //   },
//         //   // Including a button on right side of header (use this later)
//         //   // headerRight: () => (
//         //   //   <Button
//         //   //     onPress={() => alert('This is a button!')}
//         //   //     title="Info"
//         //   //     color="#fff"
//         //   //   />
//         //   // ),
//         //   headerTintColor: '#fff',
//         //   headerTitleStyle: {
//         //     fontWeight: 'bold',
//         //   },
//         // }} 
//         >

//           {!this.state.userToken ? (
//             // No token found, user isn't signed in
//             <>
//               <Stack.Screen
//                 name="SignIn"
//                 component={SignInScreen}
//                 options={{
//                   title: 'Sign in',
//                   // When logging out, a pop animation feels intuitive
//                   // You can remove this if you want the default 'push' animation
//                   animationTypeForReplace: this.state.isSignout ? 'pop' : 'push',
//                 }}
//               />
//               <Stack.Screen name="SignUp" component={SignUpScreen} />
//               <Stack.Screen name="ResetPassword" component={ResetPassword} />
//             </>
//           ) : (
//               // User is signed in
//               <>
//                 <Stack.Screen name="Home" component={HomeScreen} />
//               </>
//             )}
//           {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
//           {/* <Stack.Screen name="Profile" component={Profile} />
//         <Stack.Screen name="Settings" component={Settings} /> */}
//           {/* <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: props => <LogoTitle {...props} /> }} />
//         <Stack.Screen name="CreatePost" component={CreatePostScreen} /> */}

//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

function SignInScreen() {
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

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  if (state.isLoading) {
    // We haven't finished checking for the token yet
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.userToken == null ? (
            <Stack.Screen name="SignIn" component={SignInScreen} />
          ) : (
              <Stack.Screen name="Home" component={BottomTabNavigator}
                options={{
                  headerRight: () => (
                    <Button
                      onPress={() => alert('This is a button!')}
                      title="Boar"
                      color="black"
                    />
                  )
                }} 
                // options={({ route }) => ({ 
                //   title: route.name
                // })}
                // initialParams={{
                //   headerRight: () => (
                //     <Button
                //       onPress={() => alert('This is a button!')}
                //       title="Boar"
                //       color="black"
                //     />
                //   )
                // }}
              />
            )}
        </Stack.Navigator>
      </NavigationContainer >
    </AuthContext.Provider >
  );
}

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