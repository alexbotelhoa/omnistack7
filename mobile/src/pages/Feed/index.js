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

  async function loadFeeds() {
    const res = await api.get('posts')
    setFeeds(res.data)
  } 

  function registerToSocket () {
    const socket = io('http://10.0.2.2:3333/')

    socket.on('post', newPost => {
       setFeeds([newPost, ...feeds])
    })

    socket.on('like', likePost => { 
      // if (feeds.length > 0) {
        setFeeds(feeds.map(
          post => post._id == likePost._id ? likePost : post            
        ))
      // }
    })
  }
  registerToSocket()

  useEffect(() => {
    loadFeeds()
  }, []);

  function handleLike (id) {
    api.post(`posts/${id}/like`)
  }

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
                  onPress={() => handleLike(feed._id)}
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