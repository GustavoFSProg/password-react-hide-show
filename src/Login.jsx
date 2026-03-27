// import api from "@/apí";
// import { useEffect, useState } from "react";

// import Header from "../../components/Header";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [users, setUsers] = useState([]);

//   async function Login() {
//     try {
//       const dados = { email, password };
//       const { data } = await api.post("/login", dados);
//       if (!data) {
//         return console.log("Erro no login!");
//       }

//       return console.log("Login realizado com sucesso!", data.data.email);
//     } catch (error) {
//       return console.log("Erro ao realizar login!", error);
//     }
//   }

//   async function GetUsers() {
//     try {
//       const { data } = await api.get("/get-users");

//       setUsers(data.data);

//       return console.log("USUARIOS!!");
//     } catch (error) {
//       return alert("Erro ao realizar login!");
//     }
//   }

//   useEffect(() => {
//     GetUsers();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Header name="Gustavo Sohne" />
//       <View
//         style={{
//           alignItems: "center",
//           width: "100vw",
//           flexDirection: "column",

//           justifyContent: "center",
//           display: "flex",
//           height: "auto",
//         }}
//       >
//         <Text style={styles.title}>Página de LOGIN</Text>
//         <input
//           placeholder="Email"
//           value={email}
//                     onChange={(e) => setEmail(e.target.value)}

//           // onChangeText={(e) => setEmail(e.target.value)}
//         />

//         <input
//           placeholder="Senha"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           // onChangeText={(e) => setPassword(e.target.value)}
//           // style={{
//           //   display: "flex",
//           //   width: "80%",
//           //   height: 8,
//           //   backgroundColor: "yellow",
//           //   color: "black",
//           // }}
//         />
//         {/* <TextInput
//           style={styles.input}
//           placeholder="Nome Completo..."
//           value={name}
//           onChangeText={setName}
//         /> */}

//         <View style={{ display: "flex", alignItems: "center" }}>
//           <TouchableOpacity style={styles.button} onPress={Login}>
//             {/* <Link */}
//             {/* // href="/home" */}
//             {/* // style={{ */}
//             {/* //   width: 100,
//                 //   fontSize: 24,
//                 //   backgroundColor: "lightgray",
//                 //   cursor: "pointer",
//                 //   marginTop: 20,
//                 // }}
//               > */}
//             <Text style={{ color: "white" }}>CLIQUE PARA LOGAR </Text>
//             {/* </Link> */}
//           </TouchableOpacity>
//           <View>
//             {users.map((item): any => (
//               <View key={item.id}>
//                 <Text style={{ color: "black" }}>{item.name}</Text>
//                 <Text style={{ color: "black" }}>{item.email}</Text>
//               </View>
//             ))}
//           </View>

//           {/* <View style={{ display: "flex", alignItems: "center" }}>
//             <Link
//               href="/home"
//               style={{width:100, fontSize: 24,backgroundColor: "lightgray", cursor: "pointer", marginTop: 20 }}
//             >
//               HOME
//             </Link>
//           </View> */}
//         </View>
//       </View>
//     </View>
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginLeft: 15,
//     marginRight: 15,
//     marginTop: 14,
//   },

//   button: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginTop: 5,
//     width: 200,
//     height: 50,
//     backgroundColor: "#8000ff",
//     color: "white",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 8,
//   },
// });
