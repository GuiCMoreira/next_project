import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Principal = (props) => {
  return (
    <>
      <div className="principal-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="principal-principal">
          <div className="principal-frame">
            <img
              src="/external/navbar2191-58vl-200h.png"
              alt="NAVBAR2191"
              className="principal-navbar"
            />
            <img
              src="/external/barralateral2191-508-300w.png"
              alt="Barralateral2191"
              className="principal-barralateral"
            />
          </div>
          <span className="principal-text Titulo">
            <span>Saturno</span>
          </span>
          <img
            src="/external/efeitoplanetaselecionado2191-oysw-200h.png"
            alt="EfeitoPlanetaSelecionado2191"
            className="principal-efeito-planeta-selecionado"
          />
          <img
            src="/external/efeitoplanetaselecionado3701-f926-200h.png"
            alt="EfeitoPlanetaSelecionado3701"
            className="principal-efeito-planeta-selecionado1"
          />
          <div className="principal-planetas">
            <img
              src="/external/planetneptune2191-rq0w.svg"
              alt="PlanetNeptune2191"
              className="principal-planet-neptune"
            />
            <img
              src="/external/planetmercury2191-p5d.svg"
              alt="PlanetMercury2191"
              className="principal-planet-mercury"
            />
            <img
              src="/external/planetvenus2191-ag34.svg"
              alt="PlanetVenus2191"
              className="principal-planet-venus"
            />
            <img
              src="/external/planetearth2191-xvh.svg"
              alt="PlanetEarth2191"
              className="principal-planet-earth"
            />
            <img
              src="/external/planetmars2191-5wnd.svg"
              alt="PlanetMars2191"
              className="principal-planet-mars"
            />
            <img
              src="/external/planetjupiter2191-kinhl.svg"
              alt="PlanetJupiter2191"
              className="principal-planet-jupiter"
            />
            <img
              src="/external/planetsaturn2191-mhg.svg"
              alt="PlanetSaturn2191"
              className="principal-planet-saturn"
            />
            <img
              src="/external/planetsaturn2191-n5mn.svg"
              alt="PlanetSaturn2191"
              className="principal-planet-saturn1"
            />
          </div>
          <span className="principal-text02">
            <span>Bem-vindo(a)</span>
          </span>
          <span className="principal-text04">
            <span>
              <span>Bem-vindo ao nosso modúlo de E-commerce!</span>
              <br></br>
              <span>Aqui voce encontrará uma ampla variedade de produtos.</span>
              <br></br>
              <span>Boas compras!!</span>
            </span>
          </span>
          <Link href="/catalogo">
          <div className="principal-secondary">
            <div className="principal-button-outlined">
              <span className="principal-text11">
                <span>Ver todos os produtos</span>
              </span>
            </div>
            </div>
          </Link>
          <div className="principal-frame3">
            <div className="principal-product-card">
              <img
                src="/external/productimage2191-zng-400h.png"
                alt="ProductImage2191"
                className="principal-product-image"
              />
              <span className="principal-text13">
                <span>Eletrodomésticos</span>
              </span>
            </div>
            <div className="principal-product-card1">
              <img
                src="/external/productimage2191-iy83-400h.png"
                alt="ProductImage2191"
                className="principal-product-image1"
              />
              <span className="principal-text15">
                <span>Moda</span>
              </span>
            </div>
            <div className="principal-product-card2">
              <img
                src="/external/productimage2191-q49-400h.png"
                alt="ProductImage2191"
                className="principal-product-image2"
              />
              <span className="principal-text17">
                <span>Cosméticos</span>
              </span>
            </div>
          </div>
          <img
            src="/external/efeitoplanetaselecionado3691-pqg75-300w.png"
            alt="EfeitoPlanetaSelecionado3691"
            className="principal-efeito-planeta-selecionado2"
          />
          <div className="principal-tabelas">
            <button className="principal-button">
              <div className="principal-content">
                <span className="principal-text19">
                  <span>Meu Perfil</span>
                </span>
              </div>
            </button>
            <button className="principal-button1">
              <div className="principal-content1">
                <span className="principal-text21">
                  <span>Pedidos</span>
                </span>
              </div>
            </button>
            <button className="principal-button2">
              <div className="principal-content2">
                <span className="principal-text23">
                  <span>Carrinho</span>
                </span>
              </div>
            </button>
            <button className="principal-button3">
              <div className="principal-content3">
                <span className="principal-text25">
                  <span>Catálogo</span>
                </span>
              </div>
            </button>
            <button className="principal-button4">
              <div className="principal-content4">
                <span className="principal-text27">
                  <span>Início</span>
                </span>
              </div>
            </button>
          </div>
          <img
            src="/external/perfillogo5401-oct3.svg"
            alt="PerfilLogo5401"
            className="principal-perfil-logo"
          />
        </div>
      </div>
      <style jsx>
        {`
          .principal-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .principal-principal {
            width: 100%;
            height: 1080px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .principal-frame {
            top: 0px;
            left: -1px;
            width: 1921px;
            height: 1080px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .principal-navbar {
            top: 0px;
            left: 1px;
            width: 1920px;
            height: 125px;
            position: absolute;
          }
          .principal-barralateral {
            top: 125px;
            left: 0px;
            width: 272px;
            height: 955px;
            position: absolute;
          }
          .principal-text {
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
          .principal-efeito-planeta-selecionado {
            top: 25px;
            left: 1211px;
            width: 90px;
            height: 90px;
            position: absolute;
          }
          .principal-efeito-planeta-selecionado1 {
            top: 285px;
            left: 0px;
            width: 271px;
            height: 90px;
            position: absolute;
          }
          .principal-planetas {
            top: 28px;
            left: 82px;
            width: 1324px;
            height: 139px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .principal-planet-neptune {
            top: 2px;
            left: 1244px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .principal-planet-mercury {
            top: 0px;
            left: 596px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .principal-planet-venus {
            top: 0px;
            left: 704px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .principal-planet-earth {
            top: 0px;
            left: 812px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .principal-planet-mars {
            top: 0px;
            left: 920px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .principal-planet-jupiter {
            top: 0px;
            left: 1028px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .principal-planet-saturn {
            top: 0px;
            left: 1136px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .principal-planet-saturn1 {
            top: 26px;
            left: 0px;
            width: 127px;
            height: 113px;
            position: absolute;
          }
          .principal-text02 {
            top: 245px;
            left: 704px;
            color: rgba(16, 11, 80, 1);
            width: 755px;
            height: auto;
            position: absolute;
            font-size: 56px;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: 62px;
            font-stretch: normal;
            text-decoration: none;
          }
          .principal-text04 {
            top: 326px;
            left: 777px;
            color: var(--dl-color-default-textsecondary);
            width: 610px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: center;
            font-family: Roboto;
            font-weight: 400;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .principal-secondary {
            top: 435px;
            left: 985px;
            width: 194px;
            height: 50px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .principal-button-outlined {
            top: 0px;
            left: 0px;
            width: 194px;
            height: 50px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(0, 0, 0, 0);
          }
          .principal-text11 {
            top: 14px;
            left: 22.075000762939453px;
            color: var(--dl-color-default-primary);
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
          .principal-frame3 {
            gap: 20px;
            top: 529px;
            left: 506px;
            width: 1151px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .principal-product-card {
            width: 370px;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .principal-product-image {
            top: 0px;
            left: 0px;
            width: 369px;
            height: 320px;
            position: absolute;
          }
          .principal-text13 {
            top: 341px;
            left: 89px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 22px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .principal-product-card1 {
            width: 370px;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .principal-product-image1 {
            top: 0px;
            left: 0px;
            width: 369px;
            height: 320px;
            position: absolute;
          }
          .principal-text15 {
            top: 342px;
            left: 153px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 22px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .principal-product-card2 {
            width: 370px;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .principal-product-image2 {
            top: 0px;
            left: 0px;
            width: 369px;
            height: 320px;
            position: absolute;
          }
          .principal-text17 {
            top: 341px;
            left: 122px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 22px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .principal-efeito-planeta-selecionado2 {
            top: 611px;
            left: 6556px;
            width: 271px;
            height: 90px;
            position: absolute;
          }
          .principal-tabelas {
            top: 293px;
            left: -2px;
            width: 273px;
            height: 369px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .principal-button {
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
          .principal-content {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .principal-text19 {
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
          .principal-button1 {
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
          .principal-content1 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .principal-text21 {
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
          .principal-button2 {
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
          .principal-content2 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .principal-text23 {
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
          .principal-button3 {
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
          .principal-content3 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .principal-text25 {
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
          .principal-button4 {
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
          .principal-content4 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .principal-text27 {
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
          .principal-perfil-logo {
            top: 21px;
            left: 1778px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

export default Principal
