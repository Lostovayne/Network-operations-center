<div align="center">

# 🚀 NOC App - Network Operations Center

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Clean_Architecture-00D9FF?style=for-the-badge&logo=architecture&logoColor=white" alt="Clean Architecture" />
  <img src="https://img.shields.io/badge/License-ISC-yellow?style=for-the-badge" alt="License" />
</p>

<p align="center">
  <strong>Sistema de monitoreo de red moderno y escalable</strong><br>
  Supervisa la disponibilidad de servicios web con verificaciones programadas,<br>
  implementando Clean Architecture con logging avanzado y persistencia inteligente.
</p>

<p align="center">
  <a href="#-características">Características</a> •
  <a href="#-instalación-rápida">Instalación</a> •
  <a href="#-api-interactiva">API</a> •
  <a href="#-arquitectura">Arquitectura</a> •
  <a href="#-ejemplos">Ejemplos</a>
</p>

</div>

---

## 📋 Navegación Rápida

<table>
<tr>
<td width="33%">

### 🎯 **Inicio Rápido**

- [🚀 Instalación](#-instalación-rápida)
- [⚙️ Configuración](#-configuración)
- [🎮 Uso Básico](#-uso-básico)

</td>
<td width="33%">

### 🏗️ **Arquitectura**

- [📐 Diseño](#-arquitectura-del-sistema)
- [🔧 Componentes](#-componentes-principales)
- [📊 Diagramas](#-diagramas-de-flujo)

</td>
<td width="33%">

### 🌐 **API & Testing**

- [🔗 Endpoints](#-api-interactiva)
- [🧪 Testing](#-testing-interactivo)
- [📈 Monitoreo](#-dashboard-y-métricas)

</td>
</tr>
</table>

## ✨ Características Principales

<div align="center">

```mermaid
mindmap
  root((NOC App))
    Monitoreo
      🔍 Verificaciones automáticas
      ⏱️ Intervalos configurables
      🎯 Múltiples servicios
      📊 Métricas en tiempo real
    Arquitectura
      🏗️ Clean Architecture
      🔧 Inyección de dependencias
      📦 Modular y escalable
      ⚡ TypeScript estricto
    Logging
      📝 Niveles de severidad
      💾 Persistencia inteligente
      🔍 Búsqueda avanzada
      📈 Análisis de tendencias
    Integración
      🌐 API REST moderna
      🐳 Docker ready
      🔄 CI/CD friendly
      📱 Dashboard web
```

</div>

<table>
<tr>
<td width="50%">

### 🎯 **Core Features**

| Característica               | Descripción                                           |
| ---------------------------- | ----------------------------------------------------- |
| 🔍 **Monitoreo Inteligente** | Verificaciones automáticas con detección de anomalías |
| 📊 **Logging Avanzado**      | Sistema de logs con niveles de severidad y rotación   |
| 🏗️ **Clean Architecture**    | Separación clara de responsabilidades y capas         |
| ⚡ **TypeScript Estricto**   | Desarrollo type-safe con las últimas características  |

</td>
<td width="50%">

### 🚀 **Advanced Features**

| Característica                  | Descripción                                  |
| ------------------------------- | -------------------------------------------- |
| 🔄 **Cron Jobs Flexibles**      | Programación avanzada de tareas de monitoreo |
| 💾 **Persistencia Inteligente** | Almacenamiento optimizado por severidad      |
| 🔧 **DI Container**             | Inyección de dependencias implementada       |
| 📈 **Escalabilidad**            | Diseño modular para crecimiento horizontal   |

</td>
</tr>
</table>

## �️ AArquitectura del Sistema

<div align="center">

### 🎯 **Clean Architecture Overview**

```mermaid
graph TB
    subgraph "🎨 Presentation Layer"
        A["🖥️ Server<br/><small>Express/Fastify</small>"]
        B["⏰ CronService<br/><small>Scheduled Tasks</small>"]
        C["🌐 API Routes<br/><small>REST Endpoints</small>"]
    end

    subgraph "💼 Application Layer"
        D["🔍 CheckServiceUC<br/><small>Business Logic</small>"]
        E["📊 LogAnalyticsUC<br/><small>Log Processing</small>"]
    end

    subgraph "🎯 Domain Layer"
        F["📝 LogEntity<br/><small>Core Model</small>"]
        G["📋 LogRepository<br/><small>Abstract Interface</small>"]
        H["💾 LogDatasource<br/><small>Data Contract</small>"]
        I["🏷️ LogSeverityLevel<br/><small>Enum Values</small>"]
    end

    subgraph "🔧 Infrastructure Layer"
        J["💿 FileSystemDS<br/><small>File Operations</small>"]
        K["🗄️ DatabaseDS<br/><small>DB Operations</small>"]
        L["📤 NotificationDS<br/><small>Alerts</small>"]
    end

    A --> D
    B --> D
    C --> D
    D --> F
    D --> G
    G --> H
    J --> H
    K --> H
    L --> H
    F --> I

    classDef presentation fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    classDef application fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    classDef domain fill:#e8f5e8,stroke:#1b5e20,stroke-width:2px
    classDef infrastructure fill:#fff3e0,stroke:#e65100,stroke-width:2px

    class A,B,C presentation
    class D,E application
    class F,G,H,I domain
    class J,K,L infrastructure
```

</div>

### 🔄 **Flujo de Datos**

```mermaid
sequenceDiagram
    participant 🌐 API
    participant ⏰ Cron
    participant 🔍 UseCase
    participant 📝 Entity
    participant 💾 Repository
    participant 🗄️ DataSource

    🌐 API->>🔍 UseCase: Iniciar verificación
    ⏰ Cron->>🔍 UseCase: Trigger automático
    🔍 UseCase->>📝 Entity: Crear log
    📝 Entity->>💾 Repository: Guardar log
    💾 Repository->>🗄️ DataSource: Persistir datos
    🗄️ DataSource-->>💾 Repository: Confirmación
    💾 Repository-->>🔍 UseCase: Resultado
    🔍 UseCase-->>🌐 API: Respuesta
```

## 📁 Estructura del Proyecto

<div align="center">

```mermaid
graph TD
    subgraph "📂 src/"
        subgraph "🎯 domain/"
            A["📝 entities/<br/>log.entity.ts"]
            B["📋 repository/<br/>log.repository.ts"]
            C["💾 datasources/<br/>log.datasource.ts"]
            D["🔍 use-cases/<br/>checks/"]
        end

        subgraph "🔧 infrastructure/"
            E["💿 datasources/<br/>file-system.datasource.ts"]
            F["🗄️ repository/<br/>log.repository.impl.ts"]
        end

        subgraph "🎨 presentation/"
            G["⏰ cron/<br/>cron-service.ts"]
            H["🖥️ server.ts"]
        end

        subgraph "⚙️ config/"
            I["🔧 env.config.ts"]
            J["📊 logger.config.ts"]
        end
    end

    A --> B
    B --> C
    C --> E
    E --> F
    F --> B
    D --> A
    G --> D
    H --> G
    I --> H
    J --> H

    classDef domain fill:#e8f5e8,stroke:#1b5e20,stroke-width:2px
    classDef infrastructure fill:#fff3e0,stroke:#e65100,stroke-width:2px
    classDef presentation fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    classDef config fill:#f3e5f5,stroke:#4a148c,stroke-width:2px

    class A,B,C,D domain
    class E,F infrastructure
    class G,H presentation
    class I,J config
```

</div>

### 🗂️ **Organización por Capas**

<table>
<tr>
<td width="25%">

#### 🎯 **Domain**

```
entities/
├── log.entity.ts
├── service.entity.ts
└── check.entity.ts

repository/
├── log.repository.ts
└── service.repository.ts

use-cases/
├── checks/
└── analytics/
```

</td>
<td width="25%">

#### 🔧 **Infrastructure**

```
datasources/
├── file-system.datasource.ts
├── database.datasource.ts
└── notification.datasource.ts

repository/
├── log.repository.impl.ts
└── service.repository.impl.ts
```

</td>
<td width="25%">

#### 🎨 **Presentation**

```
routes/
├── health.routes.ts
├── logs.routes.ts
└── services.routes.ts

cron/
└── cron-service.ts

middleware/
├── auth.middleware.ts
└── error.middleware.ts
```

</td>
<td width="25%">

#### ⚙️ **Config**

```
config/
├── env.config.ts
├── database.config.ts
└── logger.config.ts

shared/
├── types.ts
├── constants.ts
└── utils.ts
```

</td>
</tr>
</table>

## 🚀 Instalación Rápida

<div align="center">

### 📋 **Prerrequisitos**

<table>
<tr>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" /><br>
<strong>v18+</strong>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm" /><br>
<strong>v8+</strong>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /><br>
<strong>v5.9+</strong>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" /><br>
<strong>Opcional</strong>
</td>
</tr>
</table>

</div>

### ⚡ **Instalación en 3 Pasos**

<table>
<tr>
<td width="33%">

#### 1️⃣ **Clonar & Navegar**

```bash
git clone https://github.com/tu-usuario/noc-app.git
cd noc-app
```

</td>
<td width="33%">

#### 2️⃣ **Instalar Dependencias**

```bash
npm install
# o usando yarn
yarn install
```

</td>
<td width="33%">

#### 3️⃣ **Ejecutar**

```bash
# Desarrollo
npm run dev

# Producción
npm run build && npm start
```

</td>
</tr>
</table>

### 🐳 **Instalación con Docker**

```bash
# Opción 1: Docker Compose (Recomendado)
docker-compose up -d

# Opción 2: Docker manual
docker build -t noc-app .
docker run -p 3000:3000 -v ./logs:/app/logs noc-app
```

### 📦 **Scripts Disponibles**

| Comando         | Descripción                    | Uso              |
| --------------- | ------------------------------ | ---------------- |
| `npm run dev`   | 🔥 Desarrollo con hot-reload   | Desarrollo local |
| `npm run build` | 🏗️ Construir para producción   | Deploy           |
| `npm start`     | 🚀 Ejecutar versión construida | Producción       |
| `npm test`      | 🧪 Ejecutar pruebas            | Testing          |
| `npm run lint`  | 🔍 Verificar código            | Code quality     |

## ⚙️ Configuración

### 🔧 **Variables de Entorno**

<div align="center">

```mermaid
graph LR
    subgraph "📁 .env"
        A[🖥️ Server Config]
        B[⏰ Monitoring Config]
        C[📝 Logging Config]
        D[🗄️ Database Config]
    end

    A --> E[PORT=3000<br/>NODE_ENV=development]
    B --> F[CHECK_INTERVAL=*/5 * * * * *<br/>DEFAULT_URL=https://google.com]
    C --> G[LOG_LEVEL=info<br/>LOG_FILE_PATH=./logs]
    D --> H[DB_HOST=localhost<br/>DB_PORT=5432]

    classDef config fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    class A,B,C,D,E,F,G,H config
```

</div>

<table>
<tr>
<td width="50%">

#### 🖥️ **Configuración del Servidor**

```env
# Server Settings
PORT=3000
NODE_ENV=development
HOST=0.0.0.0

# Security
JWT_SECRET=your-super-secret-key
API_KEY=your-api-key
CORS_ORIGIN=http://localhost:3000
```

</td>
<td width="50%">

#### ⏰ **Configuración de Monitoreo**

```env
# Monitoring Settings
CHECK_INTERVAL=*/5 * * * * *
DEFAULT_URL=https://www.google.com
TIMEOUT_MS=5000
MAX_RETRIES=3

# Notifications
SLACK_WEBHOOK_URL=https://hooks.slack.com/...
EMAIL_SMTP_HOST=smtp.gmail.com
```

</td>
</tr>
<tr>
<td width="50%">

#### 📝 **Configuración de Logs**

```env
# Logging Settings
LOG_LEVEL=info
LOG_FILE_PATH=./logs
LOG_ALL_FILE=logs-all.log
LOG_MEDIUM_FILE=logs-medium.log
LOG_HIGH_FILE=logs-high.log
LOG_MAX_SIZE=10MB
LOG_MAX_FILES=5
```

</td>
<td width="50%">

#### 🗄️ **Base de Datos**

```env
# Database Settings
DB_HOST=localhost
DB_PORT=5432
DB_NAME=noc_db
DB_USER=noc_user
DB_PASSWORD=noc_password
DB_SSL=false
DB_POOL_SIZE=10
```

</td>
</tr>
</table>

### 📋 **Configuración TypeScript**

<div align="center">

| Característica | Configuración                    | Beneficio                             |
| -------------- | -------------------------------- | ------------------------------------- |
| 🎯 **Target**  | `esnext`                         | Últimas características de JavaScript |
| 📦 **Module**  | `esnext`                         | Módulos ES modernos                   |
| 🔒 **Strict**  | `true`                           | Verificación estricta de tipos        |
| 📁 **BaseUrl** | `./src`                          | Imports absolutos desde src           |
| 🛣️ **Paths**   | `@domain/*`, `@infrastructure/*` | Aliases para imports limpios          |

</div>

## � UUso Básico

### ⚡ **Inicio Rápido**

<div align="center">

```mermaid
graph LR
    A[📦 npm install] --> B[⚙️ Configurar .env]
    B --> C[🚀 npm run dev]
    C --> D[🌐 http://localhost:3000]

    classDef step fill:#e8f5e8,stroke:#1b5e20,stroke-width:2px
    class A,B,C,D step
```

</div>

<table>
<tr>
<td width="50%">

#### 🔥 **Desarrollo**

```typescript
import { Server } from "@presentation/server";

// Iniciar servidor con hot-reload
Server.start();
console.log("🚀 NOC App running on port 3000");
```

</td>
<td width="50%">

#### 🏭 **Producción**

```typescript
import { Server } from "@presentation/server";
import { Logger } from "@shared/logger";

// Iniciar con configuración de producción
const server = new Server({
  port: process.env.PORT || 3000,
  env: "production",
});

server.start();
Logger.info("🚀 NOC App started in production mode");
```

</td>
</tr>
</table>

### 🔧 **Configuración Avanzada**

```typescript
import { CheckServiceUC } from "@domain/use-cases/checks/check-service";
import { CronService } from "@presentation/cron/cron-service";
import { DIContainer } from "@shared/di-container";

// Configurar contenedor de dependencias
const container = new DIContainer();
container.register("logRepository", LogRepository);
container.register("checkService", CheckServiceUC);

// Obtener servicio configurado
const checkService = container.get<CheckServiceUC>("checkService");

// Programar monitoreo inteligente
const monitoringJobs = [
  { url: "https://api.critical.com", interval: "*/10 * * * * *" },
  { url: "https://api.normal.com", interval: "*/60 * * * * *" },
];

monitoringJobs.forEach((job) => {
  CronService.createJob(job.interval, () => checkService.execute(job.url));
});
```

## 📊 Sistema de Logging Avanzado

<div align="center">

### 🎯 **Arquitectura de Logging**

```mermaid
graph TD
    subgraph "📝 Log Generation"
        A[🔍 Service Check] --> B[📊 Log Entity]
        C[⏰ Cron Job] --> B
        D[🌐 API Request] --> B
    end

    subgraph "🏷️ Severity Classification"
        B --> E{📋 Severity Level}
        E -->|🟢 LOW| F[ℹ️ Info Logs<br/>Service OK, Normal ops]
        E -->|🟡 MEDIUM| G[⚠️ Warning Logs<br/>High latency, Timeouts]
        E -->|🔴 HIGH| H[🚨 Critical Logs<br/>Service down, Errors]
    end

    subgraph "💾 File Distribution"
        F --> I[📄 logs-all.log]
        G --> I
        G --> J[📄 logs-medium.log]
        H --> I
        H --> J
        H --> K[📄 logs-high.log]
    end

    subgraph "🔍 Log Processing"
        I --> L[📈 Analytics]
        J --> M[📊 Monitoring]
        K --> N[🚨 Alerts]
    end

    classDef low fill:#e8f5e8,stroke:#4caf50,stroke-width:2px
    classDef medium fill:#fff3e0,stroke:#ff9800,stroke-width:2px
    classDef high fill:#ffebee,stroke:#f44336,stroke-width:2px
    classDef process fill:#e3f2fd,stroke:#2196f3,stroke-width:2px

    class F,I low
    class G,J medium
    class H,K high
    class A,B,C,D,L,M,N process
```

</div>

### 🏷️ **Niveles de Severidad Detallados**

<table>
<tr>
<td width="33%">

#### 🟢 **LOW - Información**

- ✅ Servicios funcionando correctamente
- 📊 Métricas normales de rendimiento
- 🔄 Operaciones rutinarias completadas
- 📈 Estadísticas de uso

**Destino:** `logs-all.log`

</td>
<td width="33%">

#### 🟡 **MEDIUM - Advertencias**

- ⚠️ Latencia alta detectada
- ⏱️ Timeouts ocasionales
- 🔄 Reintentos automáticos
- 📉 Degradación de rendimiento

**Destino:** `logs-all.log` + `logs-medium.log`

</td>
<td width="33%">

#### 🔴 **HIGH - Crítico**

- 🚨 Servicios completamente caídos
- ❌ Errores de conexión
- 💥 Fallos críticos del sistema
- 🔥 Alertas de emergencia

**Destino:** `logs-all.log` + `logs-medium.log` + `logs-high.log`

</td>
</tr>
</table>

### 📋 **Estructura de Log Mejorada**

```typescript
interface LogEntity {
  id: string; // UUID único
  level: LogSeverityLevel; // Nivel de severidad
  message: string; // Mensaje descriptivo
  createdAt: Date; // Timestamp ISO
  metadata: {
    // Información adicional
    service?: string; // URL del servicio
    responseTime?: number; // Tiempo de respuesta en ms
    statusCode?: number; // Código HTTP
    error?: string; // Detalles del error
    userAgent?: string; // Cliente que generó el log
    ip?: string; // IP de origen
    correlationId?: string; // ID para rastreo
  };
  tags: string[]; // Etiquetas para categorización
}
```

### 🔍 **Ejemplo de Logs por Severidad**

<table>
<tr>
<td width="33%">

#### 🟢 **Log LOW**

```json
{
  "id": "log_abc123",
  "level": "low",
  "message": "✅ Service check successful",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "metadata": {
    "service": "https://api.example.com",
    "responseTime": 245,
    "statusCode": 200
  },
  "tags": ["health-check", "api"]
}
```

</td>
<td width="33%">

#### 🟡 **Log MEDIUM**

```json
{
  "id": "log_def456",
  "level": "medium",
  "message": "⚠️ High response time detected",
  "createdAt": "2024-01-15T10:31:00.000Z",
  "metadata": {
    "service": "https://slow-api.com",
    "responseTime": 3500,
    "statusCode": 200,
    "threshold": 2000
  },
  "tags": ["performance", "warning"]
}
```

</td>
<td width="33%">

#### 🔴 **Log HIGH**

```json
{
  "id": "log_ghi789",
  "level": "high",
  "message": "🚨 Service completely down",
  "createdAt": "2024-01-15T10:32:00.000Z",
  "metadata": {
    "service": "https://down-service.com",
    "error": "ECONNREFUSED",
    "retryCount": 3,
    "lastSuccessful": "2024-01-15T09:45:00.000Z"
  },
  "tags": ["critical", "outage", "alert"]
}
```

</td>
</tr>
</table>

### 🛠️ **API de Logging**

```typescript
// 📝 Crear logs programáticamente
const logger = new LogService();

// Log básico
await logger.info("Service check completed", {
  service: "https://api.example.com",
  responseTime: 150,
});

// Log con metadata completa
await logger.warning("High latency detected", {
  service: "https://slow-api.com",
  responseTime: 3200,
  threshold: 2000,
  tags: ["performance", "sla-breach"],
});

// Log crítico con correlación
await logger.critical("Service outage detected", {
  service: "https://critical-api.com",
  error: "Connection timeout",
  correlationId: "incident-2024-001",
  tags: ["outage", "p1-incident"],
});

// 🔍 Búsqueda avanzada
const logs = await logger.search({
  level: ["medium", "high"],
  dateRange: {
    start: "2024-01-15T00:00:00Z",
    end: "2024-01-15T23:59:59Z",
  },
  tags: ["performance"],
  service: "https://api.example.com",
});

// 📊 Estadísticas
const stats = await logger.getStats({
  groupBy: "level",
  timeframe: "24h",
});
```

## 🌐 API Interactiva

<div align="center">

### 🎯 **Endpoints Overview**

```mermaid
graph TD
    subgraph "🔍 Monitoring API"
        A[POST /api/v1/checks<br/>📝 Crear monitoreo]
        B[GET /api/v1/checks<br/>📋 Listar monitoreos]
        C[DELETE /api/v1/checks/:id<br/>🗑️ Eliminar monitoreo]
    end

    subgraph "📊 Logs API"
        D[GET /api/v1/logs<br/>📜 Obtener logs]
        E[GET /api/v1/logs/stats<br/>📈 Estadísticas]
        F[POST /api/v1/logs/search<br/>🔍 Búsqueda avanzada]
    end

    subgraph "⚡ Status API"
        G[GET /api/v1/status<br/>🏥 Estado general]
        H[GET /api/v1/health<br/>💚 Health check]
        I[GET /api/v1/metrics<br/>📊 Métricas]
    end

    classDef monitoring fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    classDef logs fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    classDef status fill:#e8f5e8,stroke:#388e3c,stroke-width:2px

    class A,B,C monitoring
    class D,E,F logs
    class G,H,I status
```

</div>

## 🧪 Testing Interactivo

### 🚀 **Prueba Rápida con cURL**

<table>
<tr>
<td width="50%">

#### 📝 **Crear Monitoreo**

```bash
curl -X POST http://localhost:3000/api/v1/checks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "url": "https://jsonplaceholder.typicode.com/posts/1",
    "name": "JSONPlaceholder API",
    "interval": "*/30 * * * * *",
    "timeout": 5000,
    "expectedStatus": 200
  }'
```

**✅ Respuesta Exitosa:**

```json
{
  "success": true,
  "data": {
    "id": "check_abc123",
    "url": "https://jsonplaceholder.typicode.com/posts/1",
    "name": "JSONPlaceholder API",
    "status": "active",
    "nextCheck": "2024-01-15T10:30:30.000Z"
  },
  "message": "✅ Monitoreo creado exitosamente"
}
```

</td>
<td width="50%">

#### 📊 **Obtener Logs**

```bash
curl -X GET "http://localhost:3000/api/v1/logs?level=high&limit=10&page=1" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Accept: application/json"
```

**📋 Respuesta:**

```json
{
  "success": true,
  "data": {
    "logs": [
      {
        "id": "log_xyz789",
        "level": "high",
        "message": "🚨 Service down: https://example.com",
        "createdAt": "2024-01-15T10:25:00.000Z",
        "metadata": {
          "responseTime": null,
          "statusCode": null,
          "error": "ECONNREFUSED"
        }
      }
    ],
    "pagination": {
      "total": 25,
      "page": 1,
      "limit": 10,
      "pages": 3
    }
  }
}
```

</td>
</tr>
</table>

### 🌐 **Testing con Postman/Insomnia**

<details>
<summary>📦 <strong>Colección Postman (Click para expandir)</strong></summary>

```json
{
  "info": {
    "name": "NOC App API",
    "description": "Colección completa para testing de NOC App",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Health Check",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{baseUrl}}/api/v1/health",
          "host": ["{{baseUrl}}"],
          "path": ["api", "v1", "health"]
        }
      }
    },
    {
      "name": "Create Monitor",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"url\": \"https://httpbin.org/status/200\",\n  \"name\": \"HTTPBin Test\",\n  \"interval\": \"*/15 * * * * *\"\n}"
        },
        "url": {
          "raw": "{{baseUrl}}/api/v1/checks",
          "host": ["{{baseUrl}}"],
          "path": ["api", "v1", "checks"]
        }
      }
    }
  ],
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:3000"
    }
  ]
}
```

</details>

### 🔥 **Testing en Tiempo Real**

#### 🎮 **Playground Interactivo**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>NOC App API Playground</title>
    <style>
      body {
        font-family: "Monaco", monospace;
        background: #1e1e1e;
        color: #d4d4d4;
      }
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }
      .endpoint {
        background: #2d2d30;
        padding: 20px;
        margin: 10px 0;
        border-radius: 8px;
      }
      .method {
        padding: 4px 8px;
        border-radius: 4px;
        font-weight: bold;
      }
      .get {
        background: #61affe;
        color: white;
      }
      .post {
        background: #49cc90;
        color: white;
      }
      .delete {
        background: #f93e3e;
        color: white;
      }
      button {
        background: #007acc;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
      }
      button:hover {
        background: #005a9e;
      }
      pre {
        background: #1e1e1e;
        padding: 15px;
        border-radius: 4px;
        overflow-x: auto;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>🚀 NOC App API Playground</h1>

      <div class="endpoint">
        <h3><span class="method get">GET</span> /api/v1/health</h3>
        <button onclick="testHealth()">🧪 Test Health Check</button>
        <pre id="health-result">Click para probar...</pre>
      </div>

      <div class="endpoint">
        <h3><span class="method post">POST</span> /api/v1/checks</h3>
        <button onclick="createMonitor()">📝 Create Monitor</button>
        <pre id="monitor-result">Click para probar...</pre>
      </div>

      <div class="endpoint">
        <h3><span class="method get">GET</span> /api/v1/logs</h3>
        <button onclick="getLogs()">📊 Get Logs</button>
        <pre id="logs-result">Click para probar...</pre>
      </div>
    </div>

    <script>
      const baseUrl = "http://localhost:3000";

      async function testHealth() {
        try {
          const response = await fetch(`${baseUrl}/api/v1/health`);
          const data = await response.json();
          document.getElementById("health-result").textContent = JSON.stringify(data, null, 2);
        } catch (error) {
          document.getElementById("health-result").textContent = `Error: ${error.message}`;
        }
      }

      async function createMonitor() {
        try {
          const response = await fetch(`${baseUrl}/api/v1/checks`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              url: "https://httpbin.org/status/200",
              name: "HTTPBin Test",
              interval: "*/30 * * * * *",
            }),
          });
          const data = await response.json();
          document.getElementById("monitor-result").textContent = JSON.stringify(data, null, 2);
        } catch (error) {
          document.getElementById("monitor-result").textContent = `Error: ${error.message}`;
        }
      }

      async function getLogs() {
        try {
          const response = await fetch(`${baseUrl}/api/v1/logs?limit=5`);
          const data = await response.json();
          document.getElementById("logs-result").textContent = JSON.stringify(data, null, 2);
        } catch (error) {
          document.getElementById("logs-result").textContent = `Error: ${error.message}`;
        }
      }
    </script>
  </body>
</html>
```

### 📱 **Testing con HTTPie**

```bash
# 🏥 Health Check
http GET localhost:3000/api/v1/health

# 📝 Crear monitoreo con HTTPie
http POST localhost:3000/api/v1/checks \
  url="https://httpbin.org/delay/2" \
  name="HTTPBin Delay Test" \
  interval="*/45 * * * * *" \
  timeout:=3000

# 📊 Obtener logs con filtros
http GET localhost:3000/api/v1/logs \
  level==high \
  limit==20 \
  startDate=="2024-01-15T00:00:00Z"

# 🔍 Búsqueda avanzada de logs
http POST localhost:3000/api/v1/logs/search \
  query="error OR timeout" \
  level="high" \
  dateRange:='{"start": "2024-01-15", "end": "2024-01-16"}'
```

## 📈 Dashboard y Métricas

<div align="center">

### 🎯 **Dashboard Overview**

```mermaid
graph TB
    subgraph "📊 Real-time Dashboard"
        A[🏥 System Health<br/>CPU, Memory, Disk]
        B[🌐 Service Status<br/>Up/Down, Response Times]
        C[📈 Performance Metrics<br/>Throughput, Latency]
        D[🚨 Alert Center<br/>Active Incidents]
    end

    subgraph "📋 Monitoring Panels"
        E[📊 Service Uptime<br/>99.9% SLA tracking]
        F[⚡ Response Time Trends<br/>P50, P95, P99]
        G[🔥 Error Rate Analysis<br/>4xx, 5xx errors]
        H[📅 Historical Data<br/>30-day trends]
    end

    subgraph "🔔 Alerting System"
        I[📧 Email Notifications]
        J[💬 Slack Integration]
        K[📱 SMS Alerts]
        L[🔗 Webhook Callbacks]
    end

    A --> E
    B --> F
    C --> G
    D --> H
    E --> I
    F --> J
    G --> K
    H --> L

    classDef dashboard fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    classDef monitoring fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    classDef alerting fill:#e8f5e8,stroke:#388e3c,stroke-width:2px

    class A,B,C,D dashboard
    class E,F,G,H monitoring
    class I,J,K,L alerting
```

</div>

### 📊 **Métricas Clave**

<table>
<tr>
<td width="25%">

#### 🏥 **System Health**

- 💾 **Memory Usage**: 45% / 8GB
- 🖥️ **CPU Usage**: 12% avg
- 💿 **Disk Space**: 2.1GB / 50GB
- 🌐 **Network I/O**: 1.2MB/s

</td>
<td width="25%">

#### ⚡ **Performance**

- 📊 **Avg Response**: 245ms
- 🎯 **Success Rate**: 99.7%
- 🔄 **Requests/min**: 1,247
- ⏱️ **Uptime**: 99.95%

</td>
<td width="25%">

#### 🚨 **Alerts**

- 🔴 **Critical**: 0 active
- 🟡 **Warning**: 2 active
- 📈 **Trends**: ↗️ Improving
- 🕐 **Last Alert**: 2h ago

</td>
<td width="25%">

#### 📈 **Trends**

- 📊 **Daily Checks**: 28,456
- 🎯 **Success Trend**: +0.2%
- ⚡ **Perf Trend**: -15ms
- 🔄 **Error Rate**: 0.3%

</td>
</tr>
</table>

### 🎮 **Dashboard Interactivo**

```html
<!-- Embed this in your web dashboard -->
<div class="noc-dashboard">
  <div class="metrics-grid">
    <div class="metric-card uptime">
      <h3>🏥 System Uptime</h3>
      <div class="metric-value">99.95%</div>
      <div class="metric-trend">↗️ +0.05%</div>
    </div>

    <div class="metric-card response-time">
      <h3>⚡ Avg Response Time</h3>
      <div class="metric-value">245ms</div>
      <div class="metric-trend">↘️ -15ms</div>
    </div>

    <div class="metric-card active-services">
      <h3>🌐 Active Services</h3>
      <div class="metric-value">12/12</div>
      <div class="metric-trend">✅ All Up</div>
    </div>

    <div class="metric-card alerts">
      <h3>🚨 Active Alerts</h3>
      <div class="metric-value">2</div>
      <div class="metric-trend">🟡 Warning</div>
    </div>
  </div>

  <div class="charts-section">
    <canvas id="responseTimeChart"></canvas>
    <canvas id="uptimeChart"></canvas>
  </div>
</div>

<style>
  .noc-dashboard {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
    border-radius: 12px;
    color: white;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }

  .metric-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .metric-value {
    font-size: 2.5em;
    font-weight: bold;
    margin: 10px 0;
  }

  .metric-trend {
    font-size: 0.9em;
    opacity: 0.8;
  }
</style>
```

## 🗄️ Base de Datos Moderna

<div align="center">

### 🏗️ **Esquema de Base de Datos**

```mermaid
erDiagram
    SERVICES {
        uuid id PK
        string url UK
        string name
        boolean active
        string cron_pattern
        integer timeout_ms
        json headers
        timestamp created_at
        timestamp updated_at
    }

    CHECKS {
        uuid id PK
        uuid service_id FK
        boolean success
        integer response_time_ms
        integer status_code
        text error_message
        json response_headers
        timestamp checked_at
        string correlation_id
    }

    LOGS {
        uuid id PK
        string level
        text message
        json metadata
        string[] tags
        uuid service_id FK
        uuid check_id FK
        timestamp created_at
        string correlation_id
    }

    ALERTS {
        uuid id PK
        uuid service_id FK
        string type
        string severity
        text message
        boolean resolved
        timestamp created_at
        timestamp resolved_at
        json metadata
    }

    METRICS {
        uuid id PK
        uuid service_id FK
        string metric_name
        float value
        json labels
        timestamp recorded_at
    }

    SERVICES ||--o{ CHECKS : monitors
    SERVICES ||--o{ LOGS : generates
    SERVICES ||--o{ ALERTS : triggers
    SERVICES ||--o{ METRICS : produces
    CHECKS ||--o{ LOGS : creates
    CHECKS ||--o{ ALERTS : may_trigger
```

</div>

### 🚀 **Configuración con Prisma**

```typescript
// schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Service {
  id          String   @id @default(cuid())
  url         String   @unique
  name        String?
  active      Boolean  @default(true)
  cronPattern String   @default("*/5 * * * * *") @map("cron_pattern")
  timeoutMs   Int      @default(5000) @map("timeout_ms")
  headers     Json?
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  checks  Check[]
  logs    Log[]
  alerts  Alert[]
  metrics Metric[]

  @@map("services")
}

model Check {
  id              String    @id @default(cuid())
  serviceId       String    @map("service_id")
  success         Boolean
  responseTimeMs  Int?      @map("response_time_ms")
  statusCode      Int?      @map("status_code")
  errorMessage    String?   @map("error_message")
  responseHeaders Json?     @map("response_headers")
  checkedAt       DateTime  @default(now()) @map("checked_at")
  correlationId   String?   @map("correlation_id")

  service Service @relation(fields: [serviceId], references: [id])
  logs    Log[]

  @@map("checks")
}

model Log {
  id            String   @id @default(cuid())
  level         String
  message       String
  metadata      Json?
  tags          String[]
  serviceId     String?  @map("service_id")
  checkId       String?  @map("check_id")
  createdAt     DateTime @default(now()) @map("created_at")
  correlationId String?  @map("correlation_id")

  service Service? @relation(fields: [serviceId], references: [id])
  check   Check?   @relation(fields: [checkId], references: [id])

  @@map("logs")
}
```

## 🐳 Containerización Moderna

<div align="center">

### 🏗️ **Arquitectura de Contenedores**

```mermaid
graph TB
    subgraph "🌐 Load Balancer"
        A[nginx:alpine<br/>Reverse Proxy]
    end

    subgraph "🚀 Application Tier"
        B[noc-app:latest<br/>Node.js App]
        C[noc-app:latest<br/>Replica 2]
        D[noc-app:latest<br/>Replica 3]
    end

    subgraph "💾 Data Tier"
        E[postgres:15-alpine<br/>Primary DB]
        F[redis:7-alpine<br/>Cache & Sessions]
        G[prometheus:latest<br/>Metrics]
    end

    subgraph "📊 Monitoring"
        H[grafana:latest<br/>Dashboards]
        I[alertmanager:latest<br/>Alerts]
    end

    A --> B
    A --> C
    A --> D
    B --> E
    B --> F
    C --> E
    C --> F
    D --> E
    D --> F
    B --> G
    C --> G
    D --> G
    G --> H
    G --> I

    classDef app fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    classDef data fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    classDef monitor fill:#fff3e0,stroke:#f57c00,stroke-width:2px

    class A,B,C,D app
    class E,F,G data
    class H,I monitor
```

</div>

### 🚀 **Docker Compose Completo**

```yaml
version: "3.8"

services:
  # 🌐 Reverse Proxy
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - noc-app
    restart: unless-stopped

  # 🚀 NOC Application
  noc-app:
    build:
      context: .
      dockerfile: Dockerfile.prod
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      DATABASE_URL: postgresql://noc_user:noc_password@postgres:5432/noc_db
      REDIS_URL: redis://redis:6379
      LOG_LEVEL: info
      PROMETHEUS_ENABLED: "true"
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    volumes:
      - ./logs:/app/logs
      - /etc/localtime:/etc/localtime:ro
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/api/v1/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  # 🗄️ PostgreSQL Database
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: noc_db
      POSTGRES_USER: noc_user
      POSTGRES_PASSWORD: noc_password
      POSTGRES_INITDB_ARGS: "--encoding=UTF-8 --lc-collate=C --lc-ctype=C"
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/01-init.sql:ro
      - ./postgres.conf:/etc/postgresql/postgresql.conf:ro
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U noc_user -d noc_db"]
      interval: 10s
      timeout: 5s
      retries: 5

  # 🔴 Redis Cache
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
      - ./redis.conf:/usr/local/etc/redis/redis.conf:ro
    command: redis-server /usr/local/etc/redis/redis.conf
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 3s
      retries: 3

  # 📊 Prometheus Metrics
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml:ro
      - prometheus_data:/prometheus
    command:
      - "--config.file=/etc/prometheus/prometheus.yml"
      - "--storage.tsdb.path=/prometheus"
      - "--web.console.libraries=/etc/prometheus/console_libraries"
      - "--web.console.templates=/etc/prometheus/consoles"
      - "--storage.tsdb.retention.time=200h"
      - "--web.enable-lifecycle"
    restart: unless-stopped

  # 📈 Grafana Dashboard
  grafana:
    image: grafana/grafana:latest
    ports:
      - "3001:3000"
    environment:
      GF_SECURITY_ADMIN_USER: admin
      GF_SECURITY_ADMIN_PASSWORD: ${GRAFANA_PASSWORD:-admin123}
      GF_USERS_ALLOW_SIGN_UP: "false"
      GF_INSTALL_PLUGINS: grafana-clock-panel,grafana-simple-json-datasource
    volumes:
      - grafana_data:/var/lib/grafana
      - ./grafana/provisioning:/etc/grafana/provisioning:ro
      - ./grafana/dashboards:/var/lib/grafana/dashboards:ro
    depends_on:
      - prometheus
    restart: unless-stopped

  # 🚨 Alert Manager
  alertmanager:
    image: prom/alertmanager:latest
    ports:
      - "9093:9093"
    volumes:
      - ./alertmanager.yml:/etc/alertmanager/alertmanager.yml:ro
      - alertmanager_data:/alertmanager
    command:
      - "--config.file=/etc/alertmanager/alertmanager.yml"
      - "--storage.path=/alertmanager"
      - "--web.external-url=http://localhost:9093"
    restart: unless-stopped

volumes:
  postgres_data:
    driver: local
  redis_data:
    driver: local
  prometheus_data:
    driver: local
  grafana_data:
    driver: local
  alertmanager_data:
    driver: local

networks:
  default:
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/16
```

### 🏗️ **Dockerfile Multi-stage**

```dockerfile
# 🏗️ Build Stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY src/ ./src/

# Build application
RUN npm run build

# 🚀 Production Stage
FROM node:18-alpine AS production

# Create app user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S noc-app -u 1001

# Install runtime dependencies
RUN apk add --no-cache \
    curl \
    tini \
    tzdata

WORKDIR /app

# Copy built application
COPY --from=builder --chown=noc-app:nodejs /app/dist ./dist
COPY --from=builder --chown=noc-app:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=noc-app:nodejs /app/package*.json ./

# Create logs directory
RUN mkdir -p /app/logs && chown -R noc-app:nodejs /app/logs

# Switch to non-root user
USER noc-app

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/api/v1/health || exit 1

# Expose port
EXPOSE 3000

# Use tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]

# Start application
CMD ["node", "dist/app.js"]
```

### ⚡ **Comandos Docker Modernos**

<table>
<tr>
<td width="50%">

#### 🚀 **Desarrollo**

```bash
# Desarrollo con hot-reload
docker-compose -f docker-compose.dev.yml up

# Logs en tiempo real
docker-compose logs -f --tail=100 noc-app

# Ejecutar comandos en contenedor
docker-compose exec noc-app npm run migrate

# Reiniciar solo la app
docker-compose restart noc-app
```

</td>
<td width="50%">

#### 🏭 **Producción**

```bash
# Deploy completo
docker-compose -f docker-compose.prod.yml up -d

# Escalado horizontal
docker-compose up -d --scale noc-app=3

# Backup de base de datos
docker-compose exec postgres pg_dump -U noc_user noc_db > backup.sql

# Monitoreo de recursos
docker stats noc-app_noc-app_1
```

</td>
</tr>
</table>

### 🔧 **Configuraciones Adicionales**

<details>
<summary>📄 <strong>nginx.conf</strong></summary>

```nginx
events {
    worker_connections 1024;
}

http {
    upstream noc_app {
        server noc-app:3000;
        # Add more servers for load balancing
        # server noc-app-2:3000;
        # server noc-app-3:3000;
    }

    server {
        listen 80;
        server_name localhost;

        # Security headers
        add_header X-Frame-Options DENY;
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";

        # Gzip compression
        gzip on;
        gzip_types text/plain application/json application/javascript text/css;

        location / {
            proxy_pass http://noc_app;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;

            # WebSocket support
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }

        # Health check endpoint
        location /health {
            access_log off;
            proxy_pass http://noc_app/api/v1/health;
        }
    }
}
```

</details>

<details>
<summary>📊 <strong>prometheus.yml</strong></summary>

```yaml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "alert_rules.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets:
            - alertmanager:9093

scrape_configs:
  - job_name: "noc-app"
    static_configs:
      - targets: ["noc-app:3000"]
    metrics_path: "/api/v1/metrics"
    scrape_interval: 10s

  - job_name: "postgres"
    static_configs:
      - targets: ["postgres:5432"]

  - job_name: "redis"
    static_configs:
      - targets: ["redis:6379"]
```

</details>

## 📝 Ejemplos Prácticos

<div align="center">

### 🎯 **Casos de Uso Comunes**

```mermaid
graph LR
    subgraph "🚀 Quick Start"
        A[Basic Monitoring]
        B[Multi-Service Setup]
        C[Custom Intervals]
    end

    subgraph "🔧 Advanced"
        D[Custom Alerts]
        E[Webhook Integration]
        F[Performance Tuning]
    end

    subgraph "🏭 Enterprise"
        G[Load Balancing]
        H[High Availability]
        I[Disaster Recovery]
    end

    A --> D
    B --> E
    C --> F
    D --> G
    E --> H
    F --> I

    classDef basic fill:#e8f5e8,stroke:#4caf50,stroke-width:2px
    classDef advanced fill:#fff3e0,stroke:#ff9800,stroke-width:2px
    classDef enterprise fill:#e3f2fd,stroke:#2196f3,stroke-width:2px

    class A,B,C basic
    class D,E,F advanced
    class G,H,I enterprise
```

</div>

### 🚀 **1. Monitoreo Básico con TypeScript**

```typescript
import { NOCApp } from "@noc/core";
import { FileSystemLogger } from "@noc/loggers";
import { SlackNotifier } from "@noc/notifiers";

// 🎯 Configuración rápida
const noc = new NOCApp({
  logger: new FileSystemLogger("./logs"),
  notifiers: [
    new SlackNotifier({
      webhook: process.env.SLACK_WEBHOOK_URL,
      channel: "#alerts",
    }),
  ],
});

// 📊 Agregar servicios para monitorear
const services = [
  {
    name: "API Principal",
    url: "https://api.miempresa.com/health",
    interval: "*/30 * * * * *", // Cada 30 segundos
    timeout: 5000,
    expectedStatus: 200,
    tags: ["critical", "api"],
  },
  {
    name: "Base de Datos",
    url: "https://db.miempresa.com/ping",
    interval: "*/60 * * * * *", // Cada minuto
    timeout: 3000,
    expectedStatus: 200,
    tags: ["database", "infrastructure"],
  },
  {
    name: "CDN",
    url: "https://cdn.miempresa.com/status",
    interval: "*/120 * * * * *", // Cada 2 minutos
    timeout: 2000,
    expectedStatus: 200,
    tags: ["cdn", "performance"],
  },
];

// 🚀 Iniciar monitoreo
services.forEach((service) => {
  noc.monitor(service);
});

// 📈 Obtener estadísticas en tiempo real
setInterval(async () => {
  const stats = await noc.getStats();
  console.log("📊 Estadísticas:", {
    totalServices: stats.total,
    upServices: stats.up,
    downServices: stats.down,
    avgResponseTime: `${stats.avgResponseTime}ms`,
  });
}, 30000);

// 🎯 Iniciar la aplicación
noc.start();
console.log("🚀 NOC App iniciada - Monitoreando", services.length, "servicios");
```

### 🔧 **2. Configuración Avanzada con Alertas**

```typescript
import { NOCApp, AlertRule, AlertSeverity } from "@noc/core";
import { DatabaseLogger } from "@noc/loggers";
import { EmailNotifier, SlackNotifier, WebhookNotifier } from "@noc/notifiers";

// 🏗️ Configuración empresarial
const noc = new NOCApp({
  logger: new DatabaseLogger({
    connectionString: process.env.DATABASE_URL,
    retentionDays: 90,
  }),

  notifiers: [
    // 📧 Email para alertas críticas
    new EmailNotifier({
      smtp: {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      },
      from: "noc@miempresa.com",
      to: ["admin@miempresa.com", "devops@miempresa.com"],
    }),

    // 💬 Slack para todo el equipo
    new SlackNotifier({
      webhook: process.env.SLACK_WEBHOOK_URL,
      channel: "#monitoring",
      username: "NOC Bot",
      iconEmoji: ":warning:",
    }),

    // 🔗 Webhook personalizado
    new WebhookNotifier({
      url: "https://api.miempresa.com/alerts",
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }),
  ],

  // 🚨 Reglas de alertas personalizadas
  alertRules: [
    new AlertRule({
      name: "High Response Time",
      condition: (check) => check.responseTime > 2000,
      severity: AlertSeverity.WARNING,
      cooldown: 300000, // 5 minutos
      message: (check) =>
        `⚠️ Alta latencia detectada en ${check.service.name}: ${check.responseTime}ms`,
    }),

    new AlertRule({
      name: "Service Down",
      condition: (check) => !check.success,
      severity: AlertSeverity.CRITICAL,
      cooldown: 60000, // 1 minuto
      message: (check) => `🚨 Servicio caído: ${check.service.name} - ${check.error}`,
    }),

    new AlertRule({
      name: "Multiple Failures",
      condition: (service) => service.consecutiveFailures >= 3,
      severity: AlertSeverity.CRITICAL,
      cooldown: 600000, // 10 minutos
      message: (service) => `🔥 Múltiples fallos consecutivos en ${service.name}`,
    }),
  ],
});

// 🎯 Servicios críticos con configuración detallada
const criticalServices = [
  {
    name: "Payment Gateway",
    url: "https://payments.miempresa.com/health",
    interval: "*/10 * * * * *", // Cada 10 segundos
    timeout: 3000,
    retries: 3,
    expectedStatus: 200,
    expectedBody: { status: "healthy" },
    headers: {
      Authorization: `Bearer ${process.env.PAYMENT_API_KEY}`,
      "User-Agent": "NOC-Monitor/1.0",
    },
    tags: ["critical", "payment", "revenue"],
  },

  {
    name: "User Authentication",
    url: "https://auth.miempresa.com/status",
    interval: "*/15 * * * * *", // Cada 15 segundos
    timeout: 2000,
    retries: 2,
    expectedStatus: 200,
    tags: ["critical", "auth", "security"],
  },
];

criticalServices.forEach((service) => noc.monitor(service));
```

### 📊 **3. Integración con Métricas y Dashboard**

```typescript
import { NOCApp } from "@noc/core";
import { PrometheusExporter } from "@noc/exporters";
import express from "express";

// 🏗️ Configurar exportador de métricas
const prometheusExporter = new PrometheusExporter({
  port: 9090,
  endpoint: "/metrics",
  labels: {
    environment: process.env.NODE_ENV || "development",
    version: process.env.APP_VERSION || "1.0.0",
  },
});

const noc = new NOCApp({
  exporters: [prometheusExporter],
});

// 📈 API para dashboard personalizado
const app = express();

app.get("/api/dashboard/overview", async (req, res) => {
  const stats = await noc.getStats();
  const recentLogs = await noc.getLogs({ limit: 100, level: "high" });

  res.json({
    timestamp: new Date().toISOString(),
    services: {
      total: stats.total,
      up: stats.up,
      down: stats.down,
      uptime: `${((stats.up / stats.total) * 100).toFixed(2)}%`,
    },
    performance: {
      avgResponseTime: stats.avgResponseTime,
      p95ResponseTime: stats.p95ResponseTime,
      p99ResponseTime: stats.p99ResponseTime,
    },
    alerts: {
      active: recentLogs.filter((log) => log.level === "high").length,
      last24h: recentLogs.filter(
        (log) => new Date(log.createdAt) > new Date(Date.now() - 24 * 60 * 60 * 1000)
      ).length,
    },
  });
});

app.get("/api/dashboard/services", async (req, res) => {
  const services = await noc.getServices();

  const servicesWithStats = await Promise.all(
    services.map(async (service) => {
      const recentChecks = await noc.getChecks({
        serviceId: service.id,
        limit: 10,
      });

      return {
        ...service,
        lastCheck: recentChecks[0],
        uptime: calculateUptime(recentChecks),
        avgResponseTime: calculateAvgResponseTime(recentChecks),
      };
    })
  );

  res.json(servicesWithStats);
});

// 🚀 Iniciar todo
Promise.all([
  noc.start(),
  app.listen(3000, () => console.log("📊 Dashboard API running on port 3000")),
]).then(() => {
  console.log("🎯 NOC App completamente iniciada");
});
```

### 🧪 **4. Testing y Validación**

```typescript
import { NOCApp } from "@noc/core";
import { TestRunner } from "@noc/testing";

// 🧪 Suite de pruebas para validar configuración
const testRunner = new TestRunner();

// Test de conectividad básica
testRunner.addTest("Basic Connectivity", async () => {
  const testService = {
    name: "Test Service",
    url: "https://httpbin.org/status/200",
    timeout: 5000,
  };

  const result = await noc.checkService(testService);

  if (!result.success) {
    throw new Error(`Connectivity test failed: ${result.error}`);
  }

  console.log("✅ Basic connectivity test passed");
});

// Test de latencia
testRunner.addTest("Latency Test", async () => {
  const start = Date.now();

  await noc.checkService({
    name: "Latency Test",
    url: "https://httpbin.org/delay/1",
    timeout: 3000,
  });

  const latency = Date.now() - start;

  if (latency > 2000) {
    throw new Error(`High latency detected: ${latency}ms`);
  }

  console.log(`✅ Latency test passed: ${latency}ms`);
});

// Test de manejo de errores
testRunner.addTest("Error Handling", async () => {
  const result = await noc.checkService({
    name: "Error Test",
    url: "https://httpbin.org/status/500",
    timeout: 5000,
  });

  if (result.success) {
    throw new Error("Error handling test failed - should have detected error");
  }

  console.log("✅ Error handling test passed");
});

// 🚀 Ejecutar todas las pruebas
testRunner.run().then((results) => {
  console.log("🧪 Test Results:", results);

  if (results.failed > 0) {
    console.error("❌ Some tests failed");
    process.exit(1);
  }

  console.log("✅ All tests passed - Ready for production");
});
```

### 🌐 **5. Ejemplos de Requests HTTP Modernos**

<table>
<tr>
<td width="50%">

#### 🔥 **Con fetch() moderno**

```javascript
// 📝 Crear monitoreo
const createMonitor = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/v1/checks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({
        url: "https://api.ejemplo.com/health",
        name: "API Ejemplo",
        interval: "*/30 * * * * *",
        timeout: 5000,
        tags: ["api", "production"],
      }),
    });

    const data = await response.json();
    console.log("✅ Monitor creado:", data);
  } catch (error) {
    console.error("❌ Error:", error);
  }
};

// 📊 Obtener métricas
const getMetrics = async () => {
  const response = await fetch("http://localhost:3000/api/v1/metrics");
  const metrics = await response.json();

  console.log("📈 Métricas:", {
    uptime: metrics.uptime,
    responseTime: metrics.avgResponseTime,
    errorRate: metrics.errorRate,
  });
};
```

</td>
<td width="50%">

#### ⚡ **Con axios avanzado**

```javascript
import axios from "axios";

// 🔧 Configurar cliente
const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
    "Content-Type": "application/json",
  },
});

// 📊 Dashboard en tiempo real
const getDashboardData = async () => {
  try {
    const [services, logs, metrics] = await Promise.all([
      api.get("/services"),
      api.get("/logs?level=high&limit=10"),
      api.get("/metrics/summary"),
    ]);

    return {
      services: services.data,
      criticalLogs: logs.data,
      performance: metrics.data,
    };
  } catch (error) {
    console.error("❌ Dashboard error:", error.response?.data);
    throw error;
  }
};

// 🚨 Crear alerta personalizada
const createAlert = async (alertConfig) => {
  const response = await api.post("/alerts", {
    name: alertConfig.name,
    condition: alertConfig.condition,
    severity: alertConfig.severity,
    channels: ["slack", "email"],
    metadata: {
      createdBy: "admin",
      environment: "production",
    },
  });

  console.log("🚨 Alerta creada:", response.data);
};
```

</td>
</tr>
</table>

## 🛠️ Desarrollo Moderno

<div align="center">

### 🔄 **Flujo de Desarrollo**

```mermaid
graph LR
    subgraph "💻 Local Development"
        A[🔥 Hot Reload<br/>tsx watch]
        B[🧪 Unit Tests<br/>Jest + Vitest]
        C[🔍 Type Check<br/>TypeScript]
    end

    subgraph "🔧 Code Quality"
        D[📏 ESLint<br/>Code Analysis]
        E[🎨 Prettier<br/>Formatting]
        F[🔒 Husky<br/>Git Hooks]
    end

    subgraph "🚀 CI/CD Pipeline"
        G[⚡ Build<br/>Production]
        H[🧪 E2E Tests<br/>Playwright]
        I[📦 Deploy<br/>Docker]
    end

    A --> D
    B --> E
    C --> F
    D --> G
    E --> H
    F --> I

    classDef dev fill:#e8f5e8,stroke:#4caf50,stroke-width:2px
    classDef quality fill:#fff3e0,stroke:#ff9800,stroke-width:2px
    classDef deploy fill:#e3f2fd,stroke:#2196f3,stroke-width:2px

    class A,B,C dev
    class D,E,F quality
    class G,H,I deploy
```

</div>

### ⚡ **Scripts de Desarrollo**

<table>
<tr>
<td width="50%">

#### 🔥 **Desarrollo**

| Script              | Descripción                 | Uso               |
| ------------------- | --------------------------- | ----------------- |
| `npm run dev`       | 🔥 Hot reload con tsx       | Desarrollo activo |
| `npm run dev:debug` | 🐛 Debug mode con inspector | Debugging         |
| `npm run dev:watch` | 👀 Watch mode con tests     | TDD               |
| `npm run dev:clean` | 🧹 Clean + fresh start      | Reset completo    |

</td>
<td width="50%">

#### 🏗️ **Build & Deploy**

| Script                  | Descripción          | Uso          |
| ----------------------- | -------------------- | ------------ |
| `npm run build`         | 🏗️ Build optimizado  | Producción   |
| `npm run build:analyze` | 📊 Bundle analyzer   | Optimización |
| `npm run preview`       | 👀 Preview build     | Testing      |
| `npm run deploy`        | 🚀 Deploy automático | CI/CD        |

</td>
</tr>
<tr>
<td width="50%">

#### 🧪 **Testing**

| Script                  | Descripción         | Uso              |
| ----------------------- | ------------------- | ---------------- |
| `npm test`              | 🧪 Run all tests    | Testing completo |
| `npm run test:unit`     | 🔬 Unit tests only  | Tests rápidos    |
| `npm run test:e2e`      | 🎭 End-to-end tests | Tests completos  |
| `npm run test:coverage` | 📊 Coverage report  | Análisis         |

</td>
<td width="50%">

#### 🔧 **Code Quality**

| Script               | Descripción         | Uso           |
| -------------------- | ------------------- | ------------- |
| `npm run lint`       | 🔍 ESLint check     | Code analysis |
| `npm run lint:fix`   | 🔧 Auto-fix issues  | Corrección    |
| `npm run format`     | 🎨 Prettier format  | Formateo      |
| `npm run type-check` | 📝 TypeScript check | Validación    |

</td>
</tr>
</table>

### 🔧 **Configuración de Herramientas**

<details>
<summary>📄 <strong>package.json - Scripts Completos</strong></summary>

```json
{
  "scripts": {
    "dev": "tsx watch --clear-screen=false src/app.ts",
    "dev:debug": "tsx watch --inspect src/app.ts",
    "dev:clean": "rimraf dist logs && npm run dev",
    "build": "rimraf dist && tsc && tsc-alias",
    "build:analyze": "npm run build && npx bundle-analyzer dist",
    "start": "node dist/app.js",
    "preview": "npm run build && npm start",
    "test": "vitest run",
    "test:unit": "vitest run --reporter=verbose src/**/*.test.ts",
    "test:e2e": "playwright test",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "lint": "eslint src --ext .ts,.tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "npm run lint -- --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,json,md}\"",
    "format:check": "prettier --check \"src/**/*.{ts,tsx,json,md}\"",
    "type-check": "tsc --noEmit",
    "prepare": "husky install",
    "docker:build": "docker build -t noc-app .",
    "docker:run": "docker run -p 3000:3000 noc-app",
    "docker:dev": "docker-compose -f docker-compose.dev.yml up",
    "docker:prod": "docker-compose -f docker-compose.prod.yml up -d"
  }
}
```

</details>

<details>
<summary>⚙️ <strong>vite.config.ts - Testing Moderno</strong></summary>

```typescript
import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    setupFiles: ["./src/test/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "dist/", "**/*.d.ts", "**/*.test.ts", "**/test/**"],
    },
    testTimeout: 10000,
    hookTimeout: 10000,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@domain": resolve(__dirname, "./src/domain"),
      "@infrastructure": resolve(__dirname, "./src/infrastructure"),
      "@presentation": resolve(__dirname, "./src/presentation"),
      "@shared": resolve(__dirname, "./src/shared"),
    },
  },
});
```

</details>

<details>
<summary>🎨 <strong>.vscode/settings.json - IDE Optimizado</strong></summary>

```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.suggest.autoImports": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "files.associations": {
    "*.env.*": "dotenv"
  },
  "emmet.includeLanguages": {
    "typescript": "html"
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/logs": true,
    "**/*.log": true
  },
  "files.watcherExclude": {
    "**/node_modules/**": true,
    "**/dist/**": true,
    "**/logs/**": true
  }
}
```

</details>

### 🧪 **Testing Avanzado**

```typescript
// src/test/setup.ts
import { beforeAll, afterAll, beforeEach } from "vitest";
import { NOCApp } from "@/core/noc-app";
import { TestDatabase } from "./helpers/test-database";

let testApp: NOCApp;
let testDb: TestDatabase;

beforeAll(async () => {
  // Configurar base de datos de prueba
  testDb = new TestDatabase();
  await testDb.setup();

  // Configurar aplicación de prueba
  testApp = new NOCApp({
    database: testDb.getConnection(),
    logger: { level: "silent" },
  });

  await testApp.start();
});

afterAll(async () => {
  await testApp.stop();
  await testDb.teardown();
});

beforeEach(async () => {
  await testDb.clean();
});

// Exportar para uso en tests
export { testApp, testDb };
```

```typescript
// src/domain/use-cases/__tests__/check-service.test.ts
import { describe, it, expect, vi } from "vitest";
import { CheckServiceUC } from "../check-service";
import { MockLogRepository } from "@/test/mocks/log-repository";
import { MockHttpClient } from "@/test/mocks/http-client";

describe("CheckServiceUC", () => {
  it("should log success when service is available", async () => {
    // Arrange
    const mockLogRepo = new MockLogRepository();
    const mockHttpClient = new MockHttpClient();
    const successCallback = vi.fn();
    const errorCallback = vi.fn();

    mockHttpClient.mockResponse({
      status: 200,
      responseTime: 150,
    });

    const checkService = new CheckServiceUC(
      mockLogRepo,
      successCallback,
      errorCallback,
      mockHttpClient
    );

    // Act
    await checkService.execute("https://api.test.com");

    // Assert
    expect(successCallback).toHaveBeenCalledOnce();
    expect(errorCallback).not.toHaveBeenCalled();
    expect(mockLogRepo.logs).toHaveLength(1);
    expect(mockLogRepo.logs[0].level).toBe("low");
    expect(mockLogRepo.logs[0].message).toContain("Service check successful");
  });

  it("should handle service failures correctly", async () => {
    // Arrange
    const mockLogRepo = new MockLogRepository();
    const mockHttpClient = new MockHttpClient();
    const successCallback = vi.fn();
    const errorCallback = vi.fn();

    mockHttpClient.mockError(new Error("ECONNREFUSED"));

    const checkService = new CheckServiceUC(
      mockLogRepo,
      successCallback,
      errorCallback,
      mockHttpClient
    );

    // Act
    await checkService.execute("https://api.down.com");

    // Assert
    expect(errorCallback).toHaveBeenCalledOnce();
    expect(successCallback).not.toHaveBeenCalled();
    expect(mockLogRepo.logs).toHaveLength(1);
    expect(mockLogRepo.logs[0].level).toBe("high");
    expect(mockLogRepo.logs[0].message).toContain("Service check failed");
  });
});
```

## 🤝 Contribución

<div align="center">

### 🎯 **Proceso de Contribución**

```mermaid
graph LR
    A[🍴 Fork] --> B[🌿 Branch]
    B --> C[💻 Code]
    C --> D[🧪 Test]
    D --> E[📝 Commit]
    E --> F[🚀 Push]
    F --> G[📋 PR]
    G --> H[👀 Review]
    H --> I[✅ Merge]

    classDef process fill:#e8f5e8,stroke:#4caf50,stroke-width:2px
    class A,B,C,D,E,F,G,H,I process
```

</div>

### 🛠️ **Guía de Contribución**

<table>
<tr>
<td width="50%">

#### 🚀 **Getting Started**

```bash
# 1. Fork y clonar
git clone https://github.com/tu-usuario/noc-app.git
cd noc-app

# 2. Instalar dependencias
npm install

# 3. Crear rama feature
git checkout -b feature/amazing-feature

# 4. Configurar hooks
npm run prepare
```

</td>
<td width="50%">

#### ✅ **Antes de Commit**

```bash
# Verificar código
npm run lint
npm run type-check
npm run format

# Ejecutar tests
npm run test
npm run test:e2e

# Build de prueba
npm run build
```

</td>
</tr>
</table>

### 📋 **Estándares de Código**

<div align="center">

| Aspecto             | Estándar           | Herramienta   |
| ------------------- | ------------------ | ------------- |
| 🎯 **Arquitectura** | Clean Architecture | Manual Review |
| 📝 **TypeScript**   | Strict Mode        | TSC           |
| 🎨 **Formato**      | Prettier Config    | Prettier      |
| 🔍 **Linting**      | ESLint Rules       | ESLint        |
| 🧪 **Testing**      | >80% Coverage      | Vitest        |
| 📖 **Commits**      | Conventional       | Commitizen    |

</div>

### 🎨 **Conventional Commits**

```bash
# Tipos de commit
feat: ✨ nueva funcionalidad
fix: 🐛 corrección de bug
docs: 📚 documentación
style: 💄 formato, no afecta lógica
refactor: ♻️ refactoring de código
test: 🧪 agregar/modificar tests
chore: 🔧 tareas de mantenimiento

# Ejemplos
git commit -m "feat: add slack notification integration"
git commit -m "fix: resolve memory leak in log rotation"
git commit -m "docs: update API documentation with new endpoints"
```

### 🗺️ **Roadmap 2024-2025**

<div align="center">

```mermaid
timeline
    title Roadmap NOC App

    section Q1 2024
        ✅ Core Features : Sistema de logging
                         : Clean Architecture
                         : Inyección de dependencias
                         : Deserialización JSON

    section Q2 2024
        🚧 Web Interface : Dashboard en tiempo real
                         : Interfaz web para logs
                         : Rotación automática

    section Q3 2024
        📋 Integrations : Slack/Discord alerts
                        : Prometheus metrics
                        : Multi-database support

    section Q4 2024
        🚀 Advanced : API GraphQL
                    : Authentication/Authorization
                    : Clustering & HA

    section Q1 2025
        🌟 Enterprise : Log compression
                      : Advanced analytics
                      : Custom plugins
```

</div>

### 🎯 **Áreas de Contribución**

<table>
<tr>
<td width="33%">

#### 🔧 **Backend**

- 🏗️ Nuevos datasources
- 📊 Métricas avanzadas
- 🔄 Optimizaciones
- 🧪 Testing coverage
- 📝 Documentación API

</td>
<td width="33%">

#### 🎨 **Frontend**

- 📊 Dashboard components
- 📱 Mobile responsive
- 🎯 UX improvements
- ⚡ Performance
- 🌙 Dark mode

</td>
<td width="33%">

#### 🔌 **Integraciones**

- 📧 Email providers
- 💬 Chat platforms
- 📈 Monitoring tools
- 🗄️ Databases
- ☁️ Cloud services

</td>
</tr>
</table>

### 🏆 **Contributors**

<div align="center">

[![Contributors](https://contrib.rocks/image?repo=tu-usuario/noc-app)](https://github.com/tu-usuario/noc-app/graphs/contributors)

</div>

## 📄 Licencia

<div align="center">

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)

Este proyecto está bajo la **Licencia ISC**. Ver el archivo [LICENSE](LICENSE) para más detalles.

</div>

## 🌟 Soporte y Comunidad

<div align="center">

### 💬 **Canales de Comunicación**

<table>
<tr>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /><br>
<strong>support@noc-app.com</strong><br>
<small>Soporte técnico oficial</small>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" /><br>
<strong>NOC Community</strong><br>
<small>Chat en tiempo real</small>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /><br>
<strong>Issues & Discussions</strong><br>
<small>Reportar bugs y features</small>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/Docs-4285F4?style=for-the-badge&logo=googledocs&logoColor=white" alt="Docs" /><br>
<strong>docs.noc-app.com</strong><br>
<small>Documentación completa</small>
</td>
</tr>
</table>

### 📊 **Estado del Proyecto**

![GitHub stars](https://img.shields.io/github/stars/tu-usuario/noc-app?style=social)
![GitHub forks](https://img.shields.io/github/forks/tu-usuario/noc-app?style=social)
![GitHub issues](https://img.shields.io/github/issues/tu-usuario/noc-app)
![GitHub pull requests](https://img.shields.io/github/issues-pr/tu-usuario/noc-app)

### 🚀 **Métricas de Desarrollo**

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/tu-usuario/noc-app)
![GitHub last commit](https://img.shields.io/github/last-commit/tu-usuario/noc-app)
![GitHub contributors](https://img.shields.io/github/contributors/tu-usuario/noc-app)

</div>

---

<div align="center">

### 💝 **Agradecimientos**

**Desarrollado con ❤️ por la comunidad de NOC App**

_Gracias a todos los contribuidores que hacen posible este proyecto_

[![Made with TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Powered by Node.js](https://img.shields.io/badge/Powered%20by-Node.js-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Built with Clean Architecture](https://img.shields.io/badge/Built%20with-Clean%20Architecture-orange?style=for-the-badge)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

</div>
