import { Dimensions, StyleSheet } from "react-native";

const screenDimensionW = Dimensions.get('screen').width;
const screenDimensionH = Dimensions.get('screen').height;
const logoSH = 88 * 1.5;
const logoS = 88 * 1.2;


export const stylesHome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    img: {
        height: logoSH,
        width: logoSH,
    },
    sairBtn: {
        marginTop: 50,
        alignItems: 'center',
        backgroundColor: '#cd191e',
        width: '40%',
        height: '4%',
        borderRadius: 9,
        zIndex: 1,
    },
    txtSair: {
        color: '#FFF',
        fontSize: 20,
    }
});

export const stylesLogin = StyleSheet.create({
    container: {
        width: screenDimensionW,
        height: screenDimensionH,
        alignItems: 'center',
    },
    imgContainer:{
        flex: 1,
        flexDirection: 'column-reverse',
        justifyContent: 'end',
        alignItems: 'center',
        paddingBottom: 30,
    },
    img: {
        width: logoS,
        height: logoS
    },
    btnsContainer:{
        flex: 1,
        alignItems: 'center',
        width: '90%',
    },
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#000',
        fontSize: 17,
        borderRadius: 9,
        padding: 10,
        borderWidth: 1,
    },
    btnSubmit: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2f9e41',
        width: '30%',
        height: '8%',
        borderRadius: 9,
        marginBottom: 5,
    },
    loginText: {
        fontSize: 20,
        color: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnSignin:{
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        height: '8%',
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#2f9e41',
    },
    signinText:{
        color: '#000',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})