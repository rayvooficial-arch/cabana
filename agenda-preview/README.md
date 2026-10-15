# Agenda Cabana das Mansões

Banco Supabase: gkylxuplxvauxejxeorn. Frontend usa apenas URL e chave publicável configuradas na Vercel. Dados pessoais são protegidos por RLS; RPC pública retorna somente cabin/start/end. Somente usuários autenticados e confirmados cujos e-mails constam em agenda_private.admins recebem acesso. Reservas sobrepostas são rejeitadas por exclusão GiST; checkout é limite exclusivo.

Os dois administradores precisam criar seus usuários em Authentication > Users no painel Supabase, com senha pessoal. Não enviar senhas pelo chat.

Testes SQL concluídos em transação revertida: sobreposição rejeitada, entrada no checkout aceita, leitura pública limitada à disponibilidade, leitura privada anônima negada, conta sem identidade sem permissão de escrita. Teste de login real aguarda criação de usuários. Nenhuma reserva real cadastrada.


## MFA security update
The admin UI requires a personal TOTP authenticator and clears its local session after 30 minutes of inactivity. Each authorized administrator must enroll their own device. Guest availability remains public. Security response headers restrict scripts, connections and embedding.

Database MFA enforcement applied on 2026-10-15 through migration require_admin_mfa_for_agenda_bookings. Transactional tests confirmed authorized aal1 reads/writes are denied, authorized aal2 read/write succeeds, and anonymous availability remains accessible; all test data was rolled back. Recovery from a lost authenticator requires the project owner to verify identity and reset the factor through Supabase.
