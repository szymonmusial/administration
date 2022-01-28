import { useToast } from "primevue/usetoast";
import { ToastType, Toast, OwnToast } from "./types";

const ownToast = (): OwnToast => {
  const toast = useToast();
  const time: number = 3000;

  const showSuccessToast: Toast = (title, content) => {
    showToast(ToastType.success, title, content);
  };

  const showErrorToast: Toast = (title: string, content: string) => {
    showToast(ToastType.error, title, content);
  };

  const showToast: Toast = (type, title, content) => {
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
