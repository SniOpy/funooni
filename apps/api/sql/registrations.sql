-- À exécuter dans le SQL Editor du dashboard Supabase.
-- Table source de vérité des inscriptions Tadara.

create table public.registrations (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text,
  created_at timestamptz not null default now()
);

alter table public.registrations enable row level security;

-- Table déjà créée : ajouter la source
-- alter table public.registrations add column if not exists source text;

-- Aucune policy pour anon / authenticated :
-- le site public n'insère que via l'API serveur (service_role).
-- Le dashboard admin pourra ajouter plus tard des policies SELECT authentifiées.
