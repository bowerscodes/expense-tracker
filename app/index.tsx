// Global imports
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

// Local imports
import AllExpenses from '../screens/AllExpenses';
import RecentExpenses from '../screens/RecentExpenses';
import ManageExpense from '../screens/ManageExpense';
import GlobalStyles, { Colors } from '../constants/styles'


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{ 
        headerStyle: { backgroundColor: Colors.dark },
        headerTintColor: Colors.light,
        tabBarStyle: { backgroundColor: Colors.dark },
        tabBarActiveTintColor: Colors.light,
        tabBarInactiveTintColor: Colors.primary,
      }}
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
)}

export const Index = () => {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator>
        <Stack.Screen
          name='ExpensesOverview'
          component={ExpensesOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ManageExpense'
          component={ManageExpense}
        />
      </Stack.Navigator>
      <StatusBar style='light' />
    </NavigationContainer>
  );
};

export default Index;
