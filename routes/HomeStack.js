import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
const screens = {
    ReviewDetails:{
        screen: ReviewDetails,
        navigationOptions:{
            title:'Game zone'
        }
    },
    Home:{
        screen: Home
    }
   
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);