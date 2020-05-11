import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'
import api from '../../services/api'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import Styles from './styles';

import more from '../../assets/more.png'
import like from '../../assets/like.png'
import comment from '../../assets/comment.png'
import send from '../../assets/send.png'

export default Feed = () => {

  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadFeeds() {
    if (loading) return;
    setLoading(true)

    const response = await api.get('posts')
    setFeeds([ ...feeds, ...response.data ])
  } 

  useEffect(() => {
    loadFeeds();
  }, []);

  return (
    <View style={Styles.container}>
      <FlatList
        data={feeds}
        keyExtractor={feed => String(feed._id)}
        renderItem={({ item: feed }) => (
          <View style={Styles.feedItem}>
            <View style={Styles.feedItemHeader}>
              <View style={Styles.userInfo}>
                <Text style={Styles.name}>{feed.author}</Text>
                <Text style={Styles.place}>{feed.place}</Text>
              </View>

              <Image source={more} />
            </View>

            <Image style={Styles.feedImage} source={{ uri: `http://10.0.2.2:3333/files/${feed.image}` }} />

            <View style={Styles.feedItemFooter}>
              <View style={Styles.actions}>
                <TouchableOpacity
                  style={Styles.action}
                  onPress={() => {}}
                >
                  <Image source={like} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.action}
                  onPress={() => {}}
                >
                  <Image source={comment} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.action}
                  onPress={() => {}}
                >
                  <Image source={send} />
                </TouchableOpacity>
              </View>

              <Text style={Styles.likes}>{feed.likes} curtidas</Text>
              <Text style={Styles.description}>{feed.description}</Text>
              <Text style={Styles.hashtags}>{feed.hashtags}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}