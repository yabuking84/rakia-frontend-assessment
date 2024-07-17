import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import Delete from "./delete";
import Edit from "./edit";
import { type GameType } from "@/schema/games";
import { useStore } from "@/store/games/hooks";
import { gamesApi } from "@/store/games/api-slice";
import { Button } from "primereact/button";
import { useEffect } from "react";
import { useToastContext } from "@/providers/toast-provider";

export default function Table() {
  const { isLoading, refetch, error, isError } = gamesApi.useGetAllGamesQuery();
  const gamesStore = useStore();
  const toast = useToastContext();

  const refresh = () => {
    refetch();
  };

  useEffect(() => {
    if (isError) {
      if ((error as any)?.name === "ZodError") {
        const zodError = error as { name: string; message: string };
        console.error('API Error: '+JSON.parse(zodError.message)[0].message)
        // some error handling here
      }

      toast.current?.show({
        severity: "error",
        summary: "Error Retrieving Games",
        detail: "Please try again later...",
        life: 3000,
      });
    }
  }, [isError]);

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button onClick={refresh} icon="pi pi-refresh" />
      </div>
      <DataTable
        value={gamesStore.store.games}
        tableStyle={{ minWidth: "50rem", minHeight: "10rem" }}
        loading={isLoading}
      >
        <Column sortable field="n" header="Name" />
        <Column
          sortable
          field="c"
          header="Category"
          body={(game: GameType) => game.c.join(", ")}
        />
        <Column
          header="Actions"
          body={(game: GameType) => (
            <div className="flex gap-3">
              <Edit game={game} />
              <Delete game={game} />
            </div>
          )}
        />
      </DataTable>
    </>
  );
}
