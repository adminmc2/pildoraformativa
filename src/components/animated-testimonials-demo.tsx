import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Me encanta aprender español con estos materiales. Las actividades son muy divertidas y fáciles de entender.",
      name: "María González",
      designation: "Estudiante de 6º de Primaria",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3461&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Los ejercicios interactivos hacen que el aprendizaje sea mucho más entretenido. Ya no me aburro en clase.",
      name: "Carlos Martínez",
      designation: "Estudiante de 5º de Primaria",
      src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "He mejorado mucho mi escritura gracias a las prácticas. Los temas son muy interesantes y actuales.",
      name: "Ana López",
      designation: "Estudiante de 6º de Primaria",
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Las historias y los personajes me ayudan a entender mejor la gramática. Es como aprender jugando.",
      name: "Pedro Sánchez",
      designation: "Estudiante de 5º de Primaria",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Los colores y las imágenes hacen que todo sea más fácil de recordar. Me gusta mucho estudiar con este método.",
      name: "Laura Fernández",
      designation: "Estudiante de 6º de Primaria",
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={false} />;
}
