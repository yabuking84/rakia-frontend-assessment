import { z } from 'zod'


export const GameSchema = z.object({
    id: z.number(),
    n: z.string().min(5,{
        message:'Name needs at least 5 characters'
    }),
    c: z.string().array(),
})
export type GameType = z.infer<typeof GameSchema>
export const GamesSchema = z.array(GameSchema)
export type GamesType = z.infer<typeof GamesSchema>





export const GameCategoryOptions = [
    { name: "TPS" },
    { name: "Adventure" },
    { name: "Horror" },
    { name: "Movie" },
    { name: "Thriller" },
    { name: "Spy" },
    { name: "Batman" },
    { name: "Philanthropist" },
    { name: "Orphan" },
  ];