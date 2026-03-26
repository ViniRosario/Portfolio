# Guia de Hospedagem - Vini's GlitchFolio

Este portfólio foi construído com Next.js 15 e está pronto para ser implantado no **Firebase App Hosting**.

## Passo 1: Subir o código para o GitHub
1. Crie um novo repositório privado ou público no seu GitHub.
2. Faça o push do código deste projeto para o repositório.

## Passo 2: Configurar o Firebase App Hosting
1. Acesse o [Console do Firebase](https://console.firebase.google.com/).
2. Selecione o projeto: `studio-6353657020-19d30`.
3. No menu lateral, vá em **Build (Compilação)** > **App Hosting**.
4. Clique em **Get Started (Começar)**.
5. Conecte sua conta do GitHub e selecione o repositório criado.
6. Siga as etapas de configuração (o Firebase detectará automaticamente as configurações de Next.js).
7. Clique em **Finish and Deploy**.

## Passo 3: Ativar o Envio de E-mails
Como o formulário salva as mensagens na coleção `contactMessages` do Firestore, para recebê-las no seu e-mail:
1. No Console do Firebase, vá em **Extensions**.
2. Procure pela extensão **Trigger Email**.
3. Configure-a para observar a coleção `contactMessages`.
4. Defina o seu e-mail (`jvinicius449@gmail.com`) como o destinatário padrão.

## Notas Importantes
- **Imagens do Google Drive**: Certifique-se de que todas as pastas/arquivos no seu Drive que você usou no portfólio estejam com a permissão de compartilhamento configurada como **"Qualquer pessoa com o link pode ver"**. Caso contrário, as miniaturas não carregarão no site.
- **Domínio**: Após o primeiro deploy, o Firebase fornecerá uma URL `.web.app`. Você pode conectar seu domínio personalizado nas configurações do App Hosting.
