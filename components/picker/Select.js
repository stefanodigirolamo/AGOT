import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, Dimensions, Platform} from 'react-native';
import {Picker, CheckBox} from 'native-base';
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
  challenge,
  activeChallenges,
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
        style={[styles.title, {paddingVertical: height > 800 ? '6%' : '4%'}]}>
        {title}
      </Text>

      <View style={styles.container}>
        {!number && !factionLogo && !challenge ? (
          <View style={styles.pickerContainer}>
            <Picker
              style={
                Platform.OS === 'android' ? {color: theme.secondary} : null
              }
              headerStyle={{backgroundColor: theme.primary}}
              headerBackButtonTextStyle={styles.headerBackButton}
              headerTitleStyle={styles.headerTitle}
              itemStyle={styles.item}
              itemTextStyle={styles.itemText}
              textStyle={{color: theme.secondary}}
              placeholder={Platform.OS === 'ios' ? placeholder : ''}
              placeholderStyle={{color: theme.secondary}}
              placeholderIconColor={theme.primary}
              modalStyle={{backgroundColor: colors.black}}
              selectedValue={itemValue}
              onValueChange={item => getValue(item)}
              iosIcon={<Icon name="chevron-down" style={styles.iosIcon} />}>
              {itemsName.map(item => (
                <Picker.Item value={item} label={item} key={item} />
              ))}
            </Picker>
            {Platform.OS === 'android' && (
              <Icon name="chevron-down" style={styles.downArrow} />
            )}
          </View>
        ) : challenge ? (
          <View style={styles.checkContainer}>
            {Object.entries(activeChallenges).map(([key, value]) => (
              <>
                <View style={styles.singleCheck}>
                  <CheckBox
                    key={key}
                    color={theme.primary}
                    checked={value}
                    onPress={() => getValue(key)}
                  />
                </View>
                <View style={styles.singleCheck}>
                  <Text style={styles.checkText}>
                    {key === 'is_military'
                      ? 'Military'
                      : key === 'is_intrigue'
                      ? 'Intrigue'
                      : 'Power'}
                  </Text>
                </View>
              </>
            ))}
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
