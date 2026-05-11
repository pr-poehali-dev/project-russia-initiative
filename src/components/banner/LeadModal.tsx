import type React from "react"

interface LeadModalProps {
  onClose: () => void
  submitted: boolean
  submitting: boolean
  error: string
  formData: { name: string; phone: string; message: string }
  onFormChange: (data: { name: string; phone: string; message: string }) => void
  onSubmit: (e: React.FormEvent) => void
}

const LeadModal: React.FC<LeadModalProps> = ({
  onClose,
  submitted,
  submitting,
  error,
  formData,
  onFormChange,
  onSubmit,
}) => (
  <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
    <div className="modal-box">
      <button className="modal-close" onClick={onClose}>✕</button>
      {submitted ? (
        <div className="modal-success">
          <div className="modal-success-icon">🎉</div>
          <h3>Заявка принята!</h3>
          <p>Мы свяжемся с вами в течение 1 рабочего дня и расскажем, как упаковать ваш бизнес во франшизу.</p>
        </div>
      ) : (
        <>
          <h2 className="modal-title">Бесплатная консультация</h2>
          <p className="modal-subtitle">Оставьте контакты — мы перезвоним и ответим на все вопросы</p>
          <form onSubmit={onSubmit}>
            <div className="modal-field">
              <label>Ваше имя *</label>
              <input
                type="text"
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={e => onFormChange({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="modal-field">
              <label>Телефон *</label>
              <input
                type="tel"
                placeholder="+7 999 123-45-67"
                value={formData.phone}
                onChange={e => onFormChange({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="modal-field">
              <label>Расскажите о бизнесе</label>
              <textarea
                placeholder="Кратко опишите ваш бизнес и что хотите упаковать..."
                value={formData.message}
                onChange={e => onFormChange({ ...formData, message: e.target.value })}
              />
            </div>
            {error && <div className="modal-error">{error}</div>}
            <button type="submit" className="modal-submit" disabled={submitting}>
              {submitting ? "Отправляю..." : "Отправить заявку"}
            </button>
          </form>
        </>
      )}
    </div>
  </div>
)

export default LeadModal
