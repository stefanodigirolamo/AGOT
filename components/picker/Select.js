import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, Dimensions, Platform} from 'react-native';
import {Picker} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FactionLogo from '../../assets/houses_logos/housesLogoSwitch';
import NumericInput from 'react-native-numeric-input';
import selectStyles from './selectStyles';
import {theme, colors} from '../../assets/styles/theme';
import factionColorSwitch from '../../assets/styles/factionColor';

const {height} = Dimensions.get('window');
const styles = selectStyles;

const Select = ({
  title,
  itemsName,
  itemValue,
  initValueCost,
  initValueStrength,
  getValue,
  activeFactions,
  costValue,
  strengthValue,
  setCostValue,
  setStrengthValue,
  number,
  cost,
  factionLogo,
  placeholder,
}) => {
  return (
    <>
      <Text
        style={[
          styles.title,
          {paddingVertical: height > 800 ? '6%' : height < 738 ? '2%' : '4%'},
        ]}>
        {title}
      </Text>

      <View style={{alignItems: 'center'}}>
        {!number && !factionLogo ? (
          <View style={styles.pickersContainer}>
            <Picker
              style={
                Platform.OS === 'android' ? {color: theme.secondary} : null
              }
              headerStyle={{backgroundColor: theme.primary}}
              headerBackButtonTextStyle={{
                color: colors.black,
                fontWeight: 'bold',
              }}
              headerTitleStyle={{fontSize: 25}}
              itemStyle={{height: 80}}
              itemTextStyle={{color: theme.primary, fontSize: 25}}
              textStyle={{color: theme.secondary}}
              placeholder={Platform.OS === 'ios' ? placeholder : ''}
              placeholderStyle={{color: theme.secondary}}
              placeholderIconColor={theme.primary}
              modalStyle={{backgroundColor: colors.black}}
              selectedValue={itemValue}
              onValueChange={item => getValue(item)}
              iosIcon={
                <Icon
                  name="chevron-down"
                  style={{color: theme.primary, fontSize: 25, right: 10}}
                />
              }>
              {itemsName.map(item => (
                <Picker.Item value={item} label={item} key={item} />
              ))}
            </Picker>
            {Platform.OS === 'android' && (
              <Icon name="chevron-down" style={styles.downArrow} />
            )}
          </View>
        ) : !factionLogo && cost ? (
          <View style={styles.numericInputContainer}>
            <View>
              <NumericInput
                initValue={initValueCost}
                value={costValue}
                onChange={item => setCostValue(item)}
                totalWidth={240}
                totalHeight={50}
                iconSize={25}
                step={1}
                minValue={0}
                valueType="real"
                rounded={true}
                textColor={theme.primary}
                iconStyle={{color: colors.black}}
                rightButtonBackgroundColor={theme.secondary}
                leftButtonBackgroundColor={theme.secondary}
              />
            </View>
          </View>
        ) : !factionLogo && !cost ? (
          <View style={styles.numericInputContainer}>
            <View>
              <NumericInput
                initValue={initValueStrength}
                value={strengthValue}
                onChange={item => setStrengthValue(item)}
                totalWidth={240}
                totalHeight={50}
                iconSize={25}
                step={1}
                minValue={0}
                valueType="real"
                rounded={true}
                textColor={theme.primary}
                iconStyle={{color: colors.black}}
                rightButtonBackgroundColor={theme.secondary}
                leftButtonBackgroundColor={theme.secondary}
              />
            </View>
          </View>
        ) : (
          factionLogo && (
            <View style={styles.factionLogoContainer}>
              {itemsName.map(faction => (
                <TouchableOpacity
                  onPress={() => getValue(faction)}
                  key={faction}
                  style={[
                    styles.factionLogo,
                    {
                      backgroundColor:
                        activeFactions[faction] === false
                          ? theme.secondary
                          : factionColorSwitch(faction),
                    },
                  ]}>
                  <FactionLogo
                    logoFilter
                    factionName={faction}
                    width={28}
                    height={30}
                  />
                </TouchableOpacity>
              ))}
            </View>
          )
        )}
      </View>
    </>
  );
};

export default Select;
