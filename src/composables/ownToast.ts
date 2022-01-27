import { useToast } from "primevue/usetoast";

export default function () {
  const toast = useToast();
  const time = 3000;

  const showSuccessToast = (title, content) => {
    showToast("success", title, content);
  };

  const showErrorToast = (title, content) => {
    showToast("error", title, content);
  };

  const showToast = (type, title, content) => {
    const toastModel = {
      severity: "success",
      summary: "Tytuł",
      detail: "opis",
      life: time,
    };

    if (title != undefined) {
      toastModel.severity = type;
    }

    if (title != undefined) {
      toastModel.summary = title;
    }

    if (content != undefined) {
      toastModel.detail = content;
    }

    toast.add(toastModel);
  };
  return {
    showToast,
    showSuccessToast,
    showErrorToast,
  };
}
