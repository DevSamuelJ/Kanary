import { useState } from "react";
import { SlEnvolope, SlLock } from "react-icons/sl";

import CustomButton from "../ui/CustomButton";
import RecoveryPass from "./RecoveryPass";
import Register from "./Register";
import Input from "../ui/CustomInput";

import backgroundDark from "../../assets/img/backgroundDARK.png";
import logoKanary from "../../assets/img/logoKanaryWhite.png";

export function Login() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isRecoveryPassVisible, setIsRecoveryPassVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleFormSubmit = () => {
    console.log("envie essas informações para o servidor");
    console.log(formData);
  };

  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${backgroundDark})` }}
      >
        <RecoveryPass
          isRecoveryPassVisible={isRecoveryPassVisible}
          handleBack={() => {
            setIsRecoveryPassVisible(false);
            setIsLoginVisible(true);
          }}
        >
          <Register
            isRegisterVisible={isRegisterVisible}
            handleBack={() => {
              setIsRegisterVisible(false);
              setIsLoginVisible(true);
            }}
          >
            <main
              className={`${
                isLoginVisible
                  ? "flex justify-center w-screen h-screen items-center"
                  : "hidden"
              }`}
            >
              <div className=" w-[550px] h-[520px] bg-linear-to-t from-[#1A4C84]/50 via-[#2C82BD]/50 to-[#00102B]/50 backdrop-blur-sm rounded-[3rem] ring-1 ring-white/40 flex flex-col items-center">
                <div className="flex flex-col items-center h-full justify-center">
                  <img
                    src={logoKanary}
                    alt="logolight"
                    className="w-[180px] h-[62px]"
                  />
                  <div className="w-[100%] text-center flex flex-col">
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
                        onClick={() => {
                          setIsRecoveryPassVisible(!isRecoveryPassVisible);
                          setIsLoginVisible(!isLoginVisible);
                        }}
                        className="text-xs font-thin self-end mb-3 mt-[-10px] hover:underline cursor-pointer text-white"
                      >
                        Esqueci minha senha
                      </p>
                      <CustomButton label="Login" />
                    </form>
                    <p
                      onClick={() => {
                        setIsRegisterVisible(!isRegisterVisible);
                        setIsLoginVisible(!isLoginVisible);
                      }}
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
            </main>
          </Register>
        </RecoveryPass>
      </div>
    </>
  );
}
