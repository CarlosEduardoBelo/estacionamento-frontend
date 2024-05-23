import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'
const Home = ({ navigation }) => {
    const handleButtonClick = (option) => {
        //implementando a lógica só para o botão de Promoções
        if (option === 'Proprietario') {
            navigation.navigate('ProprietarioList');
        }
        else if (option === 'Veiculo') {
            navigation.navigate('VeiculoList');
        };
    };
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/estacionamento.png')}
                    style={styles.image} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Proprietario')}>
                    <Text style={styles.buttonText}>Proprietario</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Veiculo')}>
                    <Text style={styles.buttonText}>Veículo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    imageContainer: {
        flex: 0.4,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
    },
    buttonContainer: {
        flex: 0.5,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#a6480d',
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        margin: '20px',
        padding: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "600"
    },
});
export default Home;