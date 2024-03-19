import React from 'react'
import Head from 'next/head'
import Link from 'next/link';

const EditarMeusDados = (props) => {
  return (
    <>
      <div className='editar-meus-dados-container'>
        <Head>
          <title>exported project</title>
        </Head>
        <div className='editar-meus-dados-editar-meus-dados'>
          <div className='editar-meus-dados-frame'>
            <img
              src='/external/navbar3741-xucl-200h.png'
              alt='NAVBAR3741'
              className='editar-meus-dados-navbar'
            />
            <img
              src='/external/barralateral3741-xobga-300w.png'
              alt='Barralateral3741'
              className='editar-meus-dados-barralateral'
            />
          </div>
          <span className='editar-meus-dados-text Titulo'>
            <span>Saturno</span>
          </span>
          <img
            src='/external/efeitoplanetaselecionado3741-xmer-200h.png'
            alt='EfeitoPlanetaSelecionado3741'
            className='editar-meus-dados-efeito-planeta-selecionado'
          />
          <div className='editar-meus-dados-planetas'>
            <img
              src='/external/planetneptune3741-wfso.svg'
              alt='PlanetNeptune3741'
              className='editar-meus-dados-planet-neptune'
            />
            <img
              src='/external/planetmercury3741-u0xi.svg'
              alt='PlanetMercury3741'
              className='editar-meus-dados-planet-mercury'
            />
            <img
              src='/external/planetvenus3741-ialg.svg'
              alt='PlanetVenus3741'
              className='editar-meus-dados-planet-venus'
            />
            <img
              src='/external/planetearth3741-z3b5.svg'
              alt='PlanetEarth3741'
              className='editar-meus-dados-planet-earth'
            />
            <img
              src='/external/planetmars3741-g8y.svg'
              alt='PlanetMars3741'
              className='editar-meus-dados-planet-mars'
            />
            <img
              src='/external/planetjupiter3741-xzm.svg'
              alt='PlanetJupiter3741'
              className='editar-meus-dados-planet-jupiter'
            />
            <img
              src='/external/planetsaturn3741-g95.svg'
              alt='PlanetSaturn3741'
              className='editar-meus-dados-planet-saturn'
            />
            <img
              src='/external/planetsaturn3741-r5b.svg'
              alt='PlanetSaturn3741'
              className='editar-meus-dados-planet-saturn1'
            />
          </div>
          <Link href='/meus-dados'>
            <div className='editar-meus-dados-default'>
              <div className='editar-meus-dados-button'>
                <span className='editar-meus-dados-text02'>
                  <span>Trocar Senha</span>
                </span>
              </div>
            </div>
          </Link>
          <img
            src='/external/rectangle263701-h0et-800w.png'
            alt='Rectangle263701'
            className='editar-meus-dados-rectangle26'
          />
          <img
            src='/external/rectangle623701-iebl-800w.png'
            alt='Rectangle623701'
            className='editar-meus-dados-rectangle62'
          />
          <span className='editar-meus-dados-text04'>
            <span>Alterar Minha Senha</span>
          </span>
          <span className='editar-meus-dados-text06'>
            <span>(DD)XXXXX.XXXX</span>
          </span>
          <span className='editar-meus-dados-text08'>
            <span>nome@gmail.com</span>
          </span>
          <span className='editar-meus-dados-text10'>
            <span>Não é permitido inserir uma senha igual a atual</span>
          </span>
          <Link href='/meus-dados'>
            <div className='editar-meus-dados-default1'>
              <div className='editar-meus-dados-button1'>
                <span className='editar-meus-dados-text12'>
                  <span>Trocar Email</span>
                </span>
              </div>
            </div>
          </Link>
          <img
            src='/external/rectangle643741-kxii-800w.png'
            alt='Rectangle643741'
            className='editar-meus-dados-rectangle64'
          />
          <span className='editar-meus-dados-text14'>
            <span>Alterar Email</span>
          </span>
          <span className='editar-meus-dados-text16'>
            <span>Será enviado um email de confirmação</span>
          </span>
          <Link href='/meus-dados'>
            <div className='editar-meus-dados-default2'>
              <div className='editar-meus-dados-button2'>
                <span className='editar-meus-dados-text18'>
                  <span>Trocar Número</span>
                </span>
              </div>
            </div>
          </Link>
          <img
            src='/external/rectangle653701-zcp-800w.png'
            alt='Rectangle653701'
            className='editar-meus-dados-rectangle65'
          />
          <span className='editar-meus-dados-text20'>
            <span>Alterar Número de Celular</span>
          </span>
          <span className='editar-meus-dados-text22'>
            <span>Será enviado uma mensagem de confirmação</span>
          </span>
          <img
            src='/external/efeitoplanetaselecionado3761-52v8-200h.png'
            alt='EfeitoPlanetaSelecionado3761'
            className='editar-meus-dados-efeito-planeta-selecionado1'
          />
          <span className='editar-meus-dados-text24 Parágrafo'>
            <span>Senha antiga:</span>
          </span>
          <span className='editar-meus-dados-text26 Parágrafo'>
            <span>Nova senha:</span>
          </span>
          <span className='editar-meus-dados-text28 Parágrafo'>
            <span>Novo e-mail:</span>
          </span>
          <span className='editar-meus-dados-text30 Parágrafo'>
            <span>Novo celular:</span>
          </span>
          <div className='editar-meus-dados-tabelas'>
            <Link href='/meus-dados'>
            <button className='editar-meus-dados-button3'>
              <div className='editar-meus-dados-content'>
                <span className='editar-meus-dados-text32'>
                  <span>Meu Perfil</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/pedidos'>
            <button className='editar-meus-dados-button4'>
              <div className='editar-meus-dados-content1'>
                <span className='editar-meus-dados-text34'>
                  <span>Pedidos</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/carrinhodecompras'>
            <button className='editar-meus-dados-button5'>
              <div className='editar-meus-dados-content2'>
                <span className='editar-meus-dados-text36'>
                  <span>Carrinho</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/catalogo'>
            <button className='editar-meus-dados-button6'>
              <div className='editar-meus-dados-content3'>
                <span className='editar-meus-dados-text38'>
                  <span>Catálogo</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/principal'>
            <button className='editar-meus-dados-button7'>
              <div className='editar-meus-dados-content4'>
                <span className='editar-meus-dados-text40'>
                  <span>Início</span>
                </span>
              </div>
            </button>
            </Link>
          </div>
          <Link href='/perfil'>
            <img
              src='/external/perfillogo5402-ylle.svg'
              alt='PerfilLogo5402'
              className='editar-meus-dados-perfil-logo'
            />
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .editar-meus-dados-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .editar-meus-dados-editar-meus-dados {
            width: 100%;
            height: 1080px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .editar-meus-dados-frame {
            top: 0px;
            left: -1px;
            width: 1921px;
            height: 1080px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .editar-meus-dados-navbar {
            top: 0px;
            left: 1px;
            width: 1920px;
            height: 125px;
            position: absolute;
          }
          .editar-meus-dados-barralateral {
            top: 125px;
            left: 0px;
            width: 272px;
            height: 955px;
            position: absolute;
          }
          .editar-meus-dados-text {
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
          .editar-meus-dados-efeito-planeta-selecionado {
            top: 25px;
            left: 1211px;
            width: 90px;
            height: 90px;
            position: absolute;
          }
          .editar-meus-dados-planetas {
            top: 28px;
            left: 82px;
            width: 1324px;
            height: 139px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .editar-meus-dados-planet-neptune {
            top: 2px;
            left: 1244px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .editar-meus-dados-planet-mercury {
            top: 0px;
            left: 596px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .editar-meus-dados-planet-venus {
            top: 0px;
            left: 704px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .editar-meus-dados-planet-earth {
            top: 0px;
            left: 812px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .editar-meus-dados-planet-mars {
            top: 0px;
            left: 920px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .editar-meus-dados-planet-jupiter {
            top: 0px;
            left: 1028px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .editar-meus-dados-planet-saturn {
            top: 0px;
            left: 1136px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .editar-meus-dados-planet-saturn1 {
            top: 26px;
            left: 0px;
            width: 127px;
            height: 113px;
            position: absolute;
          }
          .editar-meus-dados-default {
            top: 485px;
            left: 883px;
            width: 436px;
            height: 76px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .editar-meus-dados-button {
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
          .editar-meus-dados-text02 {
            top: 21.280000686645508px;
            left: 160.5500030517578px;
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
          .editar-meus-dados-rectangle26 {
            top: 372px;
            left: 744px;
            width: 714px;
            height: 55px;
            position: absolute;
            border-color: rgba(129, 129, 129, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
          }
          .editar-meus-dados-rectangle62 {
            top: 287px;
            left: 744px;
            width: 714px;
            height: 55px;
            position: absolute;
            border-color: rgba(129, 129, 129, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
          }
          .editar-meus-dados-text04 {
            top: 215px;
            left: 920px;
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
          .editar-meus-dados-text06 {
            top: 739px;
            left: 1167px;
            color: var(--dl-color-colors_grey-grey2);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .editar-meus-dados-text08 {
            top: 739px;
            left: 372px;
            color: var(--dl-color-colors_grey-grey2);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .editar-meus-dados-text10 {
            top: 440px;
            left: 746px;
            color: rgba(98, 98, 98, 1);
            height: auto;
            position: absolute;
            font-size: 15px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .editar-meus-dados-default1 {
            top: 838px;
            left: 502px;
            width: 436px;
            height: 76px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .editar-meus-dados-button1 {
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
          .editar-meus-dados-text12 {
            top: 21.280000686645508px;
            left: 164.5500030517578px;
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
          .editar-meus-dados-rectangle64 {
            top: 720px;
            left: 354px;
            width: 714px;
            height: 55px;
            position: absolute;
            border-color: rgba(129, 129, 129, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
          }
          .editar-meus-dados-text14 {
            top: 615px;
            left: 573px;
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
          .editar-meus-dados-text16 {
            top: 790px;
            left: 357px;
            color: rgba(98, 98, 98, 1);
            height: auto;
            position: absolute;
            font-size: 15px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .editar-meus-dados-default2 {
            top: 838px;
            left: 1282px;
            width: 436px;
            height: 76px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .editar-meus-dados-button2 {
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
          .editar-meus-dados-text18 {
            top: 21.280000686645508px;
            left: 153.5500030517578px;
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
          .editar-meus-dados-rectangle65 {
            top: 720px;
            left: 1134px;
            width: 714px;
            height: 55px;
            position: absolute;
            border-color: rgba(129, 129, 129, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
          }
          .editar-meus-dados-text20 {
            top: 622px;
            left: 1282px;
            color: rgba(16, 11, 80, 1);
            width: 488px;
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
          .editar-meus-dados-text22 {
            top: 790px;
            left: 1137px;
            color: rgba(98, 98, 98, 1);
            height: auto;
            position: absolute;
            font-size: 15px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .editar-meus-dados-efeito-planeta-selecionado1 {
            top: 554px;
            left: -3px;
            width: 271px;
            height: 90px;
            position: absolute;
          }
          .editar-meus-dados-text24 {
            top: 301px;
            left: 484px;
            color: rgba(0, 0, 0, 1);
            width: 248px;
            height: auto;
            position: absolute;
            text-align: right;
            line-height: normal;
          }
          .editar-meus-dados-text26 {
            top: 382px;
            left: 484px;
            color: rgba(0, 0, 0, 1);
            width: 248px;
            height: auto;
            position: absolute;
            text-align: right;
            line-height: normal;
          }
          .editar-meus-dados-text28 {
            top: 672px;
            left: 271px;
            color: rgba(0, 0, 0, 1);
            width: 248px;
            height: auto;
            position: absolute;
            text-align: right;
            line-height: normal;
          }
          .editar-meus-dados-text30 {
            top: 672px;
            left: 1054px;
            color: rgba(0, 0, 0, 1);
            width: 248px;
            height: auto;
            position: absolute;
            text-align: right;
            line-height: normal;
          }
          .editar-meus-dados-tabelas {
            top: 293px;
            left: -2px;
            width: 273px;
            height: 369px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .editar-meus-dados-button3 {
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
          .editar-meus-dados-content {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .editar-meus-dados-text32 {
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
          .editar-meus-dados-button4 {
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
          .editar-meus-dados-content1 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .editar-meus-dados-text34 {
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
          .editar-meus-dados-button5 {
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
          .editar-meus-dados-content2 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .editar-meus-dados-text36 {
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
          .editar-meus-dados-button6 {
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
          .editar-meus-dados-content3 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .editar-meus-dados-text38 {
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
          .editar-meus-dados-button7 {
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
          .editar-meus-dados-content4 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .editar-meus-dados-text40 {
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
          .editar-meus-dados-perfil-logo {
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

export default EditarMeusDados
