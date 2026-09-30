# Meu primeiro site — Web Coding

Projeto de demonstração com **HTML, CSS e JavaScript**, pronto para publicar no GitHub Pages ou na Vercel. Não precisa instalar bibliotecas nem usar ferramentas de compilação.

## Arquivos

```text
site-web-coding/
├── index.html   ← estrutura da página
├── styles.css   ← cores, layout e responsividade
├── script.js    ← contador, tema e formulário com alert
└── README.md    ← instruções
```

## Testar no computador

Abra o arquivo `index.html` em um navegador. Teste o botão **Adicionar clique**, o botão de **troca de tema** no topo e o **formulário**.

**Importante:** o formulário é apenas uma demonstração didática. Ao enviar, `alert()` mostra os valores no navegador; os dados **não são enviados nem armazenados**. Para receber inscrições de verdade seria necessário conectar um serviço ou backend.

## Publicar no GitHub Pages, usando GitHub Desktop

1. Extraia o ZIP. Abra o GitHub Desktop e adicione a pasta `site-web-coding` como repositório local. Caso não exista um repositório Git, use a opção de criá-lo nessa pasta.
2. Faça o primeiro **commit** e clique em **Publish repository** para publicar o repositório na sua conta GitHub.
3. No site do GitHub, abra o repositório e vá a **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**. Escolha a branch padrão (normalmente `main`) e a pasta **/(root)**. Salve.
5. Aguarde a publicação e use o endereço exibido em **Pages**.

Os caminhos `./styles.css` e `./script.js` são relativos, então funcionam também quando o site é publicado em `usuario.github.io/nome-do-repositorio/`.

## Publicar na Vercel

1. Com o repositório já no GitHub, entre na Vercel e crie um novo projeto.
2. Importe o repositório do GitHub. O site é HTML/CSS/JS puro, sem framework nem comando de build.
3. Publique com **Deploy** e abra a URL disponibilizada pela Vercel.
4. Ao fazer um novo commit e enviar para o GitHub, a integração Git pode gerar um novo deploy automaticamente.

## Usar domínio próprio

Registre seu domínio em um registrador (por exemplo, Registro.br para `.br`). Adicione-o à plataforma escolhida (configurações de Pages ou de Domains da Vercel) e crie no painel do registrador **os registros DNS informados pela própria plataforma**. Aguarde a verificação e a emissão de HTTPS. Registros e condições podem variar: siga as instruções exibidas no painel no dia da publicação.

## Para trabalhar em aula

- Altere a cor do botão no `styles.css` e publique uma nova versão.
- Troque o título `<h1>` no `index.html` e compare o site antes e depois.
- Modifique a mensagem de `alert()` no `script.js`.
- Explique a diferença entre **código no GitHub**, **site hospedado** e **domínio próprio**.

Projeto educativo · João Vitor Regis · Web Coding
