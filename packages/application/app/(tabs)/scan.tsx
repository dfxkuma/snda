import { CameraView, useCameraPermissions } from 'expo-camera';
import {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Modal}  from 'native-base';
import {CameraType} from "expo-camera/legacy";

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();
    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        requestPermission();
    }


    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={CameraType.back}>
                <View style={styles.buttonContainer}>

                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});