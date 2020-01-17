import cards from '../../interceptors/cardsInterceptor'

export const getCards = async id => {
  try {
    const { data } = await cards.get(`${id}.json`);
    
    return data
  } catch(error){
    return undefined
  }
};
