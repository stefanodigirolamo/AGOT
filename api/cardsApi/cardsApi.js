import cards from '../../interceptors/cardsInterceptor';

export const getCards = async id => {
  try {
    const {data} = await cards.get(`${id}.json`);
    return data;
  } catch (error) {
    return undefined;
  }
};

export const getSections = (type, cards) => {
  let agendaSection = {};
  let attachmentSection = {};
  let characterSection = {};
  let plotSection = {};
  let locationSection = {};
  let eventSection = {};

  const sectionsArray = [];

  type.map(item => {
    switch (item) {
      case 'Agenda':
        {
          agendaSection = {
            title: item,
            data: cards.filter(card => {
              return card.type_name == item;
            }),
          };
        }
        break;
      case 'Attachment':
        {
          attachmentSection = {
            title: item,
            data: cards.filter(card => {
              return card.type_name == item;
            }),
          };
        }
        break;
      case 'Character':
        {
          characterSection = {
            title: item,
            data: cards.filter(card => {
              return card.type_name == item;
            }),
          };
        }
        break;
      case 'Plot':
        {
          plotSection = {
            title: item,
            data: cards.filter(card => {
              return card.type_name == item;
            }),
          };
        }
        break;
      case 'Location':
        {
          locationSection = {
            title: item,
            data: cards.filter(card => {
              return card.type_name == item;
            }),
          };
        }
        break;
      case 'Event':
        {
          eventSection = {
            title: item,
            data: cards.filter(card => {
              return card.type_name == item;
            }),
          };
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

  // console.log(filterCards);

  return filterCards;
};
