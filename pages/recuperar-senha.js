import React from 'react'
import Head from 'next/head'

const RecuperarSenha = (props) => {
  return (
    <>
      <div className="recuperar-senha-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="recuperar-senha-recuperar-senha">
          <div className="recuperar-senha-frame">
            <img
              src="/external/navbar2551-ldxa-200h.png"
              alt="NAVBAR2551"
              className="recuperar-senha-navbar"
            />
            <img
              src="/external/barralateral2551-09g-300w.png"
              alt="Barralateral2551"
              className="recuperar-senha-barralateral"
            />
          </div>
          <span className="recuperar-senha-text">
            <span>Saturno</span>
          </span>
          <img
            src="/external/efeitoplanetaselecionado2551-ncw-200h.png"
            alt="EfeitoPlanetaSelecionado2551"
            className="recuperar-senha-efeito-planeta-selecionado"
          />
          <div className="recuperar-senha-planetas">
            <img
              src="/external/planetneptune2551-g94m.svg"
              alt="PlanetNeptune2551"
              className="recuperar-senha-planet-neptune"
            />
            <img
              src="/external/planetmercury2551-4mrh.svg"
              alt="PlanetMercury2551"
              className="recuperar-senha-planet-mercury"
            />
            <img
              src="/external/planetvenus2551-2t2p.svg"
              alt="PlanetVenus2551"
              className="recuperar-senha-planet-venus"
            />
            <img
              src="/external/planetearth2551-zrzr.svg"
              alt="PlanetEarth2551"
              className="recuperar-senha-planet-earth"
            />
            <img
              src="/external/planetmars2551-s97a.svg"
              alt="PlanetMars2551"
              className="recuperar-senha-planet-mars"
            />
            <img
              src="/external/planetjupiter2551-rp.svg"
              alt="PlanetJupiter2551"
              className="recuperar-senha-planet-jupiter"
            />
            <img
              src="/external/planetsaturn2551-2ncm.svg"
              alt="PlanetSaturn2551"
              className="recuperar-senha-planet-saturn"
            />
            <img
              src="/external/planetsaturn2551-k1jv.svg"
              alt="PlanetSaturn2551"
              className="recuperar-senha-planet-saturn1"
            />
          </div>
          <img
            src="/external/rectangle282551-7bst-200h.png"
            alt="Rectangle282551"
            className="recuperar-senha-rectangle28"
          />
          <img
            src="/external/rectangle262551-bphf-800w.png"
            alt="Rectangle262551"
            className="recuperar-senha-rectangle26"
          />
          <span className="recuperar-senha-text02">
            <span className="recuperar-senha-text03">
              Não é registrado ainda ?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Crie uma conta</span>
          </span>
          <span className="recuperar-senha-text05">
            <span>Endereço de email</span>
          </span>
          <span className="recuperar-senha-text07">
            <span>Enviar Email</span>
          </span>
          <span className="recuperar-senha-text09">
            <span>Recuperar a Senha</span>
          </span>
          <span className="recuperar-senha-text11">
            <span>
              Nós lhe enviaremos um email para definir ou redefinir sua nova
              senha
            </span>
          </span>
          <span className="recuperar-senha-text13">
            <span>
              <span>Para recuperar sua senha por favor nos informe</span>
              <br></br>
              <span>o email da sua conta</span>
            </span>
          </span>
          <span className="recuperar-senha-text18">
            <span className="recuperar-senha-text19">
              Já possui uma conta ?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Faça login</span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .recuperar-senha-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .recuperar-senha-recuperar-senha {
            width: 100%;
            height: 1080px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .recuperar-senha-frame {
            top: 0px;
            left: -1px;
            width: 1921px;
            height: 1080px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .recuperar-senha-navbar {
            top: 0px;
            left: 1px;
            width: 1920px;
            height: 125px;
            position: absolute;
          }
          .recuperar-senha-barralateral {
            top: 125px;
            left: 0px;
            width: 272px;
            height: 955px;
            position: absolute;
          }
          .recuperar-senha-text {
            top: 181px;
            left: 46px;
            color: rgba(255, 255, 255, 1);
            width: 174px;
            height: auto;
            position: absolute;
            font-size: 32px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .recuperar-senha-efeito-planeta-selecionado {
            top: 25px;
            left: 1211px;
            width: 90px;
            height: 90px;
            position: absolute;
          }
          .recuperar-senha-planetas {
            top: 28px;
            left: 82px;
            width: 1324px;
            height: 139px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .recuperar-senha-planet-neptune {
            top: 2px;
            left: 1244px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .recuperar-senha-planet-mercury {
            top: 0px;
            left: 596px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .recuperar-senha-planet-venus {
            top: 0px;
            left: 704px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .recuperar-senha-planet-earth {
            top: 0px;
            left: 812px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .recuperar-senha-planet-mars {
            top: 0px;
            left: 920px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .recuperar-senha-planet-jupiter {
            top: 0px;
            left: 1028px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .recuperar-senha-planet-saturn {
            top: 0px;
            left: 1136px;
            width: 80px;
            height: 80px;
            position: absolute;
          }
          .recuperar-senha-planet-saturn1 {
            top: 26px;
            left: 0px;
            width: 127px;
            height: 113px;
            position: absolute;
          }
          .recuperar-senha-rectangle28 {
            top: 670px;
            left: 730px;
            width: 714px;
            height: 55px;
            position: absolute;
            border-radius: 12px;
          }
          .recuperar-senha-rectangle26 {
            top: 495px;
            left: 730px;
            width: 714px;
            height: 55px;
            position: absolute;
            border-color: rgba(129, 129, 129, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
          }
          .recuperar-senha-text02 {
            top: 862px;
            left: 870px;
            color: rgba(98, 98, 98, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .recuperar-senha-text03 {
            color: rgba(98, 98, 98, 1);
            font-weight: 400;
          }
          .recuperar-senha-text05 {
            top: 510px;
            left: 752px;
            color: rgba(110, 110, 110, 1);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .recuperar-senha-text07 {
            top: 677px;
            left: 995px;
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
          .recuperar-senha-text09 {
            top: 276px;
            left: 933px;
            color: rgba(16, 11, 80, 1);
            height: auto;
            position: absolute;
            font-size: 36px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .recuperar-senha-text11 {
            top: 588px;
            left: 726px;
            color: rgba(98, 98, 98, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .recuperar-senha-text13 {
            top: 359px;
            left: 705px;
            color: rgba(98, 98, 98, 1);
            height: auto;
            position: absolute;
            font-size: 36px;
            font-style: Regular;
            text-align: center;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .recuperar-senha-text18 {
            top: 928px;
            left: 905px;
            color: rgba(98, 98, 98, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .recuperar-senha-text19 {
            color: rgba(98, 98, 98, 1);
            font-weight: 400;
          }
        `}
      </style>
    </>
  )
}

export default RecuperarSenha
