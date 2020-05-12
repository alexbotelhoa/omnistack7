import React, { Component } from 'react';
import api from '../../services/api'
import ImagePicker from 'react-native-image-picker';
import { View, TouchableOpacity, Text, TextInput, Image } from 'react-native';

import Styles from './styles';

export default class New extends Component {
    state = {
        preview: null,
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: ''
    }

    handleSelectImage = () => {
        ImagePicker.showImagePicker({
            title: 'Selecionar imagem'
        }, upload => {
            if (upload.error) {
                console.log(error)
            } else if (upload.didCancel) {
                console.log('User canceled')
            } else {
                const preview = {
                    uri: `data:image/jpeg;base64,${upload.data}`,
                }

                let prefix;
                let ext;

                if (upload.fileName) {
                    [prefix, ext] = upload.fileName.split('.')
                    ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
                } else {
                    prefix = new Date().getTime();
                    ext = 'jpg'
                }

                const image = {
                    uri: upload.uri,
                    type: upload.type,
                    name: `${prefix}.${ext}`
                }

                this.setState({ preview, image })
            }
        })
    }

    handleSubmit = async () => {
        const data = new FormData();
        data.append('image', this.state.image)
        data.append('author', this.state.author)
        data.append('place', this.state.place)
        data.append('description', this.state.description)
        data.append('hashtags', this.state.hashtags)

        await api.post('posts', data)

        this.props.navigation.navigate('Feed')
    }

    render() {
        return (
            <View style={Styles.container}>
                <TouchableOpacity style={Styles.selectButton} onPress={this.handleSelectImage} >
                    <Text style={Styles.selectButtonText}>Selecionar imagem</Text>
                </TouchableOpacity>

                {this.state.preview && <Image style={Styles.preview} source={this.state.preview} />}

                <TextInput
                    style={Styles.input}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Nome do autor"
                    placeholderTextColor="#999"
                    value={this.state.author}
                    onChangeText={author => this.setState({ author })}
                />
                <TextInput
                    style={Styles.input}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Local da foto"
                    placeholderTextColor="#999"
                    value={this.state.place}
                    onChangeText={place => this.setState({ place })}
                />
                <TextInput
                    style={Styles.input}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Descrição"
                    placeholderTextColor="#999"
                    value={this.state.description}
                    onChangeText={description => this.setState({ description })}
                />
                <TextInput
                    style={Styles.input}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Hashtags"
                    placeholderTextColor="#999"
                    value={this.state.hashtags}
                    onChangeText={hashtags => this.setState({ hashtags })}
                />

                <TouchableOpacity style={Styles.shareButton} onPress={this.handleSubmit} >
                    <Text style={Styles.shareButtonText}>Compartilhar imagem</Text>
                </TouchableOpacity>
            </View>
        );
    }
}