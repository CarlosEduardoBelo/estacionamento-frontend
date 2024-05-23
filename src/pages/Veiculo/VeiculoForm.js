import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles.js';
export default function VeiculoForm() {
    // Variáveis state
    const [placa, setPlaca] = useState("");
    const [ano, setAno] = useState("");
    const [mensalidade, setMensalidade] = useState("");
    const [fk_proprietario, setFk_proprietario] = useState("");
    // Função que Cadastra os dados utilizando a API
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/veiculo", {
                placa: placa,
                ano: ano,
                mensalidade: mensalidade,
                fk_proprietario: fk_proprietario
            });
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Digite a placa do veículo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira a placa"
                    value={placa}
                    onChangeText={(texto) => setPlaca(texto)}
                />
                <Text style={styles.text}>Digite o ano do veículo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira o ano"
                    value={ano}
                    onChangeText={(texto) => setAno(texto)}
                />
                <Text style={styles.text}>Digite a mensalidade do veículo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira a mensalidade"
                    value={mensalidade}
                    onChangeText={(texto) => setMensalidade(texto)}
                />
                <Text style={styles.text}>Insira o proprietario do veiculo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira o proprietario do veiculo"
                    value={fk_proprietario}
                    onChangeText={(texto) => setFk_proprietario(texto)}
                />
            </View>
            <View style={styles.areaBtn}>
                <Pressable
                    style={[styles.botao, {
                        backgroundColor: "#1d75cd"
                    }]}
                    onPress={handleClick} >
                    <Text style={styles.botaoText}>Cadastrar</Text>
                </Pressable >
            </View>
        </SafeAreaView>
    )
}