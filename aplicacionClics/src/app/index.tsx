import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);
  const [registros, setRegistros] = useState<any[]>([]);

  // Función para incrementar el contador y registrar el evento
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

  // Función del Reto 1: Restar Likes con validación para no bajar de 0
  const decrementarContador = () => {
    if (contador > 0) {
      const nuevoContador = contador - 1;
      const ahora = new Date();
      const horaFormateada = ahora.toLocaleTimeString();

      setContador(nuevoContador);

      const nuevoRegistro = {
        id: Date.now().toString(),
        numero: nuevoContador,
        hora: `${horaFormateada} (Restado)`,
      };

      setRegistros([nuevoRegistro, ...registros]);
    }
  };

  // Función del Reto 2: Detectar si el contador supera 10 para cambiar de color
  const esAlerta = contador > 10;

  return (
    <View style={estilos.body}>
      <View style={estilos.container}>
        
        {/* Encabezado */}
        <Text style={estilos.h1}>Interactividad con el DOM</Text>
        <Text style={estilos.description}>
          Haz clic para sumar o restar clics. Al pasar de 10, el contador cambia de color (Retos del SENA).
        </Text>
        
        {/* Pantalla del Contador */}
        <Text style={[estilos.counterBox, esAlerta ? estilos.counterAlert : null]}>
          {contador}
        </Text>

        {/* Botón de Sumar */}
        <TouchableOpacity style={estilos.btnClick} onPress={incrementarContador}>
          <Text style={estilos.btnText}>¡Sumar Clic (+)</Text>
        </TouchableOpacity>

        {/* Botón de Restar (Reto 1) */}
        <TouchableOpacity style={estilos.btnRestar} onPress={decrementarContador}>
          <Text style={estilos.btnText}>Restar Clic (-)</Text>
        </TouchableOpacity>

        {/* Historial de Interacciones */}
        <View style={estilos.tableContainer}>
          <View style={estilos.tableHeader}>
            <Text style={[estilos.th, estilos.cellNumero]}>N° Clic</Text>
            <Text style={[estilos.th, estilos.cellHora]}>Hora / Acción</Text>
          </View>

          <ScrollView style={estilos.tableBody}>
            {registros.map((item, index) => (
              <View 
                key={item.id} 
                style={[estilos.tr, index % 2 === 0 ? estilos.trEven : null]}
              >
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

// Estilos de la aplicación ordenados de manera limpia y legible
const estilos = StyleSheet.create({
  body: { 
    alignItems: "center", 
    backgroundColor: "#f4f7f6", 
    flex: 1, 
    justifyContent: "center", 
    padding: 20 
  },
  btnClick: { 
    alignItems: "center", 
    backgroundColor: "#4CAF50", 
    borderRadius: 8, 
    marginBottom: 10, 
    padding: 10, 
    width: "100%" 
  },
  btnRestar: { 
    alignItems: "center", 
    backgroundColor: "#FF5722", 
    borderRadius: 8, 
    marginBottom: 15, 
    padding: 10, 
    width: "100%" 
  },
  btnText: { 
    color: "white", 
    fontSize: 15, 
    fontWeight: "bold" 
  },
  cellHora: { 
    flex: 1.5 
  },
  cellNumero: { 
    flex: 1 
  },
  container: { 
    alignItems: "center", 
    backgroundColor: "#ffffff", 
    borderRadius: 12, 
    elevation: 4, 
    maxWidth: 380, 
    padding: 20, 
    width: "100%" 
  },
  counterAlert: { 
    color: "#E91E63" 
  },
  counterBox: { 
    color: "#2196F3", 
    fontSize: 48, 
    fontWeight: "bold", 
    marginBottom: 15 
  },
  description: { 
    color: "#666", 
    fontSize: 13, 
    marginBottom: 15, 
    textAlign: "center" 
  },
  h1: { 
    color: "#333", 
    fontSize: 20, 
    fontWeight: "bold", 
    marginBottom: 8, 
    textAlign: "center" 
  },
  tableBody: { 
    maxHeight: 110 
  },
  tableContainer: { 
    borderColor: "#ddd", 
    borderRadius: 6, 
    borderWidth: 1, 
    maxHeight: 160, 
    width: "100%" 
  },
  tableHeader: { 
    backgroundColor: "#f8f9fa", 
    borderBottomColor: "#ddd", 
    borderBottomWidth: 1, 
    flexDirection: "row", 
    paddingVertical: 6 
  },
  td: { 
    color: "#333", 
    fontSize: 12, 
    textAlign: "center" 
  },
  th: { 
    color: "#333", 
    fontSize: 12, 
    fontWeight: "bold", 
    textAlign: "center" 
  },
  tr: { 
    borderBottomColor: "#eee", 
    borderBottomWidth: 1, 
    flexDirection: "row", 
    paddingVertical: 6 
  },
  trEven: { 
    backgroundColor: "#fafafa" 
  },
});