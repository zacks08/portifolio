"use client"

// INSTRUÇÕES PARA CONFIGURAR O EMAILJS

/*
Para que o formulário de contato funcione corretamente com EmailJS, siga estes passos:

1. CRIAR CONTA NO EMAILJS:
   - Acesse https://www.emailjs.com/ e crie uma conta gratuita
   - O plano gratuito permite 200 emails por mês

2. CONFIGURAR UM SERVIÇO DE EMAIL:
   - No painel do EmailJS, vá para "Email Services"
   - Clique em "Add New Service"
   - Escolha seu provedor (Gmail, Outlook, etc.)
   - Siga as instruções para conectar sua conta de email

3. CRIAR UM TEMPLATE DE EMAIL:
   - No painel do EmailJS, vá para "Email Templates"
   - Clique em "Create New Template"
   - Crie um template com o seguinte conteúdo:

   Assunto: Nova mensagem de contato de {{from_name}}

   Conteúdo:
   Nome: {{from_name}}
   Email: {{from_email}}
   Mensagem: {{message}}

   Responder para: {{reply_to}}

4. OBTER AS CREDENCIAIS:
   - Service ID: Encontre em "Email Services" (algo como 'service_xyz123')
   - Template ID: Encontre em "Email Templates" (algo como 'template_abc456')
   - Public Key: Encontre em "Account" > "API Keys" (algo como 'user_def789')

5. SUBSTITUIR NO CÓDIGO:
   - Substitua 'service_emailjs' pelo seu Service ID
   - Substitua 'template_contact' pelo seu Template ID
   - Substitua 'YOUR_PUBLIC_KEY' pela sua Public Key

6. INSTALAR A BIBLIOTECA:
   - Execute o comando: npm install @emailjs/browser
   - ou: yarn add @emailjs/browser

7. INICIALIZAR O EMAILJS (opcional para melhor rastreamento):
   - Adicione no componente: useEffect(() => { emailjs.init("YOUR_PUBLIC_KEY"); }, []);
*/
