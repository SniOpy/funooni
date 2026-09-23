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
  Message,
  PageIntro,
  Pagination,
  Panel,
  PanelHeader,
  Person,
  SourceBadge,
  SourceCountBar,
  StatCard,
  StatsGrid,
  TableWrap,
  Toolbar,
} from "./adminStyles"

const PAGE_SIZE = 8

function InscriptionsPage({
  registrations,
  stats,
  headerSearch,
  loadError,
  onRefresh,
}) {
  const [tableSearch, setTableSearch] = useState("")
  const [sourceFilter, setSourceFilter] = useState("all")
  const [pageIndex, setPageIndex] = useState(0)

  const filteredRegistrations = useMemo(() => {
    const query = `${headerSearch} ${tableSearch}`.trim().toLowerCase()
    return registrations.filter((registration) => {
      const matchesSource =
        sourceFilter === "all" || registration.source === sourceFilter
      if (!matchesSource) return false
      if (!query) return true
      const name = displayNameFromEmail(registration.email).toLowerCase()
      const source = String(registration.source || "").toLowerCase()
      return (
        registration.email.includes(query) ||
        name.includes(query) ||
        source.includes(query)
      )
    })
  }, [registrations, headerSearch, tableSearch, sourceFilter])

  const pageCount = Math.max(1, Math.ceil(filteredRegistrations.length / PAGE_SIZE))
  const currentPage = Math.min(pageIndex, pageCount - 1)
  const pageRows = filteredRegistrations.slice(
    currentPage * PAGE_SIZE,
    currentPage * PAGE_SIZE + PAGE_SIZE
  )

  const heroCount =
    stats.heroCount ??
    registrations.filter((registration) => registration.source === "hero").length
  const launchOfferCount =
    stats.launchOfferCount ??
    registrations.filter((registration) => registration.source === "launch-offer")
      .length
  const unknownSourceCount =
    stats.unknownSourceCount ??
    registrations.filter(
      (registration) =>
        registration.source !== "hero" && registration.source !== "launch-offer"
    ).length

  return (
    <>
      <PageIntro>
        <div>
          <p className="crumb">Tadara Admin &gt; Inscriptions</p>
          <h1>Inscriptions</h1>
          <p>Retrouvez ici toutes les personnes inscrites sur Tadara.</p>
        </div>
        <p className="quote">Une communauté qui grandit, un impact qui se renforce.</p>
      </PageIntro>
      {loadError ? <Message $error>{loadError}</Message> : null}
      <StatsGrid>
        <StatCard $up={stats.monthChangePercent >= 0}>
          <div className="label">Inscrits total</div>
          <div className="value">{stats.totalCount}</div>
          <div className="trend">
            {stats.monthChangePercent >= 0 ? "+" : ""}
            {stats.monthChangePercent || 0}% vs mois dernier
          </div>
        </StatCard>
        <StatCard $up={stats.todayChangePercent >= 0}>
          <div className="label">Aujourd'hui</div>
          <div className="value">{stats.todayCount}</div>
          <div className="trend">
            {stats.todayChangePercent >= 0 ? "+" : ""}
            {stats.todayChangePercent || 0}% vs hier
          </div>
        </StatCard>
        <StatCard $up={stats.weekChangePercent >= 0}>
          <div className="label">Cette semaine</div>
          <div className="value">{stats.thisWeekCount}</div>
          <div className="trend">
            {stats.weekChangePercent >= 0 ? "+" : ""}
            {stats.weekChangePercent || 0}% vs semaine dernière
          </div>
        </StatCard>
        <StatCard $up={stats.monthChangePercent >= 0}>
          <div className="label">Ce mois</div>
          <div className="value">{stats.thisMonthCount}</div>
          <div className="trend">
            {stats.monthChangePercent >= 0 ? "+" : ""}
            {stats.monthChangePercent || 0}% vs mois dernier
          </div>
        </StatCard>
      </StatsGrid>

      <Panel>
        <PanelHeader>
          <div>
            <h2>Évolution des inscriptions</h2>
            <p className="panel-sub">Nombre d'inscriptions sur les 30 derniers jours</p>
          </div>
        </PanelHeader>
        <LineChart days={stats.last30Days || []} />
      </Panel>

      <Panel>
        <PanelHeader>
          <div>
            <h2>Dernières inscriptions</h2>
            <p className="panel-sub">Liste des utilisateurs récemment inscrits sur Tadara.</p>
          </div>
          <Toolbar>
            <input
              type="search"
              placeholder="Rechercher un inscrit..."
              value={tableSearch}
              onChange={(event) => {
                setTableSearch(event.target.value)
                setPageIndex(0)
              }}
            />
            <select
              value={sourceFilter}
              onChange={(event) => {
                setSourceFilter(event.target.value)
                setPageIndex(0)
              }}
            >
              <option value="all">Toutes les sources</option>
              <option value="hero">hero</option>
              <option value="launch-offer">launch-offer</option>
            </select>
            <button type="button" className="ghost" onClick={onRefresh}>
              Actualiser
            </button>
            <button
              type="button"
              onClick={() =>
                downloadCsv(
                  "tadara-inscriptions.csv",
                  "email,source,date_inscription",
                  filteredRegistrations.map(
                    (registration) =>
                      `"${registration.email}","${registration.source || ""}",${registration.created_at}`
                  )
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
                <th>Source</th>
                <th>Date d'inscription</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {pageRows.length === 0 ? (
                <tr>
                  <td colSpan={6}>Aucune inscription pour cette recherche.</td>
                </tr>
              ) : (
                pageRows.map((registration, index) => {
                  const name = displayNameFromEmail(registration.email)
                  const rowNumber =
                    filteredRegistrations.length - (currentPage * PAGE_SIZE + index)
                  return (
                    <tr key={registration.id}>
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
                      <td>{registration.email}</td>
                      <td>
                        <SourceBadge $source={registration.source}>
                          {registration.source || "—"}
                        </SourceBadge>
                      </td>
                      <td>{formatParisDateTime(registration.created_at)}</td>
                      <td>
                        <Badge>Inscrit</Badge>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </TableWrap>
        <SourceCountBar>
          {sourceFilter === "all" ? (
            <>
              <span>
                <strong>{heroCount}</strong> inscrits via hero
              </span>
              <span>
                <strong>{launchOfferCount}</strong> inscrits via launch-offer
              </span>
              {unknownSourceCount > 0 ? (
                <span>
                  <strong>{unknownSourceCount}</strong> sans source
                </span>
              ) : null}
            </>
          ) : (
            <span>
              <strong>{filteredRegistrations.length}</strong> inscrit
              {filteredRegistrations.length > 1 ? "s" : ""} via {sourceFilter}
            </span>
          )}
        </SourceCountBar>
        <Pagination>
          <span>
            Affichage de {filteredRegistrations.length === 0 ? 0 : currentPage * PAGE_SIZE + 1} à{" "}
            {Math.min((currentPage + 1) * PAGE_SIZE, filteredRegistrations.length)} sur{" "}
            {filteredRegistrations.length} inscrits
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

export default InscriptionsPage
