import {useState} from "react";
import {StyleSheet, Button, SafeAreaView, View, Text} from "react-native";

function Chat (props) {

    const chatStyle = props.user ? styles.userChat : styles.gptChat;
    return (
        <View>

            <Text style={chatStyle}>{props.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  userChat: {
    flex: 1,
    padding: 24,
    backgroundColor: '#1d3248',
    color: '#ffffff',
    fontSize: 20,
  },
  gptChat: {
    flex: 1,
    padding: 24,
    backgroundColor: '#305e69',
    color: '#ffffff',
    fontSize: 20,
  },
});

export default Chat;