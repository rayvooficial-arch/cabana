# Agenda Cabana das Mansões

Banco Supabase: gkylxuplxvauxejxeorn. Frontend usa apenas URL e chave publicável configuradas na Vercel. Dados pessoais são protegidos por RLS; RPC pública retorna somente cabin/start/end. Somente usuários autenticados e confirmados cujos e-mails constam em agenda_private.admins recebem acesso. Reservas sobrepostas são rejeitadas por exclusão GiST; checkout é limite exclusivo.

Os dois administradores precisam criar seus usuários em Authentication > Users no painel Supabase, com senha pessoal. Não enviar senhas pelo chat.

Testes SQL concluídos em transação revertida: sobreposição rejeitada, entrada no checkout aceita, leitura pública limitada à disponibilidade, leitura privada anônima negada, conta sem identidade sem permissão de escrita. Teste de login real aguarda criação de usuários. Nenhuma reserva real cadastrada.
