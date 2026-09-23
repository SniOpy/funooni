import styled from "styled-components"

function AdminLayout({
  currentPage,
  searchQuery,
  onSearchChange,
  onLogout,
  children,
}) {
  return (
    <Shell>
      <Sidebar>
        <Brand>
          <img src="/images/hero/tadara.png" alt="Tadara" />
          <div>
            <strong>Tadara</strong>
            <span>Apprendre. Évoluer. Ensemble.</span>
          </div>
        </Brand>
        <Nav>
          <a
            href="/admin"
            className={currentPage === "inscriptions" ? "active" : ""}
          >
            Inscriptions
          </a>
          <a href="/admin/test" className={currentPage === "test" ? "active" : ""}>
            Test
          </a>
        </Nav>
        <SidebarFooter>
          <p>Tadara Admin</p>
          <span>Première version dédiée aux inscriptions.</span>
          <small>v1.0.0</small>
        </SidebarFooter>
      </Sidebar>
      <Main>
        <Topbar>
          <Search>
            <input
              type="search"
              placeholder="Rechercher un inscrit, un email, un nom..."
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </Search>
          <TopbarRight>
            <span className="admin-name">Admin Tadara</span>
            <button type="button" onClick={onLogout}>
              Déconnexion
            </button>
          </TopbarRight>
        </Topbar>
        {children}
      </Main>
    </Shell>
  )
}

const Shell = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
  background: #f4f7fb;
  color: #0f172a;
  font-family: Montserrat, Inter, Arial, sans-serif;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Sidebar = styled.aside`
  background: #10182b;
  color: white;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    padding: 16px;
  }
`

const Brand = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 36px;

  img {
    width: 42px;
    height: 42px;
    object-fit: contain;
    border-radius: 10px;
    background: white;
  }

  strong {
    display: block;
    font-size: 1.15rem;
  }

  span {
    display: block;
    font-size: 0.7rem;
    color: #94a3b8;
  }
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;

  a {
    color: #cbd5e1;
    text-decoration: none;
    padding: 12px 14px;
    border-radius: 12px;
    font-weight: 600;
  }

  a.active {
    background: #4f46e5;
    color: white;
  }
`

const SidebarFooter = styled.div`
  margin-top: auto;
  background: #1a243c;
  border-radius: 16px;
  padding: 16px;
  color: #cbd5e1;

  p {
    margin: 0 0 6px;
    color: white;
    font-weight: 700;
  }

  span,
  small {
    display: block;
    font-size: 0.75rem;
    line-height: 1.4;
  }

  small {
    margin-top: 10px;
    color: #64748b;
  }
`

const Main = styled.div`
  padding: 22px 28px 40px;
  min-width: 0;
`

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-bottom: 22px;
  flex-wrap: wrap;
`

const Search = styled.div`
  flex: 1;
  min-width: 240px;

  input {
    width: 100%;
    max-width: 520px;
    height: 44px;
    border: 1px solid #e2e8f0;
    border-radius: 999px;
    padding: 0 18px;
    background: white;
    font-family: inherit;
  }
`

const TopbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .admin-name {
    font-weight: 600;
    font-size: 0.9rem;
  }

  button {
    height: 40px;
    border: 1px solid #e2e8f0;
    background: white;
    border-radius: 999px;
    padding: 0 16px;
    cursor: pointer;
    font-family: inherit;
    font-weight: 600;
  }
`

export default AdminLayout
