import store from "../../store";
import { perm } from "./permissionList";
import { Permissions } from "@/store/modules/auth/authType";

const userPermissions = (): Permissions => store.getters.getPermissions;

const authenticated = (): boolean => store.getters.checkAuth;

const checkPermission = (permission: string): boolean => store.getters.checkPermission(permission);

const canModifyUserInfo = () => checkPermission(perm.canModifyUserInfo);

const canSetApplicationPriority = () => checkPermission(perm.canSetApplicationPriority);

const canOpenApplicationInNewCard = () => checkPermission(perm.canOpenApplicationInNewCard);

export {
  userPermissions,
  authenticated,
  checkPermission,
  canModifyUserInfo,
  canSetApplicationPriority,
  canOpenApplicationInNewCard,
};
