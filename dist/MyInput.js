import React, { useState, useEffect } from 'react';
import { withTheme, Colors, useTheme } from 'react-native-paper';
import { View, Text, TextInput, Animated } from 'react-native';
// const ErrorMap = {
//     {
//         type: "required", message: "Este campo es requerido"
//     }
// }
// const MyTextAnimated = Animated.createAnimatedComponent(Text);
const MyInput = React.forwardRef(({ ...props }, ref) => {
    const theme = useTheme();
    const [focused, setFocused] = useState(new Animated.Value(0));
    const [value, setValue] = useState(props.value);
    useEffect(() => {
        if (value?.length > 0)
            handleFocus();
    }, [props.value]);
    const handleFocus = () => {
        Animated.timing(focused, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false
        }).start();
    };
    const handleBlur = () => {
        if (value?.length > 0)
            return;
        Animated.timing(focused, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false
        }).start();
    };
    const handleChangeText = (text) => {
        setValue(text);
        if (text.length > 0)
            handleFocus();
        //else if (text.length == 0) handleBlur()
        if (props.onChangeText)
            props.onChangeText(text);
    };
    return (<View style={{ marginBottom: 5 }}>
                
                <View style={{
        // borderColor: Colors.white,
        // borderWidth: 1,
        borderRadius: 10,
        // color: Colors.grey100,
        backgroundColor: Colors.grey200
    }}>
                    <TextInput ref={ref} style={{
        padding: 15,
        paddingTop: 20,
    }} {...props} onFocus={handleFocus} onBlur={handleBlur} onChangeText={handleChangeText}/>
                    {props.label &&
        <Animated.View pointerEvents="none" style={{
            position: 'absolute',
            bottom: focused.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 40]
            }),
            left: focused.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 15]
            }),
        }}>
                            <Animated.Text style={{
            // fontFamily: "",
            color: focused.interpolate({
                inputRange: [0, 1],
                outputRange: [Colors.grey500, Colors.grey600]
            }),
        }}>{props.label}</Animated.Text>
                        </Animated.View>}
                </View>

                {props.error &&
        <>
                        <Text style={{
            margin: 10,
            color: Colors.red900
        }}>{props.error.type == "required" ? "Este campo es requerido" :
            props.error.type == "validate" ? `Es posible que este ${props.label} ya este en uso` :
                ""}</Text>
                        <Text style={{
            margin: 10,
            color: Colors.red900
        }}>{JSON.stringify(props.error)}</Text>
                    </>}
            </View>);
});
export default withTheme(MyInput);
