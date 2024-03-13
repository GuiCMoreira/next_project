import React from 'react'
import Head from 'next/head'
import Link from 'next/link';

const Catalogo = (props) => {
  return (
    <>
      <div className='catalogo-container'>
        <Head>
          <title>exported project</title>
        </Head>
        <div className='catalogo-catalogo'>
          <div className='catalogo-frame'>
            <img
              src='/external/navbar2082-4yan-200h.png'
              alt='NAVBAR2082'
              className='catalogo-navbar'
            />
            <img
              src='/external/barralateral2082-ry6b-300w.png'
              alt='Barralateral2082'
              className='catalogo-barralateral'
            />
          </div>
          <span className='catalogo-text Titulo'>
            <span>Saturno</span>
          </span>
          <img
            src='/external/efeitoplanetaselecionado2082-agoa-200h.png'
            alt='EfeitoPlanetaSelecionado2082'
            className='catalogo-efeito-planeta-selecionado'
          />
          <div className='catalogo-planetas'>
            <img
              src='/external/planetneptune2082-bucg.svg'
              alt='PlanetNeptune2082'
              className='catalogo-planet-neptune'
            />
            <img
              src='/external/planetmercury2082-zszd.svg'
              alt='PlanetMercury2082'
              className='catalogo-planet-mercury'
            />
            <img
              src='/external/planetvenus2082-x695.svg'
              alt='PlanetVenus2082'
              className='catalogo-planet-venus'
            />
            <img
              src='/external/planetearth2082-bfp.svg'
              alt='PlanetEarth2082'
              className='catalogo-planet-earth'
            />
            <img
              src='/external/planetmars2082-z0mo.svg'
              alt='PlanetMars2082'
              className='catalogo-planet-mars'
            />
            <img
              src='/external/planetjupiter2082-zqf8.svg'
              alt='PlanetJupiter2082'
              className='catalogo-planet-jupiter'
            />
            <img
              src='/external/planetsaturn2082-zczd.svg'
              alt='PlanetSaturn2082'
              className='catalogo-planet-saturn'
            />
            <img
              src='/external/planetsaturn2082-0qvr.svg'
              alt='PlanetSaturn2082'
              className='catalogo-planet-saturn1'
            />
          </div>
          <div className='catalogo-dropdown02'>
            <img
              src='/external/basei214-bgmm-200h.png'
              alt='BaseI214'
              className='catalogo-base'
            />
            <span className='catalogo-text02'>
              <span className='catalogo-text03'>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Popular</span>
            </span>
            <div className='catalogo-frame-icons-chevron-down'>
              <div className='catalogo-frame-round-hardwarekeyboardarrowdown'>
                <img
                  src='/external/svgiconcolori214-jfwe.svg'
                  alt='SVGIconColorI214'
                  className='catalogo-svg-icon-color'
                />
              </div>
            </div>
            <span className='catalogo-text05'>
              <span>
                Filtre por
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <span className='catalogo-text07'>
            <span>Classificar</span>
          </span>
          <span className='catalogo-text09'>
            <span>Produtos</span>
          </span>
          <div className='catalogo-filteritems'>
            <div className='catalogo-filteritem'>
              <div className='catalogo-default'>
                <div className='catalogo-group'></div>
              </div>
              <img
                src='/external/rectangle7i219-tw2c-200h.png'
                alt='Rectangle7I219'
                className='catalogo-rectangle7'
              />
              <span className='catalogo-text11'>
                <span>Preço - Menor para Maior</span>
              </span>
            </div>
            <div className='catalogo-filteritem1'>
              <div className='catalogo-default1'>
                <div className='catalogo-group1'></div>
              </div>
              <img
                src='/external/rectangle7i219-3qu-200h.png'
                alt='Rectangle7I219'
                className='catalogo-rectangle71'
              />
              <span className='catalogo-text13'>
                <span>Preço - Maior para Menor</span>
              </span>
            </div>
            <div className='catalogo-filteritem2'>
              <div className='catalogo-default2'>
                <div className='catalogo-group2'></div>
              </div>
              <img
                src='/external/rectangle7i219-3fjq-200h.png'
                alt='Rectangle7I219'
                className='catalogo-rectangle72'
              />
              <span className='catalogo-text15'>
                <span>Mais Relevantes</span>
              </span>
            </div>
            <div className='catalogo-filteritem3'>
              <div className='catalogo-default3'>
                <div className='catalogo-group3'></div>
              </div>
              <img
                src='/external/rectangle7i219-okff-200h.png'
                alt='Rectangle7I219'
                className='catalogo-rectangle73'
              />
              <span className='catalogo-text17'>
                <span>Populares</span>
              </span>
            </div>
          </div>
          <span className='catalogo-text19'>
            <span>
              Explore um mundo de possibilidades e conveniência em nosso
              catálogo. Aqui você encontrará uma ampla gama de produtos
              cuidadosamente selecionados, para atender as suas necessidades e
              desejos.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className='catalogo-text21'>
            <span>Mostrando 1003 Produtos</span>
          </span>
          <Link href='/produto'>
            <div className='catalogo-productgrid'>
              <div className='catalogo-frame1'>
                <div className='catalogo-product-card'>
                  <img
                    src='/external/productimagei219-ydot-300h.png'
                    alt='ProductImageI219'
                    className='catalogo-product-image'
                  />
                  <span className='catalogo-text23'>
                    <span>Cervejaria</span>
                  </span>
                  <span className='catalogo-text25'>
                    <span>R$ 2.069,80</span>
                  </span>
                </div>
                <div className='catalogo-product-card1'>
                  <img
                    src='/external/productimagei219-6pb-300h.png'
                    alt='ProductImageI219'
                    className='catalogo-product-image1'
                  />
                  <span className='catalogo-text27'>
                    <span>Notebook Samsung</span>
                  </span>
                  <span className='catalogo-text29'>
                    <span>R$2.583,49</span>
                  </span>
                </div>
                <div className='catalogo-product-card2'>
                  <img
                    src='/external/productimagei219-hoki-300h.png'
                    alt='ProductImageI219'
                    className='catalogo-product-image2'
                  />
                  <span className='catalogo-text31'>
                    <span>Console Playstation 5</span>
                  </span>
                  <span className='catalogo-text33'>
                    <span>R$ 3.674,05</span>
                  </span>
                </div>
              </div>
              <div className='catalogo-frame3'>
                <div className='catalogo-product-card3'>
                  <img
                    src='/external/productimagei219-y4yg-300h.png'
                    alt='ProductImageI219'
                    className='catalogo-product-image3'
                  />
                  <span className='catalogo-text35'>
                    <span>Secador de Cabelo</span>
                  </span>
                  <span className='catalogo-text37'>
                    <span>R$ 709,90</span>
                  </span>
                </div>
                <div className='catalogo-product-card4'>
                  <img
                    src='/external/productimagei219-5py-300h.png'
                    alt='ProductImageI219'
                    className='catalogo-product-image4'
                  />
                  <span className='catalogo-text39'>
                    <span>Casa Pet Mister Pig</span>
                  </span>
                  <span className='catalogo-text41'>
                    <span>
                      <span>R$ 453,80</span>
                      <br></br>
                      <span></span>
                    </span>
                  </span>
                </div>
                <div className='catalogo-product-card5'>
                  <img
                    src='/external/productimagei219-b2il-300h.png'
                    alt='ProductImageI219'
                    className='catalogo-product-image5'
                  />
                  <span className='catalogo-text46'>
                    <span>Carrinho de Bebê</span>
                  </span>
                  <span className='catalogo-text48'>
                    <span>
                      <span>R$ 3.999,00</span>
                      <br></br>
                      <span></span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <img
            src='/external/efeitoplanetaselecionado3701-pa6s-200h.png'
            alt='EfeitoPlanetaSelecionado3701'
            className='catalogo-efeito-planeta-selecionado1'
          />
          <div className='catalogo-tabelas'>
            <Link href='/meus-dados'>
            <button className='catalogo-button'>
              <div className='catalogo-content'>
                <span className='catalogo-text53'>
                  <span>Meu Perfil</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/pedidos'>
              <button className='catalogo-button1'>
                <div className='catalogo-content1'>
                  <span className='catalogo-text55'>
                    <span>Pedidos</span>
                  </span>
                </div>
              </button>
            </Link>
            <Link href='/carrinhodecompras'>
              <button className='catalogo-button2'>
                <div className='catalogo-content2'>
                  <span className='catalogo-text57'>
                    <span>Carrinho</span>
                  </span>
                </div>
              </button>
            </Link>
            <Link href='/catalogo'>
              <button className='catalogo-button3'>
                <div className='catalogo-content3'>
                  <span className='catalogo-text59'>
                    <span>Catálogo</span>
                  </span>
                </div>
              </button>
            </Link>
            <Link href='/principal'>
              <button className='catalogo-button4'>
                <div className='catalogo-content4'>
                  <span className='catalogo-text61'>
                    <span>Início</span>
                  </span>
                </div>
              </button>
            </Link>
          </div>
          <img
            src='/external/perfillogo5401-s6ev.svg'
            alt='PerfilLogo5401'
            className='catalogo-perfil-logo'
          />
        </div>
      </div>
      <style jsx>
        {`
          .catalogo-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .catalogo-catalogo {
            width: 100%;
            height: 1080px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .catalogo-frame {
            top: 0px;
            left: -1px;
            width: 1921px;
            height: 1080px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .catalogo-navbar {
            top: 0px;
            left: 1px;
            width: 1920px;
            height: 125px;
            position: absolute;
          }
          .catalogo-barralateral {
            top: 125px;
            left: 0px;
            width: 272px;
            height: 955px;
            position: absolute;
          }
          .catalogo-text {
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
          .catalogo-efeito-planeta-selecionado {
            top: 25px;
            left: 1211px;
            width: 90px;
            height: 90px;
            position: absolute;
          }
          .catalogo-planetas {
            top: 28px;
            left: 82px;
            width: 1324px;
            height: 139px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .catalogo-planet-neptune {
            top: 2px;
            left: 1244px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .catalogo-planet-mercury {
            top: 0px;
            left: 596px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .catalogo-planet-venus {
            top: 0px;
            left: 704px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .catalogo-planet-earth {
            top: 0px;
            left: 812px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .catalogo-planet-mars {
            top: 0px;
            left: 920px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .catalogo-planet-jupiter {
            top: 0px;
            left: 1028px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .catalogo-planet-saturn {
            top: 0px;
            left: 1136px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .catalogo-planet-saturn1 {
            top: 26px;
            left: 0px;
            width: 127px;
            height: 113px;
            position: absolute;
          }
          .catalogo-dropdown02 {
            top: 173px;
            left: 1602px;
            width: 160px;
            height: 37px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .catalogo-base {
            top: 0px;
            left: 0px;
            width: 160px;
            height: 37px;
            position: absolute;
            border-color: rgba(28, 39, 90, 1);
            border-style: solid;
            border-width: 1px;
          }
          .catalogo-text02 {
            top: 6px;
            left: 67px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: 26px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-text03 {
            font-weight: 700;
          }
          .catalogo-frame-icons-chevron-down {
            top: 7px;
            left: 123px;
            width: 24px;
            height: 24px;
            display: flex;
            opacity: 0.5;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .catalogo-frame-round-hardwarekeyboardarrowdown {
            top: 8.9975004196167px;
            left: 6.40749979019165px;
            width: 11.175000190734863px;
            height: 6.585000038146973px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .catalogo-svg-icon-color {
            top: 0px;
            left: 0px;
            width: 11px;
            height: 7px;
            position: absolute;
          }
          .catalogo-text05 {
            top: 6px;
            left: 12px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            opacity: 0.5;
            position: absolute;
            font-size: 13px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 26px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-text07 {
            top: 514px;
            left: 397px;
            color: rgba(16, 10, 79, 0.800000011920929);
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
          .catalogo-text09 {
            top: 270px;
            left: 402px;
            color: rgba(16, 10, 79, 0.800000011920929);
            height: auto;
            position: absolute;
            font-size: 48px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-filteritems {
            gap: 10px;
            top: 597px;
            left: 402px;
            width: 190px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .catalogo-filteritem {
            width: 190px;
            height: 20px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .catalogo-default {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 19.615385055541992px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .catalogo-group {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 19.615385055541992px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .catalogo-rectangle7 {
            top: 0px;
            left: 0px;
            width: 190px;
            height: 20px;
            position: absolute;
          }
          .catalogo-text11 {
            top: 1px;
            left: 32px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 13px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 17px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-filteritem1 {
            width: 190px;
            height: 20px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .catalogo-default1 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 19.615385055541992px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .catalogo-group1 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 19.615385055541992px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .catalogo-rectangle71 {
            top: 0px;
            left: 0px;
            width: 190px;
            height: 20px;
            position: absolute;
          }
          .catalogo-text13 {
            top: 1px;
            left: 32px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 13px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 17px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-filteritem2 {
            width: 190px;
            height: 20px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .catalogo-default2 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 19.615385055541992px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .catalogo-group2 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 19.615385055541992px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .catalogo-rectangle72 {
            top: 0px;
            left: 0px;
            width: 190px;
            height: 20px;
            position: absolute;
          }
          .catalogo-text15 {
            top: 1px;
            left: 32px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 13px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 17px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-filteritem3 {
            width: 190px;
            height: 20px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .catalogo-default3 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 19.615385055541992px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .catalogo-group3 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 19.615385055541992px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .catalogo-rectangle73 {
            top: 0px;
            left: 0px;
            width: 190px;
            height: 20px;
            position: absolute;
          }
          .catalogo-text17 {
            top: 1px;
            left: 32px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 13px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 17px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-text19 {
            top: 349px;
            left: 402px;
            color: var(--dl-color-default-textsecondary);
            width: 476px;
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
          .catalogo-text21 {
            top: 218px;
            left: 1602px;
            color: rgba(0, 0, 0, 1);
            width: 185px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-productgrid {
            gap: 20px;
            top: 272px;
            left: 961px;
            width: 835px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .catalogo-frame1 {
            gap: 20px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
          }
          .catalogo-product-card {
            width: 265px;
            height: 331px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .catalogo-product-image {
            top: 0px;
            left: 0px;
            width: 264px;
            height: 265px;
            position: absolute;
          }
          .catalogo-text23 {
            top: 277.2979431152344px;
            color: rgba(0, 0, 0, 1);
            width: 239px;
            height: auto;
            position: absolute;
            font-size: 17px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-text25 {
            top: 303.6607666015625px;
            color: rgba(0, 0, 0, 1);
            width: 149px;
            height: auto;
            position: absolute;
            font-size: 17px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-product-card1 {
            width: 265px;
            height: 331px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .catalogo-product-image1 {
            top: 0px;
            left: 0px;
            width: 264px;
            height: 265px;
            position: absolute;
          }
          .catalogo-text27 {
            top: 277.2979431152344px;
            color: rgba(0, 0, 0, 1);
            width: 239px;
            height: auto;
            position: absolute;
            font-size: 17px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-text29 {
            top: 303.6607666015625px;
            color: rgba(0, 0, 0, 1);
            width: 149px;
            height: auto;
            position: absolute;
            font-size: 17px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-product-card2 {
            width: 265px;
            height: 331px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .catalogo-product-image2 {
            top: 0px;
            left: 0px;
            width: 264px;
            height: 265px;
            position: absolute;
          }
          .catalogo-text31 {
            top: 277.2979431152344px;
            color: rgba(0, 0, 0, 1);
            width: 239px;
            height: auto;
            position: absolute;
            font-size: 17px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-text33 {
            top: 303.6607666015625px;
            color: rgba(0, 0, 0, 1);
            width: 149px;
            height: auto;
            position: absolute;
            font-size: 17px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-frame3 {
            gap: 20px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
          }
          .catalogo-product-card3 {
            width: 265px;
            height: 331px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .catalogo-product-image3 {
            top: 0px;
            left: 0px;
            width: 264px;
            height: 265px;
            position: absolute;
          }
          .catalogo-text35 {
            top: 277.2979431152344px;
            color: rgba(0, 0, 0, 1);
            width: 239px;
            height: auto;
            position: absolute;
            font-size: 17px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-text37 {
            top: 303.6607666015625px;
            color: rgba(0, 0, 0, 1);
            width: 149px;
            height: auto;
            position: absolute;
            font-size: 17px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-product-card4 {
            width: 265px;
            height: 331px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .catalogo-product-image4 {
            top: 0px;
            left: 0px;
            width: 264px;
            height: 265px;
            position: absolute;
          }
          .catalogo-text39 {
            top: 277.2979431152344px;
            color: rgba(0, 0, 0, 1);
            width: 239px;
            height: auto;
            position: absolute;
            font-size: 17px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-text41 {
            top: 303.6607666015625px;
            color: rgba(0, 0, 0, 1);
            width: 149px;
            height: auto;
            position: absolute;
            font-size: 17px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-product-card5 {
            width: 265px;
            height: 331px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .catalogo-product-image5 {
            top: 0px;
            left: 0px;
            width: 264px;
            height: 265px;
            position: absolute;
          }
          .catalogo-text46 {
            top: 277.2979431152344px;
            color: rgba(0, 0, 0, 1);
            width: 239px;
            height: auto;
            position: absolute;
            font-size: 17px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-text48 {
            top: 303.6607666015625px;
            color: rgba(0, 0, 0, 1);
            width: 149px;
            height: auto;
            position: absolute;
            font-size: 17px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .catalogo-efeito-planeta-selecionado1 {
            top: 358px;
            left: 0px;
            width: 271px;
            height: 90px;
            position: absolute;
          }
          .catalogo-tabelas {
            top: 293px;
            left: -2px;
            width: 273px;
            height: 369px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .catalogo-button {
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
          .catalogo-content {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .catalogo-text53 {
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
          .catalogo-button1 {
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
          .catalogo-content1 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .catalogo-text55 {
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
          .catalogo-button2 {
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
          .catalogo-content2 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .catalogo-text57 {
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
          .catalogo-button3 {
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
          .catalogo-content3 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .catalogo-text59 {
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
          .catalogo-button4 {
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
          .catalogo-content4 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .catalogo-text61 {
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
          .catalogo-perfil-logo {
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

export default Catalogo
