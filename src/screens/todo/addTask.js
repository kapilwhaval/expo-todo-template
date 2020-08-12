import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { addTask } from '../../redux/actions/task';
import { useDispatch } from 'react-redux';

export default ({ navigation }) => {

    const [taskName, setTaskName] = useState('');
    const dispatch = useDispatch();

    const submitTask = () => {
        dispatch(addTask({ name: taskName.trim(), isCompleted: false }))
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={{ backgroundColor: 'white' }}
                label="Task Name"
                name="taskName"
                onChangeText={(value) => setTaskName(value)}
                value={taskName}
                mode="flat"
                type="flat"
                underlineColor="grey"
            />
            <Button disabled={!taskName.trim()} mode="contained" icon="arrow-collapse-down" style={{ marginTop: 10 }} onPress={() => submitTask()}>Save</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 5
    }
})