
# Guia de Hospedagem - Vini's GlitchFolio

Você tem duas excelentes opções para hospedar seu portfólio. Recomendo o **Firebase** por ser mais integrado, mas o **GitHub Pages** é uma ótima alternativa gratuita.

---

## Opção A: GitHub Pages (Grátis e Simples)

1. **Repositório**: Crie um repositório no GitHub e suba seu código.
2. **Configuração**: Vá em **Settings** > **Pages**.
3. **Build and Deployment**: Em "Source", selecione **GitHub Actions**.
4. **Workflow**: O GitHub sugerirá um template de "Next.js". Aceite-o. 
   - O arquivo `next.config.ts` já está configurado com `output: 'export'`.
   - O GitHub fará o build e o deploy automaticamente sempre que você der `git push`.

*Nota: Se o seu repositório não for `seu-usuario.github.io` (ex: `seu-usuario.github.io/portfolio`), você precisará adicionar a propriedade `basePath: '/portfolio'` no `next.config.ts`.*

---

## Opção B: Firebase App Hosting (Recomendado)

1. Acesse o [Console do Firebase](https://console.firebase.google.com/).
2. Vá em **Build** > **App Hosting**.
3. Conecte seu GitHub e selecione o repositório.
4. O Firebase cuidará de tudo (incluindo o suporte a funções de servidor se você precisar no futuro).

---

## Configuração de E-mail (Importante)

Independente de onde você hospedar, para receber as mensagens do formulário no seu e-mail:
1. No Console do Firebase, vá em **Extensions**.
2. Instale a extensão **Trigger Email**.
3. Configure para observar a coleção `contactMessages`.
4. Defina `jvinicius449@gmail.com` como destinatário.

As mensagens enviadas pelos usuários agora são salvas no seu **Firestore Database**.
