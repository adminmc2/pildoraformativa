# SGEL - Curso de Español Interactivo - Unidad 2

## 📋 DESCRIPCIÓN DEL PROYECTO

### **Objetivo Principal**
Crear material complementario interactivo para **pizarras digitales/proyectores** que reemplace los PowerPoints tradicionales, aprovechando completamente las capacidades de Next.js para ofrecer una experiencia educativa superior.

### **Arquitectura del Sistema**
- **Unidades Independientes**: Cada unidad es un proyecto Next.js separado
- **Doble Output**: 
  1. **Versión Web**: Desplegada online para acceso desde navegador
  2. **Versión Ejecutable**: Descargable para profesores, ejecutable sin internet
- **Integración IA**: DeepSeek para procesos específicos (a definir)

---

## 🏗️ ESTRUCTURA TÉCNICA

### **Stack Tecnológico**
```
- Next.js 16+ (React 19)
- TypeScript
- TailwindCSS
- Framer Motion (animaciones)
- Lucide React (iconos)
- DeepSeek API (IA)
```

### **Configuración Dual**
```javascript
// next.config.js para desarrollo web
export default {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: false }
}

// next.config.export.js para versión descargable
export default {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
}
```

---

## 📚 CONTENIDO - UNIDAD 2: LA FAMILIA

### **Estructura de Slides**
1. **Slide de Título**: "Unidad 2: La Familia"
2. **Vocabulario Interactivo**: Miembros de la familia con audio
3. **Ejercicios Interactivos**: Drag & drop, memoria, etc.
4. **Juegos**: Actividades gamificadas
5. **Evaluación**: Con integración IA

### **Datos del Contenido**
```javascript
const unidad2Data = {
  titulo: "La Familia",
  vocabulario: [
    { palabra: "padre", traduccion: "father", audio: "/audio/padre.mp3" },
    { palabra: "madre", traduccion: "mother", audio: "/audio/madre.mp3" },
    { palabra: "hermano", traduccion: "brother", audio: "/audio/hermano.mp3" },
    { palabra: "hermana", traduccion: "sister", audio: "/audio/hermana.mp3" },
    { palabra: "abuelo", traduccion: "grandfather", audio: "/audio/abuelo.mp3" },
    { palabra: "abuela", traduccion: "grandmother", audio: "/audio/abuela.mp3" }
  ]
}
```

---

## 🎨 DISEÑO Y UX

### **Principios de Diseño**
- **Colores SGEL**: Rojo corporativo (#db0c34) como principal
- **Paleta Complementaria**: Colores vibrantes y modernos
- **Tipografía**: Clara y legible para proyección
- **Animaciones**: Fluidas con Framer Motion
- **Responsive**: Adaptable a diferentes tamaños de pantalla

### **Componentes Principales**
```
src/
├── components/
│   ├── slides/
│   │   ├── TitleSlide.tsx
│   │   ├── VocabularySlide.tsx
│   │   ├── ExerciseSlide.tsx
│   │   └── GameSlide.tsx
│   ├── ui/
│   │   ├── Navigation.tsx
│   │   ├── ProgressBar.tsx
│   │   └── AudioPlayer.tsx
│   └── games/
│       ├── MemoryGame.tsx
│       └── DragDropGame.tsx
```

---

## 🎮 FUNCIONALIDADES INTERACTIVAS

### **Navegación**
- Flechas de teclado (← →)
- Barra espaciadora (siguiente)
- Indicadores de progreso
- Navegación por miniatura

### **Audio**
- Pronunciación de vocabulario
- Efectos de sonido para interacciones
- Control de reproducción

### **Animaciones**
- Transiciones entre slides
- Efectos de entrada/salida
- Microinteracciones en botones
- Animaciones de feedback

### **Juegos Previstos**
1. **Memoria**: Emparejar palabras con traducciones
2. **Drag & Drop**: Arrastrar miembros a árbol familiar
3. **Quiz Interactivo**: Preguntas con feedback inmediato
4. **Pronunciación**: Evaluación con IA (DeepSeek)

---

## 🚀 COMANDOS DE DESARROLLO

### **Instalación**
```bash
npx create-next-app@latest unidad-2-familia --typescript --tailwind --eslint
cd unidad-2-familia
npm install framer-motion lucide-react clsx tailwind-merge
```

### **Desarrollo**
```bash
npm run dev          # Servidor desarrollo
npm run build        # Build para web
npm run build:export # Build para descarga
```

---

## 📁 ASSETS NECESARIOS

### **Estructura Public**
```
public/
├── audio/
│   ├── unidad2/
│   │   ├── padre.mp3
│   │   ├── madre.mp3
│   │   └── [resto de audios]
├── images/
│   ├── unidad2/
│   │   ├── familia.jpg
│   │   └── [ilustraciones]
└── icons/
    └── sgel-logo.svg
```

---

## 🔮 INTEGRACIÓN IA (DEEPSEEK)

### **Procesos Específicos** (A definir por el usuario)
- Evaluación de pronunciación
- Generación de ejercicios
- Análisis de progreso
- Chatbot educativo
- Personalización de contenido

### **API Structure**
```javascript
const deepSeekConfig = {
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: 'https://api.deepseek.com/v1',
  model: 'deepseek-chat'
}
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

### **Fase 1: Base**
- [ ] Proyecto Next.js configurado
- [ ] TailwindCSS + Framer Motion
- [ ] Estructura de componentes
- [ ] Sistema de navegación

### **Fase 2: Contenido**
- [ ] Slides de la Unidad 2
- [ ] Vocabulario con audio
- [ ] Assets organizados

### **Fase 3: Interactividad**
- [ ] Juegos implementados
- [ ] Animaciones fluidas
- [ ] Sistema de progreso

### **Fase 4: IA**
- [ ] Integración DeepSeek
- [ ] Funcionalidades específicas
- [ ] Testing y optimización

### **Fase 5: Distribución**
- [ ] Build para web
- [ ] Build exportable
- [ ] Documentación final

---

## 🎯 PRÓXIMOS PASOS

1. **Eliminar carpeta actual**
2. **Crear nuevo proyecto con create-next-app**
3. **Seguir esta documentación paso a paso**
4. **Implementar funcionalidades una por una**
5. **Testing continuo**

---

**Notas**: Este documento servirá como guía completa para recrear el proyecto desde cero sin errores de configuración.