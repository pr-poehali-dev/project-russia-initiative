import type React from "react"

interface BannerSectionsProps {
  currentText: string
  onOpenModal: () => void
}

const BannerSections: React.FC<BannerSectionsProps> = ({ currentText, onOpenModal }) => (
  <div className="photography-banner">
    <main>
      <section className="info-section">
        <div className="left-part">
          <h1>
            <span className="d-flex">
              {["У", "П", "А", "К", "У", "Е", "М"].map((char, index) => (
                <span key={index} className="char tracking-tighter" style={{ animationDelay: `${index * 0.08}s` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
            <span className="text tracking-tighter">{currentText}</span>
          </h1>
          <p className="tracking-widest">
            Помогаем предпринимателям масштабировать бизнес через франшизу: упаковка, бизнес-процессы, товарные знаки и финансовые модели под ключ
          </p>
          <a onClick={onOpenModal} href="#" className="book-link" style={{cursor:"pointer"}}>
            <span className="linktext tracking-tighter text-3xl">Получить консультацию</span>
            <span className="arrow">
              <span></span>
            </span>
          </a>
        </div>
        <div className="right-part">
          <div className="particles-container">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  width: `${Math.random() * 8 + 4}px`,
                  height: `${Math.random() * 8 + 4}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 20 + 15}s`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
          <div className="bg-line">
            <img
              src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
              alt="Line"
              style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
            />
            <img
              src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
              alt="Line"
              style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
            />
          </div>
          <div className="bg-dash-circle">
            <img
              src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
              alt="dash-circle"
              style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
            />
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">франшиз упаковано<br/>под ключ</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10</div>
            <div className="stat-label">лет на рынке<br/>консалтинга</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">200+</div>
            <div className="stat-label">успешных<br/>клиентов</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">клиентов рекомендуют<br/>нас партнёрам</div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <div className="features-content">
            <h2>Наши <span className="highlight">услуги</span></h2>
          </div>
          <ul className="features-list">
            <li className="feature-item">
              <div className="feature-icon">01</div>
              <div className="feature-text">
                <h3>Упаковка во франшизу</h3>
                <p className="font-light tracking-wider">
                  Создаём полный франчайзинговый пакет: стандарты, регламенты, брендбук и руководство франчайзи
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">02</div>
              <div className="feature-text">
                <h3>Описание бизнес-процессов</h3>
                <p className="tracking-wider">
                  Систематизируем и регламентируем все процессы компании для масштабирования и управления
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">03</div>
              <div className="feature-text">
                <h3>Регистрация товарных знаков</h3>
                <p className="tracking-wider">
                  Защищаем ваш бренд: подготовка документов, сопровождение в Роспатенте, мониторинг
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">04</div>
              <div className="feature-text">
                <h3>Финансовые модели</h3>
                <p className="tracking-wider">
                  Разрабатываем детальные финмодели для инвесторов, банков и собственников бизнеса
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">Отзывы клиентов</h2>
          <div className="testimonials-marquee">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Упаковали нашу сеть кофеен во франшизу за 2 месяца. Уже продали 5 точек в первый год — результат превзошёл все ожидания."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">АС</div>
                <div className="author-info">
                  <h4>Алексей Смирнов</h4>
                  <p>Владелец сети кофеен</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Наконец-то систематизировали все процессы. Теперь бизнес работает без моего постоянного участия. Рекомендую!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">МК</div>
                <div className="author-info">
                  <h4>Мария Козлова</h4>
                  <p>Основатель салона красоты</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Помогли зарегистрировать товарный знак и защитить бренд. Теперь масштабируемся спокойно, никто не скопирует."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">ДВ</div>
                <div className="author-info">
                  <h4>Дмитрий Волков</h4>
                  <p>Предприниматель, ритейл</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Финансовая модель убедила инвестора вложить 15 млн в наш проект. Работа выполнена профессионально и в срок."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">ЕП</div>
                <div className="author-info">
                  <h4>Екатерина Петрова</h4>
                  <p>Со-основатель EdTech стартапа</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Упаковали нашу сеть кофеен во франшизу за 2 месяца. Уже продали 5 точек в первый год — результат превзошёл все ожидания."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">АС</div>
                <div className="author-info">
                  <h4>Алексей Смирнов</h4>
                  <p>Владелец сети кофеен</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Наконец-то систематизировали все процессы. Теперь бизнес работает без моего постоянного участия. Рекомендую!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">МК</div>
                <div className="author-info">
                  <h4>Мария Козлова</h4>
                  <p>Основатель стартапа</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Финансовая модель убедила инвестора вложить 15 млн в наш проект. Работа выполнена профессионально и в срок."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">ЕП</div>
                <div className="author-info">
                  <h4>Екатерина Петрова</h4>
                  <p>Со-основатель EdTech стартапа</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="cta">
        <div className="cta-container">
          <h2 className="cta-title text-center">Готовы масштабироваться?</h2>
          <p className="cta-subtitle">
            Присоединяйтесь к сотням предпринимателей, которые уже упаковали свой бизнес во франшизу и вышли на новый уровень. Первый шаг — бесплатная консультация.
          </p>
          <div className="cta-buttons">
            <button onClick={onOpenModal} className="cta-button" style={{border:"none",cursor:"pointer"}}>
              Получить консультацию
            </button>
            <a href="#" className="cta-button secondary">
              Посмотреть кейсы
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
)

export default BannerSections
