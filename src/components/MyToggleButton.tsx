import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native-animatable';
import { MaterialIcons as Icon} from '@expo/vector-icons'
import { Colors } from 'react-native-paper';
import { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, StyleProp, ViewStyle } from 'react-native';

export interface ToggleItem {
    icon?: string,
    label?: string,
    description?: string
}

interface Props{
    name?: string,
    items: ToggleItem[],
    alignContent?: 'center' | 'flex-start' | 'flex-end',
    setValue?: (name: string, value: any) => void,
    style?: StyleProp<ViewStyle>,
    column? :boolean,
    onCustomChange?: (index: number) => void,
    value?: number
}

const MyToggleButton = ({...props}: Props) => {
    const [selected, setSelected] = useState(props.value || 0)

    useEffect(() => {
        setSelected(props.value)
    }, [props.value])

    useEffect(()=>{
        if (props.setValue)
        props.setValue(props.name, 0)
        //if (props.onCustomChange)
        //props.onCustomChange(0)
    }, [])

    const handleSelect = (index: number) => {
        setSelected(index)
        if (props.setValue)
        props.setValue(props.name, index)
        if (props.onCustomChange) props.onCustomChange(index)
    }

    return (
        <>
            <View style={[{
                flexDirection: 'row',
                justifyContent: 'center',
            }, props.style]}>
                <View style={{
                    backgroundColor: Colors.grey200,
                    elevation: 5,
                    flexDirection: props.column ? 'column' : 'row',
                    borderRadius: 20,
                    width: props.column ? "100%" : undefined
                    // flexWrap: 'wrap'
                }}>
                    {props.items.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => handleSelect(index)} key={index}>
                                <View style={{
                                    backgroundColor: selected == index ? Colors.blue600 : Colors.grey200,
                                    padding: 30,
                                    borderRadius: 20,
                                    elevation: selected == index ? 6 : 0,
                                    alignItems: props.alignContent || 'center',
                                    justifyContent: 'space-evenly'
                                }}>
                                    {item.icon && 
                                        <Icon style={{
                                            // marginBottom: 10
                                        }} name={item.icon} size={26} color={selected == index ? Colors.white : Colors.blue700} />
                                    }
                                    {item.label &&
                                        <Text style={{
                                            color: selected == index ? Colors.white : Colors.blue700,
                                            fontWeight: 'bold'
                                        }}>{item.label}</Text>
                                    }
                                    {item.description &&
                                        <Text style={{
                                            color: selected == index ? Colors.grey300 : Colors.grey400
                                        }}>{item.description}</Text>
                                    }
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })}

                </View>
            </View>    
        </>
    )
}

export default MyToggleButton;