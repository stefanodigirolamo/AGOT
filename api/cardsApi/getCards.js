import cards from '../../interceptors/cardsInterceptor';

export const getCards = async id => {
  try {
    const {data} = await cards.get(`${id}.json`);
    return data;
  } catch (error) {
    return undefined;
  }
};

export const getAllCardsList = async () => {
  try {
    const {data} = await cards.get();
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

  const sectionFilter = (title, array) => {
    return {
      title: title,
      data: array.filter(card => {
        return card.type_name === title;
      }),
    };
  };

  type.map(item => {
    switch (item) {
      case 'Agenda':
        {
          agendaSection = sectionFilter(item, cards);
        }
        break;
      case 'Attachment':
        {
          attachmentSection = sectionFilter(item, cards);
        }
        break;
      case 'Character':
        {
          characterSection = sectionFilter(item, cards);
        }
        break;
      case 'Plot':
        {
          plotSection = sectionFilter(item, cards);
        }
        break;
      case 'Location':
        {
          locationSection = sectionFilter(item, cards);
        }
        break;
      case 'Event':
        {
          eventSection = sectionFilter(item, cards);
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

  return filterCards;
};
