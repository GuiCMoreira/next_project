import React from 'react'
import Head from 'next/head'

const Cadastrar = (props) => {
  return (
    <>
      <div className="cadastrar-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="cadastrar-cadastrar">
          <div className="cadastrar-frame">
            <img
              src="/external/navbar2551-rpge-200h.png"
              alt="NAVBAR2551"
              className="cadastrar-navbar"
            />
            <img
              src="/external/barralateral2551-pvr-300w.png"
              alt="Barralateral2551"
              className="cadastrar-barralateral"
            />
          </div>
          <span className="cadastrar-text">
            <span>Saturno</span>
          </span>
          <img
            src="/external/efeitoplanetaselecionado2551-kihb-200h.png"
            alt="EfeitoPlanetaSelecionado2551"
            className="cadastrar-efeito-planeta-selecionado"
          />
          <div className="cadastrar-planetas">
            <img
              src="/external/planetneptune2551-611l.svg"
              alt="PlanetNeptune2551"
              className="cadastrar-planet-neptune"
            />
            <img
              src="/external/planetmercury2551-co7a.svg"
              alt="PlanetMercury2551"
              className="cadastrar-planet-mercury"
            />
            <img
              src="/external/planetvenus2551-gjmj.svg"
              alt="PlanetVenus2551"
              className="cadastrar-planet-venus"
            />
            <img
              src="/external/planetearth2551-dvv.svg"
              alt="PlanetEarth2551"
              className="cadastrar-planet-earth"
            />
            <img
              src="/external/planetmars2551-2ams.svg"
              alt="PlanetMars2551"
              className="cadastrar-planet-mars"
            />
            <img
              src="/external/planetjupiter2551-ty2f.svg"
              alt="PlanetJupiter2551"
              className="cadastrar-planet-jupiter"
            />
            <img
              src="/external/planetsaturn2551-cang.svg"
              alt="PlanetSaturn2551"
              className="cadastrar-planet-saturn"
            />
            <img
              src="/external/planetsaturn2551-chk.svg"
              alt="PlanetSaturn2551"
              className="cadastrar-planet-saturn1"
            />
          </div>
          <span className="cadastrar-text02">
            <span className="cadastrar-text03">
              Já possui uma conta ?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Faça login</span>
          </span>
          <div className="cadastrar-component5">
            <img
              src="/external/rectangle262551-xlm8-800w.png"
              alt="Rectangle262551"
              className="cadastrar-rectangle26"
            />
            <span className="cadastrar-text05">
              <span>Número de Celular</span>
            </span>
          </div>
          <div className="cadastrar-component6">
            <img
              src="/external/rectangle292551-1a9-800w.png"
              alt="Rectangle292551"
              className="cadastrar-rectangle29"
            />
            <span className="cadastrar-text07">
              <span>Senha</span>
            </span>
          </div>
          <div className="cadastrar-component10">
            <img
              src="/external/rectangle29i557-ud5f-800w.png"
              alt="Rectangle29I557"
              className="cadastrar-rectangle291"
            />
            <span className="cadastrar-text09"></span>
          </div>
          <div className="cadastrar-component2">
            <img
              src="/external/rectangle302551-by18-800w.png"
              alt="Rectangle302551"
              className="cadastrar-rectangle30"
            />
            <span className="cadastrar-text10">
              <span>Nome Completo</span>
            </span>
          </div>
          <div className="cadastrar-component4">
            <img
              src="/external/rectangle312551-bi55-800w.png"
              alt="Rectangle312551"
              className="cadastrar-rectangle31"
            />
            <span className="cadastrar-text12">
              <span>Email</span>
            </span>
          </div>
          <div className="cadastrar-component8">
            <img
              src="/external/rectangle31i370-ow9-800w.png"
              alt="Rectangle31I370"
              className="cadastrar-rectangle311"
            />
            <span className="cadastrar-text14">
              <span>Confirmar Senha</span>
            </span>
          </div>
          <img
            src="/external/efeitoplanetaselecionado3761-j4c-300w.png"
            alt="EfeitoPlanetaSelecionado3761"
            className="cadastrar-efeito-planeta-selecionado1"
          />
          <div className="cadastrar-component3">
            <img
              src="/external/rectangle322551-ly3-800w.png"
              alt="Rectangle322551"
              className="cadastrar-rectangle32"
            />
            <span className="cadastrar-text16">
              <span>CPF</span>
            </span>
          </div>
          <div className="cadastrar-component7">
            <span className="cadastrar-text18">
              <span>Cadastrar</span>
            </span>
            <span className="cadastrar-text20">
              <span>Preencha os seguintes campos com seus dados</span>
            </span>
          </div>
          <button className="cadastrar-button">
            <div className="cadastrar-content">
              <span className="cadastrar-text22">
                <span>Cadastrar</span>
              </span>
            </div>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .cadastrar-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .cadastrar-cadastrar {
            width: 100%;
            height: 1080px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .cadastrar-frame {
            top: 0px;
            left: -1px;
            width: 1921px;
            height: 1080px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .cadastrar-navbar {
            top: 0px;
            left: 1px;
            width: 1920px;
            height: 125px;
            position: absolute;
          }
          .cadastrar-barralateral {
            top: 125px;
            left: 0px;
            width: 272px;
            height: 955px;
            position: absolute;
          }
          .cadastrar-text {
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
          .cadastrar-efeito-planeta-selecionado {
            top: 25px;
            left: 1211px;
            width: 90px;
            height: 90px;
            position: absolute;
          }
          .cadastrar-planetas {
            top: 28px;
            left: 82px;
            width: 1324px;
            height: 139px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .cadastrar-planet-neptune {
            top: 2px;
            left: 1244px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .cadastrar-planet-mercury {
            top: 0px;
            left: 596px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .cadastrar-planet-venus {
            top: 0px;
            left: 704px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .cadastrar-planet-earth {
            top: 0px;
            left: 812px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .cadastrar-planet-mars {
            top: 0px;
            left: 920px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .cadastrar-planet-jupiter {
            top: 0px;
            left: 1028px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .cadastrar-planet-saturn {
            top: 0px;
            left: 1136px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .cadastrar-planet-saturn1 {
            top: 26px;
            left: 0px;
            width: 127px;
            height: 113px;
            position: absolute;
          }
          .cadastrar-text02 {
            top: 970px;
            left: 869px;
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
          .cadastrar-text03 {
            color: rgba(98, 98, 98, 1);
            font-weight: 400;
          }
          .cadastrar-component5 {
            top: 580px;
            left: 685px;
            width: 714px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .cadastrar-rectangle26 {
            top: 0px;
            left: 0px;
            width: 714px;
            height: 55px;
            position: absolute;
            border-color: rgba(129, 129, 129, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
          }
          .cadastrar-text05 {
            top: 16px;
            left: 24px;
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
          .cadastrar-component6 {
            top: 672px;
            left: 687px;
            width: 714px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .cadastrar-rectangle29 {
            top: 0px;
            left: 0px;
            width: 714px;
            height: 55px;
            position: absolute;
            border-color: rgba(129, 129, 129, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
          }
          .cadastrar-text07 {
            top: 15px;
            left: 16px;
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
          .cadastrar-component10 {
            top: 756px;
            left: 685px;
            width: 714px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .cadastrar-rectangle291 {
            top: 0px;
            left: 0px;
            width: 714px;
            height: 55px;
            position: absolute;
            border-color: rgba(129, 129, 129, 1);
            border-radius: 12px;
          }
          .cadastrar-text09 {
            top: 15px;
            left: 16px;
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
          .cadastrar-component2 {
            top: 311px;
            left: 687px;
            width: 714px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .cadastrar-rectangle30 {
            top: 0px;
            left: 0px;
            width: 714px;
            height: 55px;
            position: absolute;
            border-color: rgba(129, 129, 129, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
          }
          .cadastrar-text10 {
            top: 18px;
            left: 22px;
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
          .cadastrar-component4 {
            top: 488px;
            left: 687px;
            width: 714px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .cadastrar-rectangle31 {
            top: 0px;
            left: 0px;
            width: 714px;
            height: 55px;
            position: absolute;
            border-color: rgba(129, 129, 129, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
          }
          .cadastrar-text12 {
            top: 15px;
            left: 22px;
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
          .cadastrar-component8 {
            top: 758px;
            left: 687px;
            width: 714px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .cadastrar-rectangle311 {
            top: 0px;
            left: 0px;
            width: 714px;
            height: 55px;
            position: absolute;
            border-color: rgba(129, 129, 129, 1);
            border-radius: 12px;
          }
          .cadastrar-text14 {
            top: 15px;
            left: 22px;
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
          .cadastrar-efeito-planeta-selecionado1 {
            top: 1972px;
            left: 10531px;
            width: 271px;
            height: 90px;
            position: absolute;
          }
          .cadastrar-component3 {
            top: 396px;
            left: 687px;
            width: 714px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .cadastrar-rectangle32 {
            top: 0px;
            left: 0px;
            width: 714px;
            height: 55px;
            position: absolute;
            border-color: rgba(129, 129, 129, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
          }
          .cadastrar-text16 {
            top: 15px;
            left: 22px;
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
          .cadastrar-component7 {
            top: 209px;
            left: 877px;
            width: 316px;
            height: 71px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .cadastrar-text18 {
            top: -11px;
            left: 70px;
            color: rgba(16, 11, 80, 1);
            height: auto;
            position: absolute;
            font-size: 40px;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .cadastrar-text20 {
            top: 53px;
            left: -58px;
            color: rgba(98, 98, 98, 1);
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
          .cadastrar-button {
            gap: 16px;
            top: 859px;
            left: 687px;
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
          .cadastrar-content {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .cadastrar-text22 {
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
        `}
      </style>
    </>
  )
}

export default Cadastrar
