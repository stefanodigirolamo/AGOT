import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import AGOTLogo from '../../assets/gotLogo.png';
import headerStyles from './headerStyles';
import {theme} from '../../assets/styles/theme';

const {height} = Dimensions.get('window');
const styles = headerStyles;

const Header = ({resetFilters, resetValue}) => (
  <>
    <View
      style={[
        styles.container,
        height < 800 && {height: 91},
        resetFilters && styles.containerFilter,
      ]}>
      <View style={resetFilters && styles.containerImageInFilter}>
        <Image source={AGOTLogo} style={styles.image} />
      </View>
      {resetFilters && (
        <View style={styles.containerReset}>
          <TouchableWithoutFeedback onPress={() => resetValue()}>
            <Text style={{color: theme.primary}}>RESET</Text>
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  </>
);

export default Header;
