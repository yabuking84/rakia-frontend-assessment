import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { InputText } from "primereact/inputtext";
import { GameCategoryOptions, GameSchema, type GameType } from "@/schema/games";

import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToastContext } from "@/providers/toast-provider";
import { useActions } from "@/store/games/hooks";
import { Dialog } from "primereact/dialog";

export default function EditDialog({
  game,
  visible,
  hide,
}: {
  game: GameType;
  visible: boolean;
  hide: () => void;
}) {
  const toast = useToastContext();
  const [categories, setCategories] = useState<{ name: string }[]>(
    game.c.map((e) => ({ name: e }))
  );
  const gamesActions = useActions();
  const { reset, handleSubmit, formState, register, setError, control } =
    useForm<GameType>({
      defaultValues: {
        ...game,
      },
      resolver: zodResolver(GameSchema),
    });

  useEffect(() => {
    if (visible) reset(game);
  }, [visible]);

  const submit: SubmitHandler<GameType> = async (payload) => {
    try {
      // submit here
      await gamesActions.setGame(payload);
      toast.current?.show({
        severity: "info",
        summary: "Game Edited",
        detail: "You have updated " + payload.n,
        life: 3000,
      });
      hide();
    } catch (error) {
      setError("root", {
        message: "Something went wrong, please try again...",
      });
    }
  };

  return (
    <Dialog
      style={{ minWidth: "30vw" }}
      header="Header"
      visible={visible}
      onHide={() => {
        if (!visible) return;
        hide();
      }}
    >
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
        <p>
          <span className="font-bold">ID:</span> {game.id}
        </p>
        <div className="flex flex-col">
          <p className="font-bold">NAME: </p>
          <InputText {...register("n")} />
          <p className="ps-4 text-destructive">{formState.errors.n?.message}</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">CATEGORIES:</p>

          <Controller
            name="c"
            control={control}
            render={({ field: { ref, ...opt } }) => (
              <MultiSelect
                value={opt.value.map((e) => ({ name: e }))}
                onChange={(e) => {
                  const cc = e.value.map((e: { name: string }) => e.name);
                  console.log(cc);
                  opt.onChange(cc);
                }}
                options={GameCategoryOptions}
                optionLabel="name"
                placeholder="Select Categories"
                className="w-full md:w-20rem"
              />
            )}
          />
        </div>
        <div>
          <Button type="submit" label="Save" />
        </div>
      </form>
    </Dialog>
  );
}
