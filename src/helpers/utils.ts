export const parseData = <T>(data?: string): T | null => {
    if (!data) {
        return null;
    }
    try {
        return JSON.parse(data) as T;
    } catch {
        return null;
    }
};

export const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};