import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import {
  Button,
  Container,
  Content,
  Card,
  CardItem,
  Body,
  H3,
  Text,
  SimpleGrid,
  Box,
  Icon,
} from 'native-base';
import { Loading, Error, Spacer } from '../UI';
import { errorMessages } from '../../constants/messages';
import YoutubePlayer from 'react-native-youtube-iframe';
import { getYoutubeMeta } from 'react-native-youtube-iframe';

const ArticlesSingle = ({ error, loading, article, reFetch, id, title }) => {
  const [playList, setPlayList] = useState([]);
  const [videoTitle, setVideoTitle] = useState([]);
  const [idxToPlay, setIdxToPlay] = useState(0);
  const [playAll, setPlayAll] = useState(true);
  const playerRef = useRef();
  var vids = [];

  useEffect(() => {
    vids = id == 1 ? season1_vids : id == 2 ? season2_vids : season3_vids;
    setPlayList(vids);

    setVideoTitle([]);
    var tmp = [];
    vids.map((vid, i) => {
      getYoutubeMeta(vid).then((meta) => {
        tmp.push(meta.title);
      });
    });
    setVideoTitle(tmp);

    return () => {};
  }, [id]);

  useEffect(() => {}, [idxToPlay]);

  // if (error) {
  //   return <Error content={error} tryAgain={reFetch} />;
  // }

  // if (loading) {
  //   return <Loading content={loading} />;
  // }

  // if (Object.keys(article).length < 1) {
  //   return <Error content={errorMessages.articles404} />;
  // }
  const season1_vids = [
    'SB1QslVtedo',
    '9J4aph6dU3E',
    '7Fc9sf2YLuQ',
    'OWPQlTzZa_I',
    'aKhws0joxDA',
    'KDfVbAxvFqQ',
    'Sr8fdo6ZOiY',
    'KOTFx7-o_LA',
    'N-g9RzGcqUU',
    'aYDuaY_LnYQ',
    'FYM87iBY0m8',
    'cwh2nQGO1No',
  ];
  const season2_vids = [
    'HBKhn-lpBAI',
    'QVUr5-a73Ps',
    'qndpZP_n3Ew',
    'teFn06zlCeA',
    'Z0PrG1H-Kf0',
    's9DGEUHubVw',
    'eCcMdnq3sqQ',
    'x0n3d4Y-Q_Y',
    'G_3QavPY_Ek',
    'xvDMZXh8_yI',
    'zgIVhGIJriE',
    't8-oJ6YDEtw',
  ];
  const season3_vids = [
    'LGD_VAZraWk',
    'DOBG7X3MVi8',
    'pNLMqiWHNqk',
    'HC7VDyS4DIo',
    'fFt-3AjaNwU',
    'k23H8APVLzY',
    'dPJkyL3dDuY',
    'cVP77ALLHb8',
    'ifTULoErW5s',
  ];

  return (
    <Container>
      <Content padder>
        {/* {!!article.image && (
          <Image
            source={{ uri: article.image }}
            style={{
              height: 200,
              width: null,
              flex: 1,
              resizeMode: 'contain',
            }}
          />
        )} */}
        <Spacer size={10} />
        {playAll ? (
          <YoutubePlayer ref={playerRef} height={250} play={false} playList={playList} />
        ) : (
          <YoutubePlayer ref={playerRef} height={250} play={false} videoId={playList[idxToPlay]} />
        )}

        <Spacer size={10} />
        <Button onPress={() => setPlayAll(!playAll)}>
          {playAll ? <Icon name="stop-outline"></Icon> : <Icon name="play-outline" />}
          {playAll ? <Text> 한곡씩 듣기 </Text> : <Text> 전체 듣기 </Text>}
        </Button>

        <ScrollView horizontal={true} style={styles.thumbView}>
          {playList.map((vid, i) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setIdxToPlay(i);
                }}
              >
                <Image
                  key={i}
                  source={{ uri: `https://img.youtube.com/vi/${vid}/0.jpg` }}
                  style={{ width: 200, height: 110, margin: 1 }}
                />
                <Text style={{ width: 200 }}>{videoTitle[i]}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Spacer size={20} />
      </Content>
    </Container>
  );
};

ArticlesSingle.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  article: PropTypes.shape(),
  reFetch: PropTypes.func,
  id: PropTypes.number,
};

ArticlesSingle.defaultProps = {
  error: null,
  loading: false,
  article: {},
  reFetch: null,
  id: -1,
};

const styles = StyleSheet.create({
  thumbView: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
});

export default ArticlesSingle;
