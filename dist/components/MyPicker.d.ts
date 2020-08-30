import React from 'react';
import { FieldError } from 'react-hook-form';
declare type Props = {
    label?: string;
    name?: string;
    error?: FieldError | undefined;
    setValue?: (name: string, value: any) => void;
    items: {
        label: string;
        value: any;
    }[];
    triggerValidation?: (name: string | string[]) => Promise<boolean>;
    onCustomChange?: (value: any) => void;
};
declare const MyPicker: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default MyPicker;
