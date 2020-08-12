import React from 'react';
import { useSelector } from 'react-redux';
import { Image, StyleSheet, View, Text } from 'react-native';

export default () => {

  const { userDetails } = useSelector(state => state.loginDetails);

  return [
    <View key={0} style={styles.header}></View>,
    <Image key={1} style={styles.avatar} source={{ uri: userDetails.profilePic }} />,
    <View key={2} style={styles.bodyContent}>
      <Text style={styles.name}>{userDetails.name}</Text>
      <Text style={styles.info}>{userDetails.email}</Text>
    </View>
  ];
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4c7dbb",
    height: 100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginTop: -70,
    alignSelf: 'center'
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#4c7dbb",
    marginTop: 5
  },
});