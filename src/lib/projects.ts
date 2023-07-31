import { z } from "zod"

const projectSchema = z.object({
  repo: z.string(),
  link: z.string(),
  description: z.string(),
})

export type Project = z.infer<typeof projectSchema>

export async function getProjects(
  number: 1 | 2 | 3 | 4 | 5 | 6,
): Promise<Project[]> {
  const res = await fetch("https://gh-pinned.vercel.app/api/user/kfkonrad").then(
    res => res.json(),
  )
  // ugly hack, but it works
  for (let index = 0; index < res.length; index++) {
    if (res[index]["repo"] == "My three line starship prompt - star...") {
      res[index]["description"] = "My three line starship prompt"
      res[index]["repo"] = "starship.toml"
      res[index]["link"] = "https://gist.github.com/kfkonrad/e25bf5d7d288b0099288946150418e2f"
    };
    if (res[index]["description"] == undefined) {
      res[index]["description"] = "My own simple programming language"
    }

  }

  const projects = projectSchema.array().parse(res)

  return projects.slice(0, number)
}
