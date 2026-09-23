-- À exécuter dans le SQL Editor Supabase.
-- Groupe spécial (page Test), séparé de la newsletter registrations.

create table public.special_members (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text,
  phone text,
  created_at timestamptz not null default now()
);

alter table public.special_members enable row level security;
