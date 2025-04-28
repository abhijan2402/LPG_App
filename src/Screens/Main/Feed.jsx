import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/FeedHeader';
import {COLOR} from '../../Constants/Colors';
import {windowHeight, windowWidth} from '../../Constants/Dimensions';
import UserPost from '../../Components/UserPost';
import {fakePosts} from '../../Constants/Data';

const Feed = ({navigation}) => {
  const toggleFavorite = id => {
    const updatedPosts = posts.map(post =>
      post.id === id ? {...post, favourite: !post.favourite} : post,
    );
    setPosts(updatedPosts);
  };

  return (
    <View style={styles.MainView}>
      <Header title={'Daily Feeds'} />
      <FlatList
        data={fakePosts}
        keyExtractor={item => item.id}
        renderItem={item => {
          return <UserPost item={item} />;
        }}
        contentContainerStyle={{paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddFeed');
        }}
        style={styles.AddFeedBtn}>
        <Image
          style={{width: 60, height: 60}}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/18758/18758102.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: COLOR.white,
    height: windowHeight,
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: '#555',
  },
  postImage: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 15,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    paddingTop: 10,
    borderTopColor: COLOR.grey,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    fontSize: 13,
    marginLeft: 4,
    color: '#555',
  },
  postImage: {
    width: 150,
    height: 100,
    margin: 2,
  },
  AddFeedBtn: {
    position: 'absolute',
    bottom: 85,
    right: 40,
    backgroundColor: COLOR.white,
    borderRadius: 50,
    elevation: 10,
    shadowColor: COLOR.black,
  },
});
