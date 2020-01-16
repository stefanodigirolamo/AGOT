import packDetails from "../../interceptors/packDetailsInterceptor";

export const getPackDetails = async id => {
    const packDetail = await packDetails.get(`${id}.json`)
    return packDetail.data
} 