import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export const dataExample2 = [
  {
    id: 1,
    title: "Desarrollo Móvil",  
    hour: "2pm - 4pm",
    guests: [
      "Yaneth Mejia"
    ],
    link: "https://zoom.us/j/1234567890?pwd=abc123"
  },
  {
    id: 2,
    title: "Desarrollo Móvil",  
    hour: "2pm - 4pm",
    guests: [
      "Yaneth Mejia"
    ],
    link: "https://zoom.us/j/1234567890?pwd=abc123"
  },
  {
    id: 3,
    title: "Desarrollo Móvil",  
    hour: "2pm - 4pm",
    guests: [
      "Yaneth Mejia"
    ],
    link: "https://zoom.us/j/1234567890?pwd=abc123"
  },
  {
    id: 4,
    title: "Desarrollo Móvil",  
    hour: "2pm - 4pm",
    guests: [
      "Yaneth Mejia"
    ],
    link: "https://zoom.us/j/1234567890?pwd=abc123"
  },
  {
    id: 5,
    title: "Desarrollo Móvil",  
    hour: "2pm - 4pm",
    guests: [
      "Yaneth Mejia"
    ],
    link: "https://zoom.us/j/1234567890?pwd=abc123"
  },
  {
    id: 6,
    title: "Desarrollo Móvil",  
    hour: "2pm - 4pm",
    guests: [
      "Yaneth Mejia"
    ],
    link: "https://zoom.us/j/1234567890?pwd=abc123"
  },
  {
    id: 7,
    title: "Desarrollo Móvil",  
    hour: "2pm - 4pm",
    guests: [
      "Yaneth Mejia"
    ],
    link: "https://zoom.us/j/1234567890?pwd=abc123"
  },
  {
    id: 8,
    title: "Desarrollo Móvil",  
    hour: "2pm - 4pm",
    guests: [
      "Yaneth Mejia"
    ],
    link: "https://zoom.us/j/1234567890?pwd=abc123"
  },
  {
    id: 9,
    title: "Desarrollo Móvil",  
    hour: "2pm - 4pm",
    guests: [
      "Yaneth Mejia"
    ],
    link: "https://zoom.us/j/1234567890?pwd=abc123"
  },
]

export const convertDate = (date) => {
  const fechaObjeto = new Date(date);
  const fechaFinal = format(fechaObjeto, "EEEE, dd 'de' LLLL", { locale: es });
  return fechaFinal;
}