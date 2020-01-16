import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import modalStyles from './modalStyles'
import { getDeckDetails } from '../../api/deckDetailsApi/deckdetailsApi'
import { getPackDetails } from '../../api/packDetailsApi/packDetailsApi'

const Modal = ({ navigation }) => {
    
    const styles = modalStyles
    const details = []

    const [deckDetails, setDeckDetails] = useState([]);
    const [packDetails, setPackDetails] = useState([]);


    useEffect(() => {
        deck();
        pack()
    }, [])

    const deck = async () => {
        try {
          details = await getDeckDetails(navigation.state.params.id);
          setDeckDetails(details);
        } catch (error) {
          console.log(error);
        }
      };

      const pack = async () => {
        try {
          const details = await getPackDetails(navigation.state.params.id);
          setPackDetails(details);
        } catch (error) {
          console.log(error);
        }
      };

      console.log(navigation.state.params);
      
    

    return (
        <View>
            { deckDetails ? (
                <View>
                    <View style={styles.name_desc_container}>
                        <Text>{deckDetails.name}</Text>
                    </View>
                    <View style={styles.faction_date_container}>
                        <Text>{deckDetails.faction_name}</Text>
                        <Text>{deckDetails.date_creation}</Text>
                    </View>
                </View>
            ) :
                (
                    <View>
                        <Text>{navigation.state.params.name}</Text>
                    </View>
                )
            }
            <FlatList/>
        </View>
    )
}

export default Modal