/**
 * Centralized placeholder links. Replace the `#` values with real URLs when
 * they are available. Any link still set to PLACEHOLDER is treated as
 * "coming soon" by the shared PlaceholderLink component.
 */
export const PLACEHOLDER = "#" as const;

export const JOIN_FORM_URL: string = PLACEHOLDER;
export const MAILING_LIST_URL: string = PLACEHOLDER;
export const EVENTS_REGISTRATION_URL: string = PLACEHOLDER;
export const SPONSOR_INQUIRY_URL: string = PLACEHOLDER;
export const LINKEDIN_URL: string = PLACEHOLDER;
export const CONTACT_EMAIL: string = "hello@example.com"; // placeholder address

/** Real, live club Instagram. */
export const INSTAGRAM_HANDLE = "@tea.stanford" as const;
export const INSTAGRAM_URL: string = "https://www.instagram.com/tea.stanford/";

/** Real portfolio of themed-entertainment project work. */
export const PORTFOLIO_URL: string =
  "https://www.judestjohn.com/projects/themed-entertainment";

export function isPlaceholder(url: string): boolean {
  return url === PLACEHOLDER;
}
