import {StyleSheet, Platform} from 'react-native';
import {theme, colors} from '../../assets/styles/theme';

const CardDetailsStyle = StyleSheet.create({
  spinner: {marginTop: '100%'},
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? '10%' : '3%',
    marginBottom: '2%',
  },
  iconContainer: {
    display: 'flex',
    width: '20%',
    alignItems: 'center',
  },
  cardNameContainer: {
    display: 'flex',
    width: '80%',
    alignItems: 'flex-start',
  },
  cardTitle: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: colors.black,
    marginVertical: '5%',
    fontWeight: 'bold',
  },
  cardImageContainer: {display: 'flex', alignItems: 'center'},
  cardImage: {
    marginTop: '10%',
    marginBottom: '5%',
    marginHorizontal: '20%',
  },
  dimensionsPlotCards: {width: 260, height: 160},
  dimensionsOtherCards: {width: 190, height: 270},
  dimensionsPlotZoom: {width: 350, height: 215},
  dimensionsOtherZoom: {width: 315, height: 450},
  cardDetails: {
    fontSize: 20,
    color: theme.secondary,
    marginVertical: '2%',
    marginHorizontal: '5%',
  },
  emphasizedFaction: {color: theme.primary, fontWeight: 'bold'},
  emphasizedName: {fontWeight: 'bold'},
  emphasizedTraits: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: theme.primary,
  },
  containerDescription: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '2%',
  },
  verticalLineDesc: {
    width: 3,
    height: '100%',
  },
  modalContainer: {
    backgroundColor: colors.black,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalImage: {
    width: '80%',
    height: '80%',
    marginVertical: '7%',
  },
});

export default CardDetailsStyle;
