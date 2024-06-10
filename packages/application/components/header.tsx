import { View, StyleSheet, Text } from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.container}>
            <Entypo style={styles.item} name="pencil" size={24} color="black"/>
            <Text style={styles.text}>Snda | 쓴다</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        paddingLeft: 20,
    },
    text: {
        fontFamily: "WantedSans-ExtraBold",
        fontSize: 20,
    },
    item: {
        marginRight: 5,
    }
})