import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Login = (props) => {
  return (
    <>
      <div className="login-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="login-login">
          <div className="login-frame">
            <img
              src="/external/navbar2191-7f4d-200h.png"
              alt="NAVBAR2191"
              className="login-navbar"
            />
            <img
              src="/external/barralateral2191-3quu-300w.png"
              alt="Barralateral2191"
              className="login-barralateral"
            />
          </div>
          <span className="login-text Titulo">
            <span>Saturno</span>
          </span>
          <img
            src="/external/efeitoplanetaselecionado2191-ccxs-200h.png"
            alt="EfeitoPlanetaSelecionado2191"
            className="login-efeito-planeta-selecionado"
          />
          <div className="login-planetas">
            <img
              src="/external/planetneptune2191-clud.svg"
              alt="PlanetNeptune2191"
              className="login-planet-neptune"
            />
            <img
              src="/external/planetmercury2191-8xin.svg"
              alt="PlanetMercury2191"
              className="login-planet-mercury"
            />
            <img
              src="/external/planetvenus2191-9zc4.svg"
              alt="PlanetVenus2191"
              className="login-planet-venus"
            />
            <img
              src="/external/planetearth2191-orh8.svg"
              alt="PlanetEarth2191"
              className="login-planet-earth"
            />
            <img
              src="/external/planetmars2191-jy76.svg"
              alt="PlanetMars2191"
              className="login-planet-mars"
            />
            <img
              src="/external/planetjupiter2191-bnbh.svg"
              alt="PlanetJupiter2191"
              className="login-planet-jupiter"
            />
            <img
              src="/external/planetsaturn2191-i617.svg"
              alt="PlanetSaturn2191"
              className="login-planet-saturn"
            />
            <img
              src="/external/planetsaturn2191-5f8g.svg"
              alt="PlanetSaturn2191"
              className="login-planet-saturn1"
            />
          </div>
          <img
            src="/external/rectangle262191-a78-800w.png"
            alt="Rectangle262191"
            className="login-rectangle26"
          />
          <img
            src="/external/rectangle292191-hlem-800w.png"
            alt="Rectangle292191"
            className="login-rectangle29"
          />
          <span className="login-text02">
            <span>Esqueceu a senha?</span>
          </span>
          <span className="login-text04">
            <span>Ou faça login com</span>
          </span>
          <span className="login-text06">
            <span className="login-text07">
              Não é registrado ainda ?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Crie uma conta</span>
          </span>
          <img
            src="/external/googlelogo2191-7qe.svg"
            alt="googlelogo2191"
            className="login-googlelogo"
          />
          <span className="login-text09">
            <span>Endereço de email</span>
          </span>
          <span className="login-text11">
            <span>Senha</span>
          </span>
          <span className="login-text13">
            <span>
              Login
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="login-text15">
            <span>Google</span>
          </span>
          <span className="login-text17">
            <span>Email</span>
          </span>
          <span className="login-text19">
            <span> Login com Email</span>
          </span>
          <Link href="/principal">
          <button className="login-button">
            <div className="login-content">
              <span className="login-text21">
                <span>Login</span>
              </span>
            </div>
          </button>
          </Link>
          <button className="login-button1">
            <div className="login-content1">
              <span className="login-text23">
                <span>Email</span>
              </span>
            </div>
          </button>
          <button className="login-button2">
            <div className="login-content2">
              <span className="login-text25">
                <span>Número de Celular</span>
              </span>
            </div>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .login-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .login-login {
            width: 100%;
            height: 1080px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .login-frame {
            top: 0px;
            left: -1px;
            width: 1921px;
            height: 1080px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .login-navbar {
            top: 0px;
            left: 1px;
            width: 1920px;
            height: 125px;
            position: absolute;
          }
          .login-barralateral {
            top: 125px;
            left: 0px;
            width: 272px;
            height: 955px;
            position: absolute;
          }
          .login-text {
            top: 181px;
            left: 47px;
            color: rgba(255, 255, 255, 1);
            width: 174px;
            height: auto;
            position: absolute;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            text-align: center;
            line-height: normal;
          }
          .login-efeito-planeta-selecionado {
            top: 25px;
            left: 1211px;
            width: 90px;
            height: 90px;
            position: absolute;
          }
          .login-planetas {
            top: 28px;
            left: 82px;
            width: 1324px;
            height: 139px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .login-planet-neptune {
            top: 2px;
            left: 1244px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .login-planet-mercury {
            top: 0px;
            left: 596px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .login-planet-venus {
            top: 0px;
            left: 704px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .login-planet-earth {
            top: 0px;
            left: 812px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .login-planet-mars {
            top: 0px;
            left: 920px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .login-planet-jupiter {
            top: 0px;
            left: 1028px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .login-planet-saturn {
            top: 0px;
            left: 1136px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .login-planet-saturn1 {
            top: 26px;
            left: 0px;
            width: 127px;
            height: 113px;
            position: absolute;
          }
          .login-rectangle26 {
            top: 418px;
            left: 678px;
            width: 714px;
            height: 55px;
            position: absolute;
            border-color: rgba(129, 129, 129, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
          }
          .login-rectangle29 {
            top: 510px;
            left: 678px;
            width: 714px;
            height: 55px;
            position: absolute;
            border-color: rgba(129, 129, 129, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
          }
          .login-text02 {
            top: 585px;
            left: 1225px;
            color: rgba(25, 1, 82, 1);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .login-text04 {
            top: 642px;
            left: 968px;
            color: rgba(116, 112, 112, 1);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .login-text06 {
            top: 910px;
            left: 863px;
            color: rgba(98, 98, 98, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .login-text07 {
            color: rgba(98, 98, 98, 1);
            font-weight: 400;
          }
          .login-googlelogo {
            top: 692px;
            left: 972px;
            width: 22px;
            height: 22px;
            position: absolute;
          }
          .login-text09 {
            top: 436px;
            left: 700px;
            color: rgba(110, 110, 110, 1);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .login-text11 {
            top: 525px;
            left: 700px;
            color: rgba(110, 110, 110, 1);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .login-text13 {
            top: 795px;
            left: 994px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 32px;
            font-style: SemiBold;
            text-align: left;
            font-family: Roboto;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .login-text15 {
            top: 685px;
            left: 1013px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Medium;
            text-align: left;
            font-family: Roboto;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .login-text17 {
            top: 310px;
            left: 827px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 32px;
            font-style: SemiBold;
            text-align: left;
            font-family: Roboto;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .login-text19 {
            top: 187px;
            left: 861px;
            color: rgba(16, 11, 80, 1);
            height: auto;
            position: absolute;
            font-size: 40px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .login-button {
            gap: 16px;
            top: 780px;
            left: 678px;
            width: 714px;
            height: 65px;
            display: flex;
            padding: 16px 32px;
            overflow: hidden;
            position: absolute;
            background: linear-gradient(
              0deg,
              rgba(16, 11, 80, 1) 0%,
              rgba(16, 11, 80, 1) 100%
            );
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(46, 34, 95, 0.6899999976158142);
            border-style: solid;
            border-width: 10px;
            border-radius: 8px;
            flex-direction: column;
          }
          .login-content {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .login-text21 {
            color: var(--dl-color-brand-white);
            height: auto;
            font-size: 24px;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .login-button1 {
            gap: 16px;
            top: 296px;
            left: 700px;
            width: 307px;
            height: 81px;
            display: flex;
            padding: 16px 32px;
            overflow: hidden;
            position: absolute;
            background: linear-gradient(
              0deg,
              rgba(16, 11, 80, 1) 0%,
              rgba(16, 11, 80, 1) 100%
            );
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(46, 34, 95, 0.6899999976158142);
            border-style: solid;
            border-width: 10px;
            border-radius: 8px;
            flex-direction: column;
          }
          .login-content1 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .login-text23 {
            color: var(--dl-color-brand-white);
            height: auto;
            font-size: 24px;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: 50px;
            font-stretch: normal;
            text-decoration: none;
          }
          .login-button2 {
            gap: 16px;
            top: 286px;
            left: 1059px;
            width: 307px;
            height: 81px;
            display: flex;
            padding: 16px 32px;
            overflow: hidden;
            position: absolute;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .login-content2 {
            gap: 50px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
          }
          .login-text25 {
            color: rgba(17, 12, 80, 1);
            height: auto;
            font-size: 24px;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: 50px;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Login
