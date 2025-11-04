'use client'

import { useAuth } from "@/contexts/AuthProvider"
import styles from "./page.module.css"
import ProtectedRoute from "./ProtectedRoute"

export default function ProfilePage() {

  const { user } = useAuth()

  return (
    <ProtectedRoute>
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <div className={styles.header}>
          <div className={styles.headerPattern}></div>
          <div className={styles.profileImageWrapper}>
            <img src="/professional-profile.png" alt="Foto de perfil" className={styles.profileImage} />
            <div className={styles.statusBadge}></div>
          </div>
          <div className={styles.headerContent}>
            <h1 className={styles.name}>@{user.username}</h1>
            <p className={styles.bio}>
              Diseñadora UX/UI apasionada por crear experiencias digitales increíbles. Amante del café y los buenos
              diseños.
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <p className={styles.statNumber}>1,234</p>
              <p className={styles.statLabel}>Seguidores</p>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statNumber}>567</p>
              <p className={styles.statLabel}>Siguiendo</p>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statNumber}>89</p>
              <p className={styles.statLabel}>Publicaciones</p>
            </div>
          </div>

          <div className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📧</span>
              Información de Contacto
            </h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>✉️</div>
                <div className={styles.infoContent}>
                  <p className={styles.infoLabel}>Email</p>
                  <p className={styles.infoValue}>
                    <a href="mailto:maria.garcia@ejemplo.com" className={styles.infoLink}>
                      {user.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📱</div>
                <div className={styles.infoContent}>
                  <p className={styles.infoLabel}>Teléfono</p>
                  <p className={styles.infoValue}>+34 612 345 678</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📍</div>
                <div className={styles.infoContent}>
                  <p className={styles.infoLabel}>Ubicación</p>
                  <p className={styles.infoValue}>Barcelona, España</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>🌐</div>
                <div className={styles.infoContent}>
                  <p className={styles.infoLabel}>Sitio Web</p>
                  <p className={styles.infoValue}>
                    <a
                      href="https://mariagarcia.com"
                      className={styles.infoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      mariagarcia.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.actionButtons}>
            <button className={`${styles.button} ${styles.buttonPrimary}`}>
              <span>💬</span>
              Enviar Mensaje
            </button>
            <button className={`${styles.button} ${styles.buttonSecondary}`}>
              <span>➕</span>
              Seguir
            </button>
          </div>
        </div>
      </div>
    </div>
          
    </ProtectedRoute>
  )
}
