<div align="center">

# 🚀 NOC App - Network Operations Center

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Clean_Architecture-6366F1?style=for-the-badge&logo=architecture&logoColor=white" alt="Clean Architecture" />
</p>

<p align="center">
  <strong>Sistema de monitoreo de red moderno y escalable</strong><br>
  Supervisa la disponibilidad de servicios web con verificaciones programadas,<br>
  implementando Clean Architecture con logging avanzado y notificaciones inteligentes.
</p>

<p align="center">
  <a href="#-características">Características</a> •
  <a href="#-instalación">Instalación</a> •
  <a href="#-arquitectura">Arquitectura</a> •
  <a href="#-uso">Uso</a> •
  <a href="#-configuración">Configuración</a>
</p>

</div>

---

## ✨ Características Principales

<table>
<tr>
<td width="50%">

### 🎯 **Core Features**

- 🔍 **Monitoreo Inteligente** - Verificaciones automáticas con detección de anomalías
- � **Loggling Avanzado** - Sistema de logs con niveles de severidad y persistencia
- 🏗️ **Clean Architecture** - Separación clara de responsabilidades y capas
- ⚡ **TypeScript Estricto** - Desarrollo type-safe con las últimas características

</td>
<td width="50%">

### 🚀 **Advanced Features**

- 🔄 **Cron Jobs Flexibles** - Programación avanzada de tareas de monitoreo
- � **Persi]stencia Dual** - Almacenamiento en archivos y MongoDB
- � *C*Notificaciones Email\*\* - Alertas automáticas por correo electrónico
- � **Daocker Ready** - Containerización completa con Docker Compose

</td>
</tr>
</table>

## 🏗️ Arquitectura del Sistema

<div align="center">

```mermaid
graph TB
    subgraph "🎨 Presentation Layer"
        A["🖥️ Server<br/><small>Express/Fastify</small>"]
        B["⏰ CronService<br/><small>Scheduled Tasks</small>"]
        C["📧 EmailService<br/><small>Notifications</small>"]
    end

    subgraph "💼 Application Layer"
        D["🔍 CheckServiceUC<br/><small>Business Logic</small>"]
        E["📊 SendEmailLogs<br/><small>Email Processing</small>"]
    end

    subgraph "🎯 Domain Layer"
        F["📝 LogEntity<br/><small>Core Model</small>"]
        G["📋 LogRepository<br/><small>Abstract Interface</small>"]
        H["💾 LogDatasource<br/><small>Data Contract</small>"]
        I["🏷️ LogSeverityLevel<br/><small>Enum Values</small>"]
    end

    subgraph "🔧 Infrastructure Layer"
        J["💿 FileSystemDS<br/><small>File Operations</small>"]
        K["🗄️ MongoDS<br/><small>DB Operations</small>"]
    end

    A --> D
    B --> D
    C --> E
    D --> F
    D --> G
    E --> G
    G --> H
    J --> H
    K --> H
    F --> I

    classDef presentation fill:#1e293b,stroke:#3b82f6,stroke-width:2px,color:#e2e8f0
    classDef application fill:#1e293b,stroke:#8b5cf6,stroke-width:2px,color:#e2e8f0
    classDef domain fill:#1e293b,stroke:#10b981,stroke-width:2px,color:#e2e8f0
    classDef infrastructure fill:#1e293b,stroke:#f59e0b,stroke-width:2px,color:#e2e8f0

    class A,B,C presentation
    class D,E application
    class F,G,H,I domain
    class J,K infrastructure
```

</div>

### 📁 Estructura del Proyecto

```
src/
├── 🎯 domain/                 # Lógica de negocio
│   ├── entities/              # Entidades del dominio
│   ├── repository/            # Interfaces de repositorio
│   ├── datasources/           # Contratos de datos
│   └── use-cases/             # Casos de uso
│       ├── checks/            # Verificaciones de servicios
│       ├── email/             # Gestión de emails
│       └── logs/              # Manejo de logs
├── 🔧 infrastructure/         # Implementaciones técnicas
│   ├── datasources/           # Fuentes de datos
│   └── repository/            # Implementación de repositorios
├── 🎨 presentation/           # Capa de presentación
│   ├── cron/                  # Tareas programadas
│   ├── email/                 # Servicios de email
│   └── server.ts              # Servidor principal
├── ⚙️ config/                 # Configuraciones
│   └── plugins/               # Plugins de configuración
└── 💾 data/                   # Configuración de datos
    ├── mongo/                 # MongoDB setup
    └── postgres/              # PostgreSQL setup (futuro)
```

## 🚀 Instalación

### 📋 Prerrequisitos

<table>
<tr>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" /><br>
<strong>v18+</strong>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /><br>
<strong>v6+</strong>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /><br>
<strong>v5.9+</strong>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" /><br>
<strong>Opcional</strong>
</td>
</tr>
</table>

### ⚡ Instalación Rápida

```bash
# 1️⃣ Clonar repositorio
git clone https://github.com/tu-usuario/noc-app.git
cd noc-app

# 2️⃣ Instalar dependencias
npm install

# 3️⃣ Configurar variables de entorno
cp .env.example .env
# Editar .env con tus configuraciones

# 4️⃣ Iniciar con Docker (Recomendado)
docker-compose up -d

# 5️⃣ Ejecutar aplicación
npm run dev
```

### � Doclker Compose

```yaml
services:
  mongo:
    image: mongo:latest
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: ${MONGO_USER}
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_PASS}
    ports:
      - "27017:27017"
    volumes:
      - ./mongo:/data/db

  noc-app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - MONGO_URL=mongodb://mongo:27017
    depends_on:
      - mongo
    volumes:
      - ./logs:/app/logs
```

## ⚙️ Configuración

### 🔧 Variables de Entorno

```env
# MongoDB Configuration
MONGO_URL=mongodb://localhost:27017
MONGO_DB_NAME=noc_db
MONGO_USER=noc_user
MONGO_PASS=noc_password

# Email Configuration
MAILER_SERVICE=gmail
MAILER_EMAIL=your-email@gmail.com
MAILER_SECRET_KEY=your-app-password

# Application Settings
NODE_ENV=development
PORT=3000
LOG_LEVEL=info
```

### 📊 Niveles de Logging

<table>
<tr>
<td width="33%" align="center">

#### 🟢 **LOW**

Información general<br>
Operaciones normales<br>
Estado de servicios OK

</td>
<td width="33%" align="center">

#### 🟡 **MEDIUM**

Advertencias<br>
Latencia alta<br>
Timeouts ocasionales

</td>
<td width="33%" align="center">

#### 🔴 **HIGH**

Errores críticos<br>
Servicios caídos<br>
Fallos del sistema

</td>
</tr>
</table>

## � Uso

### 🚀 Inicio Básico

```typescript
import { Server } from "./presentation/server";
import { MongoDatabase } from "./data/mongo/init";
import { envs } from "./config/plugins/envs.plugin";

async function main() {
  // Conectar a MongoDB
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  // Iniciar servidor
  Server.start();
}

main();
```

### 🔍 Monitoreo de Servicios

```typescript
import { CheckServiceUC } from "@domain/use-cases/checks/check-service";
import { CronService } from "@presentation/cron/cron-service";

// Configurar monitoreo cada 5 segundos
CronService.createJob("*/5 * * * * *", async () => {
  const checkService = new CheckServiceUC(
    logRepository,
    () => console.log("✅ Service OK"),
    (error) => console.log("❌ Service Error:", error)
  );

  await checkService.execute("https://www.google.com");
});
```

### 📧 Notificaciones por Email

```typescript
import { EmailService } from "@presentation/email/email.service";
import { SendEmailLogs } from "@domain/use-cases/email/send-email-logs";

const emailService = new EmailService();

// Enviar logs por email
const sendEmailLogs = new SendEmailLogs(emailService, logRepository);
await sendEmailLogs.execute("admin@empresa.com");

// Email personalizado
await emailService.sendEmail({
  to: "admin@empresa.com",
  subject: "🚨 Alert: Service Down",
  htmlBody: "<h1>Service monitoring alert</h1><p>Critical service is down!</p>",
});
```

## 📊 Sistema de Logging

### 🏷️ Estructura de Log

```typescript
interface LogEntity {
  level: LogSeverityLevel; // low | medium | high
  message: string; // Mensaje descriptivo
  origin: string; // Origen del log
  createdAt: Date; // Timestamp
}
```

### 💾 Persistencia Dual

<table>
<tr>
<td width="50%">

#### 📁 **File System**

- Logs almacenados en archivos
- Separación por nivel de severidad
- Rotación automática
- Acceso rápido para debugging

</td>
<td width="50%">

#### 🗄️ **MongoDB**

- Persistencia en base de datos
- Consultas avanzadas
- Escalabilidad horizontal
- Análisis de tendencias

</td>
</tr>
</table>

## 📈 Scripts Disponibles

| Comando         | Descripción                    | Uso              |
| --------------- | ------------------------------ | ---------------- |
| `npm run dev`   | 🔥 Desarrollo con hot-reload   | Desarrollo local |
| `npm run build` | 🏗️ Construir para producción   | Deploy           |
| `npm start`     | 🚀 Ejecutar versión construida | Producción       |

## 🔧 Tecnologías Utilizadas

<div align="center">

| Categoría      | Tecnologías                                                                                                                                                                                                             |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Runtime**    | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)  |
| **Database**   | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white)        |
| **Email**      | ![Nodemailer](https://img.shields.io/badge/Nodemailer-339933?style=flat-square&logo=nodemailer&logoColor=white)                                                                                                         |
| **Scheduling** | ![Cron](https://img.shields.io/badge/Cron-4285F4?style=flat-square&logo=google-cloud&logoColor=white)                                                                                                                   |
| **DevOps**     | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![Docker Compose](https://img.shields.io/badge/Docker_Compose-2496ED?style=flat-square&logo=docker&logoColor=white) |

</div>

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

---

<div align="center">

**Desarrollado con ❤️ usando Clean Architecture y TypeScript**

<p>
  <a href="#top">⬆️ Volver arriba</a>
</p>

</div>
