import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { stylesHome } from "../../assets/style/style";
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";

const logoIF = require('../../assets/images/IFRN-Logo.png');

export default props => {
    const navigation = useNavigation()


    const handleSignOut = () => {
        try {
            signOut(auth)
                .then(() => {
                    console.log('Deu certo');
                    navigation.replace('Login')
                })
                .catch((e) => (console.log(e)))
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <>
            <View style={stylesHome.container}>
                <Image
                    source={logoIF}
                    style={stylesHome.img}
                />
                <TouchableOpacity
                    onPressIn={handleSignOut}
                    style={stylesHome.sairBtn}>
                    <Text>Sair</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}