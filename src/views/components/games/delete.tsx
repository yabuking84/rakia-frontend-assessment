import { confirmDialog } from "primereact/confirmdialog";
import { Button } from "primereact/button";
import { useToastContext } from "@/providers/toast-provider";
import { type GameType } from "@/schema/games";
import { useActions } from "@/store/games/hooks";

export default function Delete(props: Props & { game: GameType }) {
  const toast = useToastContext();
  const gamesActions = useActions();
  const accept = () => {
    gamesActions.delGame(props.game.id);
    toast.current?.show({
      severity: "info",
      summary: "Game Deleted",
      detail: "You have deleted " + props.game.n,
      life: 3000,
    });
  };

  const handle = () => {
    confirmDialog({
      message: <Content game={props.game} />,
      header: "DELETE THIS GAME",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      accept,
    });
  };
  return <Button onClick={handle} icon="pi pi-trash" severity="danger" />;
}

function Content({ game }: { game: GameType }) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p>
          <span className="font-bold">ID:</span> {game.id}
        </p>
        <p>
          <span className="font-bold">NAME:</span> {game.n}
        </p>
        <p>
          <span className="font-bold">CATEGORIES:</span> {game.c.join(", ")}
        </p>
      </div>
    </div>
  );
}
