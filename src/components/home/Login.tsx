import { useState } from "react";
import { SlEnvolope, SlLock } from "react-icons/sl";

import CustomButton from "../CustomButton";
import RecoveryPass from "./RecoveryPass";
import Register from "./Register"
import Input from "./Input";

import backgroundLight from "../../assets/img/backgroundLIGHT.png";
import logoKanary from "../../assets/img/logoKanarySemFundo.png";


export function Login() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isRecoveryPassVisible, setIsRecoveryPassVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  const [formData, setFormData] = useState({email: "", password: ""});
  const handleFormSubmit = () => { console.log('envie essas informações para o servidor'); console.log(formData);};

  return (
    <>
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundLight})` }}>
        <RecoveryPass isRecoveryPassVisible={isRecoveryPassVisible} handleBack={() => { setIsRecoveryPassVisible(false); setIsLoginVisible(true); }}>
        <Register isRegisterVisible={isRegisterVisible} handleBack={() => { setIsRegisterVisible(false); setIsLoginVisible(true); }}>
          <main className={`${ isLoginVisible ? "flex justify-center w-screen h-screen items-center" : "hidden" }`}>
            <div className=" w-[650px] h-[620px] bg-linear-to-t from-white to-sky-300 rounded-[3rem] ring-1 ring-white flex flex-col items-center shadow-x1/30">
              <div className="flex flex-col items-center m-[100px]">
                <img src={logoKanary} alt="logolight" className="w-50 h-30 rounded-xl" />
                <div className="w-[100%] text-center flex flex-col">
                  <h1 className="font-bold text-2xl">Login com seu e-mail</h1>
                  <p className="font-thin text-base mb-5"> Produtividade simples, equipes mais fortes. <br /> Eficiência de graça! </p>
                  <form action={handleFormSubmit} className="flex flex-col">
                    <Input type="Email" name="email" placeholder="E-mail" onchange={(e) => { setFormData({ ...formData, email: e.target.value });}} Icon={<SlEnvolope/>} />
                    <Input type="Password" name="password" placeholder="Senha" onchange={(e) => { setFormData({ ...formData, password: e.target.value });}} Icon={ <SlLock/> } />
                    <p 
                      onClick={() => { setIsRecoveryPassVisible(!isRecoveryPassVisible); setIsLoginVisible(!isLoginVisible); }} 
                      className="text-xs font-thin self-end mb-5 mt-[-10px] hover:underline cursor-pointer"> Esqueci minha senha
                    </p>
                    <CustomButton label="Login" />
                  </form>
                    <p onClick={() => { setIsRegisterVisible(!isRegisterVisible); setIsLoginVisible(!isLoginVisible); }}
                      className="text-xs font-thin self-center  mt-2 ">
                      Ainda sem cadastro? <span className="cursor-pointer hover:underline font-bold">Cadastre-se</span>
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
