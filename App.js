import React, {useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/Home'
import {AppLoading} from 'expo'
const getFonts = () => {Font.loadAsync({
    'nunito-regular':require('./assets/fonts/NunitoSans-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/NunitoSans-Bold.ttf')
  })
}


export default function App() {
  const [fontLoaded, setFontLoaded]=useState(false)
    // if(fontLoaded){
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <Home/>
    <Home/>
  );
  // }else{
  // return(
  //  <AppLoading
  //  startAsync={getFonts}
  //  onFinish={()=>setFontLoaded(true)}
  //  />
  // )
  // }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
