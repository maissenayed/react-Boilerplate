import * as React from 'react'

import { FormattedMessage } from 'react-intl'

import english from './translations-en.json'
import french from './translations-fr.json'

export type MessageID = keyof typeof english
export type Messages = { [K in keyof typeof english]: string }

const data: { [K in 'en' | 'fr']: Messages } = { en: english, fr: french }
export enum Locales {
  fr = 'fr',
  en = 'en',
}
type Locale = keyof typeof Locales

type MessageProps = React.ComponentProps<typeof FormattedMessage> & {
  id: MessageID
  msgProsp?: string
}

export const locales = Object.keys(data)

export const translatedMessage = (locale: Locale) => (id: MessageID) =>
  data[locale][id]
export const TranslatedMessage = (p: MessageProps) => (
  <FormattedMessage {...p} />
)

export default data
