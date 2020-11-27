import { registerRootComponent } from 'expo';
//import TaskList from './src/screens/TaskList'
//import Auth from './src/screens/Auth'
//import Navigator from './src/Navigator'
import Restaurante from './src/screens/CadastroRestaurante'


//import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

//Para carregar a tela principal do nosso sistema:
//registerRootComponent(Auth);
//registerRootComponent(TaskList);
registerRootComponent(Restaurante);
