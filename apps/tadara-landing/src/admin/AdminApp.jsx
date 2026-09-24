import { useEffect, useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import AdminLayout from "./AdminLayout"
import InscriptionsPage from "./InscriptionsPage"
import TestPage from "./TestPage"
import {
  addSpecialMembers,
  clearStoredAdminPassword,
  fetchRegistrations,
  fetchSpecialMembers,
  getStoredAdminPassword,
  storeAdminPassword,
} from "../services/adminRegistrationsApi"

function getAdminPage() {
  return window.location.pathname.startsWith("/admin/test")
    ? "test"
    : "inscriptions"
}

function AdminApp() {
  const [adminPassword, setAdminPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [loadError, setLoadError] = useState("")
  const [formMessage, setFormMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [registrations, setRegistrations] = useState([])
  const [specialMembers, setSpecialMembers] = useState([])
  const emptyStats = {
    totalCount: 0,
    todayCount: 0,
    thisWeekCount: 0,
    thisMonthCount: 0,
    last30Days: [],
    todayChangePercent: 0,
    weekChangePercent: 0,
    monthChangePercent: 0,
    heroCount: 0,
    launchOfferCount: 0,
    unknownSourceCount: 0,
  }
  const [registrationStats, setRegistrationStats] = useState(emptyStats)
  const [specialStats, setSpecialStats] = useState(emptyStats)
  const currentPage = getAdminPage()

  async function loadDashboard(password) {
    setIsLoading(true)
    setLoadError("")

    try {
      const registrationResult = await fetchRegistrations(password)
      setRegistrations(registrationResult.registrations)
      setRegistrationStats(registrationResult.stats)
      storeAdminPassword(password)
      setIsLoggedIn(true)

      try {
        const specialResult = await fetchSpecialMembers(password)
        setSpecialMembers(specialResult.specialMembers)
        setSpecialStats(specialResult.stats)
      } catch (specialError) {
        if (getAdminPage() === "test") {
          setLoadError(specialError.message)
        }
      }
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
    setSpecialMembers([])
  }

  async function handleAddMembers(payload) {
    setIsSaving(true)
    setFormMessage("")
    setLoadError("")
    try {
      const result = await addSpecialMembers(getStoredAdminPassword(), payload)
      const parts = [
        `${result.addedCount} ajouté(s)`,
        result.alreadyRegisteredCount
          ? `${result.alreadyRegisteredCount} déjà présent(s)`
          : null,
        result.invalidEmails?.length
          ? `${result.invalidEmails.length} invalide(s)`
          : null,
      ].filter(Boolean)
      setFormMessage(parts.join(" · "))
      await loadDashboard(getStoredAdminPassword())
      return true
    } catch (error) {
      setLoadError(error.message)
      return false
    } finally {
      setIsSaving(false)
    }
  }

  if (!isLoggedIn) {
    return (
      <LoginPage>
        <AdminGlobal />
        <LoginCard>
          <p className="eyebrow">Tadara Admin</p>
          <h1>Connexion</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
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
      </LoginPage>
    )
  }

  return (
    <>
      <AdminGlobal />
      <AdminLayout
        currentPage={currentPage}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onLogout={handleLogout}
      >
        {currentPage === "test" ? (
          <TestPage
            specialMembers={specialMembers}
            stats={specialStats}
            headerSearch={searchQuery}
            loadError={loadError}
            formMessage={formMessage}
            isSaving={isSaving}
            onRefresh={() => loadDashboard(getStoredAdminPassword())}
            onAddMembers={handleAddMembers}
          />
        ) : (
          <InscriptionsPage
            registrations={registrations}
            stats={registrationStats}
            headerSearch={searchQuery}
            loadError={loadError}
            onRefresh={() => loadDashboard(getStoredAdminPassword())}
          />
        )}
      </AdminLayout>
    </>
  )
}

const AdminGlobal = createGlobalStyle`
  body {
    margin: 0;
    background: #f4f7fb;
  }
`

const LoginPage = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #10182b;
  font-family: Montserrat, Inter, Arial, sans-serif;
`

const LoginCard = styled.div`
  width: min(100% - 32px, 400px);
  background: white;
  border-radius: 20px;
  padding: 32px;

  .eyebrow {
    color: #4f46e5;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  h1 {
    margin: 8px 0 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input,
  button {
    height: 46px;
    border-radius: 12px;
    font-family: inherit;
  }

  input {
    border: 1px solid #e2e8f0;
    padding: 0 14px;
  }

  button {
    border: 0;
    background: #4f46e5;
    color: white;
    font-weight: 700;
    cursor: pointer;
  }

  .error {
    color: #b91c1c;
  }
`

export default AdminApp
