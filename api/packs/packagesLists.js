import packs from '../../interceptors/packsInterceptor';

export const getPackagesLists = async () => {
  const packages = await packs.get();

  return packages.data;
};
