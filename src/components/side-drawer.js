import React from 'react';
import { StyleSheet, Image, Linking, Alert } from 'react-native';
import { Container, View } from 'native-base';
import { Title, Caption, Paragraph } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { Icon } from "native-base";
import { deleteUser } from '../redux/actions/login';
import { resetTaskList } from '../redux/actions/task';

export default (props) => {

  const { userDetails } = useSelector(state => state.loginDetails);
  const dispatch = useDispatch();

  return (
    <Container style={styles.container} >
      <View style={styles.userInfoSection} >
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15 }} onPress={() => props.navigation.navigate('ProfileStack', { screen: 'Profile' })}>
          <Image source={{ uri: userDetails.profilePic }} style={{ width: 70, height: 70, borderRadius: 50 }} />
          <View style={{ marginLeft: 15, flexDirection: 'column' }}>
            <Title style={styles.title}>{userDetails.name ? userDetails.name : null}</Title>
            <Caption style={styles.caption}>{userDetails.email ? userDetails.email : null}</Caption>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" icon={() => <Icon name='ios-log-out' size={30} color="black" />} onPress={() => Alert.alert(
          "Logout",
          "Do you want to logout ?",
          [
            { text: 'Yes', onPress: () => { dispatch(deleteUser()); dispatch(resetTaskList()) } },
            { text: 'Cancel', style: 'cancel', },
          ]
        )} />
        <DrawerItem label="Privacy Policy" onPress={() => Linking.openURL('https://gyrix.co')} />
      </DrawerContentScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 35 },
  options: { marginTop: 10 },
  userInfoSection: { paddingLeft: 20 },
  title: { fontSize: 16, marginTop: 3, fontWeight: 'bold' },
  caption: { fontSize: 14, lineHeight: 14 },
  row: { marginTop: 20, flexDirection: 'row', alignItems: 'center' },
  section: { flexDirection: 'row', alignItems: 'center', marginRight: 15 },
  paragraph: { fontWeight: 'bold', marginRight: 3 },
  last: { height: 60, backgroundColor: 'white', marginBottom: 10 }
});