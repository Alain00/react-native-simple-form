import React from 'react';
import ReactNative from 'react-native';
import {MyForm} from '../dist'
import { useForm } from 'react-hook-form';


export default () => {
    const formOptions = useForm()

    return (
        <MyForm formOptions={formOptions}>
            
        </MyForm>
    )
}