import { View, Text, Animated, StatusBar, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

import styles from '../themes/styles'

let IMAGE_MOUSE = require('../images/mouse.webp')
let IMAGE_CAT = require('../images/cat.webp')

const Screen_bai2 = () => {

    let randomX = () => { // chieu ngang
        return Math.floor(Math.random() * (250 - 1)) + 1;
    }
    let randomY = () => { // chieu doc
        return Math.floor(Math.random() * (470 - 1)) + 1;
    }


    const [mouse1, setMouse1] = useState({
        x: null,
        y: null,
        left: new Animated.Value(randomX()),
        top: new Animated.Value(randomY()),
    })
    const [mouse2, setMouse2] = useState({
        x: null,
        y: null,
        left: new Animated.Value(randomX()),
        top: new Animated.Value(randomY()),
    })
    const [mouse3, setMouse3] = useState({
        x: null,
        y: null,
        left: new Animated.Value(randomX()),
        top: new Animated.Value(randomY()),
    })


    let onPress = (evt) => {

        console.log("🚀 ~ file: Screen_bai2.js ~ line 41 ~ onPress ~ onPress",)

        let x = evt.nativeEvent.locationX;
        let y = evt.nativeEvent.locationY;

    
    }

let changeMouse = () => {
    // console.log("🚀 ~ file: Screen_bai2.js ~ line 52 ~ changeMouse ~ changeMouse", changeMouse)
    let x = randomX();
    let y = randomY();

    setMouse1({
        x: x,
        y: y,
        left: x,
        top: y,
    })
    //
    x = randomX();
    y = randomY();

    setMouse2({
        x: x,
        y: y,
        left: x,
        top: y,
    })
    //
    x = randomX();
    y = randomY();

    setMouse3({
        x: x,
        y: y,
        left: x,
        top: y,
    })
    
}


    return (
        <View
            onStartShouldSetResponder={() => true}
            onMoveShouldSetResponder={() => true}
            onResponderGrant={onPress}
            style={[{ backgroundColor: '#a33e1c' }, styles.flex_1]}
        >
            <StatusBar />
            <TouchableOpacity onPress={() => changeMouse()} >
                <Animated.Image source={IMAGE_MOUSE} style={[{
                    width: 70, height: 70,
                    position: 'absolute',
                    left: mouse1.left,
                    top: mouse1.top,
                    // backgroundColor: '#f0f'
                }]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeMouse()} >
            <Animated.Image source={IMAGE_MOUSE} style={[{
                width: 70, height: 70,
                position: 'absolute',
                left: mouse2.left,
                top: mouse2.top,
                // backgroundColor: '#f0f'
            }]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeMouse()} >
            <Animated.Image source={IMAGE_MOUSE} style={[{
                width: 70, height: 70,
                position: 'absolute',
                left: mouse3.left,
                top: mouse3.top,
                // backgroundColor: '#f0f'
            }]} />
            </TouchableOpacity>


        </View>
    )
}

export default Screen_bai2;