# SpuriousCotton

A counterfeit product detection platform designed to verify the authenticity of cotton products using QR-code-based tracking.

* **Manufacturers** register cotton batches (variety, quantity, manufacture/expiry dates) and generate unique product QR codes.
* **Consumers** scan QR codes to verify authenticity:
  * **Authentic**: Verified product scanned for the first time.
  * **Fraud / Duplicate**: Product code was previously scanned.
  * **Fake**: Unregistered product record.

---

## Running with Docker

### Prerequisites
* [Docker](https://docs.docker.com/get-docker/) & [Docker Compose](https://docs.docker.com/compose/)

### Start the Application
From the project root, run:

```bash
docker compose up --build
```

* **Frontend**: [http://localhost:3000](http://localhost:3000)
* **Backend API**: [http://localhost:8000](http://localhost:8000)

### Stop the Application
```bash
docker compose down
```

---

## Running Locally Without Docker

### Prerequisites
* **Python**: 3.9+
* **Node.js**: 16+ (or LTS)
* **Pipenv** or standard **pip**

---

### 1. Backend Setup (Django)

1. Open a terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   * **Using pip**:
     ```bash
     pip install -r requirements.txt
     ```
   * **Or using pipenv**:
     ```bash
     pipenv install
     pipenv shell
     ```

3. Run database migrations:
   ```bash
   python manage.py migrate
   ```

4. Start the Django development server:
   ```bash
   python manage.py runserver 0.0.0.0:8000
   ```
   Backend runs at [http://localhost:8000](http://localhost:8000).

---

### 2. Frontend Setup (React)

1. Open a separate terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: `--legacy-peer-deps` is required on modern npm versions to avoid peer dependency conflicts with React 17 / Material UI).*

3. Start the React development server:
   ```bash
   npm start
   ```
   Frontend runs at [http://localhost:3000](http://localhost:3000).
