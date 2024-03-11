import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Logincomnmero = props => {
  return (
    <>
      <div className='logincomnmero-container'>
        <Head>
          <title>exported project</title>
        </Head>
        <div className='logincomnmero-logincomnmero'>
          <div className='logincomnmero-frame'>
            <img
              src='/external/navbar2559-qxum-200h.png'
              alt='NAVBAR2559'
              className='logincomnmero-navbar'
            />
            <img
              src='/external/barralateral2559-8pem-300w.png'
              alt='Barralateral2559'
              className='logincomnmero-barralateral'
            />
          </div>
          <span className='logincomnmero-text'>
            <span>Saturno</span>
          </span>
          <img
            src='/external/efeitoplanetaselecionado2559-0za-200h.png'
            alt='EfeitoPlanetaSelecionado2559'
            className='logincomnmero-efeito-planeta-selecionado'
          />
          <div className='logincomnmero-planetas'>
            <img
              src='/external/planetneptune2559-w13a.svg'
              alt='PlanetNeptune2559'
              className='logincomnmero-planet-neptune'
            />
            <img
              src='/external/planetmercury2559-qkfr.svg'
              alt='PlanetMercury2559'
              className='logincomnmero-planet-mercury'
            />
            <img
              src='/external/planetvenus2559-7zz5.svg'
              alt='PlanetVenus2559'
              className='logincomnmero-planet-venus'
            />
            <img
              src='/external/planetearth2551-qmr.svg'
              alt='PlanetEarth2551'
              className='logincomnmero-planet-earth'
            />
            <img
              src='/external/planetmars2551-y3i.svg'
              alt='PlanetMars2551'
              className='logincomnmero-planet-mars'
            />
            <img
              src='/external/planetjupiter2551-kgit.svg'
              alt='PlanetJupiter2551'
              className='logincomnmero-planet-jupiter'
            />
            <img
              src='/external/planetsaturn2551-a7j.svg'
              alt='PlanetSaturn2551'
              className='logincomnmero-planet-saturn'
            />
            <img
              src='/external/planetsaturn2551-49z8.svg'
              alt='PlanetSaturn2551'
              className='logincomnmero-planet-saturn1'
            />
          </div>
          <img
            src='/external/rectangle262551-02pd-800w.png'
            alt='Rectangle262551'
            className='logincomnmero-rectangle26'
          />
          <img
            src='/external/rectangle292551-vtsd-800w.png'
            alt='Rectangle292551'
            className='logincomnmero-rectangle29'
          />
          <span className='logincomnmero-text02'>
            <Link href='/recuperar-senha'>
              <span>Esqueceu a senha?</span>
            </Link>
          </span>
          <span className='logincomnmero-text04'>
            <span>Ou faça login com</span>
          </span>
          <span className='logincomnmero-text06'>
            <span className='logincomnmero-text07'>
              Não é registrado ainda ?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <Link href='/cadastrar'>
            <span>Crie uma conta</span>
            </Link>
          </span>
          <img
            src='/external/googlelogo2551-ufc.svg'
            alt='googlelogo2551'
            className='logincomnmero-googlelogo'
          />
          <span className='logincomnmero-text09'>
            <span>Número de celular</span>
          </span>
          <span className='logincomnmero-text11'>
            <span>Senha</span>
          </span>
          <span className='logincomnmero-text13'>
            <span>
              Login
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className='logincomnmero-text15'>
            <span>Google</span>
          </span>
          <Link href='/principal'>
            <button className='logincomnmero-button'>
              <div className='logincomnmero-content'>
                <span className='logincomnmero-text17'>
                  <span>Login</span>
                </span>
              </div>
            </button>
          </Link>
          <button className='logincomnmero-button1'>
            <div className='logincomnmero-content1'>
              <span className='logincomnmero-text19'>
                <span>Número de Celular</span>
              </span>
            </div>
          </button>
          <Link href='/'>
            <button className='logincomnmero-button2'>
              <div className='logincomnmero-content2'>
                <span className='logincomnmero-text21'>
                  <span>Email</span>
                </span>
              </div>
            </button>
          </Link>
          <span className='logincomnmero-text23'>
            <span>Login com Número de Celular</span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .logincomnmero-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .logincomnmero-logincomnmero {
            width: 100%;
            height: 1080px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .logincomnmero-frame {
            top: 0px;
            left: -1px;
            width: 1921px;
            height: 1080px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .logincomnmero-navbar {
            top: 0px;
            left: 1px;
            width: 1920px;
            height: 125px;
            position: absolute;
          }
          .logincomnmero-barralateral {
            top: 125px;
            left: 0px;
            width: 272px;
            height: 955px;
            position: absolute;
          }
          .logincomnmero-text {
            top: 181px;
            left: 46px;
            color: rgba(255, 255, 255, 1);
            width: 174px;
            height: auto;
            position: absolute;
            font-size: 32px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .logincomnmero-efeito-planeta-selecionado {
            top: 25px;
            left: 1211px;
            width: 90px;
            height: 90px;
            position: absolute;
          }
          .logincomnmero-planetas {
            top: 28px;
            left: 82px;
            width: 1324px;
            height: 139px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .logincomnmero-planet-neptune {
            top: 2px;
            left: 1244px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .logincomnmero-planet-mercury {
            top: 0px;
            left: 596px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .logincomnmero-planet-venus {
            top: 0px;
            left: 704px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .logincomnmero-planet-earth {
            top: 0px;
            left: 812px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .logincomnmero-planet-mars {
            top: 0px;
            left: 920px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .logincomnmero-planet-jupiter {
            top: 0px;
            left: 1028px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .logincomnmero-planet-saturn {
            top: 0px;
            left: 1136px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .logincomnmero-planet-saturn1 {
            top: 26px;
            left: 0px;
            width: 127px;
            height: 113px;
            position: absolute;
          }
          .logincomnmero-rectangle26 {
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
          .logincomnmero-rectangle29 {
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
          .logincomnmero-text02 {
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
          .logincomnmero-text04 {
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
          .logincomnmero-text06 {
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
          .logincomnmero-text07 {
            color: rgba(98, 98, 98, 1);
            font-weight: 400;
          }
          .logincomnmero-googlelogo {
            top: 692px;
            left: 972px;
            width: 22px;
            height: 22px;
            position: absolute;
          }
          .logincomnmero-text09 {
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
          .logincomnmero-text11 {
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
          .logincomnmero-text13 {
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
          .logincomnmero-text15 {
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
          .logincomnmero-button {
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
          .logincomnmero-content {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .logincomnmero-text17 {
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
          .logincomnmero-button1 {
            gap: 16px;
            top: 298px;
            left: 1059px;
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
          .logincomnmero-content1 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .logincomnmero-text19 {
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
          .logincomnmero-button2 {
            gap: 16px;
            top: 298px;
            left: 700px;
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
          .logincomnmero-content2 {
            gap: 50px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
          }
          .logincomnmero-text21 {
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
          .logincomnmero-text23 {
            top: 187px;
            left: 760px;
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
        `}
      </style>
    </>
  );
};

export default Logincomnmero;
