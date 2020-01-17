import React from 'react'
import { SectionList, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import cardStyles from './cardStyles';

//NON SI VEDE L'HEADER + GESTIRE ARRAY CON EMPTY OBJ

const CardList = ({ deck, cards }) => {
    const styles = cardStyles
    // console.log(cards);

    const renderSectionListHeader = ({ section }) => {
        <View style={styles.headerContainer}>
            <Text style={styles.sectionHeader}>{section.title}</Text>
        </View>
    }

    const handleRenderItem = (card, section, index) => (
        <View style={styles.cardContainer}>
            <View style={styles.cardNameContainer}>
                <Text style={styles.cardName}> {deck ? `${card.quantity} x ${card.name}` : card.name}</Text>
            </View>
            <View style={styles.arrowContainer}>
                <Icon name="chevron-right" size={25} color="#ffc533" />
            </View>
        </View>
    )

    return (
        <SectionList
            sections={cards}
            keyExtractor={(item) => `key-${item.code}`}
            ItemSeparatorComponent={() => (<View style={{ height: 1, backgroundColor: '#c2a67f' }} />)}
            renderSectionHeader={renderSectionListHeader}
            renderItem={({ item, section, index }) => handleRenderItem(item, section, index)}
        />
    )
}

export default CardList