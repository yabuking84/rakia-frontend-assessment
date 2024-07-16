import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import Delete from "./delete";
import Edit from "./edit";
import { type GameType } from "@/schema/games";
import { useEffect } from "react";
import { useActions, useStore } from "@/store/games/hooks";
import { gamesApi } from "@/store/games/api-slice";
import { Button } from "primereact/button";

export default function Table() {
  const { data, isSuccess, isLoading, refetch, isFetching } = gamesApi.useGetAllGamesQuery();
  const gamesStore = useStore();
  const gamesActions = useActions();

  useEffect(() => {
    console.log(isSuccess)
    console.log(data)
    if (!isLoading && isSuccess && data) gamesActions.setGames(data);
  }, [isFetching]);

  const refresh = ()=>{
    refetch()
    if (!isLoading && isSuccess && data) gamesActions.setGames(data);
  }

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
