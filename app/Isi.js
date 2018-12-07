import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Content, Button, Body, Right, Left, Icon, Card, CardItem, Thumbnail} from 'native-base';

export default class InstaClone extends Component {

    render() {
        return(
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: 'https://scontent-sin6-2.cdninstagram.com/vp/8fb13090e296d4b6782e870f3d76940d/5C984B71/t51.2885-19/s150x150/45273572_718262688560039_2861931718019907584_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com'}} />
                                <Body>
                                    <Text>dea0234</Text>
                                    <Text note>jakarta</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: 'https://scontent-sin6-2.cdninstagram.com/vp/20e80bf3c85a61ad21360a41837ca074/5C8CCB27/t51.2885-15/sh0.08/e35/p750x750/46735305_2038215302937674_6629515121196480722_n.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <View style={{flexDirection:"row"}}>
                            <Left>
                                <Button transparent>
                                    <Icon active name="heart" />
                                </Button>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                </Button>
                                <Button transparent>
                                    <Icon active name="share" />
                                </Button>
                            </Left>
                            <Right>
                                <Button transparent>
                                    <Icon active name="bookmark" />
                                </Button>
                            </Right>
                            </View>
                            <Left>
                                <Text>1734 Like</Text>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: 'https://scontent-sin2-2.cdninstagram.com/vp/4bb378beb62d4a6d188d661bab854ac4/5CAECD8D/t51.2885-15/sh0.08/e35/p640x640/43720897_558130821297216_4904611893194038245_n.jpg'}} />
                                <Body>
                                    <Text>putri837</Text>
                                    <Text note>Banda aceh</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: 'https://scontent-sin2-2.cdninstagram.com/vp/124be66710990297306016ea7d308c9a/5C8E7C13/t51.2885-15/sh0.08/e35/s640x640/46065150_267439650559824_7695098250295409156_n.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="heart" />
                                </Button>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                </Button>
                                <Button transparent>
                                    <Icon active name="share" />
                                </Button>
                            </Left>
                            <Right>
                                <Button transparent>
                                    <Icon active name="bookmark" />
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: 'https://scontent-sin2-2.cdninstagram.com/vp/4bb378beb62d4a6d188d661bab854ac4/5CAECD8D/t51.2885-15/sh0.08/e35/p640x640/43720897_558130821297216_4904611893194038245_n.jpg'}} />
                                <Body>
                                    <Text>jjhula33</Text>
                                    <Text note>Nort aceh</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: 'https://scontent-sin2-2.cdninstagram.com/vp/124be66710990297306016ea7d308c9a/5C8E7C13/t51.2885-15/sh0.08/e35/s640x640/46065150_267439650559824_7695098250295409156_n.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="heart" />
                                </Button>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                </Button>
                                <Button transparent>
                                    <Icon active name="share" />
                                </Button>
                            </Left>
                            <Right>
                                <Button transparent>
                                    <Icon active name="bookmark" />
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
        );
    }
}
