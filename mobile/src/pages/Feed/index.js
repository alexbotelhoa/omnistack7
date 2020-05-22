import React, { Component } from 'react';
import io from 'socket.io-client'
import api from '../../services/api'
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';

import Styles from './styles';

import more from '../../assets/more.png'
import like from '../../assets/like.png'
import comment from '../../assets/comment.png'
import send from '../../assets/send.png'

export default class Feed extends Component {
  state = {
      feed: []
  }

  async componentDidMount() {
      this.registerToSocket()
      const response = await api.get('posts')
      this.setState({ feed: response.data })
  }

  registerToSocket = () => {
    //   const socket = io('http://10.0.2.2:3333')
      const socket = io('http://192.168.1.101:3333')

      socket.on('post', newPost => {
          this.setState({ feed: [newPost, ...this.state.feed] })
      })

      socket.on('like', likedPost => {
          this.setState({
              feed: this.state.feed.map(post => (
                  post._id === likedPost._id ? likedPost : post
              ))
          })
      })
  }

  handleLike = (id) => {
    api.post(`posts/${id}/like`)
  }
  

  render() {
      return (
          <View style={Styles.container}>
              <FlatList data={this.state.feed}
                  keyExtractor={post => post._id}
                  renderItem={({ item }) => (
                      <View style={Styles.feedItem}>
                          <View style={Styles.feedItemHeader}>
                              <View style={Styles.userInfo}>
                                  <Text style={Styles.name}>{item.author}</Text>
                                  <Text style={Styles.place}>{item.place}</Text>
                              </View>
                              <Image source={more} />
                          </View>
                          {/* <Image style={Styles.feedImage} source={{ uri: `http://10.0.2.2:3333/files/${item.image}` }} /> */}
                          <Image style={Styles.feedImage} source={{ uri: `http://192.168.1.101:3333/files/${item.image}` }} />

                          <View style={Styles.feedItemFooter}>
                              <View style={Styles.actions}>
                                  <TouchableOpacity style={Styles.action} onPress={() => this.handleLike(item._id)}>
                                      <Image source={like} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={Styles.action} onPress={() => this.handleLike(item._id)}>
                                      <Image source={comment} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={Styles.action} onPress={() => this.handleLike(item._id)}>
                                      <Image source={send} />
                                  </TouchableOpacity>
                              </View>
                              <Text style={Styles.likes}>{item.likes} curtidas</Text>
                              <Text style={Styles.description}>{item.description}</Text>
                              <Text style={Styles.hashtags}>{item.hashtags}</Text>
                          </View>
                      </View>
                  )}
              />
          </View>
      )
  }
}