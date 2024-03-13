import React from 'react'
import Head from 'next/head'
import Link from 'next/link';

const Pedidos = (props) => {
  return (
    <>
      <div className='pedidos-container'>
        <Head>
          <title>exported project</title>
        </Head>
        <div className='pedidos-pedidos'>
          <div className='pedidos-frame'>
            <img
              src='/external/navbar2191-x2vi-200h.png'
              alt='NAVBAR2191'
              className='pedidos-navbar'
            />
            <img
              src='/external/barralateral2191-chhw-300w.png'
              alt='Barralateral2191'
              className='pedidos-barralateral'
            />
          </div>
          <span className='pedidos-text Titulo'>
            <span>Saturno</span>
          </span>
          <img
            src='/external/efeitoplanetaselecionado2191-l6g5-200h.png'
            alt='EfeitoPlanetaSelecionado2191'
            className='pedidos-efeito-planeta-selecionado'
          />
          <div className='pedidos-planetas'>
            <img
              src='/external/planetneptune2191-aqq6h.svg'
              alt='PlanetNeptune2191'
              className='pedidos-planet-neptune'
            />
            <img
              src='/external/planetmercury2191-eqch.svg'
              alt='PlanetMercury2191'
              className='pedidos-planet-mercury'
            />
            <img
              src='/external/planetvenus2191-qh4f.svg'
              alt='PlanetVenus2191'
              className='pedidos-planet-venus'
            />
            <img
              src='/external/planetearth2191-qw0j.svg'
              alt='PlanetEarth2191'
              className='pedidos-planet-earth'
            />
            <img
              src='/external/planetmars2191-qn7.svg'
              alt='PlanetMars2191'
              className='pedidos-planet-mars'
            />
            <img
              src='/external/planetjupiter2191-jg5.svg'
              alt='PlanetJupiter2191'
              className='pedidos-planet-jupiter'
            />
            <img
              src='/external/planetsaturn2191-h3lu.svg'
              alt='PlanetSaturn2191'
              className='pedidos-planet-saturn'
            />
            <img
              src='/external/planetsaturn2191-2psi.svg'
              alt='PlanetSaturn2191'
              className='pedidos-planet-saturn1'
            />
          </div>
          <span className='pedidos-text02'>
            <span>Pedidos</span>
          </span>
          <div className='pedidos-dropdown02'>
            <img
              src='/external/base2191-o9wc-200h.png'
              alt='Base2191'
              className='pedidos-base'
            />
            <span className='pedidos-text04'>
              <span>Últimos 7 Dias</span>
            </span>
            <div className='pedidos-frame-icons-chevron-down'>
              <div className='pedidos-frame-round-hardwarekeyboardarrowdown'>
                <img
                  src='/external/svgiconcolor2191-j3t6.svg'
                  alt='SVGIconColor2191'
                  className='pedidos-svg-icon-color'
                />
              </div>
            </div>
          </div>
          <img
            src='/external/rectangle442191-kzb.svg'
            alt='Rectangle442191'
            className='pedidos-rectangle44'
          />
          <div className='pedidos-order-information'>
            <div className='pedidos-title'>
              <span className='pedidos-text06'>
                <span>Outras informações</span>
              </span>
              <img
                src='/external/line52622-hhy.svg'
                alt='Line52622'
                className='pedidos-line5'
              />
            </div>
            <div className='pedidos-simpleaccordion'>
              <div className='pedidos-group3'>
                <span className='pedidos-text08'>
                  <span>Politica de retorno</span>
                </span>
                <img
                  src='/external/framei262-dxqi.svg'
                  alt='FrameI262'
                  className='pedidos-frame1'
                />
              </div>
              <span className='pedidos-text10'>
                <span>
                  {' '}
                  A política de devolução permite que os clientes devolvam
                  produtos em até 30 dias após a compra, desde que os produtos
                  estejam em condições originais. Os custos de envio de
                  devolução são cobertos pela loja. Os reembolsos são
                  processados dentro de 15 dias úteis após a aprovação da
                  devolução.
                </span>
              </span>
              <img
                src='/external/line6i262-6109.svg'
                alt='Line6I262'
                className='pedidos-line6'
              />
            </div>
          </div>
          <img
            src='/external/rectangle572191-o7x.svg'
            alt='Rectangle572191'
            className='pedidos-rectangle57'
          />
          <span className='pedidos-text12'>
            <span>número do pedido</span>
          </span>
          <img
            src='/external/rectangle582191-wj8q-200h.png'
            alt='Rectangle582191'
            className='pedidos-rectangle58'
          />
          <div className='pedidos-user'>
            <div className='pedidos-user1'>
              <div className='pedidos-bg'>
                <div className='pedidos-checkbox-neutral'>
                  <img
                    src='/external/checkboxneutrali219-2p7-200h.png'
                    alt='CheckboxNeutralI219'
                    className='pedidos-checkbox-neutral1'
                  />
                </div>
              </div>
            </div>
            <img
              src='/external/rectangle592191-u194t-200h.png'
              alt='Rectangle592191'
              className='pedidos-rectangle59'
            />
          </div>
          <div className='pedidos-user2'>
            <div className='pedidos-user3'>
              <div className='pedidos-bg1'>
                <div className='pedidos-checkbox-neutral2'>
                  <img
                    src='/external/checkboxneutrali219-imk-200h.png'
                    alt='CheckboxNeutralI219'
                    className='pedidos-checkbox-neutral3'
                  />
                </div>
              </div>
            </div>
            <img
              src='/external/rectangle592191-jvhf-200h.png'
              alt='Rectangle592191'
              className='pedidos-rectangle591'
            />
          </div>
          <div className='pedidos-user4'>
            <div className='pedidos-user5'></div>
            <img
              src='/external/rectangle592191-zsw-200h.png'
              alt='Rectangle592191'
              className='pedidos-rectangle592'
            />
          </div>
          <Link href='/rastreamento'>
          <div className='pedidos-user6'>
            <div className='pedidos-user7'></div>
            <img
              src='/external/rectangle592191-7sp5-200h.png'
              alt='Rectangle592191'
              className='pedidos-rectangle593'
            />
            <span className='pedidos-text14'>
              <span>Fabio Nascimento</span>
            </span>
            <span className='pedidos-text16'>
              <span>Pago</span>
            </span>
            <span className='pedidos-text18'>
              <span>R$2.105,32</span>
            </span>
            <span className='pedidos-text20'>
              <span>Uberaba</span>
            </span>
            <span className='pedidos-text22'>
              <span>13-nov-2023</span>
            </span>
            <span className='pedidos-text24'>
              <span>300</span>
            </span>
          </div>
          <span className='pedidos-text26'>
            <span>Nome</span>
          </span>
          <span className='pedidos-text28'>
            <span>Status de pagamento</span>
          </span>
          <span className='pedidos-text30'>
            <span>Valor</span>
          </span>
          <span className='pedidos-text32'>
            <span>Endereço</span>
          </span>
          <span className='pedidos-text34'>
            <span>Data do pedido</span>
          </span>
          <span className='pedidos-text36'>
            <span>Confirmado</span>
          </span>
          <span className='pedidos-text38'>
            <span>Status</span>
          </span>
          </Link>
          <img
            src='/external/efeitoplanetaselecionado3701-dprj-200h.png'
            alt='EfeitoPlanetaSelecionado3701'
            className='pedidos-efeito-planeta-selecionado1'
          />
          <div className='pedidos-tabelas'>
            <button className='pedidos-button'>
              <div className='pedidos-content'>
                <span className='pedidos-text40'>
                  <span>Meu Perfil</span>
                </span>
              </div>
            </button>
            <button className='pedidos-button1'>
              <div className='pedidos-content1'>
                <span className='pedidos-text42'>
                  <span>Pedidos</span>
                </span>
              </div>
            </button>
            <button className='pedidos-button2'>
              <div className='pedidos-content2'>
                <span className='pedidos-text44'>
                  <span>Carrinho</span>
                </span>
              </div>
            </button>
            <button className='pedidos-button3'>
              <div className='pedidos-content3'>
                <span className='pedidos-text46'>
                  <span>Catálogo</span>
                </span>
              </div>
            </button>
            <button className='pedidos-button4'>
              <div className='pedidos-content4'>
                <span className='pedidos-text48'>
                  <span>Início</span>
                </span>
              </div>
            </button>
          </div>
          <Link href='/perfil'>
          <img
            src='/external/perfillogo5402-eaw.svg'
            alt='PerfilLogo5402'
            className='pedidos-perfil-logo'
          />
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .pedidos-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .pedidos-pedidos {
            width: 100%;
            height: 1080px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .pedidos-frame {
            top: 0px;
            left: -1px;
            width: 1921px;
            height: 1080px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pedidos-navbar {
            top: 0px;
            left: 1px;
            width: 1920px;
            height: 125px;
            position: absolute;
          }
          .pedidos-barralateral {
            top: 125px;
            left: 0px;
            width: 272px;
            height: 955px;
            position: absolute;
          }
          .pedidos-text {
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
          .pedidos-efeito-planeta-selecionado {
            top: 25px;
            left: 1211px;
            width: 90px;
            height: 90px;
            position: absolute;
          }
          .pedidos-planetas {
            top: 28px;
            left: 82px;
            width: 1324px;
            height: 139px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pedidos-planet-neptune {
            top: 2px;
            left: 1244px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pedidos-planet-mercury {
            top: 0px;
            left: 596px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pedidos-planet-venus {
            top: 0px;
            left: 704px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pedidos-planet-earth {
            top: 0px;
            left: 812px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pedidos-planet-mars {
            top: 0px;
            left: 920px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pedidos-planet-jupiter {
            top: 0px;
            left: 1028px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pedidos-planet-saturn {
            top: 0px;
            left: 1136px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pedidos-planet-saturn1 {
            top: 26px;
            left: 0px;
            width: 127px;
            height: 113px;
            position: absolute;
          }
          .pedidos-text02 {
            top: 283px;
            left: 994px;
            color: rgba(16, 11, 80, 1);
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
          .pedidos-dropdown02 {
            top: 320px;
            left: 1404px;
            width: 160px;
            height: 37px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pedidos-base {
            top: 0px;
            left: 0px;
            width: 160px;
            height: 37px;
            position: absolute;
            border-color: rgba(28, 39, 90, 1);
            border-style: solid;
            border-width: 1px;
          }
          .pedidos-text04 {
            top: 6px;
            left: 17px;
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
          .pedidos-frame-icons-chevron-down {
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
          .pedidos-frame-round-hardwarekeyboardarrowdown {
            top: 8.9975004196167px;
            left: 6.40749979019165px;
            width: 11.175000190734863px;
            height: 6.585000038146973px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pedidos-svg-icon-color {
            top: 0px;
            left: 0px;
            width: 11px;
            height: 7px;
            position: absolute;
          }
          .pedidos-rectangle44 {
            top: 427px;
            left: 431px;
            width: 1126px;
            height: 494px;
            position: absolute;
            box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.20000000298023224);
          }
          .pedidos-order-information {
            gap: 16px;
            top: 688px;
            left: 458px;
            width: 578px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .pedidos-title {
            width: 578px;
            height: 45px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pedidos-text06 {
            color: rgba(0, 0, 0, 1);
            width: 519px;
            height: auto;
            position: absolute;
            font-size: 22px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: 30px;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-line5 {
            top: 45px;
            left: 0px;
            width: 578px;
            height: 1px;
            position: absolute;
          }
          .pedidos-simpleaccordion {
            gap: 11px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .pedidos-group3 {
            width: 571px;
            height: 22px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pedidos-text08 {
            color: rgba(144, 144, 144, 1);
            width: 519px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: SemiBold;
            text-align: left;
            font-family: Roboto;
            font-weight: 600;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-frame1 {
            top: 9px;
            left: 558px;
            width: 13px;
            height: 13px;
            position: absolute;
          }
          .pedidos-text10 {
            color: rgba(144, 144, 144, 1);
            width: 519px;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-line6 {
            width: 578px;
            height: 1px;
          }
          .pedidos-rectangle57 {
            top: 438px;
            left: 439px;
            width: 1109px;
            height: 37px;
            position: absolute;
          }
          .pedidos-text12 {
            top: 438px;
            left: 494px;
            color: rgba(0, 0, 0, 1);
            width: 88px;
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-rectangle58 {
            top: 475px;
            left: 438px;
            width: 1126px;
            height: 2px;
            position: absolute;
          }
          .pedidos-user {
            top: 477px;
            left: 438px;
            width: 1126px;
            height: 74px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pedidos-user1 {
            top: 0px;
            left: 0px;
            width: 1126px;
            height: 72.7868881225586px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pedidos-bg {
            top: 0px;
            left: 0px;
            width: 1100px;
            height: 60px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pedidos-checkbox-neutral {
            top: 20px;
            left: 20px;
            width: 20px;
            height: 20px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pedidos-checkbox-neutral1 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 20px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 1.5px;
            border-radius: 3px;
          }
          .pedidos-rectangle59 {
            top: 72.7868881225586px;
            left: 0px;
            width: 1126px;
            height: 1px;
            position: absolute;
          }
          .pedidos-user2 {
            top: 477px;
            left: 438px;
            width: 1126px;
            height: 74px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pedidos-user3 {
            top: 0px;
            left: 0px;
            width: 1126px;
            height: 72.7868881225586px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pedidos-bg1 {
            top: 0px;
            left: 0px;
            width: 1100px;
            height: 60px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pedidos-checkbox-neutral2 {
            top: 20px;
            left: 20px;
            width: 20px;
            height: 20px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pedidos-checkbox-neutral3 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 20px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 1.5px;
            border-radius: 3px;
          }
          .pedidos-rectangle591 {
            top: 72.7868881225586px;
            left: 0px;
            width: 1126px;
            height: 1px;
            position: absolute;
          }
          .pedidos-user4 {
            top: 477px;
            left: 439px;
            width: 1126px;
            height: 74px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pedidos-user5 {
            top: 0px;
            left: 0px;
            width: 1126px;
            height: 72.7868881225586px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pedidos-rectangle592 {
            top: 72.7868881225586px;
            left: 0px;
            width: 1126px;
            height: 1px;
            position: absolute;
          }
          .pedidos-user6 {
            top: 477px;
            left: 439px;
            width: 1126px;
            height: 74px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pedidos-user7 {
            top: 0px;
            left: 0px;
            width: 1126px;
            height: 72.7868881225586px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pedidos-rectangle593 {
            top: 72.7868881225586px;
            left: 0px;
            width: 1126px;
            height: 1px;
            position: absolute;
          }
          .pedidos-text14 {
            top: 27px;
            left: 193px;
            color: rgba(37, 33, 59, 1);
            width: 129px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-text16 {
            top: 31px;
            left: 413px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-text18 {
            top: 31px;
            left: 571px;
            color: rgba(0, 0, 0, 1);
            width: 74px;
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-text20 {
            top: 27.901639938354492px;
            left: 700.3818359375px;
            color: rgba(0, 0, 0, 1);
            width: 151px;
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Medium;
            text-align: left;
            font-family: Roboto;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-text22 {
            top: 28px;
            left: 843px;
            color: rgba(0, 0, 0, 1);
            width: 110px;
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-text24 {
            top: 26.688522338867188px;
            left: 55px;
            color: rgba(37, 33, 59, 1);
            width: 29px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-text26 {
            top: 438px;
            left: 632px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-text28 {
            top: 438px;
            left: 804px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-text30 {
            top: 438px;
            left: 1003px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-text32 {
            top: 438px;
            left: 1140px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-text34 {
            top: 437px;
            left: 1283px;
            color: rgba(0, 0, 0, 1);
            width: 123px;
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-text36 {
            top: 505px;
            left: 1455px;
            color: rgba(0, 0, 0, 1);
            width: 71px;
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-text38 {
            top: 437px;
            left: 1456px;
            color: rgba(0, 0, 0, 1);
            width: 100px;
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pedidos-efeito-planeta-selecionado1 {
            top: 507px;
            left: -1px;
            width: 271px;
            height: 90px;
            position: absolute;
          }
          .pedidos-tabelas {
            top: 293px;
            left: -2px;
            width: 273px;
            height: 369px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pedidos-button {
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
          .pedidos-content {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .pedidos-text40 {
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
          .pedidos-button1 {
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
          .pedidos-content1 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .pedidos-text42 {
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
          .pedidos-button2 {
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
          .pedidos-content2 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .pedidos-text44 {
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
          .pedidos-button3 {
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
          .pedidos-content3 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .pedidos-text46 {
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
          .pedidos-button4 {
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
          .pedidos-content4 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .pedidos-text48 {
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
          .pedidos-perfil-logo {
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

export default Pedidos
