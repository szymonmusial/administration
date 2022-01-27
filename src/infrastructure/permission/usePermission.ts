import store from "../../store";
import { perm } from "./permissionList";

const userPermissions = () => store.getters.getPermissions;

const authenticated = () => store.getters.checkAuth;

const checkPermission = (permission) =>
  store.getters.checkPermission(permission);

const canModifyUserInfo = () => checkPermission(perm.canModifyUserInfo);

const canSetApplicationPriority = () =>
  checkPermission(perm.canSetApplicationPriority);

const canOpenApplicationInNewCard = () =>
  checkPermission(perm.canOpenApplicationInNewCard);

export {
  userPermissions,
  authenticated,
  checkPermission,
  canModifyUserInfo,
  canSetApplicationPriority,
  canOpenApplicationInNewCard,
};
