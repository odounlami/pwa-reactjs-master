import React, { useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Heading, Img, Text, Button, Input } from "../../components";
import { AuthContext } from "../../helpers/appContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setLogged } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
      console.log(response.data);
      const token = response.data.data.token;
      localStorage.setItem("token", token);
      Cookies.set("token", token, { expires: 7 });
      setLogged(true);
      window.location.href = "/pourtoi";
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 422) {
        setError("Le mot de passe doit contenir au moins 6 caractères.");
      } else if (error.response && error.response.status === 401) {
        setError("Email ou mot de passe erronés. Veuillez ré-essayer");
      } else {
        setError("Une erreur s'est produite. Re-essayez plus tard");
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
            <div className="flex flex-col items-center w-[41%] md:w-full mt-[130px] ml-[267px] md:ml-0">
              <div className="flex self-stretch justify-start p-[11px]">
                <div className="flex mt-2">
                  <Heading as="h1" className="self-end tracking-[-0.33px]">
                    Log in to your account
                  </Heading>
                </div>
              </div>
              <div className="self-stretch p-3">
                <div>
                  <div className="flex flex-col">
                    <div className="flex self-start">
                      <Text size="xs" as="p" className="mb-2 !text-white-A700">
                        Email
                      </Text>
                    </div>
                    <Input
                      shape="round"
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={`Entrez votre email`}
                      className="sm:pr-5"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch p-3">
                <div>
                  <div className="flex flex-col">
                    <div className="flex self-start">
                      <Text size="xs" as="p" className="self-start mb-1 !text-white-A700">
                        Mot de passe
                      </Text>
                    </div>
                    <Input
                      shape="round"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={`Entrez votre mot de passe`}
                      className="sm:pr-5"
                    />
                  </div>
                </div>
              </div>
              {error && <div className="text-red-500">{error}</div>}
              <Button shape="round" className="mt-3 sm:px-5 min-w-[94%]" onClick={handleLogin}>
                Log in
              </Button>
              <div className="flex justify-center mt-3 p-1">
                <a href="https://www.google.com" className="self-start mb-[3px]">
                  <Text as="p">Forgot your password?</Text>
                </a>
              </div>
              <div className="flex self-stretch justify-center">
                <div className="flex self-start justify-center mb-1">
                  <Text as="p">
                    <a href="/signup" className="text-red_200 underline">
                      Sign up
                    </a>
                  </Text>
                </div>
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
