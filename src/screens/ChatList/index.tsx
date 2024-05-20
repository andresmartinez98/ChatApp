import { View, FlatList, StyleSheet } from 'react-native';
// @ts-ignore
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Pressable from '../../components/Pressable';
import Text from '../../components/Text';
import { Chat } from '../../interfaces';
import { colors } from '../../theme';

const chatMocks: Chat[] = require('../../../assets/mocks/chats.json');

const ChatListScreen = ({ navigation }: any) => {
  const renderItem = (data: {
    id: number;
    name: string;
    lastMessage: string;
    time: string;
  }) => {
    return (
      <Pressable
        onPress={() => navigation.navigate('Chat', { contact: data.name })}>
        <View style={[styles.itemContainer]} nativeID={data.id.toString()}>
          <FontAwesomeIcon name="user-circle" size={45} color={colors.lightGrey}/>
          <View style={{ marginHorizontal: 14, flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: 600 }}>{data?.name}</Text>
            <Text
              numberOfLines={1}
              lineBreakMode="clip"
              style={{ opacity: 0.6, fontSize: 15 }}>
              {data?.lastMessage}
            </Text>
          </View>
          <Text style={{ color: 'white' }}>{data?.time}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={chatMocks}
      renderItem={({ item }) => {
        return renderItem({
          id: item.id,
          name: item.contact,
          lastMessage: item.lastMessage,
          time: item.lastMessageTime,
        });
      }}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    margin: 5,
    padding: 18,
    borderColor: 'white',
    alignItems: 'center',
  },
});

export default ChatListScreen;
