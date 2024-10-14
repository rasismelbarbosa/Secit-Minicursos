import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import { auth } from "../config/firebaseConfig";
import { stylesLogin } from "../../assets/style/style";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { 
    View,
    KeyboardAvoidingView,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";

const logoIF = require('../../assets/images/IFRN-Logo.png');


export default props => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigation = useNavigation()

 const handleLogin = () => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Home')

                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorMessage);

            });
    }

    const handleSignin = () => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Home')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <>
            <KeyboardAvoidingView>
                <View style={stylesLogin.container}>
                    <View style={stylesLogin.imgContainer}>
                        <Image source={logoIF} style={stylesLogin.img} />
                    </View>

                    <View style={stylesLogin.btnsContainer}>

                        <TextInput
                            style={stylesLogin.input}
                            placeholder='E-mail'
                            value={email}
                            autoCorrect={false}
                            onChangeText={setEmail}
                            keyboardType='email-address'
                        />

                        <TextInput
                            style={stylesLogin.input}
                            placeholder='Senha'
                            value={password}
                            autoCorrect={false}
                            onChangeText={setPassword}
                            keyboardType="numeric"
                        />

                        <TouchableOpacity style={stylesLogin.btnSubmit} onPress={handleLogin}>
                            <Text style={stylesLogin.loginText}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={stylesLogin.btnSignin} onPress={handleSignin}>
                            <Text style={stylesLogin.signinText}>Sigin</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}
