import i18next from 'i18next';
import { menu as enMenu } from '../locales/en/menu';
import { menu as esMenu } from '../locales/es/menu';
import { menu as itMenu } from '../locales/it/menu';
import { menu as frMenu } from '../locales/fr/menu';
import { menu as deMenu } from '../locales/de/menu';

import { menuUiHandler as enMenuUiHandler } from '../locales/en/menu-ui-handler.js';
import { menuUiHandler as esMenuUiHandler } from '../locales/es/menu-ui-handler.js';
import { menuUiHandler as frMenuUiHandler } from '../locales/fr/menu-ui-handler.js';
import { menuUiHandler as itMenuUiHandler } from '../locales/it/menu-ui-handler.js';
import { menuUiHandler as deMenuUiHandler } from '../locales/de/menu-ui-handler.js';

import { move as enMove } from '../locales/en/move';
import { move as esMove } from '../locales/es/move';
import { move as frMove } from '../locales/fr/move';
import { move as deMove } from '../locales/de/move';

import { ability as enAbility } from '../locales/en/ability';
import { ability as esAbility } from '../locales/es/ability';
import { ability as frAbility } from '../locales/fr/ability';
import { ability as deAbility } from '../locales/de/ability';

import { pokeball as enPokeball } from '../locales/en/pokeball';
import { pokeball as esPokeball } from '../locales/es/pokeball';
import { pokeball as frPokeball } from '../locales/fr/pokeball';
import { pokeball as dePokeball } from '../locales/de/pokeball';

import { pokemon as enPokemon } from '../locales/en/pokemon';
import { pokemon as esPokemon } from '../locales/es/pokemon';
import { pokemon as frPokemon } from '../locales/fr/pokemon';
import { pokemon as dePokemon } from '../locales/de/pokemon';

import { pokemonStat as enPokemonStat } from '../locales/en/pokemon-stat';
import { pokemonStat as esPokemonStat } from '../locales/es/pokemon-stat';
import { pokemonStat as frPokemonStat } from '../locales/fr/pokemon-stat';
import { pokemonStat as itPokemonStat } from '../locales/it/pokemon-stat';
import { pokemonStat as dePokemonStat } from '../locales/de/pokemon-stat';

import { commandUiHandler as enCommandUiHandler } from '../locales/en/command-ui-handler';
import { commandUiHandler as esCommandUiHandler } from '../locales/es/command-ui-handler';
import { commandUiHandler as frCommandUiHandler } from '../locales/fr/command-ui-handler';
import { commandUiHandler as deCommandUiHandler } from '../locales/de/command-ui-handler';

import { fightUiHandler as enFightUiHandler } from '../locales/en/fight-ui-handler';
import { fightUiHandler as frFightUiHandler } from '../locales/fr/fight-ui-handler';

import { modifierType  as enModifierType } from '../locales/en/modifier-type';
import { modifierType as esModifierType } from '../locales/es/modifier-type';

import { modifier as enModifier } from '../locales/en/modifier';
import { modifier as esModifier } from '../locales/es/modifier';

import { type as enType } from '../locales/en/type';

import { nature as enNature } from '../locales/en/nature';
import { nature as esNature } from '../locales/es/nature';

import { berry as enBerry } from '../locales/en/berry';

export interface SimpleTranslationEntries {
  [key: string]: string
}


export interface MoveTranslationEntry {
  name: string,
  effect: string
}

export interface MoveTranslationEntries {
  [key: string]: MoveTranslationEntry
}

export interface AbilityTranslationEntry {
  name: string,
  description: string
}

export interface AbilityTranslationEntries {
  [key: string]: AbilityTranslationEntry
}

export interface ModifierTypeTranslationEntry {
  name: string,
  description: string
}

export interface ModifierTypeTranslationEntries {
  [key: string]: ModifierTypeTranslationEntry
}

export interface BerryTranslationEntry {
  name: string,
  description: string
}

export interface BerryTranslationEntries {
  [key: string]: BerryTranslationEntry
}

export interface Localizable {
  localize(): void;
}

const DEFAULT_LANGUAGE_OVERRIDE = '';

export function initI18n(): void {
  let lang = 'en';

  if (localStorage.getItem('prLang'))
    lang = localStorage.getItem('prLang');

  /**
   * i18next is a localization library for maintaining and using translation resources.
   *
   * Q: How do I add a new language?
   * A: To add a new language, create a new folder in the locales directory with the language code.
   *    Each language folder should contain a file for each namespace (ex. menu.ts) with the translations.
   *
   * Q: How do I add a new namespace?
   * A: To add a new namespace, create a new file in each language folder with the translations.
   *    Then update the `resources` field in the init() call and the CustomTypeOptions interface.
   * 
   * Q: How do I make a language selectable in the settings?
   * A: In src/system/settings.ts, add a new case to the Setting.Language switch statement.
   */

  i18next.init({
    lng: DEFAULT_LANGUAGE_OVERRIDE ? DEFAULT_LANGUAGE_OVERRIDE : lang,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        menu: enMenu,
        menuUiHandler: enMenuUiHandler,
        move: enMove,
        ability: enAbility,
        pokeball: enPokeball,
        pokemon: enPokemon,
        pokemonStat: enPokemonStat,
        commandUiHandler: enCommandUiHandler,
        fightUiHandler: enFightUiHandler,
        modifierType: enModifierType,
        modifier: enModifier,
        type: enType,
        nature: enNature,
        berry: enBerry
      },
      es: {
        menu: esMenu,
        menuUiHandler: esMenuUiHandler,
        move: esMove,
        ability: esAbility,
        pokeball: esPokeball,
        pokemon: esPokemon,
        pokemonStat: esPokemonStat,
        commandUiHandler: esCommandUiHandler,
        modifierType: esModifierType,
        modifier: esModifier,
        nature: esNature
      },
      fr: {
        menu: frMenu,
        menuUiHandler: frMenuUiHandler,
        move: frMove,
        ability: frAbility,
        pokeball: frPokeball,
        pokemon: frPokemon,
        pokemonStat: frPokemonStat,
        commandUiHandler: frCommandUiHandler,
        fightUiHandler: frFightUiHandler,
      },
      it: {
        menu: itMenu,
        menuUiHandler: itMenuUiHandler,
        pokemonStat: itPokemonStat,
      },
      de: {
        menu: deMenu,
        menuUiHandler: deMenuUiHandler,
        move: deMove,
        ability: deAbility,
        pokeball: dePokeball,
        pokemon: dePokemon,
        pokemonStat: dePokemonStat,
        commandUiHandler: deCommandUiHandler,
      }
    },
  });
}

// Module declared to make referencing keys in the localization files type-safe.
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      menu: typeof enMenu;
      menuUiHandler: typeof enMenuUiHandler;
      move: typeof enMove;
      ability: typeof enAbility;
      pokeball: typeof enPokeball;
      pokemon: typeof enPokemon;
      pokemonStat: typeof enPokemonStat;
      commandUiHandler: typeof enCommandUiHandler;
      fightUiHandler: typeof enFightUiHandler;
      modifierType: typeof enModifierType;
      modifier: typeof enModifier;
      type: typeof enType;
      nature: typeof enNature;
      berry: typeof enBerry;
    };
  }
}

export default i18next;
