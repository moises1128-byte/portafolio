import { create } from "zustand";
import { persist } from "zustand/middleware";

const PortafolioStore = create()(
  persist(
    (set) => ({
      Translation: {
        lenguage: "en-US",
      },

      updateTranslation: (property, newValue) =>
        set((state) => ({
            Translation: {
            ...state.myObject,
            [property]: newValue,
          },
        })),
    }),
    { name: "portafolio-storage" }
  )
);

export default PortafolioStore;
