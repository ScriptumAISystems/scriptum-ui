FROM python:3.11-slim

# Arbeitsverzeichnis
WORKDIR /app

# Abhängigkeiten
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Code kopieren
COPY backend/ .

# Port & Startbefehl
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
