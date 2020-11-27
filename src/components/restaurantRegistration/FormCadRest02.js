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

const initialState = {
    cnpj: '', 
    issuingbody: '', 
    companyname: '35992467101', 
    shopphone: '35992467101',
    cep: '37890000',
    city: 'Muzambinho',
    state: 'MG',
    ditrict: 'Pôr do Sol',
    address: 'Amélio Miranda',
    number: '135',
    complement: 'casa',
    especialties: 'Bar',
    //businessdelivery: '1'
}

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

            showSuccess('Usuário cadastro!')
            this.setState({ ...initialState })
        } catch(e) {
            showError(e)
        }
    }


    render() {
       return(

 /*Formulario de cadastro de restaurante02*/
 
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
            }}>Informações da loja
            </Text>
            <Text style={{
                fontSize: 15,
                color: '#8A8A8A',
                marginBottom: 25,
            }}>
                Preencha abaixo as informações sobre a sua futura loja no iFood com os dados do seu negócio
            </Text>
            {/*CNPJ*/}
            <Text style={{
                fontWeight: 'bold',
                marginBottom: 10
            }}>CNPJ</Text>
            <TextInput style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: '#F5F5F5',
                padding: 5,
                marginBottom: 20
            }} 
            placeholder="CNPJ"
            onChangeText={cnpj => this.setState({ cnpj })}
            value={this.state.cnpj} 
            />
            {/*Razão Social*/}
            <Text style={{
                fontWeight: 'bold',
                marginBottom: 10
            }}>Razão Social</Text>
            <TextInput style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: '#F5F5F5',
                padding: 5,
                marginBottom: 20
            }} 
            placeholder="Razão Social do seu negócio"
            onChangeText={countryname => this.setState({ cauntryname })}
            value={this.state.countryname} 
            />
        
             {/*Telefone da loja*/}
             <Text style={{
                fontWeight: 'bold',
                marginBottom: 10
            }}>Telefone da loja</Text>
            <TextInput style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: '#F5F5F5',
                padding: 5,
                marginBottom: 20
            }} 
            placeholder="Telefone da loja com DDD"
            onChangeText={businessnrphone => this.setState({ businessnrphone })}
            value={this.state.businessnrphone} 
            />
            {/*CEP*/}
            <TextInput style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: '#F5F5F5',
                padding: 5,
                marginBottom: 20
            }} 
            placeholder="deszipcode"
            onChangeText={deszipcode => this.setState({ deszipcode })}
            value={this.state.deszipcode} 
            />
            {/*Cidade*/}
            <TextInput style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: '#F5F5F5',
                padding: 5,
                marginBottom: 20
            }} 
            placeholder="descity"
            onChangeText={descity => this.setState({ descity })}
            value={this.state.descity} 
            />
             {/*Estado*/}
             <TextInput style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: '#F5F5F5',
                padding: 5,
                marginBottom: 20
            }} 
            placeholder="desestate"
            onChangeText={desestate => this.setState({ desestate })}
            value={this.state.desestate} 
            />

             {/*Bairro*/}
             <TextInput style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: '#F5F5F5',
                padding: 5,
                marginBottom: 20
            }} 
            placeholder="desestate"
            onChangeText={desestate => this.setState({ desestate })}
            value={this.state.desestate} 
            />
            
            
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

 

 
