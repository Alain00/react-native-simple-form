import React, { useState, useRef } from 'react';
import { TextInput, withTheme, Portal, Modal, Button } from 'react-native-paper';
import { View, TouchableOpacity, TextInput as RNTextInput, Slider } from 'react-native';
import { TextInputProps } from 'react-native-paper/lib/typescript/src/components/TextInput/TextInput';
import { ColorPicker, fromHsv } from 'react-native-color-picker';
import { Theme } from 'react-native-paper/lib/typescript/src/types';
import {} from '@alan/react-native-simple-form';

type Props = {
    theme: Theme,
    name?: string,
    error?: string,
    setValue?: (name: string, value: any) => void
} & TextInputProps;

const MyColorInput = React.forwardRef<any, Props>(
    ({...props}, ref) => {
        const [visible, setVisible] = useState(false);
        const [color, setColor] = useState(props.defaultValue || "#ff0000");
        const [selectedColor, setSelectedColor] = useState(props.defaultValue || "#ff0000")

        const handleClose = () => {
            setVisible(false)
        }

        const handleOpen = () => {
            setVisible(true);
        }

        const handleSelectColor = (color: string) => {
            if (!props.setValue) return;
            props.setValue(props.name, color)
            setSelectedColor(color)
            handleClose()
        }

        const handleSelectButton = () => {
            if (!props.setValue) return;
            props.setValue(props.name, color);
            setSelectedColor(color);
            handleClose();
        }


        return (
            <>
                <View style={{marginBottom: 10, position: 'relative'}}>
                    <TouchableOpacity onPress={handleOpen}>
                        <TextInput value={selectedColor} ref={ref} editable={false} {...props} />
                    </TouchableOpacity>
                    <View style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        overflow: 'hidden',
                        position: 'absolute', right: 10, top: 9, bottom: 0,
                        alignSelf: 'center',
                        alignContent: 'center',
                        backgroundColor: selectedColor
                    }}>

                    </View>
                </View>
                <Portal>
                    <Modal visible={visible} onDismiss={handleClose} contentContainerStyle={{
                        backgroundColor: 'white', 
                        flexDirection: 'column', 
                        padding: 30, margin: 20, height: '70%'}}>
                        <ColorPicker 
                            color={null}
                            defaultColor={selectedColor}
                            onColorChange={(color)=>{setColor(fromHsv(color))}}
                            sliderComponent={null} 
                            style={{flex: 1}} 
                            onColorSelected={handleSelectColor} />
                        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Button onPress={handleClose}>Cancelar</Button>
                            <Button onPress={handleSelectButton}>Seleccionar</Button>
                        </View>
                    </Modal>
                </Portal>
            </>
        )
    }
)

export default withTheme(MyColorInput);