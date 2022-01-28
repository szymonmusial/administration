import { useToast } from "primevue/usetoast";
import { ToastType, Toast, OwnToast, BaseToast } from "./types";

const ownToast = (): OwnToast => {
  const toast = useToast();
  const time: number = 3000;

  const showSuccessToast: Toast = (title, content) => {
    showToast(title, content, ToastType.success);
  };

  const showErrorToast: Toast = (title, content) => {
    showToast(title, content, ToastType.error);
  };

  const showToast: BaseToast = (title, content, type) => {
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
