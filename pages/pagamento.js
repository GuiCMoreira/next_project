import React from 'react'
import Head from 'next/head'
import Link from 'next/link';

const Pagamento = (props) => {
  return (
    <>
      <div className='pagamento-container'>
        <Head>
          <title>exported project</title>
        </Head>
        <div className='pagamento-pagamento'>
          <div className='pagamento-frame'>
            <img
              src='/external/navbar2191-ea6h-200h.png'
              alt='NAVBAR2191'
              className='pagamento-navbar'
            />
            <img
              src='/external/barralateral2191-4ekp-300w.png'
              alt='Barralateral2191'
              className='pagamento-barralateral'
            />
          </div>
          <span className='pagamento-text Titulo'>
            <span>Saturno</span>
          </span>
          <img
            src='/external/efeitoplanetaselecionado2191-kmjm-200h.png'
            alt='EfeitoPlanetaSelecionado2191'
            className='pagamento-efeito-planeta-selecionado'
          />
          <div className='pagamento-planetas'>
            <img
              src='/external/planetneptune2191-983o.svg'
              alt='PlanetNeptune2191'
              className='pagamento-planet-neptune'
            />
            <img
              src='/external/planetmercury2191-4u8.svg'
              alt='PlanetMercury2191'
              className='pagamento-planet-mercury'
            />
            <img
              src='/external/planetvenus2191-noa9.svg'
              alt='PlanetVenus2191'
              className='pagamento-planet-venus'
            />
            <img
              src='/external/planetearth2191-4t54.svg'
              alt='PlanetEarth2191'
              className='pagamento-planet-earth'
            />
            <img
              src='/external/planetmars2191-0r75.svg'
              alt='PlanetMars2191'
              className='pagamento-planet-mars'
            />
            <img
              src='/external/planetjupiter2191-yscb.svg'
              alt='PlanetJupiter2191'
              className='pagamento-planet-jupiter'
            />
            <img
              src='/external/planetsaturn2191-4kri.svg'
              alt='PlanetSaturn2191'
              className='pagamento-planet-saturn'
            />
            <img
              src='/external/planetsaturn2191-m4rl.svg'
              alt='PlanetSaturn2191'
              className='pagamento-planet-saturn1'
            />
          </div>
          <div className='pagamento-elements-checkbox-on'></div>
          <div className='pagamento-line-items'>
            <div className='pagamento-orderlineitem'>
              <span className='pagamento-text02'>
                <span>Subtotal</span>
              </span>
              <span className='pagamento-text04'>
                <span>R$ 2.079,89</span>
              </span>
            </div>
            <div className='pagamento-orderlineitem1'>
              <span className='pagamento-text06'>
                <span>Envio</span>
              </span>
              <span className='pagamento-text08'>
                <span>R$ 25,43</span>
              </span>
            </div>
            <img
              src='/external/line72191-em4u.svg'
              alt='Line72191'
              className='pagamento-line7'
            />
            <div className='pagamento-orderlineitem2'>
              <span className='pagamento-text10'>
                <span>Desconto</span>
              </span>
            </div>
          </div>
          <div className='pagamento-orderlineitem3'>
            <span className='pagamento-text12'>
              <span>Total</span>
            </span>
            <span className='pagamento-text14'>
              <span>R$ 2.105,32</span>
            </span>
          </div>
          <span className='pagamento-text16'>
            <span>Detalhes do pagamento</span>
          </span>
          <span className='pagamento-text18'>
            <span>Finalizar Pedido</span>
          </span>
          <Link href='/rastreamento'>
          <div className='pagamento-default'>
            <div className='pagamento-button'>
              <span className='pagamento-text20'>
                <span>Pagar com cartão</span>
              </span>
            </div>
          </div>
          </Link>
          <div className='pagamento-frame29'>
            <div className='pagamento-input'>
              <img
                src='/external/rectanglei219-tx5i-400w.png'
                alt='RectangleI219'
                className='pagamento-rectangle'
              />
              <span className='pagamento-text22'>
                <span>
                  Nome
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className='pagamento-input1'>
              <img
                src='/external/rectanglei219-3nfp-400w.png'
                alt='RectangleI219'
              />
              <span className='pagamento-text24'>
                <span>Numero do cartão</span>
              </span>
            </div>
            <div className='pagamento-group28'>
              <div className='pagamento-input2'>
                <img
                  src='/external/rectanglei219-csg-200h.png'
                  alt='RectangleI219'
                  className='pagamento-rectangle2'
                />
                <span className='pagamento-text26'>
                  <span>CVC</span>
                </span>
              </div>
              <div className='pagamento-dropdowninput'>
                <img
                  src='/external/rectanglei219-xu8k-200h.png'
                  alt='RectangleI219'
                  className='pagamento-rectangle3'
                />
                <span className='pagamento-text28'>
                  <span>Mês</span>
                </span>
                <img
                  src='/external/svgiconschevrondowni219-onmr.svg'
                  alt='SVGIconsChevronDownI219'
                  className='pagamento-svg-icons-chevron-down'
                />
              </div>
              <div className='pagamento-dropdowninput1'>
                <img
                  src='/external/rectanglei219-j3rx-200h.png'
                  alt='RectangleI219'
                  className='pagamento-rectangle4'
                />
                <span className='pagamento-text30'>
                  <span>Ano</span>
                </span>
                <img
                  src='/external/svgiconschevrondowni219-nctp.svg'
                  alt='SVGIconsChevronDownI219'
                  className='pagamento-svg-icons-chevron-down1'
                />
              </div>
            </div>
          </div>
          <div className='pagamento-simplebreadcrumbs'>
            <span className='pagamento-text32'>
              <span>Endereço</span>
            </span>
            <img
              src='/external/line10i219-7jmc.svg'
              alt='Line10I219'
              className='pagamento-line10'
            />
            <span className='pagamento-text34'>
              <span>Envio</span>
            </span>
            <img
              src='/external/line11i219-fsvrq.svg'
              alt='Line11I219'
              className='pagamento-line11'
            />
            <span className='pagamento-text36'>
              <span>Pagamento</span>
            </span>
          </div>
          <div className='pagamento-paypal'>
            <img
              src='/external/paypal12191-csel-200h.png'
              alt='PayPal12191'
              className='pagamento-pay-pal1'
            />
          </div>
          <div className='pagamento-paypal1'>
            <img
              src='/external/rectangle14551-6i6p-200h.png'
              alt='Rectangle14551'
              className='pagamento-rectangle1 pagamento-rectangle1'
            />
            <div className='pagamento-paypal2'></div>
          </div>
          <div className='pagamento-paypal3'></div>
          <div className='pagamento-horizontal-product-card'>
            <div className='pagamento-horizontal-product-card1'>
              <img
                src='/external/productimagei299-idyp-200w.png'
                alt='ProductImageI299'
                className='pagamento-product-image'
              />
              <div className='pagamento-frame1'>
                <span className='pagamento-text38'>
                  <span>Samsung Powerbot-E</span>
                </span>
                <span className='pagamento-text40'></span>
                <span className='pagamento-text41'>
                  <span>Quantidade: 1</span>
                </span>
                <span className='pagamento-text43'>
                  <span>R$ 1.799,99</span>
                </span>
              </div>
              <span className='pagamento-text45'>
                <span>Remove</span>
              </span>
            </div>
          </div>
          <div className='pagamento-horizontal-product-card2'>
            <img
              src='/external/productimagei299-nv4h-200w.png'
              alt='ProductImageI299'
              className='pagamento-product-image1'
            />
            <div className='pagamento-frame11'>
              <span className='pagamento-text47'>
                <span>Câmera de Segurança</span>
              </span>
              <span className='pagamento-text49'></span>
              <span className='pagamento-text50'>
                <span>Quantidade: 1</span>
              </span>
              <span className='pagamento-text52'>
                <span>R$ 279,90</span>
              </span>
            </div>
            <span className='pagamento-text54'>
              <span>Remove</span>
            </span>
          </div>
          <img
            src='/external/efeitoplanetaselecionado3691-duc-200h.png'
            alt='EfeitoPlanetaSelecionado3691'
            className='pagamento-efeito-planeta-selecionado1'
          />
          <div className='pagamento-input3'>
            <img
              src='/external/rectanglei219-ycv-500w.png'
              alt='RectangleI219'
              className='pagamento-rectangle5'
            />
            <span className='pagamento-text56'>
              <span>Insira seu CUPOM aqui</span>
            </span>
          </div>
          <span className='pagamento-text58'>
            <span>
              use DESCONTO20 para receber 20% de desconto válido APENAS na
              primeira compra
            </span>
          </span>
          <span className='pagamento-text60'>
            <span>Resumo do pedido</span>
          </span>
          <span className='pagamento-text62'>
            <span>Salvar informações</span>
          </span>
          <div className='pagamento-default1'>
            <div className='pagamento-group'></div>
          </div>
          <img
            src='/external/pix14551-4r8b-200h.png'
            alt='pix14551'
            className='pagamento-pix1'
          />
          <img
            src='/external/boletocodigobarrapretoblackbarcodeticketlogoab7b0f4551-us37-200h.png'
            alt='boletocodigobarrapretoblackbarcodeticketlogoAB7B0F4551'
            className='pagamento-boletocodigobarrapretoblackbarcodeticketlogo-ab7b0f'
          />
          <span className='pagamento-text64'>
            <span>Cartão</span>
          </span>
          <div className='pagamento-tabelas'>
            <button className='pagamento-button1'>
              <div className='pagamento-content'>
                <span className='pagamento-text66'>
                  <span>Meu Perfil</span>
                </span>
              </div>
            </button>
            <button className='pagamento-button2'>
              <div className='pagamento-content1'>
                <span className='pagamento-text68'>
                  <span>Pedidos</span>
                </span>
              </div>
            </button>
            <button className='pagamento-button3'>
              <div className='pagamento-content2'>
                <span className='pagamento-text70'>
                  <span>Carrinho</span>
                </span>
              </div>
            </button>
            <button className='pagamento-button4'>
              <div className='pagamento-content3'>
                <span className='pagamento-text72'>
                  <span>Catálogo</span>
                </span>
              </div>
            </button>
            <button className='pagamento-button5'>
              <div className='pagamento-content4'>
                <span className='pagamento-text74'>
                  <span>Início</span>
                </span>
              </div>
            </button>
          </div>
          <img
            src='/external/perfillogo5402-zy8s.svg'
            alt='PerfilLogo5402'
            className='pagamento-perfil-logo'
          />
        </div>
      </div>
      <style jsx>
        {`
          .pagamento-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .pagamento-pagamento {
            width: 100%;
            height: 1080px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .pagamento-frame {
            top: 0px;
            left: -1px;
            width: 1921px;
            height: 1080px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pagamento-navbar {
            top: 0px;
            left: 1px;
            width: 1920px;
            height: 125px;
            position: absolute;
          }
          .pagamento-barralateral {
            top: 125px;
            left: 0px;
            width: 272px;
            height: 955px;
            position: absolute;
          }
          .pagamento-text {
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
          .pagamento-efeito-planeta-selecionado {
            top: 25px;
            left: 1211px;
            width: 90px;
            height: 90px;
            position: absolute;
          }
          .pagamento-planetas {
            top: 28px;
            left: 82px;
            width: 1324px;
            height: 139px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pagamento-planet-neptune {
            top: 2px;
            left: 1244px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pagamento-planet-mercury {
            top: 0px;
            left: 596px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pagamento-planet-venus {
            top: 0px;
            left: 704px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pagamento-planet-earth {
            top: 0px;
            left: 812px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pagamento-planet-mars {
            top: 0px;
            left: 920px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pagamento-planet-jupiter {
            top: 0px;
            left: 1028px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pagamento-planet-saturn {
            top: 0px;
            left: 1136px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .pagamento-planet-saturn1 {
            top: 26px;
            left: 0px;
            width: 127px;
            height: 113px;
            position: absolute;
          }
          .pagamento-elements-checkbox-on {
            top: 908px;
            left: 451px;
            width: 18px;
            height: 19px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-line-items {
            gap: 16px;
            top: 774px;
            left: 1293px;
            width: 402px;
            height: 109px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pagamento-orderlineitem {
            width: 401px;
            height: 16px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-text02 {
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
          .pagamento-text04 {
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
          .pagamento-orderlineitem1 {
            width: 401px;
            height: 16px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-text06 {
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
          .pagamento-text08 {
            left: 348px;
            color: var(--dl-color-default-primary);
            height: auto;
            opacity: 0.7;
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
          .pagamento-line7 {
            width: 402px;
            height: 1px;
          }
          .pagamento-orderlineitem2 {
            width: 401px;
            height: 16px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-text10 {
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
          .pagamento-orderlineitem3 {
            top: 877px;
            left: 1294px;
            width: 401px;
            height: 16px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-text12 {
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
          .pagamento-text14 {
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
          .pagamento-text16 {
            top: 488px;
            left: 493px;
            color: rgba(37, 37, 37, 1);
            width: 223px;
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
          .pagamento-text18 {
            top: 225px;
            left: 505px;
            color: rgba(16, 11, 80, 1);
            width: 290px;
            height: auto;
            position: absolute;
            font-size: 40px;
            font-style: SemiBold;
            text-align: left;
            font-family: Roboto;
            font-weight: 600;
            line-height: 44px;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-default {
            top: 890px;
            left: 493px;
            width: 436px;
            height: 76px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-button {
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
          .pagamento-text20 {
            top: 21.280000686645508px;
            left: 141.5500030517578px;
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
          .pagamento-frame29 {
            gap: 10px;
            top: 528px;
            left: 493px;
            width: 437px;
            height: 214px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pagamento-input {
            width: 398px;
            height: 40px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-rectangle {
            top: 0px;
            left: 0px;
            width: 398px;
            height: 40px;
            position: absolute;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 0.5px;
          }
          .pagamento-text22 {
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
          .pagamento-input1 {
            width: 398px;
            height: 40px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-rectangle1 {
            top: 0px;
            left: 0px;
            width: 398px;
            height: 40px;
            position: absolute;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 0.5px;
          }
          .pagamento-text24 {
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
          .pagamento-group28 {
            width: 398px;
            height: 40px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pagamento-input2 {
            top: 0px;
            left: 272px;
            width: 126px;
            height: 40px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-rectangle2 {
            top: 0px;
            left: 0px;
            width: 126px;
            height: 40px;
            position: absolute;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 0.5px;
          }
          .pagamento-text26 {
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
          .pagamento-dropdowninput {
            top: 0px;
            left: 0px;
            width: 122px;
            height: 40px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-rectangle3 {
            top: 0px;
            left: 0px;
            width: 122px;
            height: 40px;
            position: absolute;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 0.5px;
          }
          .pagamento-text28 {
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
          .pagamento-svg-icons-chevron-down {
            top: 8px;
            left: 90px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .pagamento-dropdowninput1 {
            top: 0px;
            left: 138px;
            width: 122px;
            height: 40px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-rectangle4 {
            top: 0px;
            left: 0px;
            width: 122px;
            height: 40px;
            position: absolute;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 0.5px;
          }
          .pagamento-text30 {
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
          .pagamento-svg-icons-chevron-down1 {
            top: 8px;
            left: 90px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .pagamento-simplebreadcrumbs {
            gap: 14px;
            top: 312px;
            left: 508px;
            width: 433px;
            height: 43px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .pagamento-text32 {
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
          .pagamento-line10 {
            width: 68px;
            height: 1px;
          }
          .pagamento-text34 {
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
          .pagamento-line11 {
            width: 68px;
            height: 1px;
          }
          .pagamento-text36 {
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
          .pagamento-paypal {
            top: 392px;
            left: 491px;
            width: 140.13427734375px;
            height: 58.5289192199707px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(255, 255, 255, 1);
          }
          .pagamento-pay-pal1 {
            top: 17px;
            left: 21px;
            width: 95px;
            height: 24px;
            position: absolute;
          }
          .pagamento-paypal1 {
            top: 392px;
            left: 791px;
            width: 291.13427734375px;
            height: 58.5289192199707px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pagamento-rectangle1 {
            top: 0px;
            left: 0px;
            width: 140px;
            height: 59px;
            position: absolute;
            border-color: rgba(29, 77, 144, 1);
            border-style: solid;
            border-width: 1px;
          }
          .pagamento-paypal2 {
            top: 0px;
            left: 151px;
            width: 140.13427734375px;
            height: 58.5289192199707px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(255, 255, 255, 1);
          }
          .pagamento-paypal3 {
            top: 392px;
            left: 641px;
            width: 140.13427734375px;
            height: 58.5289192199707px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(16, 11, 80, 1);
          }
          .pagamento-horizontal-product-card {
            top: 396px;
            left: 1201px;
            width: 560px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .pagamento-horizontal-product-card1 {
            gap: 7px;
            width: 560px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-product-image {
            width: 129px;
            height: 133px;
          }
          .pagamento-frame1 {
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
          .pagamento-text38 {
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
          .pagamento-text40 {
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
          .pagamento-text41 {
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
          .pagamento-text43 {
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
          .pagamento-text45 {
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
          .pagamento-horizontal-product-card2 {
            gap: 7px;
            top: 574px;
            left: 1209px;
            width: 560px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-product-image1 {
            width: 129px;
            height: 133px;
          }
          .pagamento-frame11 {
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
          .pagamento-text47 {
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
          .pagamento-text49 {
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
          .pagamento-text50 {
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
          .pagamento-text52 {
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
          .pagamento-text54 {
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
          .pagamento-efeito-planeta-selecionado1 {
            top: 435px;
            left: 0px;
            width: 271px;
            height: 90px;
            position: absolute;
          }
          .pagamento-input3 {
            top: 694px;
            left: 491px;
            width: 460px;
            height: 46px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-rectangle5 {
            top: 0px;
            left: 0px;
            width: 460px;
            height: 46px;
            position: absolute;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 0.5px;
          }
          .pagamento-text56 {
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
          .pagamento-text58 {
            top: 757px;
            left: 493px;
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
          .pagamento-text60 {
            top: 301px;
            left: 1333px;
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
          .pagamento-text62 {
            top: 842px;
            left: 543px;
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
          .pagamento-default1 {
            top: 840px;
            left: 508px;
            width: 23px;
            height: 22px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pagamento-group {
            top: 0px;
            left: 0px;
            width: 23px;
            height: 22px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pagamento-pix1 {
            top: 405px;
            left: 963px;
            width: 97px;
            height: 32px;
            position: absolute;
          }
          .pagamento-boletocodigobarrapretoblackbarcodeticketlogo-ab7b0f {
            top: 404px;
            left: 821px;
            width: 79px;
            height: 34px;
            position: absolute;
          }
          .pagamento-text64 {
            top: 392px;
            left: 641px;
            color: rgba(255, 255, 255, 1);
            width: 140px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .pagamento-tabelas {
            top: 293px;
            left: -2px;
            width: 273px;
            height: 369px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .pagamento-button1 {
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
          .pagamento-content {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .pagamento-text66 {
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
          .pagamento-button2 {
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
          .pagamento-content1 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .pagamento-text68 {
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
          .pagamento-button3 {
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
          .pagamento-content2 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .pagamento-text70 {
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
          .pagamento-button4 {
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
          .pagamento-content3 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .pagamento-text72 {
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
          .pagamento-button5 {
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
          .pagamento-content4 {
            gap: 16px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .pagamento-text74 {
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
          .pagamento-perfil-logo {
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

export default Pagamento
