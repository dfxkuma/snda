import {ScrollView, View, Text, StyleSheet, Pressable} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React from "react";

export default function Tab() {
    return (
        <ScrollView
            style={styles.container}
            horizontal={false}
            contentContainerStyle={{alignItems: 'center'}}
        >
            <ScrollView
                style={styles.home}
                horizontal={false}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
            }}
            >
                <Text style={styles.mainText}>쓴다와 함께 공부를 시작하세요.</Text>
                <View style={styles.statusBar}>
                    <Entypo name="cloud" size={24} color="black" />
                    <Text style={styles.statusText}>
                        10페이지 사용 / 총 100페이지 (10%)
                    </Text>
                </View>
                <Text style={styles.quickMenuName}>빠른 작업</Text>
                <View style={styles.quickAction}>
                    {[...Array(6)].map((_, i) => (
                        <Pressable key={i} style={styles.quickActionMenu}>
                            <MaterialIcons name="abc" size={70} color="black" />
                            <Text style={styles.quickActionMenuText}>영어단어 암기</Text>
                        </Pressable>
                    ))}
                </View>
                <Text style={styles.quickMenuName}>학습 추천</Text>
                <View style={styles.quickMenu}>
                    <View style={styles.quickMenuRight}>
                        <Feather name="book" size={24} color="black" />
                        <Text style={styles.quickMenuText}>
                            통합사회 6/10 테스트 오답 [AI]
                        </Text>
                    </View>
                    <Pressable style={styles.quickMenuButton}>
                        <Text style={styles.quickMenuText}>바로 테스트</Text>
                    </Pressable>
                </View>
                <View style={styles.quickMenu}>
                    <View style={styles.quickMenuRight}>
                        <Feather name="book" size={24} color="black" />
                        <Text style={styles.quickMenuText}>
                            통합사회 6/10 테스트 오답 [AI]
                        </Text>
                    </View>
                    <Pressable style={styles.quickMenuButton}>
                        <Text style={styles.quickMenuText}>바로 테스트</Text>
                    </Pressable>
                </View>
                <View style={styles.quickMenu}>
                    <View style={styles.quickMenuRight}>
                        <Feather name="book" size={24} color="black" />
                        <Text style={styles.quickMenuText}>
                            통합사회 6/10 테스트 오답 [AI]
                        </Text>
                    </View>
                    <Pressable style={styles.quickMenuButton}>
                        <Text style={styles.quickMenuText}>바로 테스트</Text>
                    </Pressable>
                </View>
                <View style={styles.quickMenu}>
                    <View style={styles.quickMenuRight}>
                        <Feather name="book" size={24} color="black" />
                        <Text style={styles.quickMenuText}>
                            통합사회 6/10 테스트 오답 [AI]
                        </Text>
                    </View>
                    <Pressable style={styles.quickMenuButton}>
                        <Text style={styles.quickMenuText}>바로 테스트</Text>
                    </Pressable>
                </View>
                <Pressable style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
                    <Text style={{padding: 10}}>
                    내 콘텐츠 모두 보기
                    </Text>
                </Pressable>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    quickAction: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
    },
    quickActionMenu: {
        width: '32%',
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
    },
    quickActionMenuText: {
        fontSize: 16,
        fontFamily: 'WantedSans-Bold',
    },
    quickMenuRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    quickMenuButton: {
        borderRightWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        elevation: 2,
    },
    quickMenuText: {
        fontFamily: "WantedSans-Regular",
        fontSize: 15,
    },
    quickMenuName: {
        alignSelf: 'flex-start',
        paddingTop: 20,
        paddingBottom: 10,
        fontFamily: "WantedSans-Bold",
        fontSize: 20,
    },
    quickMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        paddingTop: 10,
        width: '90%',
    },
    statusBar: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        textAlign: 'center',
    },
    statusText: {
        fontFamily: "WantedSans-Regular",
        fontSize: 15,
    },
    mainText: {
        alignSelf: 'flex-start',
        fontFamily: "WantedSans-Bold",
        fontSize: 25,
    },
    home: {
        overflow: 'hidden',
        rowGap: 10,
        flex: 1,
        padding: 10,
        maxWidth: 500,
    },
    container: {
        paddingTop: 48,
        marginHorizontal: "auto",
        overflow: 'hidden',
        backgroundColor: '#f8f8f8',
        flexDirection: 'row',
        // paddingLeft: 20,
    },
});