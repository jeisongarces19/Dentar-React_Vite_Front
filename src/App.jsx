import React, { useState } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import Dashboard from './Dashboard'
import RegisterPatient from './RegisterPatient'
import ScheduleAppointment from './ScheduleAppointment'

const App = () => {
  const [role, setRole] = useState('Administrador')
  const [activeMenu, setActiveMenu] = useState('inicio')
  const [patients, setPatients] = useState([])

  const handleSavePatient = (patient) => {
    const withId = { id: Date.now(), ...patient }
    setPatients(prev => [...prev, withId])
    console.log('Paciente guardado (JSON):', withId)
  }

  const renderContent = () => {
    if (activeMenu === 'inicio') {
      return <Dashboard role={role} />
    }
    if (activeMenu === 'registrar') {
      return (
        <RegisterPatient
          onSave={handleSavePatient}
          onCancel={() => setActiveMenu('inicio')}
        />
      )
    }
    if (activeMenu === 'agendar') {
      return <ScheduleAppointment />
    }
    return (
      <div className="content-placeholder">
        <h2>{activeMenu.toUpperCase()}</h2>
        <p>Contenido de {activeMenu} visible para el rol {role}.</p>
        <p>
          Aquí podrás más adelante conectar formularios, tablas o lo que
          necesites. Por ahora solo es una vista de ejemplo.
        </p>
        {activeMenu === 'historial' && patients.length > 0 && (
          <div className="patients-debug">
            <h3>Pacientes registrados (JSON en memoria)</h3>
            <pre>{JSON.stringify(patients, null, 2)}</pre>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="app-root">
      <Sidebar
        role={role}
        setRole={setRole}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <div className="main-area">
        <TopBar activeMenu={activeMenu} />
        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default App
