//Show this screen when we are restoring/checking the user auth token

import React from 'react'
import {View, Text} from 'react-native'

export default function LoadingScreen(){
    return (
      // <Tab.Navigator>
      //   <Tab.Screen name="Feed" component={Feed} />
      //   <Tab.Screen name="Messages" component={Messages} />
      // </Tab.Navigator>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>LOADING</Text>
        </View>
    );
  }