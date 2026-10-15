-- Apply through an authorized Supabase migration before considering MFA enforcement complete.
alter policy agenda_admins on public.agenda_bookings to authenticated using ((select agenda_private.is_admin()) and (select auth.jwt()->>'aal')='aal2') with check ((select agenda_private.is_admin()) and (select auth.jwt()->>'aal')='aal2');
