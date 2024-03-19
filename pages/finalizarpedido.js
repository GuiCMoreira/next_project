import React from 'react'
import Head from 'next/head'
import Link from 'next/link';

const PagamentoEndereo = (props) => {
  return (
    <>
      <div className='pagamento-endereo-container'>
        <Head>
          <title>exported project</title>
        </Head>
        <div className='pagamento-endereo-pagamento-endereo'>
          <div className='pagamento-endereo-frame'>
            <img
              src='/external/navbar1260-xp8q-200h.png'
              alt='NAVBAR1260'
              className='pagamento-endereo-navbar'
            />
            <img
              src='/external/barralateral1261-qaa3-300w.png'
              alt='Barralateral1261'
              className='pagamento-endereo-barralateral'
            />
          </div>
          <span className='pagamento-endereo-text Titulo'>
            <span>Saturno</span>
          </span>
          <img
            src='/external/efeitoplanetaselecionado1934-tq6-200h.png'
            alt='EfeitoPlanetaSelecionado1934'
            className='pagamento-endereo-efeito-planeta-selecionado'
          />
          <div className='pagamento-endereo-planetas'>
            <img
              src='/external/planetneptune1617-ij7q.svg'
              alt='PlanetNeptune1617'
              className='pagamento-endereo-planet-neptune'
            />
            <img
              src='/external/planetmercury1617-vvko.svg'
              alt='PlanetMercury1617'
              className='pagamento-endereo-planet-mercury'
            />
            <img
              src='/external/planetvenus1617-dm5ge.svg'
              alt='PlanetVenus1617'
              className='pagamento-endereo-planet-venus'
            />
            <img
              src='/external/planetearth1617-v2x.svg'
              alt='PlanetEarth1617'
              className='pagamento-endereo-planet-earth'
            />
            <img
              src='/external/planetmars1617-ln5o.svg'
              alt='PlanetMars1617'
              className='pagamento-endereo-planet-mars'
            />
            <img
              src='/external/planetjupiter1617-w4wf.svg'
              alt='PlanetJupiter1617'
              className='pagamento-endereo-planet-jupiter'
            />
            <img
              src='/external/planetsaturn1617-ye0g.svg'
              alt='PlanetSaturn1617'
              className='pagamento-endereo-planet-saturn'
            />
            <img
              src='/external/planetsaturn2021-5eid.svg'
              alt='PlanetSaturn2021'
              className='pagamento-endereo-planet-saturn1'
            />
          </div>
          <span className='pagamento-endereo-text02'>
            <span>Informações da Compra</span>
          </span>
          <span className='pagamento-endereo-text04'>
            <span>Finalizar pedido</span>
          </span>
          <Link href='/pagamento-envio-frete'>
            <div className='pagamento-endereo-default'>
              <div className='pagamento-endereo-button'>
                <span className='pagamento-endereo-text06'>
                  <span>Continuar comprando</span>
                </span>
              </div>
            </div>
          </Link>
          <div className='pagamento-endereo-frame29'>
            <div className='pagamento-endereo-group30'>
              <div className='pagamento-endereo-input'>
                <img
                  src='/external/rectanglei219-lt7w-200h.png'
                  alt='RectangleI219'
                  className='pagamento-endereo-rectangle'
                />
                <span className='pagamento-endereo-text08'>
                  <span>Primeiro Nome</span>
                </span>
              </div>
              <div className='pagamento-endereo-input1'>
                <img
                  src='/external/rectanglei219-syd-200h.png'
                  alt='RectangleI219'
                  className='pagamento-endereo-rectangle1'
                />
                <span className='pagamento-endereo-text10'>
                  <span>Último nome</span>
                </span>
              </div>
            </div>
            <div className='pagamento-endereo-input2'>
              <img
                src='/external/rectanglei219-lk2n-400w.png'
                alt='RectangleI219'
                className='pagamento-endereo-rectangle2'
              />
              <span className='pagamento-endereo-text12'>
                <span>Endereço</span>
              </span>
            </div>
            <div className='pagamento-endereo-input3'>
              <img
                src='/external/rectanglei219-ztco-400w.png'
                alt='RectangleI219'
                className='pagamento-endereo-rectangle3'
              />
              <span className='pagamento-endereo-text14'>
                <span>Complemento</span>
              </span>
            </div>
            <div className='pagamento-endereo-input4'>
              <img
                src='/external/rectanglei219-p0ks-400w.png'
                alt='RectangleI219'
                className='pagamento-endereo-rectangle4'
              />
              <span className='pagamento-endereo-text16'>
                <span>Bairro</span>
              </span>
            </div>
            <div className='pagamento-endereo-group28'>
              <div className='pagamento-endereo-input5'>
                <img
                  src='/external/rectanglei219-hot-200h.png'
                  alt='RectangleI219'
                  className='pagamento-endereo-rectangle5'
                />
                <span className='pagamento-endereo-text18'>
                  <span>CEP</span>
                </span>
              </div>
              <div className='pagamento-endereo-dropdowninput'>
                <img
                  src='/external/rectanglei219-ehpi-200h.png'
                  alt='RectangleI219'
                  className='pagamento-endereo-rectangle6'
                />
                <span className='pagamento-endereo-text20'>
                  <span>País</span>
                </span>
                <img
                  src='/external/svgiconschevrondowni219-mn98.svg'
                  alt='SVGIconsChevronDownI219'
                  className='pagamento-endereo-svg-icons-chevron-down'
                />
              </div>
              <div className='pagamento-endereo-dropdowninput1'>
                <img
                  src='/external/rectanglei219-614-200h.png'
                  alt='RectangleI219'
                  className='pagamento-endereo-rectangle7'
                />
                <span className='pagamento-endereo-text22'>
                  <span>Cidade</span>
                </span>
                <img
                  src='/external/svgiconschevrondowni219-hoha.svg'
                  alt='SVGIconsChevronDownI219'
                  className='pagamento-endereo-svg-icons-chevron-down1'
                />
              </div>
            </div>
            <div className='pagamento-endereo-input6'>
              <img
                src='/external/rectanglei219-brho-400w.png'
                alt='RectangleI219'
                className='pagamento-endereo-rectangle8'
              />
              <span className='pagamento-endereo-text24'>
                <span>Observações</span>
              </span>
            </div>
          </div>
          <span className='pagamento-endereo-text26'>
            <span>Salvar informações</span>
          </span>
          <div className='pagamento-endereo-simplebreadcrumbs'>
            <span className='pagamento-endereo-text28'>
              <span>Endereço</span>
            </span>
            <img
              src='/external/line10i219-g03f.svg'
              alt='Line10I219'
              className='pagamento-endereo-line10'
            />
            <span className='pagamento-endereo-text30'>
              <span>Envio</span>
            </span>
            <img
              src='/external/line11i219-g4b.svg'
              alt='Line11I219'
              className='pagamento-endereo-line11'
            />
            <span className='pagamento-endereo-text32'>
              <span>Pagamento</span>
            </span>
          </div>
          <div className='pagamento-endereo-default1'>
            <div className='pagamento-endereo-group'></div>
          </div>
          <div className='pagamento-endereo-horizontal-product-card'>
            <div className='pagamento-endereo-horizontal-product-card1'>
              <img
                src='/external/productimagei299-mg7k-200w.png'
                alt='ProductImageI299'
                className='pagamento-endereo-product-image'
              />
              <div className='pagamento-endereo-frame1'>
                <span className='pagamento-endereo-text34'>
                  <span>Samsung Powerbot-E</span>
                </span>
                <span className='pagamento-endereo-text36'></span>
                <span className='pagamento-endereo-text37'>
                  <span>Quantidade: 1</span>
                </span>
                <span className='pagamento-endereo-text39'>
                  <span>R$ 1.799,99</span>
                </span>
              </div>
              <span className='pagamento-endereo-text41'>
                <span>Remove</span>
              </span>
            </div>
          </div>
          <div className='pagamento-endereo-horizontal-product-card2'>
            <img
              src='/external/productimagei299-agyj-200w.png'
              alt='ProductImageI299'
              className='pagamento-endereo-product-image1'
            />
            <div className='pagamento-endereo-frame11'>
              <span className='pagamento-endereo-text43'>
                <span>Câmera de Segurança</span>
              </span>
              <span className='pagamento-endereo-text45'></span>
              <span className='pagamento-endereo-text46'>
                <span>Quantidade: 1</span>
              </span>
              <span className='pagamento-endereo-text48'>
                <span>R$ 279,90</span>
              </span>
            </div>
            <span className='pagamento-endereo-text50'>
              <span>Remove</span>
            </span>
          </div>
          <img
            src='/external/efeitoplanetaselecionado3691-3jow-200h.png'
            alt='EfeitoPlanetaSelecionado3691'
            className='pagamento-endereo-efeito-planeta-selecionado1'
          />
          <div className='pagamento-endereo-line-items'>
            <div className='pagamento-endereo-orderlineitem'>
              <span className='pagamento-endereo-text52'>
                <span>Subtotal</span>
              </span>
              <span className='pagamento-endereo-text54'>
                <span>R$ 2.079,89</span>
              </span>
            </div>
            <div className='pagamento-endereo-orderlineitem1'>
              <span className='pagamento-endereo-text56'>
                <span>Envio</span>
              </span>
            </div>
            <div className='pagamento-endereo-orderlineitem2'>
              <span className='pagamento-endereo-text58'></span>
              <span className='pagamento-endereo-text59'>
                <span>O frete sera calculado no proximo passo</span>
              </span>
            </div>
            <img
              src='/external/line72971-ri3l.svg'
              alt='Line72971'
              className='pagamento-endereo-line7'
            />
            <div className='pagamento-endereo-orderlineitem3'>
              <span className='pagamento-endereo-text61'>
                <span>Total</span>
              </span>
              <span className='pagamento-endereo-text63'>
                <span>R$ 2.079,89</span>
              </span>
            </div>
          </div>
          <span className='pagamento-endereo-text65'>
            <span>Resumo do pedido</span>
          </span>
          <div className='pagamento-endereo-tabelas'>
            <Link href='/meus-dados'>
            <button className='pagamento-endereo-button1'>
              <div className='pagamento-endereo-content'>
                <span className='pagamento-endereo-text67'>
                  <span>Meu Perfil</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/pedidos'>
            <button className='pagamento-endereo-button2'>
              <div className='pagamento-endereo-content1'>
                <span className='pagamento-endereo-text69'>
                  <span>Pedidos</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/carrinhodecompras'>
            <button className='pagamento-endereo-button3'>
              <div className='pagamento-endereo-content2'>
                <span className='pagamento-endereo-text71'>
                  <span>Carrinho</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/catalogo'>
            <button className='pagamento-endereo-button4'>
              <div className='pagamento-endereo-content3'>
                <span className='pagamento-endereo-text73'>
                  <span>Catálogo</span>
                </span>
              </div>
            </button>
            </Link>
            <Link href='/principal'>
            <button className='pagamento-endereo-button5'>
              <div className='pagamento-endereo-content4'>
                <span className='pagamento-endereo-text75'>
                  <span>Início</span>
                </span>
              </div>
            </button>
            </Link>
          </div>
          <Link href='/perfil'>
            <img
              src='/external/perfillogo5402-tlah.svg'
              alt='PerfilLogo5402'
              className='pagamento-endereo-perfil-logo'
            />
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .pagamento-endereo-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .pagamento-endereo-pagamento-endereo {
            width: 100%;
            height: 1080px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .pagamento-endereo-frame {
            top: 0px;
            left: -1px;
            width: 1921px;
            height: 1080px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pagamento-endereo-navbar {
            top: 0px;
            left: 1px;
            width: 1920px;
            height: 125px;
            position: absolute;
          }
          .pagamento-endereo-barralateral {
            top: 125px;
            left: 0px;
            width: 272px;
            height: 955px;
            position: absolute;
          }
          .pagamento-endereo-text {
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
          .pagamento-endereo-efeito-planeta-selecionado {
            top: 25px;
            left: 1211px;
            width: 90px;
            height: 90px;
            position: absolute;
          }
          .pagamento-endereo-planetas {
            top: 28px;
            left: 82px;
            width: 1324px;
            height: 139px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pagamento-endereo-planet-neptune {
            top: 2px;
            left: 1244px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pagamento-endereo-planet-mercury {
            top: 0px;
            left: 596px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pagamento-endereo-planet-venus {
            top: 0px;
            left: 704px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pagamento-endereo-planet-earth {
            top: 0px;
            left: 812px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pagamento-endereo-planet-mars {
            top: 0px;
            left: 920px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pagamento-endereo-planet-jupiter {
            top: 0px;
            left: 1028px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pagamento-endereo-planet-saturn {
            top: 0px;
            left: 1136px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pagamento-endereo-planet-saturn1 {
            top: 26px;
            left: 0px;
            width: 127px;
            height: 113px;
            position: absolute;
          }
          .pagamento-endereo-text02 {
            top: 354px;
            left: 464px;
            color: rgba(37, 37, 37, 1);
            width: 235px;
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
          .pagamento-endereo-text04 {
            top: 218px;
            left: 458px;
            color: rgba(16, 11, 80, 1);
            width: 468px;
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
          .pagamento-endereo-default {
            top: 813px;
            left: 463px;
            width: 459px;
            height: 57px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-endereo-button {
            top: 0px;
            left: 0px;
            width: 459px;
            height: 57px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(47, 34, 96, 1);
          }
          .pagamento-endereo-text06 {
            top: 15.960000038146973px;
            left: 156.0124969482422px;
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
          .pagamento-endereo-frame29 {
            gap: 10px;
            top: 405px;
            left: 465px;
            width: 461px;
            height: 328px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            flex-direction: column;
          }
          .pagamento-endereo-group30 {
            width: 398px;
            height: 40px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pagamento-endereo-input {
            top: 0px;
            left: 0px;
            width: 195px;
            height: 40px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-endereo-rectangle {
            top: 0px;
            left: 0px;
            width: 195px;
            height: 40px;
            position: absolute;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 0.5px;
          }
          .pagamento-endereo-text08 {
            top: 11.5px;
            left: 16px;
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
          .pagamento-endereo-input1 {
            top: 0px;
            left: 202px;
            width: 196px;
            height: 40px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-endereo-rectangle1 {
            top: 0px;
            left: 0px;
            width: 196px;
            height: 40px;
            position: absolute;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 0.5px;
          }
          .pagamento-endereo-text10 {
            top: 11.5px;
            left: 16px;
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
          .pagamento-endereo-input2 {
            width: 398px;
            height: 40px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
          }
          .pagamento-endereo-rectangle2 {
            top: 0px;
            left: 0px;
            width: 398px;
            height: 40px;
            position: absolute;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 0.5px;
          }
          .pagamento-endereo-text12 {
            top: 11.5px;
            left: 16px;
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
          .pagamento-endereo-input3 {
            width: 398px;
            height: 40px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-endereo-rectangle3 {
            top: 0px;
            left: 0px;
            width: 398px;
            height: 40px;
            position: absolute;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 0.5px;
          }
          .pagamento-endereo-text14 {
            top: 11.5px;
            left: 16px;
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
          .pagamento-endereo-input4 {
            width: 398px;
            height: 40px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-endereo-rectangle4 {
            top: 0px;
            left: 0px;
            width: 398px;
            height: 40px;
            position: absolute;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 0.5px;
          }
          .pagamento-endereo-text16 {
            top: 11.5px;
            left: 16px;
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
          .pagamento-endereo-group28 {
            width: 398px;
            height: 40px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pagamento-endereo-input5 {
            top: 0px;
            left: 272px;
            width: 126px;
            height: 40px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-endereo-rectangle5 {
            top: 0px;
            left: 0px;
            width: 126px;
            height: 40px;
            position: absolute;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 0.5px;
          }
          .pagamento-endereo-text18 {
            top: 11.5px;
            left: 16px;
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
          .pagamento-endereo-dropdowninput {
            top: 0px;
            left: 0px;
            width: 122px;
            height: 40px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-endereo-rectangle6 {
            top: 0px;
            left: 0px;
            width: 122px;
            height: 40px;
            position: absolute;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 0.5px;
          }
          .pagamento-endereo-text20 {
            top: 11.5px;
            left: 16px;
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
          .pagamento-endereo-svg-icons-chevron-down {
            top: 8px;
            left: 90px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .pagamento-endereo-dropdowninput1 {
            top: 0px;
            left: 138px;
            width: 122px;
            height: 40px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-endereo-rectangle7 {
            top: 0px;
            left: 0px;
            width: 122px;
            height: 40px;
            position: absolute;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 0.5px;
          }
          .pagamento-endereo-text22 {
            top: 11.5px;
            left: 16px;
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
          .pagamento-endereo-svg-icons-chevron-down1 {
            top: 8px;
            left: 90px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .pagamento-endereo-input6 {
            width: 398px;
            height: 40px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-endereo-rectangle8 {
            top: 0px;
            left: 0px;
            width: 398px;
            height: 40px;
            position: absolute;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 0.5px;
          }
          .pagamento-endereo-text24 {
            top: 11.5px;
            left: 16px;
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
          .pagamento-endereo-text26 {
            top: 761px;
            left: 500px;
            color: var(--dl-color-default-secondary);
            width: 199px;
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
          .pagamento-endereo-simplebreadcrumbs {
            gap: 14px;
            top: 283px;
            left: 461px;
            width: 456px;
            height: 31px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .pagamento-endereo-text28 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 17px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-endereo-line10 {
            width: 68px;
            height: 1px;
          }
          .pagamento-endereo-text30 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 17px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-endereo-line11 {
            width: 68px;
            height: 1px;
          }
          .pagamento-endereo-text32 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 17px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-endereo-default1 {
            top: 759px;
            left: 465px;
            width: 23px;
            height: 22px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-endereo-group {
            top: 0px;
            left: 0px;
            width: 23px;
            height: 22px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pagamento-endereo-horizontal-product-card {
            top: 339px;
            left: 1139px;
            width: 560px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .pagamento-endereo-horizontal-product-card1 {
            gap: 7px;
            width: 560px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-endereo-product-image {
            width: 129px;
            height: 133px;
          }
          .pagamento-endereo-frame1 {
            gap: 7px;
            width: 367px;
            display: flex;
            padding: 6px 5px;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pagamento-endereo-text34 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 22px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: 30px;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-endereo-text36 {
            color: rgba(0, 0, 0, 1);
            width: 357px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-endereo-text37 {
            color: rgba(0, 0, 0, 1);
            width: 357px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-endereo-text39 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 22px;
            font-style: SemiBold;
            text-align: left;
            font-family: Roboto;
            font-weight: 600;
            line-height: 30px;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-endereo-text41 {
            color: rgba(0, 0, 0, 1);
            width: 50px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: underline;
          }
          .pagamento-endereo-horizontal-product-card2 {
            gap: 7px;
            top: 517px;
            left: 1147px;
            width: 560px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-endereo-product-image1 {
            width: 129px;
            height: 133px;
          }
          .pagamento-endereo-frame11 {
            gap: 7px;
            width: 367px;
            display: flex;
            padding: 6px 5px;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pagamento-endereo-text43 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 22px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: 30px;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-endereo-text45 {
            color: rgba(0, 0, 0, 1);
            width: 357px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-endereo-text46 {
            color: rgba(0, 0, 0, 1);
            width: 357px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-endereo-text48 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 22px;
            font-style: SemiBold;
            text-align: left;
            font-family: Roboto;
            font-weight: 600;
            line-height: 30px;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-endereo-text50 {
            color: rgba(0, 0, 0, 1);
            width: 50px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: underline;
          }
          .pagamento-endereo-efeito-planeta-selecionado1 {
            top: 435px;
            left: -2px;
            width: 271px;
            height: 90px;
            position: absolute;
          }
          .pagamento-endereo-line-items {
            gap: 16px;
            top: 695px;
            left: 1230px;
            width: 402px;
            height: 109px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pagamento-endereo-orderlineitem {
            width: 401px;
            height: 16px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-endereo-text52 {
            color: var(--dl-color-default-primary);
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
          .pagamento-endereo-text54 {
            left: 330px;
            color: var(--dl-color-default-primary);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-endereo-orderlineitem1 {
            width: 401px;
            height: 16px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-endereo-text56 {
            color: var(--dl-color-default-primary);
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
          .pagamento-endereo-orderlineitem2 {
            width: 401px;
            height: 16px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-endereo-text58 {
            color: var(--dl-color-default-primary);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Public Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-endereo-text59 {
            left: 153px;
            color: var(--dl-color-default-primary);
            height: auto;
            opacity: 0.7;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Public Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-endereo-line7 {
            width: 402px;
            height: 1px;
          }
          .pagamento-endereo-orderlineitem3 {
            width: 401px;
            height: 16px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-endereo-text61 {
            color: var(--dl-color-default-primary);
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
          .pagamento-endereo-text63 {
            left: 330px;
            color: var(--dl-color-default-primary);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-endereo-text65 {
            top: 258px;
            left: 1251px;
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
          .pagamento-endereo-tabelas {
            top: 293px;
            left: -2px;
            width: 273px;
            height: 369px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pagamento-endereo-button1 {
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
          .pagamento-endereo-content {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .pagamento-endereo-text67 {
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
          .pagamento-endereo-button2 {
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
          .pagamento-endereo-content1 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .pagamento-endereo-text69 {
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
          .pagamento-endereo-button3 {
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
          .pagamento-endereo-content2 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .pagamento-endereo-text71 {
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
          .pagamento-endereo-button4 {
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
          .pagamento-endereo-content3 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .pagamento-endereo-text73 {
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
          .pagamento-endereo-button5 {
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
          .pagamento-endereo-content4 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .pagamento-endereo-text75 {
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
          .pagamento-endereo-perfil-logo {
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

export default PagamentoEndereo
