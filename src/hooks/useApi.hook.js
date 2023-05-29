import { useState } from "react";

export const useApi = (service, config) => {
    // Default values
    const initialData = config.initialData || null;
    const initialIsLoading = config.initialIsLoading || false;
    const onSuccess = config.onSuccess || (() => {});
    const onError = config.onError || (() => {});

    // States
    const [data, setData] = useState(initialData);
    const [isLoading, setIsloading] = useState(initialIsLoading);
    const [error, setError] = useState(null);

    // Fetch function
    const fetchData = async (...args) => {
        try {
            setIsloading(true);
            const resData = await service(...args);
            setData(resData);
            onSuccess(resData);
        } catch (error) {
            setError(error);
            onError(error);
        } finally {
            setIsloading(false);
        }
    };

    return [fetchData, data, isLoading, error];
};
