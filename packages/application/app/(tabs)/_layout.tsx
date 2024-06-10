import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import Header from '@/components/header';


export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'black' , headerShown: true}}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: '홈',
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
                    header: () => <Header />,
                    tabBarLabelStyle: { fontFamily: 'WantedSans-Medium' }
                }}
            />
            <Tabs.Screen
                name="note"
                options={{
                    tabBarLabel: '노트',
                    tabBarIcon: ({ color }) => <AntDesign name="book" size={24} color={color} />,
                    tabBarLabelStyle: { fontFamily: 'WantedSans-Medium' }
                }}
            />
            <Tabs.Screen
                name="scan"
                options={{
                    tabBarLabel: '스캔',
                    tabBarIcon: ({ color }) => <Ionicons name="scan" size={24} color={color} />,
                    tabBarLabelStyle: { fontFamily: 'WantedSans-Medium' }
                }}
            />
            <Tabs.Screen
                name="more"
                options={{
                    tabBarLabel: '더보기',
                    tabBarIcon: ({ color }) => <Feather name="more-horizontal" size={24} color={color} />,
                    tabBarLabelStyle: { fontFamily: 'WantedSans-Medium' }
                }}
            />
        </Tabs>
    );
}
