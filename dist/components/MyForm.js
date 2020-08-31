import React, { useMemo, useCallback } from 'react';
import { View, Text } from 'react-native';
import { Controller } from "react-hook-form";
import { Colors } from 'react-native-paper';
export const MyForm = ({ children, validation, ...props }) => {
    const { register, setValue, control, errors, getValues, trigger } = props.formOptions;
    const modChild = useCallback((child) => {
        if (child?.props?.name) {
            return (<View key={child.props.name}>
                    <Controller as={child} control={control} name={child.props.name} onChange={args => args[0].nativeEvent.text} rules={validation && validation[child.props.name] ? validation[child.props.name] : undefined} setValue={setValue} 
            // defaultValue={getValues()[child.props.name]}
            triggerValidation={trigger} {...((props.defaultValues && props.defaultValues[child.props.name]) ? { defaultValue: props.defaultValues[child.props.name] } : {})}/>
                    {errors[child.props.name] &&
                <Text style={{
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 10,
                    color: Colors.red200
                }}>{errors[child.props.name].type == "required" ? "Este campo es requerido" :
                    errors[child.props.name].type == "validate" ? `Es posible que este ${child.props.label} ya este en uso` :
                        ""}</Text>}
                </View>);
        }
        else if (child?.props?.children) {
            let newChildren = [];
            if (Array.isArray(child.props.children)) {
                for (const index in child.props.children) {
                    newChildren.push(modChild(child.props.children[index]));
                }
            }
            else {
                newChildren = modChild(child.props.children);
            }
            return React.createElement(child.type, {
                ...child.props,
                children: newChildren,
            });
        }
        else if (child?.props?.child) {
            const newChild = modChild(child.props.child);
            return React.createElement(child.type, {
                ...child.props,
                child: newChild,
            });
        }
        return child;
    }, [errors, children, validation]);
    const modChildren = useMemo(() => {
        return (Array.isArray(children) ? [...children] : [children]).map(child => {
            return modChild(child);
        });
    }, [children, errors]);
    return (<>
            <View style={props.style}>
                {modChildren}
            </View>
        </>);
};
export default MyForm;
