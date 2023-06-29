import create from 'zustand';

type User = {
  _id: string;
  username: string;
  email: string;
  createdAt: string;
};


type AuthStore = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));

type FavoriteItem = {
    name: string
    artist: string
    cover: string
    url: string
    _id: string
    title?:string
};

type FavoriteStore = {
  favorites: FavoriteItem[];
  favoriteIds: string[];
  addFavorite: (item: FavoriteItem) => void;
  setFavorites: (favorites: FavoriteItem[]) => void;
  removeFavorite: (id: string) => void;
  
};

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: [],
  favoriteIds: [],
  addFavorite: (item) => set((state) => ({ favorites: [...state.favorites, item] })),
  setFavorites: (favorites) => set({ favorites }),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favorite) => favorite._id !== id),
      favoriteIds: state.favoriteIds.filter((favoriteId) => favoriteId !== id), // Eliminar el identificador único del favorito eliminado
    })),
}));