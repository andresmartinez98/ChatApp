import { useEffect, useState } from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { FlatList } from 'react-native';
import { ChatDetail } from '../../interfaces';
import Input from '../../components/Input';
import Text from '../../components/Text';
//@ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../theme';

const chats: ChatDetail[] = require('../../../assets/mocks/chats-details.json');

const ChatScreen = ({ navigation, route }: any) => {
  const contact = route.params?.contact;
  const [message, setMessage] = useState('');
  const [chatMsg, setChatMsg] = useState(
    chats.find(chat => chat.contact === contact)?.messages ?? [],
  );

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: contact,
    });
  }, []);

  const renderMessage = (
    data: { sender: string; content: string; time: string },
    index: number,
  ) => {
    let msgStyle: StyleProp<ViewStyle> = styles.contactMessage;
    let backgroundColor = colors.white;

    const isUser = data.sender === 'You';

    if (isUser) {
      msgStyle = styles.userMessage;
      backgroundColor = colors.lightGreen;
    }

    return (
      <View style={[{ backgroundColor }, styles.messageContainer, msgStyle]}>
        <Text style={{ fontSize: 16, color: colors.black }}>
          {data.content}
        </Text>
        <Text style={{ color: colors.lightGrey, alignSelf: 'flex-end' }}>
          {data.time}
        </Text>
      </View>
    );
  };

  const handleSubmit = () => {
    if (message && message !== '') {
      const date = new Date();

      let hours = date.getHours();
      let minutes = date.getMinutes();
      let period = 'AM';

      if (hours > 12) period = 'PM';

      minutes.toString().padStart(2, '0');

      const time = `${hours}:${minutes} ${period}`;
      setChatMsg([...chatMsg, { content: message, sender: 'You', time }]);

      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chatMsg}
        renderItem={({ item, index }) => {
          return renderMessage(item, index);
        }}
      />
      <View style={styles.messageInput}>
        <Input
          value={message}
          placeholder="Send message"
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: colors.white,
            borderRadius: 100,
            marginRight: 8,
          }}
          inputStyle={{ borderBottomWidth: 0, paddingHorizontal: 15 }}
          onChangeText={setMessage}
        />
        <Icon
          name="send-circle"
          size={50}
          color="white"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  messageContainer: {
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  messageInput: {
    flexDirection: 'row',
    borderColor: 'white',
  },
  userMessage: {
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
    marginLeft: 30,
  },
  contactMessage: {
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
    marginRight: 30,
  },
});

export default ChatScreen;
