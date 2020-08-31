import React from 'react';
import { StyleProp, TextStyle, TextInputProps, TextInput } from 'react-native';
import { FieldError } from 'react-hook-form';
import { Theme } from 'react-native-paper/lib/typescript/src/types';
export declare const MyInput: React.ForwardRefExoticComponent<{
    name?: string;
    error?: FieldError | undefined;
    style?: StyleProp<TextStyle>;
    theme: Theme;
    label?: string;
} & TextInputProps & React.RefAttributes<TextInput>>;
declare const _default: (React.ComponentClass<Pick<{
    name?: string;
    error?: FieldError;
    style?: StyleProp<TextStyle>;
    theme: Theme;
    label?: string;
} & TextInputProps & React.RefAttributes<TextInput>, "name" | "label" | "ref" | "style" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onBlur" | "onFocus" | "value" | "key" | "allowFontScaling" | "numberOfLines" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "error" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "multiline" | "onChange" | "onChangeText" | "onContentSizeChange" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onScroll" | "onKeyPress" | "placeholder" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "scrollEnabled" | "autoCompleteType" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "showSoftInputOnFocus"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme>;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
    name?: string;
    error?: FieldError;
    style?: StyleProp<TextStyle>;
    theme: Theme;
    label?: string;
} & TextInputProps & React.RefAttributes<TextInput>, any> & React.ForwardRefExoticComponent<{
    name?: string;
    error?: FieldError;
    style?: StyleProp<TextStyle>;
    theme: Theme;
    label?: string;
} & TextInputProps & React.RefAttributes<TextInput>>) | (React.FunctionComponent<{
    name?: string;
    error?: FieldError;
    style?: StyleProp<TextStyle>;
    theme: Theme;
    label?: string;
} & TextInputProps & React.RefAttributes<TextInput>> & React.ForwardRefExoticComponent<{
    name?: string;
    error?: FieldError;
    style?: StyleProp<TextStyle>;
    theme: Theme;
    label?: string;
} & TextInputProps & React.RefAttributes<TextInput>>), {}>) | (React.FunctionComponent<Pick<{
    name?: string;
    error?: FieldError;
    style?: StyleProp<TextStyle>;
    theme: Theme;
    label?: string;
} & TextInputProps & React.RefAttributes<TextInput>, "name" | "label" | "ref" | "style" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onBlur" | "onFocus" | "value" | "key" | "allowFontScaling" | "numberOfLines" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "error" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "multiline" | "onChange" | "onChangeText" | "onContentSizeChange" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onScroll" | "onKeyPress" | "placeholder" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "scrollEnabled" | "autoCompleteType" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "showSoftInputOnFocus"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme>;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
    name?: string;
    error?: FieldError;
    style?: StyleProp<TextStyle>;
    theme: Theme;
    label?: string;
} & TextInputProps & React.RefAttributes<TextInput>, any> & React.ForwardRefExoticComponent<{
    name?: string;
    error?: FieldError;
    style?: StyleProp<TextStyle>;
    theme: Theme;
    label?: string;
} & TextInputProps & React.RefAttributes<TextInput>>) | (React.FunctionComponent<{
    name?: string;
    error?: FieldError;
    style?: StyleProp<TextStyle>;
    theme: Theme;
    label?: string;
} & TextInputProps & React.RefAttributes<TextInput>> & React.ForwardRefExoticComponent<{
    name?: string;
    error?: FieldError;
    style?: StyleProp<TextStyle>;
    theme: Theme;
    label?: string;
} & TextInputProps & React.RefAttributes<TextInput>>), {}>);
export default _default;
