export enum ToastType {
  success = "success",
  error = "error",
}

export type Toast = (title: string, content: string) => void;
export type BaseToast = (title: string, content: string, type: ToastType | undefined) => void;

export type OwnToast = {
  showToast: BaseToast;
  showSuccessToast: Toast;
  showErrorToast: Toast;
};
