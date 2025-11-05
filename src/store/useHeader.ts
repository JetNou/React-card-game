import { create } from "zustand";

interface IHeader {
  isOpenSetting: boolean;
  isOpenAuthorization: boolean;
  ClickSettingButton: () => void;
  ClickAuthorizationButton: () => void;
}

const HeaderStore = create<IHeader>()((set) => ({
  isOpenSetting: false,
  isOpenAuthorization: false,
  ClickSettingButton: () => set((state) => ({isOpenSetting: !state.isOpenSetting})),
  ClickAuthorizationButton: () => set((state) => ({isOpenAuthorization: !state.isOpenAuthorization}))
}))

export const useIsOpenSetting = () => HeaderStore((state) => state.isOpenSetting)
export const useIsOpenAuthorization = () => HeaderStore((state) => state.isOpenAuthorization)

export const useClickSettingButton = () => HeaderStore((state) => state.ClickSettingButton)
export const useClickAuthorizationButton = () => HeaderStore((state) => state.ClickAuthorizationButton)