import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Container, Card, CardItem, Body, Text, Button } from 'native-base';
import { Error, Spacer } from '../UI';
import { errorMessages } from '../../constants/messages';

const ArticlesList = ({ error, loading, listFlat, reFetch, meta }) => {
  const placeholder = false;
  const id = 1;
  const name = 'name';

  // if (error) {
  //   return <Error content={error} tryAgain={reFetch} />;
  // }

  // if (listFlat.length < 1) {
  //   return <Error content={errorMessages.articlesEmpty} />;
  // }

  return (
    <ScrollView>
      <Container style={{ padding: 10 }}>
        <Card style={{ opacity: placeholder ? 0.3 : 1, height: 240 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => Actions.articlesSingle({ id: 1, title: '조이챈트 Season1' })}
            style={{ flex: 1 }}
          >
            <CardItem cardBody>
              <Image
                source={{ uri: 'season1' }}
                style={{
                  height: 200,
                  width: null,
                  flex: 1,
                  overflow: 'hidden',
                  borderRadius: 5,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
            </CardItem>
            <CardItem cardBody>
              <Body style={{ paddingHorizontal: 15 }}>
                <Spacer size={10} />
                <Text style={{ fontWeight: '800' }}>조이챈트 Season1</Text>
                <Spacer size={5} />
              </Body>
            </CardItem>
          </TouchableOpacity>
        </Card>

        <Card style={{ opacity: placeholder ? 0.3 : 1, height: 240 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => Actions.articlesSingle({ id: 2, title: '조이챈트 Season2' })}
            style={{ flex: 1 }}
          >
            <CardItem cardBody>
              <Image
                source={{ uri: 'season2' }}
                style={{
                  height: 200,
                  width: null,
                  flex: 1,
                  overflow: 'hidden',
                  borderRadius: 5,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
            </CardItem>
            <CardItem cardBody>
              <Body style={{ paddingHorizontal: 15 }}>
                <Spacer size={10} />
                <Text style={{ fontWeight: '800' }}>조이챈트 Season2</Text>
                <Spacer size={5} />
              </Body>
            </CardItem>
          </TouchableOpacity>
        </Card>

        <Card style={{ opacity: placeholder ? 0.3 : 1, height: 240 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => Actions.articlesSingle({ id: 3, title: '조이챈트 Season3' })}
            style={{ flex: 1 }}
          >
            <CardItem cardBody>
              <Image
                source={{ uri: 'season3' }}
                style={{
                  height: 200,
                  width: null,
                  flex: 1,
                  overflow: 'hidden',
                  borderRadius: 5,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
            </CardItem>
            <CardItem cardBody>
              <Body style={{ paddingHorizontal: 15 }}>
                <Spacer size={10} />
                <Text style={{ fontWeight: '800' }}>조이챈트 Season3</Text>
                <Spacer size={5} />
              </Body>
            </CardItem>
          </TouchableOpacity>
        </Card>
        {/* <FlatList
        data={listFlat}
        onRefresh={() => reFetch({ forceSync: true })}
        refreshing={loading}
        renderItem={({ item }) => (
          <Card style={{ opacity: item.placeholder ? 0.3 : 1 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => (
                !item.placeholder
                  ? Actions.articlesSingle({ id: item.id, title: item.name })
                  : null
              )}
              style={{ flex: 1 }}
            >
              <CardItem cardBody>
                {!!item.image && (
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      height: 100,
                      width: null,
                      flex: 1,
                      overflow: 'hidden',
                      borderRadius: 5,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                )}
              </CardItem>
              <CardItem cardBody>
                <Body style={{ paddingHorizontal: 15 }}>
                  <Spacer size={10} />
                  <Text style={{ fontWeight: '800' }}>{item.name}</Text>
                  <Spacer size={15} />
                  {!!item.excerpt && <Text>{item.excerpt}</Text>}
                  <Spacer size={5} />
                </Body>
              </CardItem>
            </TouchableOpacity>
          </Card>
        )}
        keyExtractor={(item) => `${item.id}-${item.name}`}
        ListFooterComponent={(meta && meta.page && meta.lastPage && meta.page < meta.lastPage)
          ? () => (
            <React.Fragment>
              <Spacer size={20} />
              <Button
                block
                bordered
                onPress={() => reFetch({ incrementPage: true })}
              >
                <Text>Load More</Text>
              </Button>
            </React.Fragment>
          ) : null}
      /> */}
      </Container>
    </ScrollView>
  );
};

ArticlesList.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  listFlat: PropTypes.arrayOf(
    PropTypes.shape({
      placeholder: PropTypes.bool,
      id: PropTypes.number,
      name: PropTypes.string,
      date: PropTypes.string,
      content: PropTypes.string,
      excerpt: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
  reFetch: PropTypes.func,
  meta: PropTypes.shape({ page: PropTypes.number, lastPage: PropTypes.number }),
};

ArticlesList.defaultProps = {
  listFlat: [],
  error: null,
  reFetch: null,
  meta: { page: null, lastPage: null },
  loading: false,
};

export default ArticlesList;
