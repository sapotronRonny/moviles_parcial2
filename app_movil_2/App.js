import { UserProvider} from "./contexts/UserContext";
import Router from "./routes/router";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return <Router />
// }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
