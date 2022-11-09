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

    let db = [
        {
            x: null,
            y: null,
            left: randomX(),
            top: randomY(),
        },
        {
            x: null,
            y: null,
            left: randomX(),
            top: randomY(),
        },
        {
            x: null,
            y: null,
            left: randomX(),
            top: randomY(),
        },
        
    ]
    const [mouse, setMouse] = useState(db)

    const [mouse1, setMouse1] = useState({
        x: null,
        y: null,
        left: randomX(),
        top: randomY(),
    })
    const [mouse2, setMouse2] = useState({
        x: null,
        y: null,
        left: randomX(),
        top: randomY(),
    })
    const [mouse3, setMouse3] = useState({
        x: null,
        y: null,
        left: randomX(),
        top: randomY(),
    })


    let onPress = (evt) => {

        console.log("🚀 ~ file: Screen_bai2.js ~ line 41 ~ onPress ~ onPress",)

        let x = evt.nativeEvent.locationX;
        let y = evt.nativeEvent.locationY;
        console.log("🚀 ~ file: Screen_bai2.js ~ line 44 ~ onPress ~ y ", y, `~  x - ${x} ~ ${randomX()}`)

        // db.forEach(item => {
        //     if (item.left === x && item.top === y) {
                
        //     } else {
                
        //     }
        // });

    
    }

let changeMouse = () => {
    db.forEach(item => {
        console.log("🚀 ~ file: Screen_bai2.js ~ line 82 ~ changeMouse ~ item", item)
        item.left = randomX();
        item.right = randomY()
    });
    setMouse(db)
}

// let renderItem = (item) => {
//     return <Animated.Image source={IMAGE_MOUSE} style={[{
//         width: 70, height: 70,
//         position: 'absolute',
//         left: item.left,
//         top: item.top,
//         // backgroundColor: '#f0f'
//     }]} />
// }

    return (
        <View
            onStartShouldSetResponder={() => true}
            onMoveShouldSetResponder={() => true}
            onResponderGrant={onPress}
            style={[{ backgroundColor: '#a33e1c' }, styles.flex_1]}
        >
            <StatusBar />
            <TouchableOpacity 
                onPress={() => changeMouse()}
            >
                
                <Animated.Image source={IMAGE_MOUSE} style={[{
                    width: 70, height: 70,
                    position: 'absolute',
                    left: mouse1.left,
                    top: mouse1.top,
                    // backgroundColor: '#f0f'
                }]} />
            </TouchableOpacity>
            <Animated.Image source={IMAGE_MOUSE} style={[{
                width: 70, height: 70,
                position: 'absolute',
                left: mouse2.left,
                top: mouse2.top,
                // backgroundColor: '#f0f'
            }]} />
            <Animated.Image source={IMAGE_MOUSE} style={[{
                width: 70, height: 70,
                position: 'absolute',
                left: mouse3.left,
                top: mouse3.top,
                // backgroundColor: '#f0f'
            }]} />

            {/* <FlatList
            data={db}
            keyExtractor={index => index}
            renderItem = {renderItem}
            /> */}


        </View>
    )
}

export default Screen_bai2;