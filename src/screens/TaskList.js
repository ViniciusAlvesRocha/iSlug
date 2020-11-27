import React, { Component } from 'react'
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Platform,
    Alert,
    Image
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
import imgBanner from '../../assets/imgs/imgBanner01.jpeg'

import { server, showError } from '../common'
import commonStyles from '../commonStyles'
import Task from '../components/Task'
import AddTask from './AddTask'
import Carousel from 'react-native-snap-carousel'


const initialState = {
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: [],
    tasks: [],
    address: 'Amélio Miranda'
}

export default class TaskList extends Component {
    state = {
        ...initialState
    }

   

   
        
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
                {/*<Text>{item.title}</Text>*/}
                <Image style={{
                  width: 200,
                 height: 200,
                    
                }}
                source={item.image}/>
            </View>
        )
    }
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
    
          
            
            <View style={[styles.container, {marginTop: 60}]}>
                <View style={[styles.conatainerAddress, {flexDirection: 'row'}]}>
                    <Text style={styles.address}>Próximo a R. {this.state.address}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='angle-down'
                                size={20} style={{marginTop: 0}}color={commonStyles.colors.angle_down} />
                    </TouchableOpacity>
                </View>
                {/*CRIANDO OS FILTROS*/}
                <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 20}}>
                    <TouchableOpacity style={styles.filterOption}onPress={() => this.props.navigation.openDrawer()}>
                            <Text style={styles.textFilterOption}>Filtros</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterOption} onPress={() => this.props.navigation.openDrawer()}>
                        <Text style={styles.textFilterOption}>Tipo de loja</Text>
                            <Icon name='angle-down'
                                size={20} style={{marginTop: 0}} color={'#000'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterOption}onPress={() => this.props.navigation.openDrawer()}>
                        <Text style={styles.textFilterOption}>Ordenar</Text>
                            <Icon name='angle-down'
                                size={20} style={{marginTop: 0}} color={'#000'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterOption}onPress={() => this.props.navigation.openDrawer()}>
                        <Text style={styles.textFilterOption}>Entregar grátis</Text>
                            <Icon name='angle-down'
                                size={20} style={{marginTop: 0}} color={'#000'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterOption}onPress={() => this.props.navigation.openDrawer()}>
                        <Text style={styles.textFilterOption}>Vale refeição</Text>
                            <Icon name='angle-down'
                                size={20} style={{marginTop: 0}}color={'#000'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterOption}onPress={() => this.props.navigation.openDrawer()}>
                        <Text style={styles.textFilterOption}>Entrega iFood</Text>
                            <Icon name='angle-down'
                                size={20} style={{marginTop: 0}}color={'#000'} />
                    </TouchableOpacity>
                </View>

                <Carousel
            layout={''}
            layoutCardOffset={''}
            data={[
                {//title: 'amburguer',
                image: imgBanner},
                ]}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this.renderItem}
            />


                <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold'
                }}>Restaurantes</Text>
                
               
                {/*<ImageBackground source={this.getImage()}
                    style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='bars'
                                size={20} style={{marginTop: 40}}color={commonStyles.colors.secondary} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                                size={20} color={commonStyles.colors.secondary} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
            </ImageBackground>*/}
                <View style={styles.taskList}>
                    <FlatList data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => <Task {...item} onToggleTask={this.toggleTask} onDelete={this.deleteTask} />} />
                </View>
                <TouchableOpacity style={[
                        styles.addButton,
                        { backgroundColor: this.getColor() 
                    }]} 
                    activeOpacity={0.7}
                    onPress={() => this.setState({ showAddTask: true })}>
                    <Icon name="plus" size={20}
                        color={commonStyles.colors.secondary} />
                </TouchableOpacity>


                <AddTask isVisible={this.state.showAddTask}
                    onCancel={() => this.setState({ showAddTask: false })}
                    onSave={this.addTask} />
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
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