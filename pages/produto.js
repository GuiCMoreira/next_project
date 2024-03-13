import React from 'react'
import Head from 'next/head'
import Link from 'next/link';

const Produto = (props) => {
  return (
    <>
      <div className='produto-container'>
        <Head>
          <title>exported project</title>
        </Head>
        <div className='produto-produto'>
          <div className='produto-frame'>
            <img
              src='/external/navbar2135-r3uv-200h.png'
              alt='NAVBAR2135'
              className='produto-navbar'
            />
            <img
              src='/external/barralateral2135-veo-300w.png'
              alt='Barralateral2135'
              className='produto-barralateral'
            />
          </div>
          <span className='produto-text Titulo'>
            <span>Saturno</span>
          </span>
          <img
            src='/external/efeitoplanetaselecionado2135-rn6-200h.png'
            alt='EfeitoPlanetaSelecionado2135'
            className='produto-efeito-planeta-selecionado'
          />
          <div className='produto-planetas'>
            <img
              src='/external/planetneptune2135-zssh.svg'
              alt='PlanetNeptune2135'
              className='produto-planet-neptune'
            />
            <img
              src='/external/planetmercury2135-cd7i.svg'
              alt='PlanetMercury2135'
              className='produto-planet-mercury'
            />
            <img
              src='/external/planetvenus2135-0t2.svg'
              alt='PlanetVenus2135'
              className='produto-planet-venus'
            />
            <img
              src='/external/planetearth2135-xsd2.svg'
              alt='PlanetEarth2135'
              className='produto-planet-earth'
            />
            <img
              src='/external/planetmars2135-zbql.svg'
              alt='PlanetMars2135'
              className='produto-planet-mars'
            />
            <img
              src='/external/planetjupiter2135-mtx.svg'
              alt='PlanetJupiter2135'
              className='produto-planet-jupiter'
            />
            <img
              src='/external/planetsaturn2135-22ud.svg'
              alt='PlanetSaturn2135'
              className='produto-planet-saturn'
            />
            <img
              src='/external/planetsaturn2135-0i.svg'
              alt='PlanetSaturn2135'
              className='produto-planet-saturn1'
            />
          </div>
          <div className='produto-product-images'>
            <img
              src='/external/image12196-lfq4-300h.png'
              alt='image12196'
              className='produto-image1'
            />
            <img
              src='/external/image22196-n29i-300h.png'
              alt='image22196'
              className='produto-image2'
            />
            <img
              src='/external/image32196-3pi-300h.png'
              alt='image32196'
              className='produto-image3'
            />
            <img
              src='/external/image55351-qdib-300h.png'
              alt='image55351'
              className='produto-image5'
            />
            <img
              src='/external/image42196-65q-300h.png'
              alt='image42196'
              className='produto-image4'
            />
          </div>
          <Link href='/carrinhodecompras'>
            <button className='produto-add-to-cart-button'>
              <div className='produto-button'>
                <span className='produto-text02'>
                  <span>Adicionar ao carrinho - R$ 3.999,00</span>
                </span>
              </div>
            </button>
          </Link>
          <Link href='/finalizarpedido'>
            <button className='produto-add-to-cart-button1'>
              <div className='produto-button1'>
                <span className='produto-text04'>
                  <span>Comprar Agora</span>
                </span>
              </div>
            </button>
          </Link>
          <div className='produto-quantity'>
            <div className='produto-quantity-input'>
              <div className='produto-subtract'>
                <div className='produto-frame-round-contentremove'>
                  <img
                    src='/external/svgiconcolori219-879.svg'
                    alt='SVGIconColorI219'
                    className='produto-svg-icon-color'
                  />
                </div>
              </div>
              <span className='produto-text06'>1</span>
              <div className='produto-add'>
                <div className='produto-frame-round-contentadd'>
                  <img
                    src='/external/svgiconcolori219-7jm.svg'
                    alt='SVGIconColorI219'
                    className='produto-svg-icon-color1'
                  />
                </div>
              </div>
            </div>
            <span className='produto-text07'>
              <span>Quantidade</span>
            </span>
            <span className='produto-text09'>
              <span>Saiba Mais</span>
            </span>
          </div>
          <span className='produto-text11'>
            <span>
              O iPhone 13 tem uma tela superbrilhante projetada para ser
              resistente. Faz vídeos com qualidade de cinema. Seu chip tem uma
              velocidade impressionante. E ganhou um aumento notável em bateria.
            </span>
          </span>
          <span className='produto-text13'>
            <span>Apple Iphone 13</span>
          </span>
          <span className='produto-text15'>
            <span>R$ 3.999,00</span>
          </span>
          <div className='produto-frame1'>
            <div className='produto-group'>
              <img
                src='/external/vector2196-p6h.svg'
                alt='Vector2196'
                className='produto-vector'
              />
              <img
                src='/external/vector2196-x8z.svg'
                alt='Vector2196'
                className='produto-vector1'
              />
            </div>
          </div>
          <div className='produto-frame5'>
            <div className='produto-group4'>
              <span className='produto-text17'>3</span>
              <img
                src='/external/vector2196-pjk.svg'
                alt='Vector2196'
                className='produto-vector2'
              />
            </div>
          </div>
          <div className='produto-sizes'>
            <span className='produto-text18'>
              <span>Cor</span>
            </span>
            <div className='produto-sizes-options'>
              <div className='produto-secondary'>
                <div className='produto-button-outlined'>
                  <span className='produto-text20'></span>
                </div>
              </div>
              <div className='produto-secondary1'>
                <div className='produto-button-outlined1'>
                  <span className='produto-text21'></span>
                </div>
              </div>
              <div className='produto-secondary2'>
                <div className='produto-button-outlined2'>
                  <span className='produto-text22'></span>
                </div>
              </div>
              <div className='produto-secondary3'></div>
            </div>
          </div>
          <img
            src='/external/efeitoplanetaselecionado3701-ov5d-200h.png'
            alt='EfeitoPlanetaSelecionado3701'
            className='produto-efeito-planeta-selecionado1'
          />
          <div className='produto-tabelas'>
            <Link href='/meus-dados'>
            <button className='produto-button2'>
              <div className='produto-content'>
                <span className='produto-text23'>
                  <span>Meu Perfil</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/pedidos'>
            <button className='produto-button3'>
              <div className='produto-content1'>
                <span className='produto-text25'>
                  <span>Pedidos</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/carrinhodecompras'>
            <button className='produto-button4'>
              <div className='produto-content2'>
                <span className='produto-text27'>
                  <span>Carrinho</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/catalogo'>
            <button className='produto-button5'>
              <div className='produto-content3'>
                <span className='produto-text29'>
                  <span>Catálogo</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/principal'>
            <button className='produto-button6'>
              <div className='produto-content4'>
                <span className='produto-text31'>
                  <span>Início</span>
                </span>
              </div>
            </button>
            </Link>
          </div>
          <Link href='/perfil'>
          <img
            src='/external/perfillogo5401-d5rm.svg'
            alt='PerfilLogo5401'
            className='produto-perfil-logo'
          />
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .produto-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .produto-produto {
            width: 100%;
            height: 1080px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .produto-frame {
            top: 0px;
            left: -1px;
            width: 1921px;
            height: 1080px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .produto-navbar {
            top: 0px;
            left: 1px;
            width: 1920px;
            height: 125px;
            position: absolute;
          }
          .produto-barralateral {
            top: 125px;
            left: 0px;
            width: 272px;
            height: 955px;
            position: absolute;
          }
          .produto-text {
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
          .produto-efeito-planeta-selecionado {
            top: 25px;
            left: 1211px;
            width: 90px;
            height: 90px;
            position: absolute;
          }
          .produto-planetas {
            top: 28px;
            left: 82px;
            width: 1324px;
            height: 139px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .produto-planet-neptune {
            top: 2px;
            left: 1244px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .produto-planet-mercury {
            top: 0px;
            left: 596px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .produto-planet-venus {
            top: 0px;
            left: 704px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .produto-planet-earth {
            top: 0px;
            left: 812px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .produto-planet-mars {
            top: 0px;
            left: 920px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .produto-planet-jupiter {
            top: 0px;
            left: 1028px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .produto-planet-saturn {
            top: 0px;
            left: 1136px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .produto-planet-saturn1 {
            top: 26px;
            left: 0px;
            width: 127px;
            height: 113px;
            position: absolute;
          }
          .produto-product-images {
            top: 288px;
            left: 456px;
            width: 554px;
            height: 553px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .produto-image1 {
            top: 0px;
            left: 0px;
            width: 271px;
            height: 271px;
            position: absolute;
          }
          .produto-image2 {
            top: 282px;
            left: 283px;
            width: 271px;
            height: 271px;
            position: absolute;
          }
          .produto-image3 {
            top: 280px;
            left: 0px;
            width: 271px;
            height: 271px;
            position: absolute;
          }
          .produto-image5 {
            top: 280px;
            left: 0px;
            width: 271px;
            height: 271px;
            position: absolute;
          }
          .produto-image4 {
            top: 0px;
            left: 283px;
            width: 271px;
            height: 271px;
            position: absolute;
          }
          .produto-add-to-cart-button {
            top: 726px;
            left: 1102px;
            width: 350px;
            height: 50px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .produto-button {
            top: 0px;
            left: 0px;
            width: 350px;
            height: 50px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(47, 34, 96, 1);
          }
          .produto-text02 {
            top: 14px;
            left: 54.125px;
            color: var(--dl-color-colors-white);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .produto-add-to-cart-button1 {
            top: 800px;
            left: 1102px;
            width: 350px;
            height: 50px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .produto-button1 {
            top: 0px;
            left: 0px;
            width: 350px;
            height: 50px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(47, 34, 96, 1);
          }
          .produto-text04 {
            top: 14px;
            left: 123.125px;
            color: var(--dl-color-colors-white);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .produto-quantity {
            top: 575px;
            left: 1264px;
            width: 365px;
            height: 200px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .produto-quantity-input {
            gap: 47.5px;
            top: 150px;
            left: 252px;
            width: 100px;
            display: flex;
            padding: 12px 10px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            justify-content: space-between;
          }
          .produto-subtract {
            width: 20px;
            height: 20px;
            display: flex;
            opacity: 0.5;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .produto-frame-round-contentremove {
            top: 9.166666984558105px;
            left: 4.166666507720947px;
            width: 11.666667938232422px;
            height: 1.6666669845581055px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .produto-svg-icon-color {
            top: 0px;
            left: 0px;
            width: 12px;
            height: 2px;
            position: absolute;
          }
          .produto-text06 {
            color: var(--dl-color-default-primary);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: center;
            font-family: Roboto;
            font-weight: 400;
            line-height: 26px;
            font-stretch: normal;
            text-decoration: none;
          }
          .produto-add {
            width: 20px;
            height: 20px;
            display: flex;
            opacity: 0.5;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .produto-frame-round-contentadd {
            top: 4.166666507720947px;
            left: 4.166666507720947px;
            width: 11.666667938232422px;
            height: 11.666667938232422px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .produto-svg-icon-color1 {
            top: 0px;
            left: 0px;
            width: 12px;
            height: 12px;
            position: absolute;
          }
          .produto-text07 {
            top: 116px;
            left: 252px;
            color: rgba(0, 0, 0, 1);
            width: 113px;
            height: auto;
            opacity: 0.5;
            position: absolute;
            font-size: 18px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 26px;
            font-stretch: normal;
            text-decoration: none;
          }
          .produto-text09 {
            color: rgba(0, 0, 0, 1);
            width: 113px;
            height: auto;
            opacity: 0.5;
            position: absolute;
            font-size: 18px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 26px;
            font-stretch: normal;
            text-decoration: none;
          }
          .produto-text11 {
            top: 463px;
            left: 1097px;
            color: var(--dl-color-default-primary);
            width: 473px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .produto-text13 {
            top: 365px;
            left: 1097px;
            color: rgba(16, 11, 80, 1);
            width: 519px;
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
          .produto-text15 {
            top: 433px;
            left: 1102px;
            color: rgba(0, 0, 0, 1);
            width: 519px;
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 26px;
            font-stretch: normal;
            text-decoration: none;
          }
          .produto-frame1 {
            top: 358px;
            left: 1578px;
            width: 32px;
            height: 32px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .produto-group {
            top: 3.2000274658203125px;
            left: 3.200244665145874px;
            width: 25.600128173828125px;
            height: 25.600833892822266px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .produto-vector {
            top: 0.0007104873657226562px;
            left: 0px;
            width: 26px;
            height: 26px;
            position: absolute;
          }
          .produto-vector1 {
            top: 0px;
            left: 12.257503509521484px;
            width: 13px;
            height: 13px;
            position: absolute;
          }
          .produto-frame5 {
            gap: 22px;
            top: 259px;
            left: 1602px;
            width: 60px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .produto-group4 {
            width: 36px;
            height: 21.012765884399414px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .produto-text17 {
            left: 25.7529296875px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 17px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .produto-vector2 {
            top: 0px;
            left: 0px;
            width: 18px;
            height: 21px;
            position: absolute;
          }
          .produto-sizes {
            top: 610px;
            left: 1103px;
            width: 224px;
            height: 104px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .produto-text18 {
            color: rgba(0, 0, 0, 1);
            width: 77px;
            height: auto;
            opacity: 0.5;
            position: absolute;
            font-size: 18px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 26px;
            font-stretch: normal;
            text-decoration: none;
          }
          .produto-sizes-options {
            gap: 8px;
            top: 35.609195709228516px;
            left: 0px;
            height: 68.39080810546875px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .produto-secondary {
            width: 50px;
            height: 50px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .produto-button-outlined {
            top: 0px;
            left: 0px;
            width: 50px;
            height: 50px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(0, 0, 0, 1);
          }
          .produto-text20 {
            top: 14px;
            left: 24.875px;
            color: var(--dl-color-default-primary);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Regular;
            text-align: center;
            font-family: RocknRoll One;
            font-weight: 400;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .produto-secondary1 {
            width: 50px;
            height: 50px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .produto-button-outlined1 {
            top: 0px;
            left: 0px;
            width: 50px;
            height: 50px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(0, 0, 0, 0);
          }
          .produto-text21 {
            top: 14px;
            left: 24.875px;
            color: var(--dl-color-default-primary);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Regular;
            text-align: center;
            font-family: RocknRoll One;
            font-weight: 400;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .produto-secondary2 {
            width: 50px;
            height: 50px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .produto-button-outlined2 {
            top: 0px;
            left: 0px;
            width: 50px;
            height: 50px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(160, 81, 188, 1);
          }
          .produto-text22 {
            top: 14px;
            left: 24.875px;
            color: var(--dl-color-default-primary);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Regular;
            text-align: center;
            font-family: RocknRoll One;
            font-weight: 400;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .produto-secondary3 {
            width: 50px;
            height: 50px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .produto-efeito-planeta-selecionado1 {
            top: 358px;
            left: 0px;
            width: 271px;
            height: 90px;
            position: absolute;
          }
          .produto-tabelas {
            top: 293px;
            left: -2px;
            width: 273px;
            height: 369px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .produto-button2 {
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
          .produto-content {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .produto-text23 {
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
          .produto-button3 {
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
          .produto-content1 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .produto-text25 {
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
          .produto-button4 {
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
          .produto-content2 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .produto-text27 {
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
          .produto-button5 {
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
          .produto-content3 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .produto-text29 {
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
          .produto-button6 {
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
          .produto-content4 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .produto-text31 {
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
          .produto-perfil-logo {
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

export default Produto
