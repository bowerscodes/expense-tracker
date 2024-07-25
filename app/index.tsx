// Global imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'

// Local imports
import ExpensesContextProvider from '../store/expenses-context';
import AllExpenses from '../screens/AllExpenses';
import RecentExpenses from '../screens/RecentExpenses';
import ManageExpense from '../screens/ManageExpense';
import GlobalStyles, { Colors } from '../constants/styles'
import IconButton from '../components/ui/IconButton';
import { RootStackParamList } from '../types';


const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({ 
        headerStyle: { backgroundColor: Colors.dark },
        headerTintColor: Colors.light,
        tabBarStyle: { backgroundColor: Colors.dark },
        tabBarActiveTintColor: Colors.light,
        tabBarInactiveTintColor: Colors.primary,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon='add-circle-outline'
            color={tintColor as string}
            onPress={() => {
              navigation.navigate('ManageExpense');
            }} 
          />
        )
      })}
    >
      <BottomTabs.Screen
        name='RecentExpenses'
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => <Ionicons name='hourglass-outline' size={size} color={color} />,
        }}
      />
      <BottomTabs.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({color, size}) => <Ionicons name='list-outline' size={size} color={color} />
        }}
      />
    </BottomTabs.Navigator>
  );
};

export const Index = () => {
  return (
    <>
      <StatusBar style='light' />
      <ExpensesContextProvider>
        <NavigationContainer independent={true} >
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.dark },
              headerTintColor: Colors.light,
            }}
          >
            <Stack.Screen
              name='ExpensesOverview'
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='ManageExpense'
              component={ManageExpense}
              options={{ presentation: 'modal' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
};

export default Index;
