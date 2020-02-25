import card from '../../interceptors/cardInterceptor';
import cards from '../../interceptors/cardsInterceptor';

import {GET_CARD, GET_CARDS, GET_SECTIONS_CARDS as GET_SECTIONS} from './types';

let agendaSection = {};
let attachmentSection = {};
let characterSection = {};
let plotSection = {};
let locationSection = {};
let eventSection = {};

const sectionsArray = [];

export function getCardsAction() {
  return async dispatch => {
    try {
      const {data} = await cards.get();
      return dispatch({
        type: GET_CARDS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);

      return undefined;
    }
  };
}

export function getSectionsAction(type, cardsArray) {
  async dispatch => {
    const sectionFilter = (title, array) => {
      return {
        title: title,
        data: array.filter(item => {
          return item.type_name === title;
        }),
      };
    };

    type.map(item => {
      switch (item) {
        case 'Agenda':
          {
            agendaSection = sectionFilter(item, cardsArray);
          }
          break;
        case 'Attachment':
          {
            attachmentSection = sectionFilter(item, cardsArray);
          }
          break;
        case 'Character':
          {
            characterSection = sectionFilter(item, cardsArray);
          }
          break;
        case 'Plot':
          {
            plotSection = sectionFilter(item, cardsArray);
          }
          break;
        case 'Location':
          {
            locationSection = sectionFilter(item, cardsArray);
          }
          break;
        case 'Event':
          {
            eventSection = sectionFilter(item, cardsArray);
          }
          break;
        default:
          return null;
      }
    });
    sectionsArray.push(
      agendaSection,
      attachmentSection,
      characterSection,
      plotSection,
      locationSection,
      eventSection,
    );

    const filterCards = sectionsArray.filter(
      value => JSON.stringify(value) !== '{}',
    );

    console.log(filterCards);

    return dispatch({
      type: GET_SECTIONS,
      payload: filterCards,
    });
  };
}

export const getCardAction = id => {
  async dispatch => {
    try {
      const {data} = await card.get(`${id}.json`);

      return dispatch({
        type: GET_CARD,
        payload: data,
      });
    } catch (error) {
      return null;
    }
  };
};
