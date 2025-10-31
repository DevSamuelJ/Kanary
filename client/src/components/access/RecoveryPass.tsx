import { SlArrowLeftCircle, SlEnvolope } from "react-icons/sl";
import { useState } from "react";
import Input from "../elements/CustomInput";
import logoKanary from "../../assets/img/logoKanaryWhite.png";


const RecoveryPass = ({
  children,
  isRecoveryPassVisible,
  handleBack,
}: {
  children?: React.ReactNode;
  isRecoveryPassVisible: boolean;
  handleBack: () => void;
}) => {

  const [formData, setFormData] = useState({email: ""});
  const handleFormSubmit = () => { 
    console.log('envie essas informações para o servidor'); 
    console.log(formData);
  };

  return (
    <div>
      <main
        className={`${
          isRecoveryPassVisible
            ? "flex justify-center w-screen h-screen items-center"
            : "hidden"
        }`}
      >
        <div className="w-[550px] h-[520px] bg-linear-to-t from-[#536493] via-[#7884b3] to-[#000F36] rounded-[3rem] ring-1 ring-white flex flex-col items-center shadow-x1/30">
          <SlArrowLeftCircle
            className="text-white/50 size-7 mt-8 ml-8 self-start hover:text-white hover:cursor-pointer"
            onClick={() => {
              handleBack();
            }}
          />
          <div className="flex flex-col items-center h-[calc(100%-120px)] justify-center w-[300px]">
            <img
              src={logoKanary}
              alt="logolight"
              className="w-[180px] h-[62px]"
            />
            <div className="w-[100%] text-center flex flex-col">
              <h1 className="font-bold text-2xl mb-2 text-white">Recupere sua senha!</h1>
              <form action={handleFormSubmit} className="flex flex-col">
                <Input
                  type="Email"
                  name="email"
                  placeholder="Digite o seu e-mail"
                  onchange={(e) => setFormData({...formData, email: e.target.value})}
                  Icon={<SlEnvolope />}
                />
                <button
                  type="submit"
                  className="bg-black text-white pt-1 pb-1 rounded-lg cursor-pointer hover:opacity-70"
                >
                  Recuperar
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      {children}
    </div>
  );
};

export default RecoveryPass;
