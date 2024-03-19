import React from 'react'
import Head from 'next/head'
import Link from 'next/link';

const Adicionarcarto = (props) => {
  return (
    <>
      <div className='adicionarcarto-container'>
        <Head>
          <title>exported project</title>
        </Head>
        <div className='adicionarcarto-adicionarcarto'>
          <div className='adicionarcarto-frame'>
            <img
              src='/external/navbar3741-37o8-200h.png'
              alt='NAVBAR3741'
              className='adicionarcarto-navbar'
            />
            <img
              src='/external/barralateral3741-4aq-300w.png'
              alt='Barralateral3741'
              className='adicionarcarto-barralateral'
            />
          </div>
          <span className='adicionarcarto-text Titulo'>
            <span>Saturno</span>
          </span>
          <img
            src='/external/efeitoplanetaselecionado3741-d1lb-200h.png'
            alt='EfeitoPlanetaSelecionado3741'
            className='adicionarcarto-efeito-planeta-selecionado'
          />
          <div className='adicionarcarto-planetas'>
            <img
              src='/external/planetneptune3741-2tig.svg'
              alt='PlanetNeptune3741'
              className='adicionarcarto-planet-neptune'
            />
            <img
              src='/external/planetmercury3741-xz9e.svg'
              alt='PlanetMercury3741'
              className='adicionarcarto-planet-mercury'
            />
            <img
              src='/external/planetvenus3741-najf.svg'
              alt='PlanetVenus3741'
              className='adicionarcarto-planet-venus'
            />
            <img
              src='/external/planetearth3741-z8wjq.svg'
              alt='PlanetEarth3741'
              className='adicionarcarto-planet-earth'
            />
            <img
              src='/external/planetmars3741-mu5e.svg'
              alt='PlanetMars3741'
              className='adicionarcarto-planet-mars'
            />
            <img
              src='/external/planetjupiter3741-fo5j.svg'
              alt='PlanetJupiter3741'
              className='adicionarcarto-planet-jupiter'
            />
            <img
              src='/external/planetsaturn3741-rl5c.svg'
              alt='PlanetSaturn3741'
              className='adicionarcarto-planet-saturn'
            />
            <img
              src='/external/planetsaturn3741-hvof.svg'
              alt='PlanetSaturn3741'
              className='adicionarcarto-planet-saturn1'
            />
          </div>
          <div className='adicionarcarto-elements-checkbox-on'></div>
          <span className='adicionarcarto-text02'>
            <span>Adicionar Novo Cartão</span>
          </span>
          <img
            src='/external/efeitoplanetaselecionado3741-tt5-200h.png'
            alt='EfeitoPlanetaSelecionado3741'
            className='adicionarcarto-efeito-planeta-selecionado1'
          />
          <img
            src='/external/caixasetor4651-lhf.svg'
            alt='CaixaSetor4651'
            className='adicionarcarto-caixa-setor'
          />
          <span className='adicionarcarto-text04 Parágrafo'>
            <span>
              Nome do Titular:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <img
            src='/external/caixamdulo4651-cdj.svg'
            alt='CaixaMdulo4651'
            className='adicionarcarto-caixa-mdulo'
          />
          <span className='adicionarcarto-text06 Parágrafo'>
            <span>
              Número Cartão:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <img
            src='/external/caixasetor4651-3f38.svg'
            alt='CaixaSetor4651'
            className='adicionarcarto-caixa-setor1'
          />
          <img
            src='/external/caixasetor4731-k8pk.svg'
            alt='CaixaSetor4731'
            className='adicionarcarto-caixa-setor2'
          />
          <span className='adicionarcarto-text08 Parágrafo'>
            <span>Mês:</span>
          </span>
          <span className='adicionarcarto-text10 Parágrafo'>
            <span>Ano:</span>
          </span>
          <Link href='/meus-dados'>
            <div className='adicionarcarto-default'>
              <div className='adicionarcarto-button'>
                <span className='adicionarcarto-text12'>
                  <span>Salvar Informações</span>
                </span>
              </div>
            </div>
          </Link>
          <div className='adicionarcarto-tabelas'>
            <Link href='/meus-dados'>
            <button className='adicionarcarto-button1'>
              <div className='adicionarcarto-content'>
                <span className='adicionarcarto-text14'>
                  <span>Meu Perfil</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/pedidos'>
            <button className='adicionarcarto-button2'>
              <div className='adicionarcarto-content1'>
                <span className='adicionarcarto-text16'>
                  <span>Pedidos</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/carrinhodecompras'>
            <button className='adicionarcarto-button3'>
              <div className='adicionarcarto-content2'>
                <span className='adicionarcarto-text18'>
                  <span>Carrinho</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/catalogo'>
            <button className='adicionarcarto-button4'>
              <div className='adicionarcarto-content3'>
                <span className='adicionarcarto-text20'>
                  <span>Catálogo</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/principal'>
            <button className='adicionarcarto-button5'>
              <div className='adicionarcarto-content4'>
                <span className='adicionarcarto-text22'>
                  <span>Início</span>
                </span>
              </div>
            </button>
            </Link>
          </div>
          <Link href='/perfil'>
            <img
              src='/external/perfillogo5401-gr9d.svg'
              alt='PerfilLogo5401'
              className='adicionarcarto-perfil-logo'
            />
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .adicionarcarto-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .adicionarcarto-adicionarcarto {
            width: 100%;
            height: 1080px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .adicionarcarto-frame {
            top: 0px;
            left: -1px;
            width: 1921px;
            height: 1080px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .adicionarcarto-navbar {
            top: 0px;
            left: 1px;
            width: 1920px;
            height: 125px;
            position: absolute;
          }
          .adicionarcarto-barralateral {
            top: 125px;
            left: 0px;
            width: 272px;
            height: 955px;
            position: absolute;
          }
          .adicionarcarto-text {
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
          .adicionarcarto-efeito-planeta-selecionado {
            top: 25px;
            left: 1211px;
            width: 90px;
            height: 90px;
            position: absolute;
          }
          .adicionarcarto-planetas {
            top: 28px;
            left: 82px;
            width: 1324px;
            height: 139px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .adicionarcarto-planet-neptune {
            top: 2px;
            left: 1244px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .adicionarcarto-planet-mercury {
            top: 0px;
            left: 596px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .adicionarcarto-planet-venus {
            top: 0px;
            left: 704px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .adicionarcarto-planet-earth {
            top: 0px;
            left: 812px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .adicionarcarto-planet-mars {
            top: 0px;
            left: 920px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .adicionarcarto-planet-jupiter {
            top: 0px;
            left: 1028px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .adicionarcarto-planet-saturn {
            top: 0px;
            left: 1136px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .adicionarcarto-planet-saturn1 {
            top: 26px;
            left: 0px;
            width: 127px;
            height: 113px;
            position: absolute;
          }
          .adicionarcarto-elements-checkbox-on {
            top: 908px;
            left: 451px;
            width: 18px;
            height: 19px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .adicionarcarto-text02 {
            top: 257px;
            left: 868px;
            color: rgba(16, 11, 80, 1);
            width: 543px;
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
          .adicionarcarto-efeito-planeta-selecionado1 {
            top: 585px;
            left: -3px;
            width: 271px;
            height: 90px;
            position: absolute;
          }
          .adicionarcarto-caixa-setor {
            top: 351px;
            left: 737px;
            width: 649px;
            height: 80px;
            position: absolute;
          }
          .adicionarcarto-text04 {
            top: 373px;
            left: 470px;
            color: rgba(0, 0, 0, 1);
            width: 248px;
            height: auto;
            position: absolute;
            text-align: right;
            line-height: normal;
          }
          .adicionarcarto-caixa-mdulo {
            top: 456px;
            left: 737px;
            width: 649px;
            height: 80px;
            position: absolute;
          }
          .adicionarcarto-text06 {
            top: 478px;
            left: 479px;
            color: rgba(0, 0, 0, 1);
            width: 239px;
            height: auto;
            position: absolute;
            text-align: right;
            line-height: normal;
          }
          .adicionarcarto-caixa-setor1 {
            top: 561px;
            left: 737px;
            width: 254px;
            height: 80px;
            position: absolute;
          }
          .adicionarcarto-caixa-setor2 {
            top: 561px;
            left: 1138px;
            width: 254px;
            height: 80px;
            position: absolute;
          }
          .adicionarcarto-text08 {
            top: 583px;
            left: 573px;
            color: rgba(0, 0, 0, 1);
            width: 145px;
            height: auto;
            position: absolute;
            text-align: right;
            line-height: normal;
          }
          .adicionarcarto-text10 {
            top: 583px;
            left: 976px;
            color: rgba(0, 0, 0, 1);
            width: 145px;
            height: auto;
            position: absolute;
            text-align: right;
            line-height: normal;
          }
          .adicionarcarto-default {
            top: 708px;
            left: 844px;
            width: 436px;
            height: 76px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .adicionarcarto-button {
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
          .adicionarcarto-text12 {
            top: 21.280000686645508px;
            left: 134.5500030517578px;
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
          .adicionarcarto-tabelas {
            top: 293px;
            left: -2px;
            width: 273px;
            height: 369px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .adicionarcarto-button1 {
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
          .adicionarcarto-content {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .adicionarcarto-text14 {
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
          .adicionarcarto-button2 {
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
          .adicionarcarto-content1 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .adicionarcarto-text16 {
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
          .adicionarcarto-button3 {
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
          .adicionarcarto-content2 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .adicionarcarto-text18 {
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
          .adicionarcarto-button4 {
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
          .adicionarcarto-content3 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .adicionarcarto-text20 {
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
          .adicionarcarto-button5 {
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
          .adicionarcarto-content4 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .adicionarcarto-text22 {
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
          .adicionarcarto-perfil-logo {
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

export default Adicionarcarto
