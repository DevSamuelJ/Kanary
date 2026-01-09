import { SlArrowLeftCircle, SlEnvolope } from "react-icons/sl";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "../../components/ui/CustomInput";

export const RecoveryPass = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "" });
  
  const handleFormSubmit = () => {
    console.log("envie essas informações para o servidor");
    console.log(formData);
  };

  return (
    <div className="bg-cover bg-center h-screen bg-[url(src/assets/img/backgroundDARK.png)]">
      <section className="flex justify-center w-screen h-screen items-center">
        <div className="w-[550px] h-[520px] bg-linear-to-t from-[#1A4C84]/50 via-[#2C82BD]/50 to-[#00102B]/50 backdrop-blur-sm rounded-[3rem] ring-1 ring-white/40 flex flex-col items-center shadow-x1/30">
          <SlArrowLeftCircle
            className="text-white/50 size-7 mt-8 ml-8 self-start hover:text-white hover:cursor-pointer"
            onClick={() => navigate("../Kanary/login")}
          />
          <div className="flex flex-col items-center h-[calc(100%-120px)] justify-center w-[300px]">
            <img
              src="/src/assets/img/logoKanaryWhiteSmall.png"
              alt="logolight"
              className="w-[180px] h-[62px]"
            />
            <div className="w-[100%] text-center flex flex-col">
              <h1 className="font-bold text-2xl mb-2 text-white">
                Recupere sua senha!
              </h1>
              <form action={handleFormSubmit} className="flex flex-col">
                <Input
                  type="Email"
                  name="email"
                  placeholder="Digite o seu e-mail"
                  onchange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
      </section>
    </div>
  );
}
