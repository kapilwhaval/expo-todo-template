import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SwipeListView } from 'react-native-swipe-list-view';
import Tooltip from 'react-native-walkthrough-tooltip';
import { Container } from '../../components';
import { toggleTaskToolTip } from '../../redux/actions/toolTip';
import { CheckBox, ListItem, Body, Text, Icon, Fab } from 'native-base';

import { StyleSheet, View } from 'react-native';
import { markAsComplete, deleteTask } from '../../redux/actions/task';

export default ({ navigation }) => {

    const { showTaskToolTip } = useSelector(state => state.taskToolTip);
    const { todoList } = useSelector(state => state.taskList);
    const dispatch = useDispatch();

    return (
        <Container>
            <Tooltip
                isVisible={showTaskToolTip}
                content={<Text>Swipe left and tap on bin icon to delete task</Text>}
                placement="top"
                onClose={() => dispatch(toggleTaskToolTip())}
            >
                <View />
            </Tooltip>
            <SwipeListView
                leftOpenValue={0}
                rightOpenValue={-75}
                data={todoList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(data) => (
                    <View style={styles.listContainer}>
                        <ListItem>
                            <CheckBox onPress={() => dispatch(markAsComplete(data.index))} checked={data.item.isCompleted} />
                            <Body><Text>{data.item.name}</Text></Body>
                        </ListItem>
                    </View>)}
                renderHiddenItem={(data, rowMap) => (
                    <View style={styles.rightRow}>
                        <Icon style={styles.icon} onPress={() => { rowMap[data.index].closeRow(); dispatch(deleteTask(data.index)) }} name="ios-trash" />
                    </View>
                )}
            />
            <Fab
                style={{ backgroundColor: '#4c7dbb' }}
                position="bottomRight"
                onPress={() => navigation.navigate('AddTask')}>
                <Icon name="ios-add" />
            </Fab>
        </Container>
    )
}

const styles = StyleSheet.create({
    listContainer: { backgroundColor: '#ffffff', width: '100%' },
    rightRow: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
        paddingRight: 30,
        backgroundColor: '#4c7dbb'
    },
    icon: { color: '#ffffff' }
})