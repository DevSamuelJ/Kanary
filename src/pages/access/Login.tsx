import { useState } from "react";
import { SlEnvolope, SlLock } from "react-icons/sl";

import { Input } from "../../components/ui/CustomInput";
import { CustomButton } from "../../components/ui/CustomButton";
import { useNavigate } from "react-router";

export function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleFormSubmit = () => {
    console.log("envie essas informações para o servidor");
    console.log(formData);
  };

  return (
    <div className="bg-cover bg-center h-screen bg-[url(src/assets/img/backgroundDARK.png)]">
      <section className="flex justify-center w-screen h-screen items-center">
        <div className=" w-[550px] h-[520px] bg-linear-to-t from-[#1A4C84]/50 via-[#2C82BD]/50 to-[#00102B]/50 backdrop-blur-sm rounded-[3rem] ring-1 ring-white/40 flex flex-col items-center">
          <div className="flex flex-col items-center h-full justify-center">
            <img
              src="/src/assets/img/logoKanaryWhiteSmall.png"
              alt="logolight"
              className="w-[180px] h-[62px]"
            />
            <div className="w-full text-center flex flex-col">
              <h1 className="font-bold text-2xl text-white">
                Login com seu e-mail
              </h1>
              <p className="font-thin text-base mb-5 text-white">
                {" "}
                Produtividade simples, equipes mais fortes. <br />{" "}
                Eficiência de graça!{" "}
              </p>
              <form action={handleFormSubmit} className="flex flex-col">
                <Input
                  type="Email"
                  name="email"
                  placeholder="E-mail"
                  onchange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  Icon={<SlEnvolope />}
                />
                <Input
                  type="Password"
                  name="password"
                  placeholder="Senha"
                  onchange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  Icon={<SlLock />}
                />
                <p
                  onClick={() => navigate("../Kanary/recoverypass")}
                  className="text-xs font-thin self-end mb-3 mt-[-10px] hover:underline cursor-pointer text-white"
                >
                  Esqueci minha senha
                </p>
                <CustomButton children="Login" />
              </form>
              <p
                onClick={() => navigate("../Kanary/register")}
                className="text-xs font-thin self-center mt-2 text-white"
              >
                Ainda sem cadastro?{" "}
                <span className="cursor-pointer hover:underline font-bold">
                  Cadastre-se
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
