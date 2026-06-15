import { useEffect, useRef, useState } from "react";
import { defaultLanguage, languages, type LanguageCode } from "../i18n/translations";

type LanguageSwitcherProps = {
  value?: LanguageCode;
  onChange?: (language: LanguageCode) => void;
};

export function LanguageSwitcher({ value, onChange }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<LanguageCode>(value ?? defaultLanguage);
  const rootRef = useRef<HTMLDivElement>(null);
  const activeLanguage = languages.find((language) => language.code === current) ?? languages[0];

  useEffect(() => {
    if (value) {
      setCurrent(value);
      return;
    }

    const stored = window.localStorage.getItem("boorui-language") as LanguageCode | null;
    if (stored && languages.some((language) => language.code === stored)) {
      setCurrent(stored);
    }
  }, [value]);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  function selectLanguage(language: LanguageCode) {
    setCurrent(language);
    setOpen(false);
    window.localStorage.setItem("boorui-language", language);
    onChange?.(language);
  }

  return (
    <div className="language-switcher" ref={rootRef}>
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        className="language-trigger"
        onClick={() => setOpen((isOpen) => !isOpen)}
        type="button"
      >
        <span aria-hidden="true">🌐</span>
        <span>Language</span>
      </button>
      {open ? (
        <div className="language-menu" role="menu">
          {languages.map((language) => (
            <button
              aria-current={language.code === activeLanguage.code ? "true" : undefined}
              className={language.code === activeLanguage.code ? "is-active" : undefined}
              key={language.code}
              onClick={() => selectLanguage(language.code)}
              role="menuitem"
              type="button"
            >
              <span>{language.nativeName}</span>
              <small>{language.code.toUpperCase()}</small>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
