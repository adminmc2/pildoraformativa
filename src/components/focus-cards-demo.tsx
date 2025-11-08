import { FocusCards } from "@/components/ui/focus-cards";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Gato 🐱",
      src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=3387&auto=format&fit=crop",
    },
    {
      title: "Flor 🌸",
      src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=3072&auto=format&fit=crop",
    },
    {
      title: "Lápiz ✏️",
      src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=3070&auto=format&fit=crop",
    },
    {
      title: "Casa 🏠",
      src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=3387&auto=format&fit=crop",
    },
    {
      title: "Reloj ⏰",
      src: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=3456&auto=format&fit=crop",
    },
    {
      title: "Libro 📚",
      src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=3456&auto=format&fit=crop",
    },
  ];

  return <FocusCards cards={cards} />;
}
