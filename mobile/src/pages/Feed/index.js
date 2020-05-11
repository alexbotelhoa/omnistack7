import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { View, Text, FlatList } from 'react-native';

import Styles from './styles';

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
    <View>
      <FlatList
        data={feeds}
        keyExtractor={feed => String(feed._id)}
        renderItem={({ item: feed }) => (
          <Text>{feed.author}</Text>
        )}
      />
    </View>
  )
}