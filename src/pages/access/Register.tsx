import { SlEnvolope, SlLock, SlUser, SlArrowLeftCircle } from "react-icons/sl";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "../../components/ui/CustomInput";
import { CustomButton } from "../../components/ui/CustomButton";


export function Register() {

  const navigate = useNavigate();
  const [message, setMessage] = useState("")

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    tipo: "COLABORADOR"
  });

  const [confirmPass, setPass] = useState("")


  // const handleFormSubmit = () => {
  //   console.log("envie essas informações para o servidor");
  //   console.log(formData);
  // };

    const handleFormSubmit = async () => {
    console.log("envie essas informações para o servidor");


    if (formData.senha === confirmPass){
      setMessage("Logando...")
      console.log(formData)
      const url = "https://kanarybackend.discloud.app/usuarios";
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
    }else{
      setMessage("A senhas não coincidem, tente novamente.")

    }
  }


    const testeApi = async() =>{
    const url = "https://kanarybackend.discloud.app/usuarios";
    await fetch(url)
    .then(promisse => promisse.json())
    .then(data => data.map((usuario:string)=>(console.log(usuario))))
    }







  return (
    <div className="bg-cover bg-center h-screen bg-[url(src/assets/img/backgroundDARK.png)]">
      <section className="flex justify-center w-screen h-screen items-center">
        <div className=" w-[550px] h-[520px] bg-linear-to-t from-[#1A4C84]/50 via-[#2C82BD]/50 to-[#00102B]/50 backdrop-blur-sm rounded-[3rem] ring-1 ring-white/40 flex flex-col items-center shadow-x1/30">
          <SlArrowLeftCircle
            className="text-white/50 size-7 mt-8 ml-8 self-start hover:text-white hover:cursor-pointer"
            onClick={() => navigate("../Kanary/login")}
          />
          <div className="flex flex-col items-center h-[calc(100%-120px)] justify-center">
            <img
              src="/src/assets/img/logoKanaryWhiteSmall.png"
              alt="logolight"
              className="w-[180px] h-[62px]"
            />
            <div className="w-[100%] text-center flex flex-col">
              <h1 className="font-bold text-2xl text-white">
                Cadastre o seu usuario!
              </h1>
              <p className="font-thin text-base mb-5 text-white">
                Entre e seja mais um entre nossos mais de <b>mil</b> usuários.
              </p>
              <form action={handleFormSubmit} className="flex flex-col">
                {/* div para input de usuario */}
                <Input
                  type="Text"
                  name="user"
                  placeholder="Nome de usuário"
                  onchange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  Icon={<SlUser />}
                />

                {/* div para input de email */}
                <Input
                  type="Email"
                  name="email"
                  placeholder="Email para cadastro"
                  onchange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  Icon={<SlEnvolope />}
                />

                {/* div para input de senha */}
                <Input
                  type="Password"
                  name="senha"
                  placeholder="Senha de cadastro"
                  onchange={(e) =>
                    setFormData({ ...formData, senha: e.target.value })
                  }
                  Icon={<SlLock />}
                />

                {/* div para input da confirmação de senha */}
                <Input
                  type="Password"
                  name="confirmPassword"
                  placeholder="Confirme a senha digitada"
                  onchange={(e) =>
                    setPass(e.target.value)
                  }
                  Icon={<SlLock />}
                />
                <CustomButton children="Cadastrar usuário" />
                <p>{message}</p>

              </form>
                <p>Botão de debug da api:</p> <button onClick={()=>{testeApi()}} className="cursor-pointer" >Teste api</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
