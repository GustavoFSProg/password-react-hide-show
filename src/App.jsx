import api from "../src/apí";
import { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hideSenha, setHideSenha] = useState(false);

  const [users, setUsers] = useState([]);

  async function Login(event) {
    event.preventDefault();
    try {
      console.log("Entrou no Login");
      // const dados = { email: email, password: password };
      const { data } = await api.post("/login", {
        email: email,
        password: password,
      });
      if (!data) {
        return console.log("Erro no login!");
      }

      return console.log("Login realizado com sucesso!", data.email);
    } catch (error) {
      return console.log("Erro ao realizar login!", error);
    }
  }

  async function GetUsers() {
    try {
      const { data } = await api.get("/get-users");

      setUsers(data.data);

      // return console.log("USUARIOS!!");
    } catch (error) {
      return alert("Erro ao realizar login!");
    }
  }

  useEffect(() => {
    GetUsers();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        width: "100vw",
        heigh: "100vh",
        alignItems: "center",
      }}
    >
      <div
        style={{
          alignItems: "center",
          width: "100vw",
          flexDirection: "column",

          justifyContent: "center",
          display: "flex",
          height: "auto",
        }}
      >
        <p>Página de LOGIN</p>
        <form onSubmit={Login}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

            // onChangeText={(e) => setEmail(e.target.value)}
          />
          {/* <button onClick={() => setHideSenha("password")}>
            MUDAR TEXTO SENHA
          </button> */}

          <button onClick={() => setHideSenha(!hideSenha)}>
            MUDAR TEXTO PARA LETRAS
          </button>

          <input
            type={hideSenha === true ? "text" : "password"}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // onChangeText={(e) => setPassword(e.target.value)}
            // style={{
            //   display: "flex",
            //   width: "80%",
            //   height: 8,
            //   backgroundColor: "yellow",
            //   color: "black",
            // }}
          />
          {/* <TextInput
          style={styles.input}
          placeholder="Nome Completo..."
          value={name}
          onChangeText={setName}
        /> */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "white",
              color: "black",
            }}
          >
            <button type="submit">
              {/* <Link */}
              {/* // href="/home" */}
              {/* // style={{ */}
              {/* //   width: 100,
                //   fontSize: 24,
                //   backgroundColor: "lightgray",
                //   cursor: "pointer",
                //   marginTop: 20,
                // }}
              > */}
              CLIQUE PARA LOGAR
              {/* </Link> */}
            </button>
          </div>
        </form>

        <div>
          {users.map((item) => (
            <div key={item.id}>
              <p style={{ color: "black" }}>{item.name}</p>
              <p style={{ color: "black" }}>{item.email}</p>
            </div>
          ))}
        </div>

        {/* <View style={{ display: "flex", alignItems: "center" }}>
            <Link
              href="/home"
              style={{width:100, fontSize: 24,backgroundColor: "lightgray", cursor: "pointer", marginTop: 20 }}
            >
              HOME
            </Link>
          </View> */}
      </div>
    </div>
    // </View>
  );
}
