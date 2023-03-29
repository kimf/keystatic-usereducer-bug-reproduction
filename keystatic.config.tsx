import { config, fields, singleton } from "@keystatic/core"

export default config({
  storage: { kind: "local" },
  singletons: {
    homepage: singleton({
      label: "Homepage",
      schema: {
        title: fields.text({
          label: "Title",
          validation: { length: { min: 4 } },
        }),
      },
    }),
  },
})
