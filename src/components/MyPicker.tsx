import React, { useState } from 'react';
import { TextInput, withTheme, Colors } from 'react-native-paper';
import Picker from 'react-native-picker-select';
import { View, Text } from 'react-native';
// import { TextInputProps } from 'react-native-paper/lib/typescript/src/components/TextInput/TextInput';
import { FieldError } from 'react-hook-form';

type Props = {
    label?: string,
    name?: string,
    error?: FieldError | undefined,
    setValue?: (name: string, value: any) => void,
    items: {
        label: string,
        value: any
    }[],
    triggerValidation?: (name: string | string[]) => Promise<boolean>
    onCustomChange?: (value: any) => void
};

// const ErrorMap = {
//     {
//         type: "required", message: "Este campo es requerido"
//     }
// }

export const MyPicker = React.forwardRef<any, Props>(
    ({...props}, ref) : React.ReactElement => {
        const [value, setValue] = useState<string>()
        const handleValueChange = (value: any, index: number) => {
            if (props.setValue)
                props.setValue(props.name, value);
            if (props.triggerValidation)
                props.triggerValidation(props.name)
            if (props.onCustomChange)
                props.onCustomChange(value);
            setValue(props.items[index-1]?.label || "")
        }

        return (
            <View style={{marginBottom: 10}}>
                <View style={{
                    borderRadius: 10, overflow: 'hidden'
                }}>
                    <TextInput value={value} {...props} theme={{
                        roundness: 10,
                        colors: {
                            surface: Colors.white,
                            backdrop: Colors.white,
                            background: Colors.white,
                            disabled: Colors.white,
                            primary: Colors.white
                        }
                    }} error={props.error != undefined} style={{

                    }} mode="flat" label={props.label} render={(inputProps)=>(
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Picker style={{
                                inputAndroid: {
                                    color: Colors.black,
                                    marginLeft: 3,
                                    marginTop: 6
                                },
                                placeholder: {
                                    color: 'transparent',
                                }
                            }} 
                            onValueChange={handleValueChange} 
                            // placeholder={{
                            //     label: "Select an item...",
                            //     value: null,
                            //     displayValue: false
                            // }} 
                            
                            items={props.items} 
                            {...props} />
                        </View>
                    )} />
                </View>
                {props.error &&
                    <>
                        <Text style={{
                            margin: 10,
                            color: Colors.red900
                        }}>{
                            props.error.type == "required" ? "Este campo es requerido" :
                            props.error.type == "validate" ? `Es posible que este ${props.label} ya este en uso` :
                            ""
                        }</Text>
                        <Text style={{
                            margin: 10,
                            color: Colors.red900
                        }}>{
                            JSON.stringify(props.error)
                        }</Text>
                    </>
                }
            </View>
        )
    }
)

export default MyPicker;