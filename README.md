# Site da AMAPM

Este site visa colaborar com a divulgação dos trabalhos voluntários da associação cristã de moradores e amigos da Praia do Meio, por meio da divulgação de eventos, comunição e valorização de quem já trabalha pela comunidade, incentivando a prática de ajuda ao próximo.

# Colaboradores

- Lucas Marcel - desenvolvedor encarregado de construir o site e realizar a manutençãp se necessário;
- Ana Paula - idealizadora das páginas e do conteúdo delas, membra da AMAPM e desenvolvedora responsável pela manutenção.

# Pra desenvolvedores
Para rodar em seu computador você precisará instalar as dependências com o `pnpm`:
```
pnpm install
```

Então você precisará configurar arquivo de variáveis do ambiente, como por exemplo o `.env.local` da seguinte forma:
```env
AUTH_TOKEN= #Token de autorização da API do Hygraph
ENDPOINT= #URL base da API do Hygraph
WEBHOOK_SECRET= #Chave secreta do Webhook do Hygraph
```
Repare que você precisará configurar seu projeto no Hygraph ou usar um já configurado. Além disso, o arquivo `.env.exaple` foi deixado como `exemplo`, mas é necessário ter o `.env.local`.

Então você poderá executar o código:
```
pnpm dev
```