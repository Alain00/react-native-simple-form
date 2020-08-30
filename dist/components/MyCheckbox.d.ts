/// <reference types="react" />
interface Props {
    name?: string;
    setValue?: (name: string, value: any) => void;
    label?: string;
    onCustomChange?: (value: boolean) => void;
}
declare const MyCheckbox: ({ ...props }: Props) => JSX.Element;
export default MyCheckbox;
