import deckDetails from '../../interceptors/deckDetailsInterceptor';

export const getDeckDetails = async id => {
  try {
    const deckDetail = await deckDetails.get(`${id}.json`);
    console.log(deckDetail.data);

    return deckDetail.data;
  } catch (error) {
    console.log(error);
  }
};
