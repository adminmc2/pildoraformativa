# Despliegue en Netlify - Propuesta Metodológica SGEL

Este proyecto está configurado para desplegarse en Netlify y mostrar automáticamente la página de propuesta metodológica.

## Configuración Actual

El proyecto está configurado para:
- **Página principal**: `/propuesta-metodologica` (presentación interactiva de 9 diapositivas)
- **Build command**: `npm run build`
- **Node version**: 20
- **Plugin**: @netlify/plugin-nextjs (instalado automáticamente)

## Pasos para Desplegar

### Opción 1: Despliegue desde Git (Recomendado)

1. **Sube tu código a GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Configuración Netlify para propuesta metodológica"
   git push origin main
   ```

2. **Conecta con Netlify**
   - Ve a [https://app.netlify.com](https://app.netlify.com)
   - Click en "Add new site" → "Import an existing project"
   - Selecciona tu repositorio
   - Netlify detectará automáticamente la configuración de `netlify.toml`
   - Click en "Deploy site"

3. **Configuración automática**
   - Build command: `npm run build` (detectado automáticamente)
   - Publish directory: `.next` (detectado automáticamente)
   - Node version: 20 (configurado en netlify.toml)

### Opción 2: Despliegue Manual con Netlify CLI

1. **Instala Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login en Netlify**
   ```bash
   netlify login
   ```

3. **Inicializa el sitio**
   ```bash
   netlify init
   ```

4. **Despliega**
   ```bash
   netlify deploy --prod
   ```

## Verificación del Despliegue

Una vez desplegado, tu sitio:
- Mostrará automáticamente la página `/propuesta-metodologica` como página principal
- Todas las rutas funcionarán correctamente gracias a la configuración de redirects
- El servidor Next.js estará optimizado para Netlify

## URLs Disponibles

Después del despliegue, tendrás acceso a:
- `/` → Muestra `/propuesta-metodologica` (redirect configurado)
- `/propuesta-metodologica` → Presentación principal (9 diapositivas interactivas)
- `/layout-test` → Portada del proyecto
- `/sketch-layouts` → Galería de layouts

## Solución de Problemas

### Error de build
Si el build falla, verifica:
```bash
npm run build
```

### Variables de entorno
Si necesitas variables de entorno, añádelas en:
- Netlify Dashboard → Site settings → Environment variables

### Logs del despliegue
Revisa los logs en:
- Netlify Dashboard → Deploys → [último deploy] → Deploy log
