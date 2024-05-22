import React, { useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Heading, Img, Text, Button, Input } from "../../components";
import { AuthContext } from "../../helpers/appContext";

export default function SignPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    sexe: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    filiere: "",
    matricule: "",
    pseudo: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {setLogged} = useContext(AuthContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        nom: formData.nom,
        prenom: formData.prenom,
        sexe: formData.sexe,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        filiere: formData.filiere,
        matricule: formData.matricule,
        pseudo: formData.pseudo,
      });
      console.log(response.data);
      const token = response.data.data.token;
      setLogged(true);
      localStorage.setItem("token", token);
      Cookies.set("token", token, { expires: 7 });
      navigate("/pourtoi");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 422) {
        setError("Erreur de validation. Veuillez vérifier vos informations.");
      } else {
        setError("Une erreur inattendue est survenue. Veuillez réessayer plus tard.");
      }
    }
  };

  return (
    <>
      <div className="w-full bg-gray-900">
        <div>
          <header className="flex justify-start items-center px-[21px] py-2 sm:p-5 border-gray-200 border-b border-solid">
            <div className="flex justify-center items-center w-[19%] md:w-full mt-[3px] ml-3 gap-2">
              <Img src="images/img_vector_0.svg" alt="vectorzero_one" className="flex justify-center h-[30px]" />
              <div className="flex pr-[179px] md:pr-5">
                <Heading size="s" as="h1" className="tracking-[-0.27px] !text-3xl">
                  ESGIS
                </Heading>
              </div>
            </div>
          </header>
          <div className="flex md:flex-col justify-center items-center gap-y-[33px] gap-x-[50px] ml-[-211px] p-[60px] md:p-5">
            <div className="flex flex-col items-center w-[41%] md:w-full mt-[13px] ml-[267px] md:ml-0">
              <div className="flex self-stretch justify-start p-[11px]">
                <div className="flex mt-2">
                  <Heading as="h1" className="self-end tracking-[-0.33px]">
                    Création de compte
                  </Heading>
                </div>
              </div>
              <form className="self-stretch p-3" onSubmit={handleRegister}>
                <div>
                  <div className="flex flex-col">
                    <div className="flex self-start">
                      <Text size="xs" as="p" className="mb-2 !text-white-A700">
                        Informations de l'étudiant
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 pr-3">
                      <Input
                        shape="round"
                        type="text"
                        name="nom"
                        placeholder="Nom"
                        className="sm:pr-5"
                        value={formData.nom}
                        onChange={handleChange}
                      />

                        <Input
                        shape="round"
                        type="text"
                        name="prenom"
                        placeholder="Prénom"
                        className="sm:pr-5"
                        value={formData.prenom}
                        onChange={handleChange}
                      />

                      <Input
                            shape="round"
                            type="text"
                            name="sexe"
                            placeholder="Sexe"
                            className="sm:pr-5"
                            value={formData.sexe}
                            onChange={handleChange}
                          />

                           <Input
                        shape="round"
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="sm:pr-5"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <Input
                        shape="round"
                        type="password"
                        name="password"
                        placeholder="Entrez votre mot de passe"
                        className="sm:pr-5"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <Input
                        shape="round"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmez votre mot de passe"
                        className="sm:pr-5"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />                   
                    </div>
                  </div>
                </div>
                <div className="self-stretch p-3">
                  <div>
                    <div className="flex flex-col gap-4 pr-3">
                    </div>
                  </div>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <Button shape="round" className="mt-3 sm:px-5 min-w-[100%]" type="submit">
                  Créer
                </Button>
              </form>
              <div className="flex justify-center mt-3 p-1">
                <a href="/login" className="self-start mb-[3px]">
                  <Text as="p">J'ai un compte !</Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[49%] md:w-full mb-[-12px] mr-auto gap-y-[103px] gap-x-[100px] p-[53px] md:gap-[75px] md:mr-0 md:p-5 sm:gap-[50px]">
              <div className="self-stretch mt-[43px] p-3">
                <div className="bg-gray-900">
                  <Img
                    src="images/img_depth_7_frame_0.png"
                    alt="image"
                    className="h-[218px] w-full md:h-auto object-cover rounded-[12px]"
                  />
                </div>
              </div>
              <Heading as="h2" className="w-[85%] md:w-full mb-[43px] tracking-[-0.33px] text-center">
                <>
                  Esgis blzblablabalba
                  <br />
                  balabalbalalbalbal
                  <br />
                  vfzjbkjgbklbgozbflezfnezlnfe
                </>
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
