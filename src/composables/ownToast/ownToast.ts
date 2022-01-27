import { useToast } from "primevue/usetoast";
import { ToastType } from "./types";

type Toast = (title: string, content: string) => void;
type Toas1t = (type: ToastType, title: string, content: string) => void;

const ownToast = () => {
  const toast = useToast();
  const time: number = 3000;

  const showSuccessToast: Toast = (title, content) => {
    showToast(ToastType.success, title, content);
  };

  const showErrorToast: Toast = (title: string, content: string) => {
    showToast(ToastType.error, title, content);
  };

  const showToast: Toas1t = (type, title, content) => {
    const toastModel = {
      severity: ToastType.success,
      summary: "Tytuł",
      detail: "opis",
      life: time,
    };

    if (type != undefined) {
      toastModel.severity = type;
    }
    debugger;
    if (title != undefined) {
      toastModel.summary = title;
    }

    if (content != undefined) {
      toastModel.detail = content;
    }
    debugger;
    toast.add(toastModel);
  };
  return {
    showToast,
    showSuccessToast,
    showErrorToast,
  };
};

export default ownToast;
