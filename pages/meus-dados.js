import React from 'react'
import Head from 'next/head'
import Link from 'next/link';

const MeusDados = (props) => {
  return (
    <>
      <div className='meus-dados-container'>
        <Head>
          <title>exported project</title>
        </Head>
        <div className='meus-dados-meus-dados'>
          <div className='meus-dados-frame'>
            <img
              src='/external/navbar3701-773t-200h.png'
              alt='NAVBAR3701'
              className='meus-dados-navbar'
            />
            <img
              src='/external/barralateral3701-a04l-300w.png'
              alt='Barralateral3701'
              className='meus-dados-barralateral'
            />
          </div>
          <span className='meus-dados-text Titulo'>
            <span>Saturno</span>
          </span>
          <img
            src='/external/efeitoplanetaselecionado3701-thwl-200h.png'
            alt='EfeitoPlanetaSelecionado3701'
            className='meus-dados-efeito-planeta-selecionado'
          />
          <div className='meus-dados-planetas'>
            <img
              src='/external/planetneptune3701-z5.svg'
              alt='PlanetNeptune3701'
              className='meus-dados-planet-neptune'
            />
            <img
              src='/external/planetmercury3701-gtm.svg'
              alt='PlanetMercury3701'
              className='meus-dados-planet-mercury'
            />
            <img
              src='/external/planetvenus3701-sjf.svg'
              alt='PlanetVenus3701'
              className='meus-dados-planet-venus'
            />
            <img
              src='/external/planetearth3701-hsgo.svg'
              alt='PlanetEarth3701'
              className='meus-dados-planet-earth'
            />
            <img
              src='/external/planetmars3701-m0of6.svg'
              alt='PlanetMars3701'
              className='meus-dados-planet-mars'
            />
            <img
              src='/external/planetjupiter3701-oaoi.svg'
              alt='PlanetJupiter3701'
              className='meus-dados-planet-jupiter'
            />
            <img
              src='/external/planetsaturn3701-m2ik.svg'
              alt='PlanetSaturn3701'
              className='meus-dados-planet-saturn'
            />
            <img
              src='/external/planetsaturn3701-8vfp.svg'
              alt='PlanetSaturn3701'
              className='meus-dados-planet-saturn1'
            />
          </div>
          <div className='meus-dados-elements-checkbox-on'></div>
          <span className='meus-dados-text002'>
            <span>Dados da Minha Conta</span>
          </span>
          <img
            src='/external/efeitoplanetaselecionado3701-ib0d-200h.png'
            alt='EfeitoPlanetaSelecionado3701'
            className='meus-dados-efeito-planeta-selecionado1'
          />
          <span className='meus-dados-text004'>
            <span>Meus Endereços</span>
          </span>
          <img
            src='/external/rectangle603701-ju74-400h.png'
            alt='Rectangle603701'
            className='meus-dados-rectangle60'
          />
          <span className='meus-dados-text006'>
            <span>
              <span>Endereço de entrega: CEP: 38082-115</span>
              <br></br>
              <span>Rua: Rua Ramon Peres Berber, 201</span>
              <br></br>
              <span>Bairro: Tita Rezende</span>
              <br></br>
              <span>Cidade: Uberaba</span>
              <br></br>
              <span></span>
              <br></br>
              <span></span>
            </span>
          </span>
          <span className='meus-dados-text019'>
            <span>
              <span>Endereço de entrega: CEP: 38082-115</span>
              <br></br>
              <span>Rua: Rua Ramon Peres Berber, 201</span>
              <br></br>
              <span>Bairro: Tita Rezende</span>
              <br></br>
              <span>Cidade: Uberaba, MG</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <span className='meus-dados-text030'>
            <span>Meus Cartões</span>
          </span>
          <span className='meus-dados-text032'>
            <span>Adicionar novo endereço</span>
          </span>
          <span className='meus-dados-text034'>
            <span>Adicionar novo cartão</span>
          </span>
          <img
            src='/external/rectangle613741-xzk-400h.png'
            alt='Rectangle613741'
            className='meus-dados-rectangle61'
          />
          <span className='meus-dados-text036'>
            <span>Remover</span>
          </span>
          <span className='meus-dados-text038'>
            <span>Remover</span>
          </span>
          <img
            src='/external/mstcrd13761-nus-200h.png'
            alt='mstcrd13761'
            className='meus-dados-mstcrd1'
          />
          <span className='meus-dados-text040'>
            <span>
              <span>Nome do Titular: XXXXXXXXXXXX</span>
              <br></br>
              <span>Número do Cartão: XXXX.XXXX.XXXX.7432</span>
              <br></br>
              <span>Validade: mm/aa</span>
              <br></br>
              <span>___________________________________________</span>
              <br></br>
              <span></span>
              <br></br>
              <span></span>
              <br></br>
              <span></span>
            </span>
          </span>
          <span className='meus-dados-text055'>
            <span>
              <span>Nome do Titular: XXXXXXXXXXXX</span>
              <br></br>
              <span>Número do Cartão: XXXX.XXXX.XXXX.8623</span>
              <br></br>
              <span>Validade: mm/aa</span>
              <br></br>
              <span>___________________________________________</span>
              <br></br>
              <span></span>
              <br></br>
              <span></span>
              <br></br>
              <span></span>
            </span>
          </span>
          <img
            src='/external/rectangle603701-t8v5o-400h.png'
            alt='Rectangle603701'
            className='meus-dados-rectangle601'
          />
          <span className='meus-dados-text070'>
            <span>Remover</span>
          </span>
          <Link href='/editar-meus-dados'>
            <div className='meus-dados-default'>
              <div className='meus-dados-button'>
                <span className='meus-dados-text072'>
                  <span>Editar meus Dados</span>
                </span>
              </div>
            </div>
          </Link>
          <img
            src='/external/visaemblema13761-ygi-200h.png'
            alt='VisaEmblema13761'
            className='meus-dados-visa-emblema1'
          />
          <span className='meus-dados-text074'>
            <span>
              <span>Email: Marcoseduardo@gmail.com</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Nome: Marcos Eduardo</span>
              <br></br>
              <span></span>
              <br></br>
              <span>CPF: 128.652.459-94</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Número de celular: (11) 967238743</span>
              <br></br>
              <span></span>
              <br></br>
              <span></span>
              <br></br>
              <span></span>
              <br></br>
              <span></span>
            </span>
          </span>
          <div className='meus-dados-tabelas'>
            <button className='meus-dados-button1'>
              <div className='meus-dados-content'>
                <span className='meus-dados-text097'>
                  <span>Meu Perfil</span>
                </span>
              </div>
            </button>
            <button className='meus-dados-button2'>
              <div className='meus-dados-content1'>
                <span className='meus-dados-text099'>
                  <span>Pedidos</span>
                </span>
              </div>
            </button>
            <button className='meus-dados-button3'>
              <div className='meus-dados-content2'>
                <span className='meus-dados-text101'>
                  <span>Carrinho</span>
                </span>
              </div>
            </button>
            <button className='meus-dados-button4'>
              <div className='meus-dados-content3'>
                <span className='meus-dados-text103'>
                  <span>Catálogo</span>
                </span>
              </div>
            </button>
            <Link href='/principal'>
            <button className='meus-dados-button5'>
              <div className='meus-dados-content4'>
                <span className='meus-dados-text105'>
                  <span>Início</span>
                </span>
              </div>
            </button>
            </Link>
          </div>
          <Link href='/perfil'>
          <img
            src='/external/perfillogo5401-q6d.svg'
            alt='PerfilLogo5401'
            className='meus-dados-perfil-logo'
          />
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .meus-dados-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .meus-dados-meus-dados {
            width: 100%;
            height: 1080px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .meus-dados-frame {
            top: 0px;
            left: -1px;
            width: 1921px;
            height: 1080px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .meus-dados-navbar {
            top: 0px;
            left: 1px;
            width: 1920px;
            height: 125px;
            position: absolute;
          }
          .meus-dados-barralateral {
            top: 125px;
            left: 0px;
            width: 272px;
            height: 955px;
            position: absolute;
          }
          .meus-dados-text {
            top: 181px;
            left: 46px;
            color: rgba(255, 255, 255, 1);
            width: 174px;
            height: auto;
            position: absolute;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            text-align: center;
            line-height: normal;
          }
          .meus-dados-efeito-planeta-selecionado {
            top: 25px;
            left: 1211px;
            width: 90px;
            height: 90px;
            position: absolute;
          }
          .meus-dados-planetas {
            top: 28px;
            left: 82px;
            width: 1324px;
            height: 139px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .meus-dados-planet-neptune {
            top: 2px;
            left: 1244px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .meus-dados-planet-mercury {
            top: 0px;
            left: 596px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .meus-dados-planet-venus {
            top: 0px;
            left: 704px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .meus-dados-planet-earth {
            top: 0px;
            left: 812px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .meus-dados-planet-mars {
            top: 0px;
            left: 920px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .meus-dados-planet-jupiter {
            top: 0px;
            left: 1028px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .meus-dados-planet-saturn {
            top: 0px;
            left: 1136px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .meus-dados-planet-saturn1 {
            top: 26px;
            left: 0px;
            width: 127px;
            height: 113px;
            position: absolute;
          }
          .meus-dados-elements-checkbox-on {
            top: 812px;
            left: 405px;
            width: 18px;
            height: 19px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .meus-dados-text002 {
            top: 192px;
            left: 476px;
            color: rgba(16, 11, 80, 1);
            width: 387px;
            height: auto;
            position: absolute;
            font-size: 40px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: 44px;
            font-stretch: normal;
            text-decoration: none;
          }
          .meus-dados-efeito-planeta-selecionado1 {
            top: 582px;
            left: 0px;
            width: 271px;
            height: 90px;
            position: absolute;
          }
          .meus-dados-text004 {
            top: 183px;
            left: 1363px;
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
          .meus-dados-rectangle60 {
            top: 265px;
            left: 1126px;
            width: 710px;
            height: 303px;
            position: absolute;
          }
          .meus-dados-text006 {
            top: 299px;
            left: 1175px;
            color: rgba(144, 144, 144, 1);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 30px;
            font-stretch: normal;
            text-decoration: none;
          }
          .meus-dados-text019 {
            top: 299px;
            left: 1175px;
            color: rgba(144, 144, 144, 1);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 30px;
            font-stretch: normal;
            text-decoration: none;
          }
          .meus-dados-text030 {
            top: 603px;
            left: 1363px;
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
          .meus-dados-text032 {
            top: 236px;
            left: 1683px;
            color: rgba(0, 0, 0, 1);
            width: 222px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: underline;
          }
          .meus-dados-text034 {
            top: 638px;
            left: 1698px;
            color: rgba(0, 0, 0, 1);
            width: 222px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: underline;
          }
          .meus-dados-rectangle61 {
            top: 668px;
            left: 1126px;
            width: 710px;
            height: 303px;
            position: absolute;
          }
          .meus-dados-text036 {
            top: 611px;
            left: 1766px;
            color: rgba(0, 0, 0, 1);
            width: 99px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: underline;
          }
          .meus-dados-text038 {
            top: 734px;
            left: 1766px;
            color: rgba(0, 0, 0, 1);
            width: 99px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: underline;
          }
          .meus-dados-mstcrd1 {
            top: 799px;
            left: 1488px;
            width: 39px;
            height: 25px;
            position: absolute;
          }
          .meus-dados-text040 {
            top: 717px;
            left: 1162px;
            color: rgba(144, 144, 144, 1);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 30px;
            font-stretch: normal;
            text-decoration: none;
          }
          .meus-dados-text055 {
            top: 845px;
            left: 1161px;
            color: rgba(144, 144, 144, 1);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 30px;
            font-stretch: normal;
            text-decoration: none;
          }
          .meus-dados-rectangle601 {
            top: 266px;
            left: 332px;
            width: 665px;
            height: 370px;
            position: absolute;
          }
          .meus-dados-text070 {
            top: 181px;
            left: 1766px;
            color: rgba(0, 0, 0, 1);
            width: 99px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: underline;
          }
          .meus-dados-default {
            top: 661px;
            left: 447px;
            width: 436px;
            height: 76px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .meus-dados-button {
            top: 0px;
            left: 0px;
            width: 436px;
            height: 76px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(47, 34, 96, 1);
          }
          .meus-dados-text072 {
            top: 21.280000686645508px;
            left: 137.5500030517578px;
            color: var(--dl-color-colors-white);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .meus-dados-visa-emblema1 {
            top: 927px;
            left: 1488px;
            width: 39px;
            height: 25px;
            position: absolute;
          }
          .meus-dados-text074 {
            top: 318px;
            left: 382px;
            color: rgba(144, 144, 144, 1);
            width: 568px;
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 30px;
            font-stretch: normal;
            text-decoration: none;
          }
          .meus-dados-tabelas {
            top: 293px;
            left: -2px;
            width: 273px;
            height: 369px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .meus-dados-button1 {
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
          .meus-dados-content {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .meus-dados-text097 {
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
          .meus-dados-button2 {
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
          .meus-dados-content1 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .meus-dados-text099 {
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
          .meus-dados-button3 {
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
          .meus-dados-content2 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .meus-dados-text101 {
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
          .meus-dados-button4 {
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
          .meus-dados-content3 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .meus-dados-text103 {
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
          .meus-dados-button5 {
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
          .meus-dados-content4 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .meus-dados-text105 {
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
          .meus-dados-perfil-logo {
            top: 21px;
            left: 1778px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
        `}
      </style>
    </>
  );
}

export default MeusDados
