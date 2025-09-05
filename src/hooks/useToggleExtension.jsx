import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleExtension } from "../api/extension";

export const useToggleExtension = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleExtension,
    onMutate: async ({ id, newValue }) => {
      console.log("mutation", id, newValue);

      // Cancel pour éviter un conflit
      await queryClient.cancelQueries({ queryKey: ["extensions"] });

      // Snapshot de l'ancien état
      const previous = queryClient.getQueryData(["extensions"]);

      // Optimistic update : on modifie le cache
      queryClient.setQueryData(["extensions"], (old) =>
        old.map((ext) => (ext.id === id ? { ...ext, isActive: newValue } : ext))
      );

      return { previous };
    },
    onError: (err, _, context) => {
      // Rollback si erreur
      queryClient.setQueryData(["extensions"], context.previous);
    },
    onSettled: () => {
      // Refetch si besoin
      queryClient.invalidateQueries({ queryKey: ["extensions"] });
    },
  });
};
