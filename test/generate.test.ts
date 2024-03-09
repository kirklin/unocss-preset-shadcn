import { describe, expect, it } from 'vitest'

import { generateCSSVars } from '../src/generate'

describe('generate-theme-css-var', () => {
  it('built in themes', async () => {
    await expect(
      generateCSSVars({
        color: 'zinc',
        radius: 0.5,
      }),
    ).toMatchFileSnapshot('zinc-0.5.css')
    await expect(
      generateCSSVars({
        color: 'neutral',
        radius: 0.75,
      }),
    ).toMatchFileSnapshot('neutral-0.75.css')
  })

  it('custom theme', async () => {
    await expect(
      generateCSSVars({
        color: {
          name: 'custom',
          light: {
            'background': '0 1% 100%',
            'foreground': '240 10% 3.9%',
            'card': '0 0% 100%',
            'card-foreground': '240 10% 3.9%',
            'popover': '0 0% 100%',
            'popover-foreground': '240 10% 3.9%',
            'primary': '240 5.9% 10%',
            'primary-foreground': '0 0% 98%',
            'secondary': '240 4.8% 95.9%',
            'secondary-foreground': '240 5.9% 10%',
            'muted': '240 4.8% 95.9%',
            'muted-foreground': '240 3.8% 46.1%',
            'accent': '240 4.8% 95.9%',
            'accent-foreground': '240 5.9% 10%',
            'destructive': '0 84.2% 60.2%',
            'destructive-foreground': '0 0% 98%',
            'border': '240 5.9% 90%',
            'input': '240 5.9% 90%',
            'ring': '240 5.9% 10%',
          },
          dark: {
            'background': '240 10% 3.9%',
            'foreground': '0 0% 98%',
            'card': '240 10% 3.9%',
            'card-foreground': '0 0% 98%',
            'popover': '240 10% 3.9%',
            'popover-foreground': '0 0% 98%',
            'primary': '0 0% 98%',
            'primary-foreground': '240 5.9% 10%',
            'secondary': '240 3.7% 15.9%',
            'secondary-foreground': '0 0% 98%',
            'muted': '240 3.7% 15.9%',
            'muted-foreground': '240 5% 64.9%',
            'accent': '240 3.7% 15.9%',
            'accent-foreground': '0 0% 98%',
            'destructive': '0 62.8% 30.6%',
            'destructive-foreground': '0 0% 98%',
            'border': '240 3.7% 15.9%',
            'input': '240 3.7% 15.9%',
            'ring': '240 4.9% 83.9%',
          },
        },
        radius: 1,
      }),
    ).toMatchFileSnapshot('custom.css')
  })

  it('custom theme based on built in theme', async () => {
    await expect(
      generateCSSVars({
        color: {
          base: 'zinc',
          color: {
            light: {
              background: '0 1% 100%',
            },
          },
        },
        radius: 1,
      }),
    ).toMatchFileSnapshot('custom.css')
  })

  it('generate multiple themes', async () => {
    await expect(
      generateCSSVars([
        {
          color: 'zinc',
          radius: 0.5,
        },
        {
          color: 'neutral',
          radius: 0.75,
        },
      ]),
    ).toMatchFileSnapshot('multiple.css')
  })
})
