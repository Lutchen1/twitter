import { Apiservice } from "../services/ApiService";
import useSWR from "swr";

export function useApi(endPoint,config){

    const { data, error } = useSWR(endPoint, async (url) => {
        const response = await Apiservice(url,config)

        return response.data;
    })

    return { data, error }

}