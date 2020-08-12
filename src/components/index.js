import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export const FlexContainerCenter = ({ children, style }) => <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" }, style]}>{children}</View>

export const Container = ({ children }) => <View style={{ flex: 1 }}>{children}</View>

export const Input = ({ label, value, onChange, errorText, isSecured }) => [
    <TextInput key={0}
        style={{ height: 50, fontSize: 16 }}
        label={label}
        mode="outlined"
        error={errorText}
        secureTextEntry={isSecured}
        value={value}
        onChangeText={(text) => onChange(text)}
    />,
    <Text key={1} style={{ color: 'red', fontSize: 14, marginTop: 5, marginBottom: 5 }}>{errorText}</Text>
]

export const CustomButton = ({ icon, mode, onPress, children }) => (
    <Button style={{ height: 50, marginBottom: 20 }} labelStyle={{ fontSize: 20 }} icon={icon} mode={mode} onPress={() => onPress()}>
        {children}
    </Button>
)

export const Heading = ({ children }) => <Text style={{ fontSize: 25, marginBottom: 10 }}>{children}</Text>

export const CenterHeading = ({ children }) => <Text style={{ alignSelf: "center", fontSize: 25, marginBottom: 10 }}>{children}</Text>

export const Error = ({ children }) => <Text style={{ alignSelf: "center", fontSize: 16, color: 'red', marginBottom: 10 }}>{children}</Text>

export const Link = ({ children, onPress, right }) => <TouchableOpacity onPress={onPress}><Text style={{ alignSelf: right ? "flex-end" : "center", marginBottom: 20, fontSize: 14, color: '#4c7dbb' }}>{children}</Text></TouchableOpacity>

export const Spinner = () => <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 20, marginBottom: 20 }}><ActivityIndicator size="large" /></View>