//Show this screen when the user is successfully signed in

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { View, Text, Button } from 'react-native';


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const INITIAL_ROUTE_NAME = 'Profile';

export default function BottomTabNavigator({ navigation, route }) {

  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  navigation.setOptions({ headerRight: ()=>(getUpperRightButtons(route)) });

  return (
    <Tab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'prof',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="black"
            />
          )
        }}
      />
      <Stack.Screen
        name="Goals"
        component={Goals}
        options={{
          title: 'go',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="black"
            />
          )
        }}
      />
      <Stack.Screen
        name="Board"
        component={Board}
        options={{ title: 'bore' }}
      />
      <Stack.Screen
        name="People"
        component={People}
        options={{ title: 'peep' }}
      />
    </Tab.Navigator>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  )
}

function Goals() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Goals Screen</Text>
    </View>
  );
}

function Board() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Board Screen</Text>
    </View>
  );
}


function People() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>People Screen</Text>
    </View>
  )
}

function getHeaderTitle(route) {
  // console.log(route)
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Profile':
      return 'what hello';
    case 'Goals':
      return 'GOAL';
    case 'Board':
      return 'board';
    case 'People':
      return 'things about person';
  }
}

function getUpperRightButtons(route) {
  console.log('route NAME: ', route)


  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  // console.log('route NAME: ', routename)

  switch (routeName) {
    case 'Profile':
      return (<Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="black"
        />)
    case 'Goals':
      return (<Button
        onPress={() => alert('This is a button!')}
        title="goo"
        color="black"
      />)
    case 'Board':
      <Button
        onPress={() => alert('This is a button!')}
        title="Boar"
        color="black"
      />
    case 'People':
      <Button
        onPress={() => alert('This is a button!')}
        title="pers"
        color="black"
      />
  }
}

//NOT TESTED YET

// import * as React from 'react';
// import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import * as WebBrowser from 'expo-web-browser';

// import { MonoText } from '../../components/StyledText';

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
//         <View style={styles.welcomeContainer}>
//           <Image
//             source={
//               __DEV__
//                 ? require('../assets/images/robot-dev.png')
//                 : require('../assets/images/robot-prod.png')
//             }
//             style={styles.welcomeImage}
//           />
//         </View>

//         <View style={styles.getStartedContainer}>
//           <DevelopmentModeNotice />

//           <Text style={styles.getStartedText}>Open up the code for this screen:</Text>

//           <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
//             <MonoText>screens/HomeScreen.js</MonoText>
//           </View>

//           <Text style={styles.getStartedText}>
//             Change any of the text, save the file, and your app will automatically reload.
//           </Text>
//         </View>

//         <View style={styles.helpContainer}>
//           <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
//             <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>

//       <View style={styles.tabBarInfoContainer}>
//         <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

//         <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
//           <MonoText style={styles.codeHighlightText}>navigation/BottomTabNavigator.js</MonoText>
//         </View>
//       </View>
//     </View>
//   );
// }

// HomeScreen.navigationOptions = {
//   header: null,
// };

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use useful development
//         tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }

// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
// }

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });

