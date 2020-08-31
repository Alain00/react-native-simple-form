import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import React, { useState } from 'react';
import { Platform, TextInput as TextInputNative, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { BorderlessButton } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import { Button, Portal, useTheme, TextInput } from 'react-native-paper';
export const MyDatePicker = React.forwardRef(({ label, mode, disabled, name, setValue, defautlValue, ...props }, ref) => {
    const [markedDate, setMarkedDate] = useState({
        [moment().format("YYYY-MM-DD")]: { selected: true }
    });
    const [selectedTime, setSelectedTime] = useState(moment().add(1, 'hour'));
    const [month, setMonth] = useState(moment().format("YYYY-MM-DD"));
    const theme = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    if (!mode)
        mode = 'date';
    if (!props.timeFormat)
        props.timeFormat = 'hh:mm a';
    if (!props.dateFormat)
        props.dateFormat = 'MM/DD/YYYY';
    if (!props.dateTimeFormat)
        props.dateTimeFormat = 'MM/DD/YYYY hh:mm a';
    if (props.visible == undefined)
        props.visible = true;
    let format = mode == 'date' ? props.dateFormat :
        mode == 'time' ? props.timeFormat :
            mode == 'datetime' ? props.dateTimeFormat : '';
    const onConfirm = (date) => {
        hideModal();
        let newValue = moment(date);
        // if (mode == 'time' && props.minuteInterval > 0){
        //     newValue = wrapTime(newValue);
        // }
        setValue(name, newValue.format(format));
        if (props.onMyChange)
            props.onMyChange(newValue.format(format));
        //field.onChange(name)(newValue.format(format));
    };
    const hideModal = () => {
        setModalVisible(false);
    };
    const openModal = () => {
        setModalVisible(true);
    };
    const handleDayPress = (e) => {
        //setDate(moment(e.dateString).toDate())
        const tempDate = {};
        const val = moment(e.dateString).format("YYYY-MM-DD");
        tempDate[val] = {
            selected: true
        };
        setMarkedDate(tempDate);
        setMonth(val);
    };
    const handleConfirmDate = () => {
        setValue(name, moment(Object.keys(markedDate)[0]).format(format));
        if (props.onMyChange)
            props.onMyChange(moment(Object.keys(markedDate)[0]).format(format));
        //helpers.setValue(moment(Object.keys(markedDate)[0]).format(format))
        hideModal();
    };
    const handleChangeTime = (e, date) => {
        let newValue = moment(date);
        // if (mode == 'time' && props.minuteInterval > 0){
        //     newValue = wrapTime(newValue);
        // }
        setSelectedTime(newValue);
    };
    const handleConfirmTime = () => {
        hideModal();
        setValue(name, selectedTime.format(format));
        if (props.onMyChange)
            props.onMyChange(selectedTime.format(format));
        //helpers.setValue(selectedTime.format(format))
    };
    const handleChangeTimeAndroid = (e, date) => {
        hideModal();
        let newValue = moment(date);
        // if (mode == 'time' && props.minuteInterval > 0){
        //     newValue = wrapTime(newValue);
        // }
        setSelectedTime(newValue);
        setValue(name, newValue.format(format));
        if (props.onMyChange)
            props.onMyChange(newValue.format(format));
        //helpers.setValue(newValue.format(format))
    };
    return (<>
            {props.visible && <View style={{ marginBottom: 10 }}>
                <TextInput {...props} 
    //@ts-ignore
    ref={ref} style={{
    // ...!props.theme.dark ? {backgroundColor: 'transparent'} : {}
    }} mode="outlined" disabled={disabled} label={label} keyboardType={null} 
    //value={field.value}
    defaultValue={defautlValue} onFocus={openModal} editable={false} onTouchEnd={openModal} render={inputProps => (<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{
        flex: 1,
        zIndex: 1000
    }} disabled={disabled} onPress={openModal}>
                                <TextInputNative {...inputProps}></TextInputNative>
                            </TouchableOpacity>
                            <BorderlessButton style={{ alignSelf: 'center', marginTop: 0, marginRight: 10 }} onPress={disabled ? null : openModal} borderless>
                                <Icon name={mode == 'date' ? 'calendar' :
        mode == 'time' ? 'clock-outline' : ''} size={28} color={disabled ? theme.colors.disabled : theme.colors.placeholder}/>
                            </BorderlessButton>
                        </View>)}/>
                
                
                
                <Portal>
                {mode == 'date' &&
        <Modal isVisible={modalVisible} onBackdropPress={hideModal} style={{
            margin: 20,
            justifyContent: 'center'
        }}>
                        <View style={{
            padding: 10,
            backgroundColor: theme.colors.surface,
            borderRadius: 20
        }}>
                                <>
                                    <Calendar current={month} 
        // current={moment(field.value).format("DD/MM/YYYY")}
        markedDates={markedDate} minDate={props.minDate} maxDate={props.maxDate} onDayPress={handleDayPress} theme={{
            backgroundColor: theme.colors.surface,
            calendarBackground: theme.colors.surface
        }}/>   
                                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginTop: 10 }}>
                                        <Button mode="text" onPress={hideModal} contentStyle={{ padding: 5, borderRadius: 10 }}>Cancel</Button>
                                        <Button mode="text" onPress={handleConfirmDate} contentStyle={{ padding: 5, borderRadius: 10 }}>Confirm</Button>
                                    </View> 
                                </>
                        </View>

                    </Modal>}
                    {mode == 'time' && modalVisible && Platform.OS == 'android' &&
        <>
                            <RNDateTimePicker mode='time' minuteInterval={30} onChange={handleChangeTimeAndroid} value={selectedTime.toDate()}/>
                        </>}

                    {mode == 'time' && modalVisible && Platform.OS == 'ios' &&
        <Modal isVisible={modalVisible} onBackdropPress={hideModal} style={{
            margin: 0,
            justifyContent: 'flex-end'
        }}>
                            <View style={{
            padding: 10,
            backgroundColor: theme.colors.surface,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
        }}>
                                    <>
                                        <RNDateTimePicker mode='time' minuteInterval={30} onChange={handleChangeTime} value={selectedTime.toDate()}/>
                                        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginTop: 10 }}>
                                            <Button mode="text" onPress={hideModal} contentStyle={{ padding: 5, borderRadius: 10 }}>Cancel</Button>
                                            <Button mode="text" onPress={handleConfirmTime} contentStyle={{ padding: 5, borderRadius: 10 }}>Confirm</Button>
                                        </View> 
                                    </>
                            </View>
                        </Modal>}
                </Portal>
            </View>}
        </>);
});
export default MyDatePicker;
