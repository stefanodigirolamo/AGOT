import React from 'react'
import { FlatList, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import cardStyles from './cardStyles';

const CardList = ({ deck, cards }) => {
    const styles = cardStyles
    return (
        <FlatList
            data={cards}
            keyExtractor={(item) => item.code}
            ItemSeparatorComponent={() => (<View style={{ height: 1, backgroundColor: '#c2a67f' }} />)}
            renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                    <View style={styles.cardNameContainer}>
                        <Text style={styles.cardName}> { deck ? `${item.quantity} x ${item.name}` : item.name}</Text>
                    </View>
                    <View style={styles.arrowContainer}>
                        <Icon name="chevron-right" size={25} color="#ffc533" />
                    </View>
                </View>
            )
            }
        />
    )
}

export default CardList