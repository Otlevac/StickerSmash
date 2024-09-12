import { Pressable, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function IconButton({ icon, label, onPress }) {
  return ( 
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text> 
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});


// import { Text, Pressable, StyleSheet } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";



// export function IconButton({icon, label, onPress}) {
//   <Pressable style={styles.iconButton} onPress={onPress}>
//     <MaterialIcons name={icon} size={24} color="#fff"/>
//     <Text style={styles.iconButtonLabel}>{label}nnnnnn</Text>
//   </Pressable>

// }

// const styles = StyleSheet.create({
//   iconButton: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   iconButtonLabel: {
//     color: '#fff',
//     marginTop: 12,
//   },
// })