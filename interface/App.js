import { View, Text, StyleSheet} from "react-native";
import Component from "./componentes/componente"

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: "black",
  },
  texto:{
    color: "white",
    fontSize: 30,
  }

})

export default function App(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.texto}>Teste do React</Text>
      <Component/><Component/><Component/>
    </View>
  )
  
}