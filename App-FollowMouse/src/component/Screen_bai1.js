import { View, Text, StatusBar, Image, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import styles from '../themes/styles';

const Screen_bai1 = () => {

    const [location, setLocation] = useState({
        x: 10,
        y: 10,
    })

    let fadeLeft = useRef(new Animated.Value(location.x)).current;
    let fadeTop = useRef(new Animated.Value(location.y)).current;

    let onPress = (evt) => {
        // console.log("🚀 ~ file: Screen_bai1.js ~ line 17 ~ onPress ~ onPress() ")

        let x = evt.nativeEvent.locationX;
        // console.log("🚀 ~ file: Screen_bai1.js ~ line 18 ~ onPress ~ x", x)
        let y = evt.nativeEvent.locationY;
        // console.log("🚀 ~ file: Screen_bai1.js ~ line 20 ~ onPress ~ y", y)

        x = x - 60;
        y = y - 60;
        setLocation({
            x: x,
            y: y,
        })

    }

    useEffect(() => {
        // console.log("🚀 ~ file: Screen_bai1.js ~ line 32 ~ useEffect ~ useEffect")

        let ani_X = Animated.timing(fadeLeft, { toValue: location.x, duration: 2000, useNativeDriver: false });
        let ani_Y = Animated.timing(fadeTop, { toValue: location.y, duration: 2000, useNativeDriver: false });

        Animated.parallel([ani_X, ani_Y]).start();

    }, [location])

    return (
        <View
            onStartShouldSetResponder={() => true}
            onMoveShouldSetResponder={() => true}
            onResponderGrant={onPress}
            style={[{ backgroundColor: '#0f0' }, styles.flex_1]}
        >
            <StatusBar />
            <Animated.Image source={require('../images/cat.webp')} style={[{
                width: 150, height: 150,
                position: 'absolute',
                left: fadeLeft,
                top: fadeTop,
                // backgroundColor: '#f0f'
            }, styles.flex_1]} />
        </View>
    )
}

export default Screen_bai1;