import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export const dataExample = [
  {
    id: 1,
    title: "Taller de React Native",
    category: "Taller",
    date: "5/6/2023",
    place: "F-404",
    hour: "4pm - 6pm"
  },
  {
    id: 2,
    title: "Alfarería",
    category: "Manualidades",
    date: "5/6/2023",
    place: "Parque estudiantil",
    hour: "10am - 12pm"
  },
  {
    id: 1,
    title: "Taller de React Native",
    category: "Taller",
    date: "5/6/2023",
    place: "F-404",
    hour: "4pm - 6pm"
  },
  {
    id: 2,
    title: "Alfarería",
    category: "Manualidades",
    date: "5/6/2023",
    place: "Parque estudiantil",
    hour: "10am - 12pm"
  },
]

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
  /* format(new Date(date), 'EEEE, dd "de" LLLL', { locale: es }) */
  const partesFecha = date.split('/');
  const fechaFormateada = partesFecha[2] + '-' + partesFecha[0] + '-' + partesFecha[1];
  const fechaObjeto = new Date(fechaFormateada);
  const fechaFinal = format(fechaObjeto, "EEEE, dd 'de' LLLL", { locale: es });
  return fechaFinal;
}