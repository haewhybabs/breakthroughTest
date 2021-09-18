import Result from "../screens/Result";
import Introduction from "../screens/Introduction";
import ReactionTest from "../screens/ReactionTest";
import SplashScreen from '../screens/SplashScreen';
export const WelcomeStack = 
[
  {
    screen:SplashScreen,
    name:"SplashScreen"
  },
  {
    screen:Introduction,
    name:"Introduction"
  }
];
export const AppStack = 
[
  {
    screen:ReactionTest,
    name:"ReactionTest"
  },
  {
    screen:Result,
    name:"Result"
  },
]


