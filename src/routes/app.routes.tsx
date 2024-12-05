import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Login from "../screens/Inicio/Login";
import ListaEstatistica from "../screens/Estatisticas/ListaEstatistica";
import TabelaEstatistica from "../screens/Estatisticas/TabelaEstatistica";
import AddPeladas from "../screens/Peladas/AddPeladas";
import BolaRolando from "../screens/Peladas/BolaRolando";
import CriarPelada from "../screens/Peladas/CriarPelada";
import MinhasPeladas from "../screens/Peladas/MinhasPeladas";
import TabelaRolando from "../screens/Peladas/TabelaRolando";
import TelaGol from "../screens/Peladas/TelaGol";
import { RootStackParamList } from "@/@types/rootStackParamsList";
const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Screen name="Home" component={Home} />
      {/* <Screen name="Login" component={Login} />
      <Screen name="ListaEstatistica" component={ListaEstatistica} />
      <Screen name="TabelaEstatistica" component={TabelaEstatistica} />
      <Screen name="AddPeladas" component={AddPeladas} />
      <Screen name="BolaRolando" component={BolaRolando} />
      <Screen name="CriarPelada" component={CriarPelada} />
      <Screen name="MinhasPeladas" component={MinhasPeladas} />
      <Screen name="TabelaRolando" component={TabelaRolando} />
      <Screen name="TelaGol" component={TelaGol} /> */}
    </Navigator>
  );
}

export default AppRoutes;
