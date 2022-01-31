export enum ToastType {
  success = "success",
  error = "error",
}

export type Toast = (title: string, content: string, type?: ToastType | undefined) => void;

export type OwnToast = {
  showToast: Toast;
  showSuccessToast: Toast;
  showErrorToast: Toast;
};
