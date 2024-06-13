import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import React from "react";

export default function Tab() {
    return (
        <View style={styles.container}>
            <View style={styles.home}>
                <Text style={styles.mainText}>중간고사까지 D-21</Text>
                <View style={styles.statusBar}>
                    <Entypo name="cloud" size={24} color="black" />
                    <Text style={styles.statusText}>
                        10페이지 사용 / 총 100페이지 (10%)
                    </Text>
                </View>
                <Text style={styles.quickMenuName}>빠른 작업</Text>
                <View style={styles.quickAction}>
                    <Pressable style={styles.quickActionMenu}>
                        <Text style={styles.quickActionMenuText}>영어단어 암기</Text>
                    </Pressable>
                    <Pressable style={styles.quickActionMenu}>
                        <Text style={styles.quickActionMenuText}>오답노트 보기</Text>
                    </Pressable>
                    <Pressable style={styles.quickActionMenu}>
                        <Text style={styles.quickActionMenuText}>AI 에게 질문</Text>
                    </Pressable>
                    <Pressable style={styles.quickActionMenu}>
                        <Text style={styles.quickActionMenuText}>암기과목 점검</Text>
                    </Pressable>
                    <Pressable style={styles.quickActionMenu}>
                        <Text style={styles.quickActionMenuText}>시험내용 요약</Text>
                    </Pressable>
                    <Pressable style={styles.quickActionMenu}>
                        <Text style={styles.quickActionMenuText}>내 노트 찾기</Text>
                    </Pressable>


                </View>
                <Text style={styles.quickMenuName}>학습 추천</Text>
                    <View style={styles.quickMenu}>
                        <View style={styles.quickMenuRight}>
                            <Feather name="book" size={24} color="black" />
                            <Text style={styles.quickMenuText}>
                                [과학] 1.역학적 시스템 오답
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
                            [영어] 능률 VOCA DAY 05
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
                            [영어] 2단원 본문 해석하기
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
                            [컴시일] 수행평가 AI 문제
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
                            [수학] 수(상) 중간고사 30문제
                        </Text>
                    </View>
                    <Pressable style={styles.quickMenuButton}>
                        <Text style={styles.quickMenuText}>바로 테스트</Text>
                    </Pressable>
                </View>
                <Pressable style={styles.allContentButton}>
                    <Text style={styles.allContentText}>
                        내 콘텐츠 모두 보기
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    quickAction: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center', // Center the items
    },
    quickActionMenu: {
        width: '30%', // Adjusted width for better spacing
        // height: 120, // Increased height for better visibility
        borderWidth: 1,
        padding: 5,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center', // Center content within each item
        margin: 5, // Added margin for spacing between items
    },
    quickActionMenuText: {
        fontSize: 16,
        fontFamily: 'WantedSans-Bold',
        textAlign: 'center', // Center text within each item
    },
    quickMenuRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        flex: 1,
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
        justifyContent: 'space-between', // Space between elements
        gap: 10,
        paddingTop: 10,
        width: '100%',
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
        marginBottom: 15,
        alignSelf: 'flex-start',
        fontFamily: "WantedSans-Bold",
        fontSize: 25,
    },
    home: {
        width: '100%',
        overflow: 'hidden',
        rowGap: 5,
        flex: 1,
        maxWidth: 500,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        paddingTop: 30,
        width: '90%',
        marginHorizontal: "auto",
        overflow: 'hidden',
        flexDirection: 'row',
    },
    allContentButton: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        marginTop: 20,
        padding: 10,
    },
    allContentText: {
        fontFamily: "WantedSans-Regular",
        fontSize: 15,
    },
});
