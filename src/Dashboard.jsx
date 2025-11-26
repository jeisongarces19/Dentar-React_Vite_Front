import React from 'react'
import appointments from './data/appointments.json'
import stats from './data/stats.json'

const Dashboard = ({ role }) => {
  return (
    <div className="dashboard">
      <section className="welcome">
        <div className="welcome-avatar">
          <span>J</span>
        </div>
        <div>
          <h2>Bienvenido, Dr. Julio</h2>
          <p>Tu jornada en Doctor Oral comienza aquí</p>
          <p className="welcome-role">Rol actual: {role}</p>
        </div>
      </section>

      <section className="appointments">
        <h3>Citas del Día</h3>
        <div className="appointments-list">
          {appointments.map(a => (
            <div key={a.id} className="appointment-item">
              <div className="appointment-avatar">
                <span>{a.name[0]}</span>
              </div>
              <div className="appointment-info">
                <p className="appointment-name">{a.name}</p>
                <p className="appointment-treatment">{a.treatment}</p>
              </div>
              <div className="appointment-time">{a.time}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="indicators">
        <h3>Indicadores clave</h3>
        <div className="indicators-grid">
          <div className="indicator-card">
            <p className="indicator-title">Consultas Pendientes</p>
            <p className="indicator-value">{stats.pendingConsults}</p>
          </div>
          <div className="indicator-card">
            <p className="indicator-title">Consultas de la semana</p>
            <p className="indicator-value">{stats.weekConsults}</p>
          </div>
          <div className="indicator-card">
            <p className="indicator-title">Tratamientos completados</p>
            <p className="indicator-value">{stats.completedTreatments}</p>
          </div>
          <div className="indicator-card">
            <p className="indicator-title">Eficiencia del diagnóstico</p>
            <p className="indicator-value">{stats.diagnosisEfficiency}%</p>
          </div>
        </div>
        <button className="btn-primary">Sedes</button>
      </section>
    </div>
  )
}

export default Dashboard
