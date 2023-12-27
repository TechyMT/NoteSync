import { create } from "zustand";

const notesStore = (set) => ({
    notes: [],
    category: null,
    setNotes: (notes) => set({ notes }),
    setCategory: (category) => set({ category }),
})

const useNotesStore = create(notesStore);

export default useNotesStore;