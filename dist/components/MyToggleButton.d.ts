/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
export interface ToggleItem {
    icon?: string;
    label?: string;
    description?: string;
}
interface Props {
    name?: string;
    items: ToggleItem[];
    alignContent?: 'center' | 'flex-start' | 'flex-end';
    setValue?: (name: string, value: any) => void;
    style?: StyleProp<ViewStyle>;
    column?: boolean;
    onCustomChange?: (index: number) => void;
    value?: number;
}
declare const MyToggleButton: ({ ...props }: Props) => JSX.Element;
export default MyToggleButton;
