import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getFromStorage(key: string) {
  try {
    const data = await AsyncStorage.getItem(key);
    console.log(`Get data from storage. Key: ${key}, Data: ${data}`);
    return data ? JSON.parse(data) : null;
  } catch {
    console.log(`Error getting data from storage. Key: ${key}`);
  }
}

export async function saveToStorage(key: string, data: object) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    console.log(`Save data from storage. Key: ${key}, Data:`, data);
  } catch {
    console.log(`Error saving data to storage. Key: ${key}, Data`, data);
  }
}
