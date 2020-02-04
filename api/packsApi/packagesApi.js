import packs from '../../interceptors/packsInterceptor';

export const getPackagesLists = async () => {
  const packages = await packs.get();

  packages.data.reverse();

  return packages.data;
};
