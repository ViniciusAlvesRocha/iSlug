import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Image,
    ScrollView 
} from 'react-native'

import AsyncStorage from "@react-native-community/async-storage"
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/pt-br'

import todayImage from '../../assets/imgs/today.jpg'
import tomorrowImage from '../../assets/imgs/tomorrow.jpg'
import weekImage from '../../assets/imgs/week.jpg'
import monthImage from '../../assets/imgs/month.jpg'
import logo from '../../assets/imgs/logoiFood.jpeg'
import sacolas from '../../assets/imgs/sacola.png'
import entregador from '../../assets/imgs/entregador.png'
import entregadorReal from '../../assets/imgs/entregadorReal.jpeg'
import computador from '../../assets/imgs/computador.jpeg'
import moca from '../../assets/imgs/moca.jpeg'



import { server, showError } from '../common'
import commonStyles from '../commonStyles'
import Task from '../components/Task'
import AddTask from './AddTask'
import FormInitialCadRest from '../components/restaurantRegistration/FormInitialCadRest'
import FormCadRest02 from '../components/restaurantRegistration/FormCadRest02'
import Planos from '../components/restaurantRegistration/Plano'


//const initialState = {

//}

export default class CadastroRestaurantes extends Component {
    state = {
        //...initialState
    }

   

   
     /*   
    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('tasksState')
        const savedState = JSON.parse(stateString) || initialState
        this.setState({
            showDoneTasks: savedState.showDoneTasks
        }, this.filterTasks)

        this.loadTasks()
    }

    loadTasks = async () => {
        try {
            const maxDate = moment()
                .add({ days: this.props.daysAhead})
                .format('YYYY-MM-DD 23:59:59')
            const res = await axios.get(`${server}/tasks?date=${maxDate}`)
            this.setState({ tasks: res.data }, this.filterTasks)
        } catch(e) {
            showError(e)
        }
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    filterTasks = () => {
        let visibleTasks = null
        if(this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        } else {
            const pending = task => task.doneAt === null
            visibleTasks = this.state.tasks.filter(pending)
        }

        this.setState({ visibleTasks })
        AsyncStorage.setItem('tasksState', JSON.stringify({
            showDoneTasks: this.state.showDoneTasks
        }))
    }

    toggleTask = async taskId => {
        try {
            await axios.put(`${server}/tasks/${taskId}/toggle`)
            this.loadTasks()
        } catch(e) {
            showError(e)
        }
    }

    addTask = async newTask => {
        if(!newTask.desc || !newTask.desc.trim()) {
            Alert.alert('Dados Inválidos', 'Descrição não informada!')
            return 
        }

        try {
            await axios.post(`${server}/tasks`, {
               desc: newTask.desc,
               estimateAt: newTask.date 
            })

            this.setState({ showAddTask: false }, this.loadTasks)
        } catch(e) {
            showError(e)
        }
    }

    deleteTask = async taskId => {
        try {
            await axios.delete(`${server}/tasks/${taskId}`)
            this.loadTasks()
        } catch(e) {
            showError(e)
        }
    }

    getImage = () => {
        switch(this.props.daysAhead) {
            case 0: return todayImage
            case 1: return tomorrowImage
            case 7: return weekImage
            default: return monthImage
        }
    }

    getColor = () => {
        switch(this.props.daysAhead) {
            case 0: return commonStyles.colors.today
            case 1: return commonStyles.colors.tomorrow
            case 7: return commonStyles.colors.week
            default: return commonStyles.colors.month
        }
    }
   
    renderItem = ({ item }) =>{
        return(
            <View>
                {/*<Text>{item.title}</Text>
                <Image style={{
                  width: 200,
                 height: 200,
                    
                }}
                source={item.image}/>
            </View>
        )
    }
    */

   addTask = async newTask => {
    if(!newTask.name || !newTask.name.trim()) {
        Alert.alert('Dados Inválidos', 'nome não informado!')
        return 
    }

    if(!newTask.email || !newTask.email.trim()) {
        Alert.alert('Dados Inválidos', 'email não informado!')
        return 
    }

    if(!newTask.nrphone || !newTask.nrphone.trim()) {
        Alert.alert('Dados Inválidos', 'numero de telefone não informado!')
        return 
    }


    try {
        await axios.post(`${server}/person`, {
           name: newTask.name,
           email: newTask.email,
           nrphone: newTask.nrphone
           //estimateAt: newTask.date 
        })

        //this.setState({ showAddTask: false }, this.loadTasks)
    } catch(e) {
        showError(e)
    }
}

    render() {
       // const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
    
            <>
            {/*INICIO DE --ANGLE-LEFT E TEXT RESTAURANTE*/}
            <View style={{
                    flex: 1,
                    marginTop: 60,
                    marginBottom: 50,
                    marginHorizontal: 30
                }}>
                    <TouchableOpacity>
                            <Icon name='angle-left' color='#E82837' size={40}></Icon>
                    </TouchableOpacity>
                    <View>
                        <Text style={{
                                textAlign: 'center',
                                fontSize: 18
                            }}>RESTAURANTE 
                        </Text>
                    </View>

                    <View>
                    </View>
                   
                </View>
            {/*FINAL DE --ANGLE-LEFT E TEXT RESTAURANTE--*/}

            {/*INICIO DE --LOGO IFOOD E ICON BAR--*/}
            <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: '#F2F2F2',
                        paddingVertical: 10
                    }}>
                        <View/>
                        <Image source={logo}/>
                        <TouchableOpacity>
                                        <Icon name='bars' size={30} color={'#E82837'}></Icon>
                        </TouchableOpacity>
            </View>
            {/*FIM DE --LOGO IFOOD E ICON BAR--*/}

            <ScrollView>
            
                

                <View style={{
                    flex: 9,
                    paddingTop: 20,
                    backgroundColor: '#F2F2F2'
                }}>
                    {/*coloque o conteudo dentro dessa View*/}
                    <View style={{marginHorizontal: 30}}>
                  
                        <View style={{
                        marginVertical: 30
                        }}>
                        
                            <Text style={{
                                fontSize: 40,
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}
                            >Venda mais com seu restaurante no iFood
                            </Text>
                            <View style={{
                                width: 300,
                                marginVertical: 20
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    textAlign: 'left'
                                }}>
                                    Clientes a um click de distância e seu negócio
                                    vendendo como nunca
                                </Text>
                            </View>
                        </View>
                        {/*COMPONENTE IMPORTADO PARA FAZER FORMULARIO*/}
                    <FormInitialCadRest
                            onSave={this.addTask}
                       />

                        {/*<FormCadRest02
                            onSave={this.addTask}
                        />*/}

                       {/*INICIO PLANOS DISPONÍVEIS*/}
                    <View style={{
                       alignItems: 'center',
                       marginHorizontal: 30
                     }}>
                       <Text style={{
                           fontSize: 30,
                           fontWeight: 'bold',
                           textAlign: 'center',
                           width: 200
                       }}
                       >Planos disponíveis</Text>
                       {/*Inicio Planos*/}
                       <Planos 
                                photo={sacolas}
                                mt={0}
                                p1={'Plano'}
                                p2={'Básico'}
                                ln1={'Entrega feita pelo restaurante'}
                                ln2={'Taxa de 12% sobre o valor de todos os pedidos e mais de 3,5% em pedidios com pagamento via cartão'}
                                ln3={'---'}
                               />
                         <Planos 
                                photo={entregador}
                                mt={50}
                                p1={'Plano'}
                                p2={'Entrega'}
                                ln1={'Entrega feita pelo entregadores'}
                                ln2={'Taxa de 27% sobre o valor de todos os pedidos e mais de 3,5% em pedidios com pagamento via cartão'}
                                ln3={'Mensalidade de R$ 130, apenas se faturar mais do que R$ 1.800 mensais'}
                               />
                        {/*Fim palnos*/}
                    </View>
                    {/*FIM PLANOS DISPONÍVEIS*/}

                    <Text style={{
                        fontSize: 50,
                        fontWeight: 'bold',
                        textAlign: 'center',

                    }}>Saiba como funciona</Text>


                    <View>
                        <Image style={{width: '100%',borderRadius: 4}}
                        resizeMode="contain"source={entregadorReal}/>

                        <Text style={{fontSize: 30,fontWeight: 'bold'}}
                        >Entregas sem preocupação</Text>

                        <Text style={{fontSize: 20,color:'#727272',textAlign: 'left'}}
                        >{'Não tem entregador?\n entregadores parceiros do iFood'}</Text>
                    </View>



                    <View>
                        <Image style={{width: '100%',borderRadius: 4}}
                        resizeMode="contain"source={computador}/>

                        <Text style={{fontSize: 30,fontWeight: 'bold'}}
                        >Pagamento simples e rápido</Text>

                        <Text style={{fontSize: 20,color:'#727272',textAlign: 'left'}}
                        >Acompanhe seu lucro e receba os valores das suas vendas sem dor de cabeça</Text>
                    </View>


                    <View>
                        <Image style={{width: '100%',borderRadius: 4}}
                        resizeMode="contain"source={moca}/>

                        <Text style={{fontSize: 30,fontWeight: 'bold'}}
                        >Pagamento simples e rápido</Text>

                        <Text style={{fontSize: 20,color:'#727272',textAlign: 'left'}}
                        >Acompanhe seu lucro e receba os valores das suas vendas sem dor de cabeça</Text>
                    </View>








                    </View>
                </View>
            </ScrollView>
            </>
           
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        backgroundColor: '#F2F2F2',
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
    
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {

        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginTop: Platform.OS === 'ios' ? 40 : 10
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    address: {
       
        fontWeight: 'bold',
        fontSize: 15
    },
    textFilterOption: {
        fontSize: 17,
        marginHorizontal: 10
    },
    filterOption: {
        padding: 10,
        marginHorizontal: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderWidth: 2,
        opacity: 0.4,
        borderColor: '#222',
        borderRadius: 25,
    }
});