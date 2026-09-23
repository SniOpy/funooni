-- 1) Ajouter la colonne source si elle n'existe pas encore
alter table public.registrations
  add column if not exists source text;

-- 2) Import de l'ancienne liste (Europe/Paris, +02 en août/septembre)
-- Doublon michejda.celine@hotmail.com : une seule ligne.
insert into public.registrations (email, source, created_at)
values
  ('mariaoumayaloqman@gmail.com', 'launch-offer', timestamptz '2026-09-21 18:30:50+02'),
  ('lili.begarra@gmail.com', 'hero', timestamptz '2026-09-21 18:50:29+02'),
  ('lifeinpink@laposte.net', 'launch-offer', timestamptz '2026-09-21 16:23:55+02'),
  ('katya.benbara@gmail.com', 'hero', timestamptz '2026-09-21 18:57:27+02'),
  ('laetitia.cagna@gmail.com', 'hero', timestamptz '2026-09-21 20:11:50+02'),
  ('alice.bourad@gmail.com', 'hero', timestamptz '2026-09-21 20:50:57+02'),
  ('as_saliha@hotmail.com', 'launch-offer', timestamptz '2026-09-21 21:36:39+02'),
  ('michejda.celine@hotmail.com', 'hero', timestamptz '2026-09-19 16:18:39+02'),
  ('zeineb1988@gmail.com', 'hero', timestamptz '2026-09-19 16:34:53+02'),
  ('sarah.s2594@gmail.com', 'launch-offer', timestamptz '2026-09-19 15:33:03+02'),
  ('leilaleyla783@gmail.com', 'hero', timestamptz '2026-09-01 11:55:54+02'),
  ('jeremy.lebreton78@gmail.com', 'launch-offer', timestamptz '2026-09-01 11:57:57+02'),
  ('nastyne@hotmail.com', 'hero', timestamptz '2026-09-02 07:10:46+02'),
  ('hanane58@neuf.fr', 'launch-offer', timestamptz '2026-09-19 11:28:51+02'),
  ('b_labiba@hotmail.com', 'launch-offer', timestamptz '2026-09-19 16:35:29+02'),
  ('anasou82@gmail.com', 'hero', timestamptz '2026-09-02 11:23:44+02'),
  ('samiabadra76@gmail.com', 'hero', timestamptz '2026-09-01 13:03:31+02'),
  ('lock.meyling@gmail.com', 'hero', timestamptz '2026-09-01 15:41:27+02'),
  ('madapes.agency@gmail.com', 'hero', timestamptz '2026-08-31 19:59:14+02'),
  ('mapetitetribu29@gmail.com', 'hero', timestamptz '2026-09-22 23:22:05+02')
on conflict (email) do nothing;
