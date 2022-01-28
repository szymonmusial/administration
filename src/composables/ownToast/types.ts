export enum ToastType {
  success = "success",
  error = "error",
}

export type Toast = (type: ToastType, title: string, content: string | undefined) => void;

export type OwnToast = {
  showToast: Toast;
  showSuccessToast: Toast;
  showErrorToast: Toast;
};
