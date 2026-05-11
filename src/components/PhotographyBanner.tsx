import type React from "react"
import { useState, useEffect } from "react"
import BannerStyles from "./banner/BannerStyles"
import BannerSections from "./banner/BannerSections"
import LeadModal from "./banner/LeadModal"

const SUBMIT_URL = "https://functions.poehali.dev/840999fb-b407-4a34-815e-64f160816bd7"

const PhotographyBanner: React.FC = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const texts = ["ФРАНШИЗУ.", "БИЗНЕС.", "БРЕНД."]

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100
    const currentFullText = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting, texts])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError("")
    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setSubmitted(true)
        setFormData({ name: "", phone: "", message: "" })
      } else {
        setError(data.error || "Ошибка отправки, попробуйте ещё раз")
      }
    } catch {
      setError("Ошибка сети, попробуйте ещё раз")
    } finally {
      setSubmitting(false)
    }
  }

  const openModal = () => { setModalOpen(true); setSubmitted(false); setError("") }
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <BannerStyles />
      <BannerSections currentText={currentText} onOpenModal={openModal} />
      {modalOpen && (
        <LeadModal
          onClose={closeModal}
          submitted={submitted}
          submitting={submitting}
          error={error}
          formData={formData}
          onFormChange={setFormData}
          onSubmit={handleSubmit}
        />
      )}
    </>
  )
}

export default PhotographyBanner
