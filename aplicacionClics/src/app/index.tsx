import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);
  const [registros, setRegistros] = useState<any[]>([]);

  // Función para incrementar y registrar en el historial
  const incrementarContador = () => {
    const nuevoContador = contador + 1;
    const ahora = new Date();
    const horaFormateada = ahora.toLocaleTimeString();

    setContador(nuevoContador);

    const nuevoRegistro = {
      id: Date.now().toString(),
      numero: nuevoContador,
      hora: horaFormateada,
    };
    setRegistros([nuevoRegistro, ...registros]);
  };

  return (
    <View style={estilos.body}>
      <View style={estilos.container}>
        <Text style={estilos.h1}>Interactividad con el DOM</Text>
        <Text style={estilos.description}>
          Haz clic para sumar o restar clics. Al pasar de 10, el contador cambia de color (Retos del SENA).
        </Text>
        
        <Text style={estilos.counterBox}>
          {contador}
        </Text>

        <TouchableOpacity
          style={estilos.btnClick}
          onPress={incrementarContador}
        >
          <Text style={estilos.btnText}>¡Sumar Clic (+)</Text>
        </TouchableOpacity>

        <View style={estilos.tableContainer}>
          <View style={estilos.tableHeader}>
            <Text style={[estilos.th, estilos.cellNumero]}>N° Clic</Text>
            <Text style={[estilos.th, estilos.cellHora]}>Hora / Acción</Text>
          </View>

          <ScrollView style={estilos.tableBody}>
            {registros.map((item) => (
              <View key={item.id} style={estilos.tr}>
                <Text style={[estilos.td, estilos.cellNumero]}>{item.numero}</Text>
                <Text style={[estilos.td, estilos.cellHora]}>{item.hora}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  body: { flex: 1, backgroundColor: "#f4f7f6", justifyContent: "center", alignItems: "center", padding: 20 },
  container: { backgroundColor: "#ffffff", padding: 20, borderRadius: 12, width: "100%", maxWidth: 380, elevation: 4, alignItems: "center" },
  h1: { fontSize: 20, fontWeight: "bold", color: "#333", textAlign: "center", marginBottom: 8 },
  description: { fontSize: 13, color: "#666", textAlign: "center", marginBottom: 15 },
  counterBox: { fontSize: 48, color: "#2196F3", fontWeight: "bold", marginBottom: 15 },
  btnClick: { backgroundColor: "#4CAF50", padding: 10, borderRadius: 8, width: "100%", alignItems: "center", marginBottom: 10 },
  btnText: { color: "white", fontSize: 15, fontWeight: "bold" },
  tableContainer: { width: "100%", maxHeight: 160, borderWidth: 1, borderColor: "#ddd", borderRadius: 6 },
  tableHeader: { flexDirection: "row", backgroundColor: "#f8f9fa", borderBottomWidth: 1, borderBottomColor: "#ddd", paddingVertical: 6 },
  tableBody: { maxHeight: 110 },
  tr: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#eee", paddingVertical: 6 },
  td: { fontSize: 12, color: "#333", textAlign: "center" },
  th: { fontSize: 12, fontWeight: "bold", color: "#333", textAlign: "center" },
  cellNumero: { flex: 1 },
  cellHora: { flex: 1.5 },
});