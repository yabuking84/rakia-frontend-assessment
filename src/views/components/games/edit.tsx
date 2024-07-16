import { Button } from "primereact/button";
import { useState } from "react";
import { type GameType } from "@/schema/games";

import EditDialog from "./edit-dialog";

export default function Edit(props: Props & { game: GameType }) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)} icon="pi pi-pen-to-square" />
      <EditDialog
        game={props.game}
        visible={visible}
        hide={() => setVisible(false)}
      />
    </>
  );
}
