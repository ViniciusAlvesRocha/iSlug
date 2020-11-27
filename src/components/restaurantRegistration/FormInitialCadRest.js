import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native'

//import AsyncStorage from "@react-native-community/async-storage"
//import Icon from 'react-native-vector-icons/FontAwesome'
//import axios from 'axios'
//import moment from 'moment'
import 'moment/locale/pt-br'
import axios from 'axios'
//import todayImage from '../../assets/imgs/today.jpg'
//import tomorrowImage from '../../assets/imgs/tomorrow.jpg'
//import weekImage from '../../assets/imgs/week.jpg'
//import monthImage from '../../assets/imgs/month.jpg'
//import logo from '../../assets/imgs/logoiFood.jpeg'
import { server, showError, showSuccess } from '../../common'

const initialState = {name: 'Vinicius Alves da Rocha', email: 'vini@gmail', nrphone: '35992467101'}

export default class FormInitialCadRest extends Component {
    state= {
        ...initialState
    }


   
    signup = async () => {
        try {
            await axios.post(`${server}/signup`, {
                name: this.state.name,
                desemail: this.state.email,
                nrphone: this.state.nrphone,
            })

            showSuccess('Usuário cadastrado!')
            this.setState({ ...initialState })
        } catch(e) {
            showError(e)
        }
    }


    render() {
       return(

 /*Formulario de cadastro de restaurante*/
 
        <View style={{
            backgroundColor: '#fff',
            //height: 1000,
            borderRadius: 5,
           
            /*Criando sombra*/
            shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 11,
            },
            shadowOpacity: 0.57,
            shadowRadius: 15.19,
            elevation: 23,
            /*fim de criar sombra*/
            paddingHorizontal: 7
        }}>
            <Text style={{
                marginVertical: 13,
                fontSize: 30,
                fontWeight: 'bold'
            }}>Cadastre-se
            </Text>
            <Text style={{
                fontSize: 15,
                color: '#8A8A8A',
                marginBottom: 25,
            }}>
                Entre e ganhe 1 mês de mensalidade grátis
            </Text>
            {/*nome*/}
            <Text style={{
                fontWeight: 'bold',
                marginBottom: 10
            }}>Nome completo</Text>
            <TextInput style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: '#F5F5F5',
                padding: 5,
                marginBottom: 20
            }} 
            placeholder="Nome do(a) responsável legal"
            onChangeText={name => this.setState({ name })}
            value={this.state.name} 
            />
            {/*email*/}
            <Text style={{
                fontWeight: 'bold',
                marginBottom: 10
            }}>E-mail</Text>
            <TextInput style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: '#F5F5F5',
                padding: 5,
                marginBottom: 20
            }} 
            placeholder="email@email.com"
            onChangeText={email => this.setState({ email })}
            value={this.state.email} 
            />
        
             {/*celular*/}
             <Text style={{
                fontWeight: 'bold',
                marginBottom: 10
            }}>Celular (com DDD)</Text>
            <TextInput style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: '#F5F5F5',
                padding: 5,
                marginBottom: 20
            }} 
            placeholder="(00) 00000-0000"
            onChangeText={nrphone => this.setState({ nrphone })}
            value={this.state.nrphone} 
            />
            
            <Text style={{
                fontSize: 15,
                color: '#727272',
                marginBottom: 30
            }}>Ao prosseguir, aceito que o iFood entre em contato comigo
                por telefone, e-mail ou WhatsApp (incluindo mensagens
                automáticas para fins comerciais)
            </Text>
            <View style={{alignItems: 'center', marginBottom: 60}}>
            <TouchableOpacity style={{
                backgroundColor: '#EA1D2C',
                borderRadius: 10,
                paddingVertical: 20,
                paddingHorizontal: 50
            }} 
                onPress={this.signup}
                activeOpacity={0.7}
                //onPress={() => this.setState({ showAddTask: true })}
                >
                <Text style={{
                    width: 150,
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>Começar o cadastro</Text>
            </TouchableOpacity>
            </View>
        </View>

/*fim de formulario de cadastro de restaurante*/

    )
}
}

 

 
