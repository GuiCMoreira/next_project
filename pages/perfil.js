import React from 'react'
import Head from 'next/head'

const Perfil = (props) => {
  return (
    <>
      <div className="perfil-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="perfil-perfil">
          <div className="perfil-frame">
            <img
              src="/external/navbar2551-r43-200h.png"
              alt="NAVBAR2551"
              className="perfil-navbar"
            />
            <img
              src="/external/barralateral2551-zjxf-300w.png"
              alt="Barralateral2551"
              className="perfil-barralateral"
            />
            <div className="perfil-component1">
              <img
                src="/external/rectangle282551-y9ij-800w.png"
                alt="Rectangle282551"
                className="perfil-rectangle28"
              />
              <span className="perfil-text">
                <span>Cadastrar</span>
              </span>
            </div>
          </div>
          <span className="perfil-text02 Titulo">
            <span>Saturno</span>
          </span>
          <img
            src="/external/efeitoplanetaselecionado2551-jes-200h.png"
            alt="EfeitoPlanetaSelecionado2551"
            className="perfil-efeito-planeta-selecionado"
          />
          <div className="perfil-planetas">
            <img
              src="/external/planetneptune2551-qo2.svg"
              alt="PlanetNeptune2551"
              className="perfil-planet-neptune"
            />
            <img
              src="/external/planetmercury2551-b4cs.svg"
              alt="PlanetMercury2551"
              className="perfil-planet-mercury"
            />
            <img
              src="/external/planetvenus2551-7sj.svg"
              alt="PlanetVenus2551"
              className="perfil-planet-venus"
            />
            <img
              src="/external/planetearth2551-yd7d.svg"
              alt="PlanetEarth2551"
              className="perfil-planet-earth"
            />
            <img
              src="/external/planetmars2551-hvw.svg"
              alt="PlanetMars2551"
              className="perfil-planet-mars"
            />
            <img
              src="/external/planetjupiter2551-rx0a.svg"
              alt="PlanetJupiter2551"
              className="perfil-planet-jupiter"
            />
            <img
              src="/external/planetsaturn2551-ui5r.svg"
              alt="PlanetSaturn2551"
              className="perfil-planet-saturn"
            />
            <img
              src="/external/planetsaturn2551-idmm.svg"
              alt="PlanetSaturn2551"
              className="perfil-planet-saturn1"
            />
          </div>
          <span className="perfil-text04">
            <span>Minha Conta</span>
          </span>
          <div className="perfil-secondary">
            <div className="perfil-button-outlined">
              <span className="perfil-text06">
                <span>Perfil</span>
              </span>
            </div>
          </div>
          <div className="perfil-secondary1">
            <div className="perfil-button-outlined1">
              <span className="perfil-text08">
                <span>Meus Pedidos</span>
              </span>
            </div>
          </div>
          <div className="perfil-secondary2">
            <div className="perfil-button-outlined2">
              <span className="perfil-text10">
                <span>Sair</span>
              </span>
            </div>
          </div>
          <img
            src="/external/efeitoplanetaselecionado3701-cfcf-200h.png"
            alt="EfeitoPlanetaSelecionado3701"
            className="perfil-efeito-planeta-selecionado1"
          />
          <div className="perfil-tabelas">
            <button className="perfil-button">
              <div className="perfil-content">
                <span className="perfil-text12">
                  <span>Meu Perfil</span>
                </span>
              </div>
            </button>
            <button className="perfil-button1">
              <div className="perfil-content1">
                <span className="perfil-text14">
                  <span>Pedidos</span>
                </span>
              </div>
            </button>
            <button className="perfil-button2">
              <div className="perfil-content2">
                <span className="perfil-text16">
                  <span>Carrinho</span>
                </span>
              </div>
            </button>
            <button className="perfil-button3">
              <div className="perfil-content3">
                <span className="perfil-text18">
                  <span>Catálogo</span>
                </span>
              </div>
            </button>
            <button className="perfil-button4">
              <div className="perfil-content4">
                <span className="perfil-text20">
                  <span>Início</span>
                </span>
              </div>
            </button>
          </div>
          <img
            src="/external/perfillogo5401-g33.svg"
            alt="PerfilLogo5401"
            className="perfil-perfil-logo"
          />
        </div>
      </div>
      <style jsx>
        {`
          .perfil-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .perfil-perfil {
            width: 100%;
            height: 1080px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .perfil-frame {
            top: -1896px;
            left: -1px;
            width: 1921px;
            height: 2976px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .perfil-navbar {
            top: 1896px;
            left: 1px;
            width: 1920px;
            height: 125px;
            position: absolute;
          }
          .perfil-barralateral {
            top: 2021px;
            left: 0px;
            width: 272px;
            height: 955px;
            position: absolute;
          }
          .perfil-component1 {
            top: 0px;
            left: 679px;
            width: 714px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .perfil-rectangle28 {
            top: 0px;
            left: 0px;
            width: 714px;
            height: 55px;
            position: absolute;
            border-radius: 12px;
          }
          .perfil-text {
            top: 7px;
            left: 292px;
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
          .perfil-text02 {
            top: 203px;
            left: 48px;
            color: rgba(255, 255, 255, 1);
            width: 174px;
            height: auto;
            position: absolute;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            text-align: center;
            line-height: normal;
          }
          .perfil-efeito-planeta-selecionado {
            top: 47px;
            left: 1213px;
            width: 90px;
            height: 90px;
            position: absolute;
          }
          .perfil-planetas {
            top: 50px;
            left: 84px;
            width: 1324px;
            height: 139px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .perfil-planet-neptune {
            top: 2px;
            left: 1244px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .perfil-planet-mercury {
            top: 0px;
            left: 596px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .perfil-planet-venus {
            top: 0px;
            left: 704px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .perfil-planet-earth {
            top: 0px;
            left: 812px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .perfil-planet-mars {
            top: 0px;
            left: 920px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .perfil-planet-jupiter {
            top: 0px;
            left: 1028px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .perfil-planet-saturn {
            top: 0px;
            left: 1136px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .perfil-planet-saturn1 {
            top: 26px;
            left: 0px;
            width: 127px;
            height: 113px;
            position: absolute;
          }
          .perfil-text04 {
            top: 292px;
            left: 962px;
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
          .perfil-secondary {
            top: 430px;
            left: 692px;
            width: 763px;
            height: 88px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .perfil-button-outlined {
            top: 0px;
            left: 0px;
            width: 763px;
            height: 88px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(0, 0, 0, 0);
          }
          .perfil-text06 {
            top: 32.63999938964844px;
            left: 181.21249389648438px;
            color: var(--dl-color-default-primary);
            width: 405px;
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Regular;
            text-align: center;
            font-family: Roboto;
            font-weight: 400;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .perfil-secondary1 {
            top: 552px;
            left: 692px;
            width: 763px;
            height: 88px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .perfil-button-outlined1 {
            top: 0px;
            left: 0px;
            width: 763px;
            height: 88px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(0, 0, 0, 0);
          }
          .perfil-text08 {
            top: 32.63999938964844px;
            left: 181.21249389648438px;
            color: var(--dl-color-default-primary);
            width: 405px;
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Regular;
            text-align: center;
            font-family: Roboto;
            font-weight: 400;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .perfil-secondary2 {
            top: 681px;
            left: 692px;
            width: 763px;
            height: 88px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .perfil-button-outlined2 {
            top: 0px;
            left: 0px;
            width: 763px;
            height: 88px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(0, 0, 0, 0);
          }
          .perfil-text10 {
            top: 32.63999938964844px;
            left: 181.21249389648438px;
            color: var(--dl-color-default-primary);
            width: 405px;
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Regular;
            text-align: center;
            font-family: Roboto;
            font-weight: 400;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .perfil-efeito-planeta-selecionado1 {
            top: 604px;
            left: 1px;
            width: 271px;
            height: 90px;
            position: absolute;
          }
          .perfil-tabelas {
            top: 315px;
            left: 0px;
            width: 273px;
            height: 369px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .perfil-button {
            gap: 16px;
            top: 304px;
            left: 0px;
            width: 271px;
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
          .perfil-content {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .perfil-text12 {
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
          .perfil-button1 {
            gap: 16px;
            top: 229px;
            left: 2px;
            width: 271px;
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
          .perfil-content1 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .perfil-text14 {
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
          .perfil-button2 {
            gap: 16px;
            top: 152px;
            left: 2px;
            width: 271px;
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
          .perfil-content2 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .perfil-text16 {
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
          .perfil-button3 {
            gap: 16px;
            top: 77px;
            left: 2px;
            width: 271px;
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
          .perfil-content3 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .perfil-text18 {
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
          .perfil-button4 {
            gap: 16px;
            top: 0px;
            left: 2px;
            width: 271px;
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
          .perfil-content4 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .perfil-text20 {
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
          .perfil-perfil-logo {
            top: 43px;
            left: 1780px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

export default Perfil
