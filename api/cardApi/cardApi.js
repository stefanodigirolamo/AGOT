import card from '../../interceptors/cardInterceptor'

export const getCard = async id => {
  try {
    const { data } = await card.get(`${id}.json`);
    
    return data
  } catch(error){
    return undefined
  }
};
