import { Image } from 'react-native';
import PhotoUpload from 'react-native-photo-upload';

export default class Upload extends React.Component{
    render() {
        return(
            <View>
                <PhotoUpload
                onPhotoSelect={avatar => {
                    if (avatar) {
                    console.log('Image base64 string: ', avatar)
                    }
                }}
                >
                <Image
                    style={{
                    paddingVertical: 30,
                    width: 150,
                    height: 150,
                    borderRadius: 75
                    }}
                    resizeMode='cover'
                    source={{
                    uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                    }}
                />
                </PhotoUpload>
            </View>
        )
    }
}