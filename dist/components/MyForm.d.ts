/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
import { FieldError, ValidationRules, UseFormMethods } from "react-hook-form";
interface Props {
    onSubmit?: () => void;
    validation?: {
        [index: string]: ValidationRules;
    };
    formOptions: UseFormMethods<any>;
    defaultValues?: DefaultValuesMap | any;
    style?: StyleProp<ViewStyle>;
    children: any;
}
export interface ValidationMap {
    [index: string]: ValidationRules;
}
export interface ErrorsMap {
    [index: string]: FieldError | undefined;
}
export interface DefaultValuesMap {
    [index: string]: string;
}
export declare const MyForm: ({ children, validation, ...props }: Props) => JSX.Element;
export default MyForm;
