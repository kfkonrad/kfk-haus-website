import { defineConfig } from "astro/config"
import vue from "@astrojs/vue"
import mdx from "@astrojs/mdx"
import solidJs from "@astrojs/solid-js"
import sitemap from "@astrojs/sitemap"
import unocss from "unocss/astro"
import vesper from "./src/lib/vesper.json"

export default defineConfig({
  site: "https://kfk.haus",
  integrations: [
    mdx(),
    solidJs(),
    unocss({ injectReset: true }),
    vue(),
  ],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  markdown: { shikiConfig: { theme: vesper, wrap: true } },
})
