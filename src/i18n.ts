import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      todoApp: "Todo App",
      enterTodo: "Enter todo",
      add: "Add",
      delete: "Delete",
    },
  },
  ur: {
    translation: {
      todoApp: "ٹودو ایپ",
      enterTodo: "ٹودو لکھیں",
      add: "شامل کریں",
      delete: "حذف کریں",
    },
  },
  es: {
    translation: {
      todoApp: "Aplicación de Tareas",
      enterTodo: "Escribe una tarea",
      add: "Añadir",
      delete: "Eliminar",
    },
  },
  ar: {
    translation: {
      todoApp: "تطبيق المهام",
      enterTodo: "أدخل مهمة",
      add: "أضف",
      delete: "حذف",
    },
  },
  fr: {
    translation: {
      todoApp: "Application de tâches",
      enterTodo: "Entrez une tâche",
      add: "Ajouter",
      delete: "Supprimer",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
