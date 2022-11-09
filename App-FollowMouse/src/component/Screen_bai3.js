// import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Image } from 'react-native';

import styles from '../themes/styles';

export default function Screen_bai3() {

    let IMAGE_MOUSE = require('../images/mouse.webp')
    let IMAGE_CAT = require('../images/cat.webp')
    // RandDom
    let randomX = () => { // chieu ngang
        return Math.floor(Math.random() * (250 - 1)) + 1;
    }
    let randomY = () => { // chieu doc
        return Math.floor(Math.random() * (470 - 1)) + 1;
    }
    // vi tri click
    const [location, setlocation] = useState({
        x: null,
        y: null,
    })
    // vi tri cat
    let locationCat = {
        fakeLeft: useRef(new Animated.Value(randomX())).current,
        fakeTop: useRef(new Animated.Value(randomY())).current,
    }
    // vi tri mouse
    const [locationM1, setLocationM1] = useState({
        fakeLeft: useRef(new Animated.Value(randomX())).current,
        fakeTop: useRef(new Animated.Value(randomY())).current,
    })
    const [locationM2, setLocationM2] = useState({
        fakeLeft: useRef(new Animated.Value(randomX())).current,
        fakeTop: useRef(new Animated.Value(randomY())).current,
    })
    const [locationM3, setLocationM3] = useState({
        fakeLeft: useRef(new Animated.Value(randomX())).current,
        fakeTop: useRef(new Animated.Value(randomY())).current,
    })




    //
    const onPress = (evt) => {
        console.log("🚀 ~ file: Screen_bai3.js ~ line 13 ~ onPress ~ evt");

        let x = evt.nativeEvent.locationX;
        let y = evt.nativeEvent.locationY;


        // cat di den diem click
        setlocation({
            x,
            y,
        })

        console.log('x - ', x, "  y - ", y);
        console.log("🚀 ~ file: Screen_bai3.js ~ line 31 ~ Screen_bai3 ~ locationM1", locationM1)

    }
    ////    sk anim di chuyen cua cat  
    useEffect(() => {
        let x = location.x - 40;
        let y = location.y - 40;

        if (x < 40) {
            x = 0
        }
        if (y < 40) {
            y = 0
        }

        let ani_X = Animated.timing(locationCat.fakeLeft, { toValue: x, duration: 1000, useNativeDriver: false });
        let ani_Y = Animated.timing(locationCat.fakeTop, { toValue: y, duration: 1000, useNativeDriver: false });

        locationCat.fakeLeft = x
        locationCat.fakeTop = y
        Animated.parallel([ani_X, ani_Y]).start();
    }, [location])

    //
    const onMove = (evt) => {
        // console.log("🚀 ~ file: Screen_bai3.js ~ line 21 ~ onMove ~ onMove (🤠)")

    }
    //
    const onRelease = () => {
        // console.log("🚀 ~ file: Screen_bai3.js ~ line 26 ~ onRelease ~ onRelease(😎)")

    }
    // sk bet mouse
    function getCatchMouse(locationM) {
        console.log("🚀 ~ file: Screen_bai3.js ~ line 95 ~ getCatchMouse ~ getCatchMouse")
        console.log("🚀 ~ file: Screen_bai3.js ~ line 93 ~ getCatchMouse ~ locationM", locationM)
        // console.log("🚀 ~ file: Screen_bai3.js ~ line 93 ~ getCatchMouse ~ locationM", location)



        let fakeLeft = locationM.fakeLeft;
        let fakeTop = locationM.fakeTop;

        setlocation({
            x : fakeLeft,
            y : fakeTop
        })
        console.log("🚀 ~ file: Screen_bai3.js ~ line 138 ~ getCatchMouse ~ location", location)

        //
        let x = randomX();
        let y = randomY();

        setLocationM1({
            fakeLeft: x,
            fakeTop: y,
        })
        //
        x = randomX();
        y = randomY();

        setLocationM2({
            fakeLeft: x,
            fakeTop: y,
        })

        //
        x = randomX();
        y = randomY();

        setLocationM3({
            fakeLeft: x,
            fakeTop: y,
        })


    }


    return (
        <View
            onStartShouldSetResponder={() => true}
            onMoveShouldSetResponder={() => true}
            onResponderGrant={onPress}
            onResponderMove={onMove}
            onResponderRelease={onRelease}
            style={[styles.flex_1, { backgroundColor: '#ffb133' }]}>
            <StatusBar />

            <Animated.Image
                source={IMAGE_CAT} style={[, {
                    width: 100, height: 100,
                    position: 'absolute',
                    top: locationCat.fakeTop,
                    left: locationCat.fakeLeft
                }]}
            />



            <TouchableOpacity onPress={() => getCatchMouse(locationM1)}>
                <Animated.Image
                    source={IMAGE_MOUSE} style={[, {
                        width: 60, height: 60,
                        position: 'absolute',
                        top: locationM1.fakeTop,
                        left: locationM1.fakeLeft,
                        // backgroundColor: '#0f0'
                    }]}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => getCatchMouse(locationM2)}>
                <Animated.Image
                    source={IMAGE_MOUSE} style={[, {
                        width: 60, height: 60,
                        position: 'absolute',
                        top: locationM2.fakeTop,
                        left: locationM2.fakeLeft,
                        // backgroundColor: '#0f0'
                    }]}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => getCatchMouse(locationM3)}>
                <Animated.Image
                    source={IMAGE_MOUSE} style={[, {
                        width: 60, height: 60,
                        position: 'absolute',
                        top: locationM3.fakeTop,
                        left: locationM3.fakeLeft,
                        // backgroundColor: '#0f0'
                    }]}
                />
            </TouchableOpacity>
        


        </View>
    );
}


