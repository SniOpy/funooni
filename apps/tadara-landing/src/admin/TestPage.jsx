import { useMemo, useState } from "react"
import LineChart from "./LineChart"
import {
  AVATAR_COLORS,
  displayNameFromEmail,
  downloadCsv,
  formatParisDateTime,
  initialsFromName,
} from "./adminHelpers"
import {
  Badge,
  FormGrid,
  Message,
  PageIntro,
  Pagination,
  Panel,
  PanelHeader,
  Person,
  StatCard,
  StatsGrid,
  TableWrap,
  Toolbar,
} from "./adminStyles"

const PAGE_SIZE = 8

function TestPage({
  specialMembers,
  stats,
  headerSearch,
  loadError,
  formMessage,
  isSaving,
  onRefresh,
  onAddMembers,
}) {
  const [emailsText, setEmailsText] = useState("")
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [tableSearch, setTableSearch] = useState("")
  const [pageIndex, setPageIndex] = useState(0)

  const filteredMembers = useMemo(() => {
    const query = `${headerSearch} ${tableSearch}`.trim().toLowerCase()
    if (!query) return specialMembers
    return specialMembers.filter((member) => {
      const name = displayNameFromEmail(member.email, member.full_name).toLowerCase()
      return (
        member.email.includes(query) ||
        name.includes(query) ||
        String(member.phone || "").includes(query)
      )
    })
  }, [specialMembers, headerSearch, tableSearch])

  const pageCount = Math.max(1, Math.ceil(filteredMembers.length / PAGE_SIZE))
  const currentPage = Math.min(pageIndex, pageCount - 1)
  const pageRows = filteredMembers.slice(
    currentPage * PAGE_SIZE,
    currentPage * PAGE_SIZE + PAGE_SIZE
  )

  async function handleSubmit(event) {
    event.preventDefault()
    const result = await onAddMembers({
      emailsText,
      fullName,
      phone,
    })
    if (result) {
      setEmailsText("")
      setFullName("")
      setPhone("")
    }
  }

  return (
    <>
      <PageIntro>
        <div>
          <p className="crumb">Tadara Admin &gt; Test</p>
          <h1>Test</h1>
          <p>Groupe spécial, séparé des inscrits à la newsletter.</p>
        </div>
      </PageIntro>
      {loadError ? <Message $error>{loadError}</Message> : null}
      {formMessage ? <Message>{formMessage}</Message> : null}

      <Panel>
        <h2>Ajouter des emails</h2>
        <p className="panel-sub">
          Un email, ou plusieurs séparés par une virgule. Nom et téléphone facultatifs (un seul email).
        </p>
        <FormGrid onSubmit={handleSubmit}>
          <textarea
            placeholder="marie@mail.com, jean@mail.com"
            value={emailsText}
            onChange={(event) => setEmailsText(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Nom (facultatif)"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
          <input
            type="tel"
            placeholder="Téléphone (facultatif)"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <button type="submit" disabled={isSaving}>
            {isSaving ? "Ajout..." : "Ajouter"}
          </button>
        </FormGrid>
      </Panel>

      <StatsGrid>
        <StatCard $up>
          <div className="label">Membres total</div>
          <div className="value">{stats.totalCount}</div>
        </StatCard>
        <StatCard $up>
          <div className="label">Aujourd'hui</div>
          <div className="value">{stats.todayCount}</div>
        </StatCard>
        <StatCard $up>
          <div className="label">Cette semaine</div>
          <div className="value">{stats.thisWeekCount}</div>
        </StatCard>
        <StatCard $up>
          <div className="label">Ce mois</div>
          <div className="value">{stats.thisMonthCount}</div>
        </StatCard>
      </StatsGrid>

      <Panel>
        <PanelHeader>
          <div>
            <h2>Évolution du groupe Test</h2>
            <p className="panel-sub">Ajouts sur les 30 derniers jours</p>
          </div>
        </PanelHeader>
        <LineChart days={stats.last30Days || []} />
      </Panel>

      <Panel>
        <PanelHeader>
          <div>
            <h2>Membres du groupe Test</h2>
            <p className="panel-sub">Liste distincte de la newsletter.</p>
          </div>
          <Toolbar>
            <input
              type="search"
              placeholder="Rechercher..."
              value={tableSearch}
              onChange={(event) => {
                setTableSearch(event.target.value)
                setPageIndex(0)
              }}
            />
            <button type="button" className="ghost" onClick={onRefresh}>
              Actualiser
            </button>
            <button
              type="button"
              onClick={() =>
                downloadCsv(
                  "tadara-groupe-test.csv",
                  "nom,email,telephone,date_insertion",
                  filteredMembers.map((member) => {
                    const name = displayNameFromEmail(member.email, member.full_name)
                    return `"${name}","${member.email}","${member.phone || ""}",${member.created_at}`
                  })
                )
              }
            >
              Exporter CSV
            </button>
          </Toolbar>
        </PanelHeader>
        <TableWrap>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Date d'insertion</th>
                <th>Groupe</th>
              </tr>
            </thead>
            <tbody>
              {pageRows.length === 0 ? (
                <tr>
                  <td colSpan={6}>Aucun membre pour cette recherche.</td>
                </tr>
              ) : (
                pageRows.map((member, index) => {
                  const name = displayNameFromEmail(member.email, member.full_name)
                  const rowNumber =
                    filteredMembers.length - (currentPage * PAGE_SIZE + index)
                  return (
                    <tr key={member.id}>
                      <td>#{rowNumber}</td>
                      <td>
                        <Person>
                          <span
                            className="avatar"
                            style={{
                              background:
                                AVATAR_COLORS[index % AVATAR_COLORS.length],
                            }}
                          >
                            {initialsFromName(name)}
                          </span>
                          {name}
                        </Person>
                      </td>
                      <td>{member.email}</td>
                      <td>{member.phone || "—"}</td>
                      <td>{formatParisDateTime(member.created_at)}</td>
                      <td>
                        <Badge>Test</Badge>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </TableWrap>
        <Pagination>
          <span>
            Affichage de {filteredMembers.length === 0 ? 0 : currentPage * PAGE_SIZE + 1} à{" "}
            {Math.min((currentPage + 1) * PAGE_SIZE, filteredMembers.length)} sur{" "}
            {filteredMembers.length} membres
          </span>
          <div>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                className={index === currentPage ? "active" : ""}
                onClick={() => setPageIndex(index)}
              >
                {index + 1}
              </button>
            )).slice(0, 8)}
          </div>
        </Pagination>
      </Panel>
    </>
  )
}

export default TestPage
