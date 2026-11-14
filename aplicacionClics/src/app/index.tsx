import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={estilos.body}>
      <Text>Estructura Inicial de la App</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  body: { flex: 1, backgroundColor: "#f4f7f6", justifyContent: "center", alignItems: "center", padding: 20 },
});