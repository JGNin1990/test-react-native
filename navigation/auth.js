
import AsyncStorage from "@react-native-async-storage/async-storage";

const isSignedIn = () => {
    return new Promise(async (resolve, reject) => {
        await AsyncStorage.getItem('token')
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};
export default isSignedIn