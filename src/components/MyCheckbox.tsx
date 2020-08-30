import React, { useState, useEffect } from 'react';
import { Checkbox, Switch } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

interface Props{
    name?: string,
    setValue?: (name: string, value: any) => void,
    label?: string,
    onCustomChange?: (value: boolean) => void
}

const MyCheckbox = ({...props}: Props) => {
    const [checked, setChecked] = useState(false);
    const theme = useTheme()

    useEffect(()=>{
        props.setValue(props.name, checked)
    })

    const handlePress = () => {
        props.setValue(props.name, !checked)
        if (props.onCustomChange)
            props.onCustomChange(!checked)
        setChecked(!checked)
    }

    return (
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <TouchableOpacity onPress={handlePress}>
                <Text style={{
                    fontSize: 15,
                    marginLeft: 10
                }}>{props.label}</Text>
            </TouchableOpacity>
            <Switch 
                color={theme.colors.card}
                value={checked}
                onValueChange={handlePress} />
        </View>
    )
}

export default MyCheckbox;