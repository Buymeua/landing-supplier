import { create } from 'zustand';

interface SelectionPayload {
    action: 'for_suppliers' | 'for_dropshipping';
    platform: 'apple' | 'google' | 'browser' | 'supplier' | null;
}

interface State {
    selection: SelectionPayload | null;
    setSelection: (payload: SelectionPayload) => void;
}

export const useStore = create<State>((set) => ({
    selection: null,
    setSelection: (payload) => set({ selection: payload }),
}));
