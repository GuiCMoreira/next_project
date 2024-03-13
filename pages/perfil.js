import React from 'react'
import Head from 'next/head'
import Link from 'next/link';

const Perfil = (props) => {
  return (
    <>
      <div className='perfil-container'>
        <Head>
          <title>exported project</title>
        </Head>
        <div className='perfil-perfil'>
          <div className='perfil-frame'>
            <img
              src='/external/navbar2551-on06-200h.png'
              alt='NAVBAR2551'
              className='perfil-navbar'
            />
            <img
              src='/external/barralateral2551-lm8q-300w.png'
              alt='Barralateral2551'
              className='perfil-barralateral'
            />
            <div className='perfil-component1'>
              <img
                src='/external/rectangle282551-nxzu-800w.png'
                alt='Rectangle282551'
                className='perfil-rectangle28'
              />
              <span className='perfil-text'>
                <span>Cadastrar</span>
              </span>
            </div>
          </div>
          <span className='perfil-text02'>
            <span>Minha Conta</span>
          </span>
          <span className='perfil-text04 Titulo'>
            <span>Saturno</span>
          </span>
          <img
            src='/external/efeitoplanetaselecionado6081-rasn-200h.png'
            alt='EfeitoPlanetaSelecionado6081'
            className='perfil-efeito-planeta-selecionado'
          />
          <div className='perfil-planetas'>
            <img
              src='/external/planetneptune6081-nl08.svg'
              alt='PlanetNeptune6081'
              className='perfil-planet-neptune'
            />
            <img
              src='/external/planetmercury6081-ku6a.svg'
              alt='PlanetMercury6081'
              className='perfil-planet-mercury'
            />
            <img
              src='/external/planetvenus6081-4k0s.svg'
              alt='PlanetVenus6081'
              className='perfil-planet-venus'
            />
            <img
              src='/external/planetearth6081-494k.svg'
              alt='PlanetEarth6081'
              className='perfil-planet-earth'
            />
            <img
              src='/external/planetmars6081-5kp.svg'
              alt='PlanetMars6081'
              className='perfil-planet-mars'
            />
            <img
              src='/external/planetjupiter6081-qfjq.svg'
              alt='PlanetJupiter6081'
              className='perfil-planet-jupiter'
            />
            <img
              src='/external/planetsaturn6081-l7pm.svg'
              alt='PlanetSaturn6081'
              className='perfil-planet-saturn'
            />
            <img
              src='/external/planetsaturn6081-imjt.svg'
              alt='PlanetSaturn6081'
              className='perfil-planet-saturn1'
            />
          </div>
          <img
            src='/external/perfillogo6081-6k9v.svg'
            alt='PerfilLogo6081'
            className='perfil-perfil-logo'
          />
          <img
            src='/external/efeitoplanetaselecionado6081-dsa-200h.png'
            alt='EfeitoPlanetaSelecionado6081'
            className='perfil-efeito-planeta-selecionado1'
          />
          <div className='perfil-tabelas'>
            <Link href='/meus-dados'>
              <button className='perfil-button'>
                <div className='perfil-content'>
                  <span className='perfil-text12'>
                    <span>Meu Perfil</span>
                  </span>
                </div>
              </button>
            </Link>
            <Link href='/pedidos'>
              <button className='perfil-button1'>
                <div className='perfil-content1'>
                  <span className='perfil-text14'>
                    <span>Pedidos</span>
                  </span>
                </div>
              </button>
            </Link>
            <Link href='/carrinhodecompras'>
              <button className='perfil-button2'>
                <div className='perfil-content2'>
                  <span className='perfil-text16'>
                    <span>Carrinho</span>
                  </span>
                </div>
              </button>
            </Link>
            <Link href='/catalogo'>
              <button className='perfil-button3'>
                <div className='perfil-content3'>
                  <span className='perfil-text18'>
                    <span>Catálogo</span>
                  </span>
                </div>
              </button>
            </Link>
            <Link href='/principal'>
              <button className='perfil-button4'>
                <div className='perfil-content4'>
                  <span className='perfil-text20'>
                    <span>Início</span>
                  </span>
                </div>
              </button>
            </Link>
          </div>
          <Link href='/meus-dados'>
          <button className='perfil-button5'>
            <div className='perfil-content5'>
              <span className='perfil-text16'>
                <span>Meus Dados</span>
              </span>
              <img
                src='/external/forwardi609-8hmr.svg'
                alt='ForwardI609'
                className='perfil-forward'
              />
            </div>
          </button>
          </Link>
          <Link href='/'>
          <button className='perfil-button6'>
            <div className='perfil-content6'>
              <span className='perfil-text18'>
                <span>Sair</span>
              </span>
              <img
                src='/external/forwardi609-2wb.svg'
                alt='ForwardI609'
                className='perfil-forward1'
              />
            </div>
          </button>
          </Link>
            <Link href='/pedidos'>
          <button className='perfil-button7'>
            <div className='perfil-content7'>
              <span className='perfil-text20'>
                <span>
                  Meus Pedidos
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <img
                src='/external/forwardi609-z0no.svg'
                alt='ForwardI609'
                className='perfil-forward2'
              />
            </div>
          </button>
            </Link>
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
          .perfil-text04 {
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
          .perfil-efeito-planeta-selecionado {
            top: 25px;
            left: 1211px;
            width: 90px;
            height: 90px;
            position: absolute;
          }
          .perfil-planetas {
            top: 28px;
            left: 82px;
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
          .perfil-perfil-logo {
            top: 21px;
            left: 1778px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .perfil-efeito-planeta-selecionado1 {
            top: 590px;
            left: -3px;
            width: 271px;
            height: 90px;
            position: absolute;
          }
          .perfil-tabelas {
            top: 293px;
            left: -2px;
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
          .perfil-text06 {
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
          .perfil-text08 {
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
          .perfil-text10 {
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
          .perfil-button5 {
            gap: 16px;
            top: 439px;
            left: 719px;
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
          .perfil-content5 {
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
          .perfil-forward {
            width: 16px;
            height: 16px;
          }
          .perfil-button6 {
            gap: 16px;
            top: 669px;
            left: 719px;
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
          .perfil-content6 {
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
          .perfil-forward1 {
            width: 16px;
            height: 16px;
          }
          .perfil-button7 {
            gap: 16px;
            top: 554px;
            left: 719px;
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
          .perfil-content7 {
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
          .perfil-forward2 {
            width: 16px;
            height: 16px;
          }
        `}
      </style>
    </>
  );
}

export default Perfil
