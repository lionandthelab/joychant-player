import React from 'react';
import { Linking, TouchableOpacity, View } from 'react-native';

import { Container, Content, Text, Card, H1, H2, H3, Body, Icon } from 'native-base';
import Spacer from './UI/Spacer';
import YoutubePlayer from 'react-native-youtube-iframe';

const About = () => (
  <Container>
    <Content padder>
      <Spacer size={10} />
      <YoutubePlayer height={200} play={true} videoId={'wOYyihefxzA'} />
      <Body style={{ padding: 10 }}>
        <Text>
          조이챈트는 하나워십무브먼트의 창작물입니다. {'\n'}
          모든 음원은 멜론, 벅스 등 각종 음원 사이트에서 만나실 수 있습니다. {'\n'}
          저작권이나 방송 등에 관한 문의가 있다면 아래 카카오톡 플러스 채널로 연락 주세요.
        </Text>
        <Spacer size={10} />
        <Text>
          조이챈트 악보를 원하시는 분들을 위해 조이챈트 블로그를 운영하고 있습니다. {'\n'}
          악보를 판매하거나 양도 등을 할 경우에 2차적저작물작성권 및 동일성유지권 등의 저작권침해가
          됩니다.
        </Text>
        <Spacer size={10} />
        <Text>
          조이챈트는 항상 최우선적으로 다음 세대 아이들에게 말씀이 심겨지도록 노력하고 있습니다.
          {'\n'}
          챈트 사역을 응원하고자 하는 분은 기도와 후원으로 함께해주시길 기다립니다.
        </Text>
        <Spacer size={10} />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity onPress={() => Linking.openURL('http://pf.kakao.com/_hywPxb')}>
            <Icon name="link-outline" />
          </TouchableOpacity>
          <Text> Kakao Channel</Text>
        </View>
        <Spacer size={10} />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            onPress={() => Linking.openURL('https://blog.naver.com/hanajoychant/222325136673')}
          >
            <Icon name="newspaper-outline" />
          </TouchableOpacity>
          <Text> Naver Blog</Text>
        </View>
        <Spacer size={10} />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://instagram.com/hana_worship_movement?igshid=17lh31jqy20uu')
            }
          >
            <Icon name="logo-instagram" />
          </TouchableOpacity>
          <Text> hana_worship_movement</Text>
        </View>
        <Spacer size={10} />
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
          <Icon name="pricetag-outline" />
          <Text> 후원| 우리은행 1002-960-603108 (최혜경)</Text>
        </View>
      </Body>
    </Content>
  </Container>
);

export default About;
