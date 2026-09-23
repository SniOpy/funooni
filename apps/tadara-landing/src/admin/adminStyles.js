import styled from "styled-components"

export const PageIntro = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 22px;
  flex-wrap: wrap;

  h1 {
    margin: 0;
    font-size: 2rem;
    letter-spacing: -0.03em;
  }

  p {
    margin: 6px 0 0;
    color: #64748b;
  }

  .crumb {
    margin: 0 0 8px;
    font-size: 0.8rem;
    color: #94a3b8;
  }

  .quote {
    max-width: 280px;
    font-style: italic;
    color: #64748b;
    font-size: 0.9rem;
  }
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 18px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const StatCard = styled.div`
  background: white;
  border-radius: 18px;
  padding: 18px 20px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);

  .label {
    color: #64748b;
    font-size: 0.85rem;
  }

  .value {
    margin: 8px 0 0;
    font-size: 2rem;
    font-weight: 800;
  }

  .trend {
    margin-top: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${(props) => (props.$up ? "#10B981" : "#94A3B8")};
  }
`

export const Panel = styled.section`
  background: white;
  border-radius: 20px;
  padding: 20px 22px;
  margin-bottom: 18px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);

  h2 {
    margin: 0;
    font-size: 1.05rem;
  }

  .panel-sub {
    margin: 4px 0 0;
    color: #64748b;
    font-size: 0.85rem;
  }
`

export const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

export const Toolbar = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  input,
  button {
    height: 40px;
    border-radius: 12px;
    font-family: inherit;
  }

  input {
    border: 1px solid #e2e8f0;
    padding: 0 12px;
    min-width: 200px;
  }

  button {
    border: 0;
    background: #4f46e5;
    color: white;
    padding: 0 14px;
    font-weight: 600;
    cursor: pointer;
  }

  button.ghost {
    background: white;
    color: #0f172a;
    border: 1px solid #e2e8f0;
  }
`

export const FormGrid = styled.form`
  display: grid;
  grid-template-columns: 1fr 180px 180px auto;
  gap: 10px;
  margin-bottom: 18px;

  textarea,
  input,
  button {
    font-family: inherit;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
  }

  textarea,
  input {
    padding: 10px 12px;
  }

  textarea {
    min-height: 44px;
    resize: vertical;
  }

  button {
    background: #4f46e5;
    color: white;
    border: 0;
    font-weight: 700;
    cursor: pointer;
    min-width: 120px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const TableWrap = styled.div`
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    text-align: left;
    padding: 14px 8px;
    border-bottom: 1px solid #eef2f7;
    font-size: 0.92rem;
  }

  th {
    color: #94a3b8;
    font-size: 0.72rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
`

export const Person = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: white;
    font-size: 0.7rem;
    font-weight: 700;
  }
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.78rem;
  font-weight: 700;
  background: #ecfdf5;
  color: #047857;
`

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  color: #64748b;
  font-size: 0.85rem;
  flex-wrap: wrap;

  button {
    width: 34px;
    height: 34px;
    border: 1px solid #e2e8f0;
    background: white;
    border-radius: 8px;
    cursor: pointer;
  }

  button.active {
    background: #4f46e5;
    color: white;
    border-color: #4f46e5;
  }
`

export const Message = styled.p`
  margin: 0 0 12px;
  color: ${(props) => (props.$error ? "#b91c1c" : "#047857")};
`
