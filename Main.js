import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export default function Main() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../Navegacion/img_fondo.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <TextInput placeholder='Correo electrónico' style={styles.txtInput}></TextInput>
                <TextInput placeholder='Contraseña' secureTextEntry={true} style={styles.txtInput}></TextInput>


                <TouchableOpacity 
                    onPress={() => navigation.navigate("Login")}
                >
                    <LinearGradient
                        colors={['#871F1F', '#871F1F']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.btnLogin}
                    >
                    <Text style={styles.txtRegistrarse}>Ingresar</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("RegistrarCuenta")}>
                <Text style={styles.txtSubtitulo}>Crear cuenta nueva <Text style={{textDecorationLine: 'underline'}}> Registrate</Text></Text>
                </TouchableOpacity>
                <Text style={styles.txtFor}>¿Olvidó su contraseña?</Text>

                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: 'rgba(215, 128, 127, 0.5)',
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 20,
        borderRadius: 10,
        margin: 10,
    },
    txtTitulo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#34434D',
        textAlign: 'center',
        marginBottom: 20,
    },
    txtSubtitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 40,
        marginTop: 50,
    },
    txtPass: {
        fontSize: 15,
        color: '#00C1BB',
        textAlign: 'center',
        marginBottom: 20,
    },
    txtRegistrarse: {
        fontSize: 22,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    txtFor: {
        fontSize: 22,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    txtInput: {
        width: '90%',
        height: 50,
        borderRadius: 30,
        paddingLeft: 30,
        marginTop: 20,
        borderColor: 'gray',
        color: '#000000',
        backgroundColor: '#F5F5F5',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 4,
        shadowRadius: 10,
        elevation: 10,
        marginBottom: 20,
    },
    btnLogin: {
        borderRadius: 30,
        width: 270,
        height: 65,
        marginTop: 35,
        marginBottom: 25,
        paddingTop: 10,
        justifyContent: "center",
        alignItems: "center",
        color: '#871F1F',
    },
    txtLogin: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#871F1F',
        textAlign: 'center',
        marginBottom: 15,
    },
});
