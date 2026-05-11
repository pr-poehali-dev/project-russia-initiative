CREATE TABLE t_p96385054_project_russia_initi.leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);