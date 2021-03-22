/// <reference types="react-scripts" />

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    sidebar: Palette['primary'];
  }
  interface PaletteOptions {
    sidebar: PaletteOptions['primary'];
  }
}

declare interface Window {
  electron: {
    openEditor(): void
  }
}