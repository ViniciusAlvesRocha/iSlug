import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

//import AsyncStorage from "@react-native-community/async-storage"
import Icon from 'react-native-vector-icons/FontAwesome'
//import axios from 'axios'
//import moment from 'moment'
import 'moment/locale/pt-br'

//import todayImage from '../../assets/imgs/today.jpg'
//import tomorrowImage from '../../assets/imgs/tomorrow.jpg'
//import weekImage from '../../assets/imgs/week.jpg'
//import monthImage from '../../assets/imgs/month.jpg'
//import logo from '../../assets/imgs/logoiFood.jpeg'



export default class FormInitialCadRest extends Component {

    render() {
       return(
            <View style={styles.plano}>
                <View style={styles.planoTop}>
                    <View style={{
                        paddingHorizontal: 20,
                        marginTop: 30
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 25,
                            fontWeight: 'bold',
                        }}>
                            {this.props.p1}
                        </Text>
                        <Text style={{
                            color: '#fff',
                            fontSize: 35,
                            fontWeight: 'bold'
                        }}>
                            {this.props.p2}
                        </Text>
                    </View>
                    <Image resizeMode="contain" source={this.props.photo} style={{width: 190, marginTop: this.props.mt}}/>
                </View>

              
                    <View style={styles.planoBottom}>
                        {/*PrimeiraLinha*/}
                        <View style={{

                            flexDirection: 'row',
                            
                        }}>
                            <View style={{
                                marginHorizontal: 20,
                                borderRadius: 10,
                                width:20,
                                height:20,backgroundColor:'#E82837',
                                justifyContent: 'center',
                                alignItems: 'center'
                                }}>
                                <Icon name='check' color={'#fff'}/>
                            </View>
                            <Text style={styles.txtOpPlano}>{this.props.ln1}</Text>
                        </View>
                        {/*SegundaLinha*/}
                        <View style={{
                            marginTop: 30,
                            flexDirection: 'row',
                            
                        }}>
                            <View style={{
                                marginHorizontal: 20,
                                borderRadius: 10,
                                width:20,
                                height:20,backgroundColor:'#E82837',
                                justifyContent: 'center',
                                alignItems: 'center'
                                }}>
                                <Icon name='check' color={'#fff'}/>
                            </View>
                            <Text style={styles.txtOpPlano}>{this.props.ln2}</Text>
                        </View>

                         {/*TerceiraLinha*/}
                         <View style={{
                            marginTop: 30,
                            flexDirection: 'row',
                            
                        }}>
                            <View style={{
                                marginHorizontal: 20,
                                borderRadius: 10,
                                width:20,
                                height:20,backgroundColor:'#E82837',
                                justifyContent: 'center',
                                alignItems: 'center'
                                }}>
                                <Icon name='check' color={'#fff'}/>
                            </View>
                            <Text style={styles.txtOpPlano}>{this.props.ln3}</Text>
                        </View>
                    </View>
               
            </View>
            
            
       )}
}


const styles = StyleSheet.create({
    txtOpPlano: {
        color: '#727272', 
        fontSize: 18,
        width: 300
    },
    plano: {
        marginBottom: 60,
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
    },
    planoTop: {
        zIndex: 1,
        height: 170, 
        backgroundColor: '#71706E',
        flexDirection: 'row',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    },
    planoBottom: {
        paddingVertical: 30,
        zIndex: 0,
        //height: 170, 
        backgroundColor: '#fff',
        flexDirection: 'column',
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10
    }
    
})