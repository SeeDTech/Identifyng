
export const setItem = async (name, data) => {
    try {
        await AsyncStorage.setItem(name, JSON.stringify(data));
        console.log('data stored');
    } catch (error) {
        // Error saving data
        console.log('AsyncStorage save error: ' + error.message);
    }
}

