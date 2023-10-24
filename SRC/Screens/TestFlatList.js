import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
const TestFlatList = () => {

    const dispatch = useDispatch();
    const messagData = useSelector(state => state.empMessageState);
    const hisData = useSelector(state => state.selectHistory);
    // console.log("messagData", messagData?.user);
      console.log("messagData1", hisData?.user);

    const renderItem = ({ item, index }) => {
        console.log("item", item);
        return (
            <Text style={{ color: "black" }}>{item?.GROSSSAL}</Text>
        );
    }

    return (
        <View style={{ flex: 1, marginVertical: 50, marginHorizontal: 20, backgroundColor: "silver" }}>
            <Text style={{ color: 'red' }}>checkout 24latestNewBeamsBranch</Text>
            <Text style={{color:'red'}}>today latest push on git hub</Text>
            <FlatList
                data={hisData?.user}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    );
};

export default TestFlatList;
