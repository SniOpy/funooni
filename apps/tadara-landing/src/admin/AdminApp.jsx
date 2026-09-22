import { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import { tadaraTheme } from "../designSystem"
import {
  clearStoredAdminPassword,
  fetchRegistrations,
  getStoredAdminPassword,
  storeAdminPassword,
} from "../services/adminRegistrationsApi"

const { colors, typography, spacing, radius } = tadaraTheme

function formatParisDateTime(isoDate) {
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(isoDate))
}

function formatParisDayLabel(ymd) {
  const [year, month, day] = ymd.split("-").map(Number)
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "short",
  }).format(new Date(year, month - 1, day))
}

function downloadRegistrationsCsv(registrations) {
  const header = "email,date_inscription"
  const rows = registrations.map((registration) => {
    const email = `"${registration.email.replaceAll('"', '""')}"`
    return `${email},${registration.created_at}`
  })
  const csvContent = [header, ...rows].join("\n")
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const fileUrl = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = fileUrl
  link.download = "tadara-inscriptions.csv"
  link.click()
  URL.revokeObjectURL(fileUrl)
}

function AdminApp() {
  const [adminPassword, setAdminPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loadError, setLoadError] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [registrations, setRegistrations] = useState([])
  const [stats, setStats] = useState({
    totalCount: 0,
    todayCount: 0,
    thisWeekCount: 0,
    thisMonthCount: 0,
    last30Days: [],
  })

  async function loadDashboard(password) {
    setIsLoading(true)
    setLoadError("")

    try {
      const result = await fetchRegistrations(password)
      setRegistrations(result.registrations)
      setStats(result.stats)
      storeAdminPassword(password)
      setIsLoggedIn(true)
    } catch (error) {
      if (error.status === 401) {
        clearStoredAdminPassword()
        setIsLoggedIn(false)
      }
      setLoadError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const storedPassword = getStoredAdminPassword()
    if (storedPassword) {
      setAdminPassword(storedPassword)
      loadDashboard(storedPassword)
    }
  }, [])

  async function handleLogin(event) {
    event.preventDefault()
    await loadDashboard(adminPassword.trim())
  }

  function handleLogout() {
    clearStoredAdminPassword()
    setIsLoggedIn(false)
    setAdminPassword("")
    setRegistrations([])
  }

  const filteredRegistrations = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()
    if (!normalizedQuery) {
      return registrations
    }

    return registrations.filter((registration) =>
      registration.email.includes(normalizedQuery)
    )
  }, [registrations, searchQuery])

  const maxDayCount = Math.max(1, ...stats.last30Days.map((day) => day.count))

  if (!isLoggedIn) {
    return (
      <AdminPage>
        <LoginCard>
          <p className="eyebrow">Tadara</p>
          <h1>Dashboard inscriptions</h1>
          <p className="login-help">
            Accès réservé. Entre le mot de passe admin.
          </p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              name="admin-password"
              autoComplete="current-password"
              placeholder="Mot de passe"
              value={adminPassword}
              onChange={(event) => setAdminPassword(event.target.value)}
              disabled={isLoading}
              required
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Connexion..." : "Ouvrir le dashboard"}
            </button>
          </form>
          {loadError ? <p className="error">{loadError}</p> : null}
        </LoginCard>
      </AdminPage>
    )
  }

  return (
    <AdminPage>
      <AdminHeader>
        <div>
          <p className="eyebrow">Tadara</p>
          <h1>Inscriptions</h1>
        </div>
        <HeaderActions>
          <button type="button" onClick={() => loadDashboard(getStoredAdminPassword())}>
            Actualiser
          </button>
          <button type="button" onClick={() => downloadRegistrationsCsv(filteredRegistrations)}>
            Export CSV
          </button>
          <button type="button" className="secondary" onClick={handleLogout}>
            Déconnexion
          </button>
        </HeaderActions>
      </AdminHeader>

      {loadError ? <p className="error">{loadError}</p> : null}

      <StatsGrid>
        <StatCard>
          <span>Total</span>
          <strong>{stats.totalCount}</strong>
        </StatCard>
        <StatCard>
          <span>Aujourd'hui</span>
          <strong>{stats.todayCount}</strong>
        </StatCard>
        <StatCard>
          <span>Cette semaine</span>
          <strong>{stats.thisWeekCount}</strong>
        </StatCard>
        <StatCard>
          <span>Ce mois</span>
          <strong>{stats.thisMonthCount}</strong>
        </StatCard>
      </StatsGrid>

      <Panel>
        <h2>Évolution sur 30 jours</h2>
        <Chart>
          {stats.last30Days.map((day) => (
            <ChartBar key={day.date} title={`${day.date} : ${day.count}`}>
              <div
                className="fill"
                style={{ height: `${(day.count / maxDayCount) * 100}%` }}
              />
              <span>{formatParisDayLabel(day.date)}</span>
            </ChartBar>
          ))}
        </Chart>
      </Panel>

      <Panel>
        <ListHeader>
          <h2>Liste des emails</h2>
          <input
            type="search"
            placeholder="Rechercher un email"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </ListHeader>
        <p className="count">
          {filteredRegistrations.length} résultat
          {filteredRegistrations.length > 1 ? "s" : ""}
        </p>
        <TableWrap>
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Date d'inscription</th>
              </tr>
            </thead>
            <tbody>
              {filteredRegistrations.length === 0 ? (
                <tr>
                  <td colSpan={2}>Aucune inscription pour cette recherche.</td>
                </tr>
              ) : (
                filteredRegistrations.map((registration) => (
                  <tr key={registration.id}>
                    <td>{registration.email}</td>
                    <td>{formatParisDateTime(registration.created_at)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </TableWrap>
      </Panel>
    </AdminPage>
  )
}

const AdminPage = styled.div`
  min-height: 100vh;
  padding: ${spacing[8]} ${spacing[6]};
  background: ${colors.background.cream};
  color: ${colors.text.primary};
  font-family: ${typography.fonts.body};

  h1 {
    margin: 0;
    font-family: ${typography.fonts.heading};
    font-size: clamp(1.75rem, 4vw, 2.5rem);
  }

  h2 {
    margin: 0 0 ${spacing[5]};
    font-size: 1.125rem;
  }

  .eyebrow {
    margin: 0 0 ${spacing[2]};
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: ${colors.brand.secondary};
  }

  .error {
    color: ${colors.status.error};
  }

  .count {
    margin: 0 0 ${spacing[4]};
    color: ${colors.text.muted};
  }
`

const LoginCard = styled.div`
  max-width: 420px;
  margin: 12vh auto 0;
  padding: ${spacing[8]};
  background: ${colors.background.soft};
  border-radius: ${radius.xl};
  box-shadow: 0 12px 40px rgba(43, 23, 18, 0.08);

  .login-help {
    color: ${colors.text.secondary};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: ${spacing[3]};
  }

  input,
  button {
    height: 48px;
    border-radius: ${radius.pill};
    font-family: ${typography.fonts.body};
  }

  input {
    border: 1px solid ${colors.border.medium};
    padding: 0 ${spacing[4]};
  }

  button {
    border: 0;
    background: ${colors.form.buttonBg};
    color: ${colors.form.buttonText};
    font-weight: 600;
    cursor: pointer;
  }
`

const AdminHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: ${spacing[4]};
  margin-bottom: ${spacing[8]};
  flex-wrap: wrap;
`

const HeaderActions = styled.div`
  display: flex;
  gap: ${spacing[3]};
  flex-wrap: wrap;

  button {
    height: 42px;
    padding: 0 ${spacing[4]};
    border: 0;
    border-radius: ${radius.pill};
    background: ${colors.form.buttonBg};
    color: ${colors.form.buttonText};
    font-family: ${typography.fonts.body};
    font-weight: 600;
    cursor: pointer;
  }

  .secondary {
    background: transparent;
    color: ${colors.text.primary};
    border: 1px solid ${colors.border.medium};
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${spacing[4]};
  margin-bottom: ${spacing[6]};

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const StatCard = styled.div`
  background: white;
  border-radius: ${radius.lg};
  padding: ${spacing[5]};

  span {
    color: ${colors.text.muted};
    font-size: 0.875rem;
  }

  strong {
    display: block;
    margin-top: ${spacing[2]};
    font-size: 2rem;
    font-family: ${typography.fonts.heading};
  }
`

const Panel = styled.section`
  background: white;
  border-radius: ${radius.lg};
  padding: ${spacing[6]};
  margin-bottom: ${spacing[6]};
`

const Chart = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 180px;
  overflow-x: auto;
`

const ChartBar = styled.div`
  flex: 1;
  min-width: 14px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  .fill {
    width: 100%;
    min-height: 2px;
    background: ${colors.brand.secondary};
    border-radius: 4px 4px 0 0;
  }

  span {
    display: none;
  }

  @media (min-width: 1100px) {
    span {
      display: block;
      margin-top: 6px;
      font-size: 9px;
      color: ${colors.text.subtle};
      transform: rotate(-55deg);
      transform-origin: top left;
      white-space: nowrap;
    }
  }
`

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing[4]};
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${spacing[4]};

  input {
    min-width: min(100%, 280px);
    height: 42px;
    border-radius: ${radius.pill};
    border: 1px solid ${colors.border.medium};
    padding: 0 ${spacing[4]};
    font-family: ${typography.fonts.body};
  }
`

const TableWrap = styled.div`
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    text-align: left;
    padding: ${spacing[3]} ${spacing[2]};
    border-bottom: 1px solid ${colors.border.light};
  }

  th {
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${colors.text.muted};
  }
`

export default AdminApp
