import { SlEnvolope, SlLock, SlUser, SlArrowLeftCircle } from "react-icons/sl";
import { useState } from "react";
import CustomButton from "../CustomButton";
import backgroundLight from "../../assets/img/backgroundLIGHT.png";
import logoKanary from "../../assets/img/logoKanarySemFundo.png";

import Input from "./Input";

export default function Register({children, isRegisterVisible, handleBack}:{
    children?: React.ReactNode;
    isRegisterVisible: boolean;
    handleBack: () => void; 
}) {

  const [formData, setFormData] = useState({user:"", email: "", password:"", confirmPassword:""});
  const handleFormSubmit = () => { console.log('envie essas informações para o servidor'); console.log(formData);};
  
  return (
    <>
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundLight})` }}>
        <main className={`${ isRegisterVisible ? "flex justify-center w-screen h-screen items-center" : "hidden" }`}>
          <div className=" w-[650px] h-[620px] bg-linear-to-t from-white to-sky-300 rounded-[3rem] ring-1 ring-white flex flex-col items-center shadow-x1/30">
            <SlArrowLeftCircle className="text-black/50 size-7 mt-8 ml-8 self-start hover:text-white hover:cursor-pointer" onClick={() => {handleBack()}}/>
            <div className="flex flex-col items-center m-[50px]">
              <img src={logoKanary} alt="logolight" className="w-50 h-30 rounded-xl"/>
              <div className="w-[100%] text-center flex flex-col">
                <h1 className="font-bold text-2xl">Cadastre o seu usuario!</h1>
                <p className="font-thin text-base mb-5">Entre e seja mais um entre nossos mais de <b>mil</b> usuários.</p>
                <form action={handleFormSubmit} className="flex flex-col">

                  {/* div para input de usuario */}
                  <Input type="Text" name="user" placeholder="Nome de usuário" onchange={(e) => setFormData({...formData, user: e.target.value})} Icon = {<SlUser/>} />

                  {/* div para input de email */}
                  <Input type="Email" name="email" placeholder="Email para cadastro" onchange={(e) => setFormData({...formData, email: e.target.value})}  Icon = {<SlEnvolope/>} />

                  {/* div para input de senha */}
                  <Input type="Password" name="password" placeholder="Senha de cadastro" onchange={(e) => setFormData({...formData, password: e.target.value})} Icon = {<SlLock/>} />

                  {/* div para input da confirmação de senha */}
                  <Input type="Password"  name="confirmPassword" placeholder="Confirme a senha digitada" onchange={(e) => setFormData({...formData, confirmPassword: e.target.value})} Icon = {<SlLock/>} />

                  <CustomButton label="Cadastrar usuário" />
                </form>
              </div>
            </div>
          </div>
        </main>
      {children}
      </div>
    </>
  );
}
