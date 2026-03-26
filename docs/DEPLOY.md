
# Guia de Hospedagem - Vini's GlitchFolio

Para resolver o problema de aparecer apenas o texto do README, siga estes passos:

---

## Passo a Passo para GitHub Pages

1. **Configuração no GitHub**:
   - Vá no seu repositório no GitHub.
   - Clique em **Settings** > **Pages**.
   - Em **Build and deployment** > **Source**, selecione **GitHub Actions**.

2. **Criar o Workflow de Build**:
   - O GitHub vai sugerir um card chamado "Next.js". Clique em **Configure**.
   - Ele vai criar um arquivo chamado `.github/workflows/nextjs.yml`.
   - **IMPORTANTE**: O arquivo `next.config.ts` já está configurado com `basePath: '/Portfolio'`. Certifique-se de que o nome do repositório no GitHub seja exatamente `Portfolio` (com P maiúsculo como no seu print).

3. **Commit e Push**:
   - Salve as alterações aqui no Firebase Studio.
   - Faça o commit e push para o GitHub.
   - A aba **Actions** no seu GitHub mostrará o progresso do build. Quando terminar (ficar verde), o site estará online.

---

## Se preferir Firebase App Hosting (Mais Automático)

1. Acesse o [Console do Firebase](https://console.firebase.google.com/).
2. Vá em **Build** > **App Hosting**.
3. Conecte seu GitHub e selecione o repositório.
4. O Firebase detectará o Next.js e fará tudo sozinho, sem precisar configurar `basePath`.

---

## Configuração de E-mail

As mensagens enviadas pelo formulário são salvas no **Firestore Database**. Para receber no e-mail:
1. No Console do Firebase, instale a extensão **Trigger Email**.
2. Configure para observar a coleção `contactMessages`.
3. Defina `jvinicius449@gmail.com` como destinatário.
