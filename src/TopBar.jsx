import React from 'react'

const TopBar = ({ activeMenu }) => {
  let title = 'INICIO'
  if (activeMenu === 'registrar') title = 'REGISTRAR PACIENTE'
  else if (activeMenu === 'agendar') title = 'AGENDAR CITA'
  else if (activeMenu && activeMenu !== 'inicio') title = activeMenu.toUpperCase()

  return (
    <header className="topbar">
      <h1>{title}</h1>
    </header>
  )
}

export default TopBar
