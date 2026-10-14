-- Apply once to a dedicated Supabase project.
create extension if not exists btree_gist with schema extensions;
create schema if not exists private;
revoke all on schema private from public, anon, authenticated;
create table private.agenda_admins(email text primary key);
insert into private.agenda_admins values ('cabanadasmansoes@gmail.com'),('rayvooficial@gmail.com');
create function public.agenda_is_admin() returns boolean language sql stable security definer set search_path = '' as $$
 select exists(select 1 from auth.users u join private.agenda_admins a on lower(u.email)=a.email where u.id=auth.uid() and u.email_confirmed_at is not null)
$$;
revoke all on function public.agenda_is_admin() from public;
grant execute on function public.agenda_is_admin() to authenticated;
create table public.agenda_bookings(
 id uuid primary key default gen_random_uuid(),
 cabin text not null check(cabin in ('eden','manancial','casa')),
 start date not null, "end" date not null, guest text not null check(length(trim(guest)) between 1 and 120),
 phone text not null default '' check(length(phone)<=40), notes text not null default '' check(length(notes)<=2000),
 status text not null check(status in ('confirmed','pending','blocked')),
 check("end">start),
 exclude using gist(cabin with =, daterange(start,"end",'[)') with &&)
);
alter table public.agenda_bookings enable row level security;
revoke all on public.agenda_bookings from anon, authenticated;
grant select,insert,update,delete on public.agenda_bookings to authenticated;
create policy admin_bookings on public.agenda_bookings for all to authenticated using(public.agenda_is_admin()) with check(public.agenda_is_admin());
create function public.agenda_availability() returns table(cabin text,start date,"end" date)
language sql stable security definer set search_path='' as $$ select b.cabin,b.start,b."end" from public.agenda_bookings b order by b.start $$;
revoke all on function public.agenda_availability() from public;
grant execute on function public.agenda_availability() to anon, authenticated;
-- Disable public signup in Supabase Auth. Provision the two verified accounts;
-- passwords must be set by the owners. Never embed service_role in frontend.
