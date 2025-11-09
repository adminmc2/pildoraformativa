"use client";

import { SGELDataGrid } from "@/components/ui/sgel-data-grid";

// Datos de ejemplo para el dashboard educativo
const estudiantesData = [
  {
    id: 1,
    nombre: "Ana García",
    nivel: "B1",
    progreso: 85,
    ejerciciosCompletados: 34,
    ultimaActividad: "2025-11-08",
    estado: "Activo",
  },
  {
    id: 2,
    nombre: "Carlos Martínez",
    nivel: "A2",
    progreso: 72,
    ejerciciosCompletados: 28,
    ultimaActividad: "2025-11-09",
    estado: "Activo",
  },
  {
    id: 3,
    nombre: "María López",
    nivel: "B2",
    progreso: 91,
    ejerciciosCompletados: 42,
    ultimaActividad: "2025-11-09",
    estado: "Activo",
  },
  {
    id: 4,
    nombre: "Juan Rodríguez",
    nivel: "A1",
    progreso: 65,
    ejerciciosCompletados: 22,
    ultimaActividad: "2025-11-07",
    estado: "Activo",
  },
  {
    id: 5,
    nombre: "Laura Fernández",
    nivel: "B1",
    progreso: 88,
    ejerciciosCompletados: 36,
    ultimaActividad: "2025-11-09",
    estado: "Activo",
  },
  {
    id: 6,
    nombre: "Pedro Sánchez",
    nivel: "C1",
    progreso: 94,
    ejerciciosCompletados: 48,
    ultimaActividad: "2025-11-08",
    estado: "Activo",
  },
  {
    id: 7,
    nombre: "Isabel Torres",
    nivel: "A2",
    progreso: 78,
    ejerciciosCompletados: 30,
    ultimaActividad: "2025-11-09",
    estado: "Activo",
  },
  {
    id: 8,
    nombre: "Miguel Ruiz",
    nivel: "B2",
    progreso: 82,
    ejerciciosCompletados: 38,
    ultimaActividad: "2025-11-06",
    estado: "Inactivo",
  },
  {
    id: 9,
    nombre: "Carmen Díaz",
    nivel: "B1",
    progreso: 76,
    ejerciciosCompletados: 32,
    ultimaActividad: "2025-11-09",
    estado: "Activo",
  },
  {
    id: 10,
    nombre: "Francisco Moreno",
    nivel: "A1",
    progreso: 68,
    ejerciciosCompletados: 24,
    ultimaActividad: "2025-11-08",
    estado: "Activo",
  },
  {
    id: 11,
    nombre: "Elena Jiménez",
    nivel: "C1",
    progreso: 96,
    ejerciciosCompletados: 50,
    ultimaActividad: "2025-11-09",
    estado: "Activo",
  },
  {
    id: 12,
    nombre: "Antonio Álvarez",
    nivel: "B2",
    progreso: 84,
    ejerciciosCompletados: 40,
    ultimaActividad: "2025-11-09",
    estado: "Activo",
  },
];

// Componente personalizado para mostrar el progreso con barra
const ProgresoCell = (props: any) => {
  const progreso = props.dataItem.progreso;
  let colorClass = "bg-sgel-red";

  if (progreso >= 80) {
    colorClass = "bg-sgel-green";
  } else if (progreso >= 60) {
    colorClass = "bg-sgel-yellow";
  }

  return (
    <td>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-6 bg-gray-200 rounded-full border-2 border-black overflow-hidden">
          <div
            className={`h-full ${colorClass} transition-all duration-500`}
            style={{ width: `${progreso}%` }}
          />
        </div>
        <span className="font-black text-sm min-w-[45px]">{progreso}%</span>
      </div>
    </td>
  );
};

// Componente personalizado para mostrar el nivel con badge
const NivelCell = (props: any) => {
  const nivel = props.dataItem.nivel;
  let bgColor = "bg-sgel-blue";

  if (nivel === "A1" || nivel === "A2") {
    bgColor = "bg-sgel-yellow";
  } else if (nivel === "B1" || nivel === "B2") {
    bgColor = "bg-sgel-green";
  } else if (nivel === "C1" || nivel === "C2") {
    bgColor = "bg-sgel-red";
  }

  return (
    <td>
      <span
        className={`${bgColor} text-white px-4 py-1 rounded-full font-black text-sm border-2 border-black inline-block`}
      >
        {nivel}
      </span>
    </td>
  );
};

// Componente personalizado para mostrar el estado
const EstadoCell = (props: any) => {
  const estado = props.dataItem.estado;
  const isActivo = estado === "Activo";

  return (
    <td>
      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full border-2 border-black ${
            isActivo ? "bg-sgel-green" : "bg-gray-400"
          }`}
        />
        <span className="font-bold text-sm">{estado}</span>
      </div>
    </td>
  );
};

export default function SGELDataGridDemo() {
  const columns = [
    { field: "nombre", title: "Estudiante", width: "200px" },
    {
      field: "nivel",
      title: "Nivel",
      width: "100px",
      cell: NivelCell
    },
    {
      field: "progreso",
      title: "Progreso",
      width: "250px",
      cell: ProgresoCell,
    },
    {
      field: "ejerciciosCompletados",
      title: "Ejercicios",
      width: "120px"
    },
    {
      field: "ultimaActividad",
      title: "Última Actividad",
      width: "150px"
    },
    {
      field: "estado",
      title: "Estado",
      width: "120px",
      cell: EstadoCell,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <SGELDataGrid
        data={estudiantesData}
        columns={columns}
        pageable={true}
        sortable={true}
        pageSize={8}
      />
    </div>
  );
}
