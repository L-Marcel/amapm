import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div id="artigos">
        <div id="fundo-1">
          <div id="parte_3">
            <div id="parte_3_direita">
              <hgroup id="quadrado_1">
                <h3>Nova página da AMAPM</h3>	
                <p>Seja bem-vindo(a) ao site da Associação cristã de Moradores e Amigos da Praia do meio!  </p>
                <p>Nele você saberá quem somos nós, qual o nosso objetivo, conhecerá a nossa história e saberá notícias da região de forma mais aprofundada.</p>
              </hgroup>
            </div>
            <div id="parte_3_esquerda">
              <img src="assets/praia-do-meio.png"/>
            </div>
          </div>
        </div>
        <div id="fundo-3">
          <div id="parte_4">
            <div id="parte_4_esquerda">
              <img src="assets/oracao.png"/>
            </div>
          
            <div id="parte_4_direita">
              <hgroup id="quadrado_2">
                <h3>Diversidade</h3>
                <p>Temos por objetivo praticar as lições evangélicas de Jesus Cristo sem quaisquer distinção religiosa, política ou social.</p>
                <p>Mesmo tendo como base as lições de Jesus cristo, não possuímos vinculoco com nenhuma entidade religiosa e ,além disso, nossos voluntários são das mais diversas religiões ou partidos políticos.</p>
              </hgroup>
            </div>    
          </div>
        </div>
        <div id="fundo-4">
          <div id="parte_5">
            <div id="parte_5_esquerda">
              <img src="assets/logo-da-amapm-2.png"/>
            </div>
            <div id="parte_5_direita">
              <hgroup id="quadrado_2">
                <h3>Quem somos nós? </h3>
                <p>A Associação Cristã de Moradores e Amigo da Praia do meio( AMA Praia do Meio ) é uma associação sem fins lucrativos composta por voluntários das mais diversas áreas.</p>
              </hgroup>
            </div>    
          </div>
        </div>
        <div id="fundo-5">
          <div id="parte_6">
            <div id="parte_6_esquerda">
              <img src="assets/oracao.png"/>
            </div>
            <div id="parte_6_direita">
              <hgroup id="quadrado_2">
                <h3>Diversidade</h3>
                <p>Não possuímos nenhum vínculo político seja ele de esquerda, de direita ou centro, porém, caso algum político queira participar como sócio, não será impedido.</p>
              </hgroup>
            </div>    
          </div>
        </div>
      </div>
    </main>
  )
}
