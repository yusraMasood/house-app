import { useUser } from '@/context';
import { MaterialCommunityIcons, FontAwesome, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  const { user } = useUser(); 

  const tabs = [
    {
      name: 'index',
      title: 'Home',
      icon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
      roles: ['A', 'B'], 
    },
    {
      name: 'profile',
      title: 'Profile',
      icon: ({ color }) => <Entypo size={28} name="user" color={color} />,
      roles: ['A', 'B'],
    },
    {
      name: 'location',
      title: 'Location',
      icon: ({ color }) => <Entypo size={28} name="location-pin" color={color} />,
      roles: ['A'],
    },
    {
      name: 'bookmark',
      title: 'Bookmark',
      icon: ({ color }) => <Entypo size={28} name="bookmark" color={color} />,
      roles: ['A'],
    },
    {
      name: 'contracts',
      title: 'Contracts',
      icon: ({ color }) => <Entypo size={28} name="newsletter" color={color} />,
      roles: ['B'],
    },
    {
      name: 'artificial',
      title: 'Artificial Intelligence',
      icon: ({ color }) => <FontAwesome5 size={28} name="robot" color={color} />,
      roles: ['B'],
    },
  ];

  // Filter tabs based on user role
  const filteredTabs = tabs.filter((tab) => tab.roles.includes(user.role));

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
      {filteredTabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: tab.icon,
          }}
        />
      ))}
    </Tabs>
  );
}
