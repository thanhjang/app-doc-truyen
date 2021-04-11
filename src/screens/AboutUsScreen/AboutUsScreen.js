import React from 'react';
import PureComponent from 'pure-component';
import { connect } from 'react-redux';
import { View, Text, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { setLocale } from 'react-native-redux-i18n';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import GlobalContainer from 'components/GlobalContainer';
import GlobalLoc from 'components/GlobalLoc';
import GlobalOption from 'components/GlobalOption';
import GlobalHeader from 'components/GlobalHeader';
import GlobalButton from 'components/GlobalButton';
import I18n from 'i18n';


import styles from 'styles/screens/AboutUsScreen/AboutUsScreen';


export class AboutUsScreen extends PureComponent {
    render() {
        return (
            <SafeAreaView style={{backgroundColor: '#fff'}}>
                <GlobalHeader showLeftButton={ true } locKey="AboutUsScreen.title" />
                <ScrollView style={{marginHorizontal: 21}}>
                    <View style={{marginVertical: 16, flex: 1,}}>
                        <Text style={{fontSize: 12,}}>Tác Giả</Text>
                        <Text style={{ 
                            fontSize: 16, 
                            fontWeight: 'bold', 
                            marginVertical: 15,
                            textAlign: 'center'
                        }}>Thành Jang</Text>
                        <Text style={{ textAlign: 'center'}}>@thanhjang</Text>
                    </View>
                    <View style={{marginVertical: 15, flex: 1}}>
                        <Text style={{fontSize: 15, marginHorizontal: 14}}>
                            Ứng dụng này là sản phẩm nhỏ của mình muốn hướng tới mục đích cộng đồng
                            . Tuy nhiên, trong quá trình phát triển do thiếu hụt về kinh phí, ứng dụng
                            có thể còn nhiều thiếu sót vài tính năng. Đương nhiên mình cũng đang cố khắc phục
                            để mang lại 1 trải nghiệm người dùng tốt nhất cho mọi người.
                            Cảm ơn bạn đã sử dụng ứng dụng này !
                        </Text>
                    </View>
                    <View style={{marginVertical: 16, flex: 1,}}>
                        <Text>VERSION: 0.0.1</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}


export default AboutUsScreen;